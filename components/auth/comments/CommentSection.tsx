/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from "@/utils/context/AuthContext";
import { getSessionComments } from "@/utils/data";
import type { SessionComments } from "@/utils/types";
import React from "react";
import Comment from "./Comment";

export default function CommentSection({
  sessionId
}: {sessionId: string | undefined}) {
  const [comments, setComments] = React.useState<SessionComments>([]);
  const { user } = useAuth();

  const getComments = (): void => {
    getSessionComments(sessionId).then((data) => {
      setComments(data);
    });
  }

  React.useEffect(() => {
    getComments();
  }, [])

  return (
    <div className="comment-section">
      {comments.map((comment) => (
        <Comment
          key={`comment--${comment.id}`}
          id={comment.id}
          comment={comment.comment}
          uid={comment.uid}
          playerUid={user.uid}
          loadComments={getComments}
        />
      ))}
    </div>
  );
}
