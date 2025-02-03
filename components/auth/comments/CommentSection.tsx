import { AuthContextType, useAuth, User } from "@/utils/context/AuthContext";
import { getSessionComments } from "@/utils/data";
import type { SessionComments } from "@/utils/types";
import React from "react";
import Comment from "./Comment";
import Link from "next/link";
import { Button } from "@mui/material";

export default function CommentSection({
  sessionId
}: {sessionId: string | undefined}) {
  const [comments, setComments] = React.useState<SessionComments>([]);
  const auth: AuthContextType = useAuth();
  const user: User = auth.user as User;

  const getComments = (): void => {
    getSessionComments(sessionId).then((data) => {
      setComments(data);
    });
  }

  React.useEffect(() => {
    getSessionComments(sessionId).then((data) => {
      setComments(data);
    });
  }, [sessionId])

  return (
    <div className="comment-section">
      <div className="comment-section--new">
        <Link href={`/comment/${sessionId}`} passHref>
          <Button variant="outlined">Add Comment</Button>
        </Link>
      </div>
      {comments.map((comment) => (
        <Comment
          key={`comment--${comment.id}`}
          id={comment.id}
          comment={comment.comment}
          uid={comment.uid}
          playerUid={user?.uid}
          loadComments={getComments}
        />
      ))}
    </div>
  );
}
