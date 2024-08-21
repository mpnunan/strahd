'use client'
import NewSessionComment from "@/components/auth/forms/SessionComments";
import { getSingleSessionComment } from "@/utils/data";
import { SessionComment } from "@/utils/types";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const initialState: SessionComment = {
  id: '',
  comment: '',
  sessionId: '',
  sessionTitle: '',
  uid: '',
  playerName: '',
}

export default function UpdateComment({ params }: { params: { commentId: string } }) {
  const commentId = params.commentId;
  const [comment, setComment] = React.useState<SessionComment>(initialState);

  React.useEffect(() => {
    getSingleSessionComment(commentId).then((data) => {
      setComment(data);
    })
  }, [commentId])

  return (
    <div className="comment-page comment-page--update">
      <div className="nav-buttons">
        <Link href="/" passHref>
          <Button variant="outlined">Home</Button>
        </Link>
      </div>
      <NewSessionComment
      id={comment.id}
      comment={comment.comment}
      sessionId={comment.sessionId}
      sessionTitle={comment.sessionTitle}
      uid={comment.uid}
      playerName={comment.playerName}
    />
    </div>
  )
}
