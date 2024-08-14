'use client'
import NewSessionComment from "@/components/auth/forms/SessionComments";
import { getSingleSessionComment } from "@/utils/data";
import { SessionComment } from "@/utils/types";
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
  const [comment, setComment] = React.useState<SessionComment>();

  React.useEffect(() => {
    getSingleSessionComment(commentId).then((data) => {
      setComment(data);
    })
  }, [commentId])

  return (
    <NewSessionComment
      id={initialState.id + comment?.id}
      comment={initialState.id + comment?.comment}
      sessionId={initialState.id + comment?.sessionId}
      sessionTitle={initialState.id + comment?.sessionTitle}
      uid={initialState.id + comment?.uid}
      playerName={initialState.id + comment?.playerName}
    />
  )
}
