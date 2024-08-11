'use client'
import { getSingleSession } from "@/utils/data";
import type { Session } from "@/utils/types";
import React from "react";
import SessionDetails from "@/components/noauth/sessions/SessionDetails";
import Link from "next/link";
import { Button } from "@mui/material";

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
    </div>
  )
}
