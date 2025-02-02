'use client'
import NewPlayerBio from "@/components/auth/forms/PlayerBio";
import { useAuth } from "@/utils/context/AuthContext";
import { getSinglePlayerByUid } from "@/utils/data";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

type PlayerBio = {
  id: string | null;
  name: string | null;
  bio: string | null;
}

export default function PlayerBio({ params }: { params: { idUid: string } }) {
  const { user } = useAuth();
  const idUid = params.idUid;
  const [bio, setBio] = React.useState<PlayerBio>();

  React.useEffect(() => {
    if (user.uid === idUid) {
      setBio({
        id: null,
        name: null,
        bio: null,
      });
    } else {
      getSinglePlayerByUid(user.uid).then((data) =>{
        setBio({
          id: data.id,
          name: data.name,
          bio: data.bio,
        });
      })
    }
  },[idUid, user.uid])

  return (
    <div className="bio-page">
      <div className="nav-buttons">
        <Link href="/" passHref>
          <Button variant="outlined">Home</Button>
        </Link>
      </div>
      <h1>{`Welcome, ${user.displayName}`}</h1>
      <NewPlayerBio
        id={bio?.id}
        name={bio?.name}
        bio={bio?.bio}
        uid={user.uid}
      />
    </div>
  );
}
