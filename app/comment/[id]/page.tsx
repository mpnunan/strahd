'use client'
import NewSessionComment from "@/components/auth/forms/SessionComments";
import { AuthContextType, useAuth, User } from "@/utils/context/AuthContext";
import { getSinglePlayerByUid, getSingleSession } from "@/utils/data";
import { Player } from "@/utils/types";
import { Button } from "@mui/material";
import Link from "next/link";
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
  const auth: AuthContextType = useAuth();
  const user: User = auth.user as User;
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
  }, [player?.name, sessionId, user.uid])

  return (
    <div className="comment-page comment-page--new">
      <div className="nav-buttons">
        <Link href="/" passHref>
          <Button variant="outlined">Home</Button>
        </Link>
      </div>
      <NewSessionComment
        id={session.id}
        comment={session.comment}
        sessionId={session.sessionId}
        sessionTitle={session.sessionTitle}
        uid={session.uid}
        playerName={session.playerName}
      />
    </div>
  );
}
