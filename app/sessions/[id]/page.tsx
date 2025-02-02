'use client'
import { getSingleSession } from "@/utils/data";
import type { Session } from "@/utils/types";
import React from "react";
import SessionDetails from "@/components/noauth/sessions/SessionDetails";
import Link from "next/link";
import { Button } from "@mui/material";
import NpcsButtons from "@/components/noauth/npcs/NpcButtons";
import MapLocationsButtons from "@/components/noauth/mapLocations/MapLocationButtons";
import CommentSection from "@/components/auth/comments/CommentSection";

export default function SingleSession({ params }: { params: { id: string } }) {

  const sessionId = params.id;
 
  const [session, setSession] = React.useState<Session>();

  React.useEffect(() => {
    getSingleSession(sessionId).then((data) => {
      setSession(data);
    })
  }, [sessionId])
  
  return (
    <div className="details-page">
      <div className="nav-buttons">
        <Link href="/" passHref>
          <Button variant="outlined">Home</Button>
        </Link>
      </div>
      <SessionDetails
        id={session?.id}
        session={session?.session}
        title={session?.title}
        date={session?.date}
        summary={session?.summary}
      />
      <section className="details-page--info">
        <div className="info--npcs">
          <h2>Session NPCs</h2>
          <NpcsButtons sessionId={session?.id} />
        </div>
        <div className="info--locations">
          <h2>Session Locations</h2>
          <MapLocationsButtons sessionId={session?.id} />
        </div>
      </section>
      <section className="details-page--comments">
        <h2>Comments</h2>
        <CommentSection sessionId={session?.id} />
        
      </section>
    </div>
  )
}
