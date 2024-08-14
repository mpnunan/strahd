'use client'
import NewSessionComment from "@/components/auth/forms/SessionComments";
import { useAuth } from "@/utils/context/AuthContext";
import { getSinglePlayerByUid, getSingleSession } from "@/utils/data";
import { Player } from "@/utils/types";
import React from "react";

type InitialState = {
  id: string | null;
  comment: string | null;
  sessionId: string;
  sessionTitle: string;
  uid: string;
  playerName: string;
}
const initialState = {
  id: null,
  comment: null,
  sessionId: '',
  sessionTitle: '',
  uid: '',
  playerName: '',
}

export default function AddComment({ params }: { params: { id: string } }) {
  const sessionId = params.id;
  const { user } = useAuth();
  const [player, setPlayer] = React.useState<Player>();
  const [session, setSession] = React.useState<InitialState>(initialState);

  React.useEffect(() => {
    getSinglePlayerByUid(user.uid).then((data) => {
      setPlayer(data);
    })
  }, [user.uid])

  React.useEffect(() => {
    getSingleSession(sessionId).then((data) => {
      setSession({
        ...initialState,
        sessionId: sessionId,
        sessionTitle: data.title,
        uid: user.uid,
        playerName: initialState.playerName + player?.name,
      });
    })
  })

  return (
    <NewSessionComment
      id={session.id}
      comment={session.comment}
      sessionId={session.sessionId}
      sessionTitle={session.sessionTitle}
      uid={session.uid}
      playerName={session.playerName}
    />
  );
}
