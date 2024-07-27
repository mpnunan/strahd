'use client'
import { getSingleSession } from "@/utils/data";
import { useSearchParams } from "next/navigation";
import type { Session } from "@/utils/types";
import React from "react";
import SessionDetails from "@/components/noauth/sessions/SessionDetails";

export default function SingleSession({ params }: { params: { id: string } }) {

  const sessionId = params.id;
 
  const [session, setSession] = React.useState<Session>();

  React.useEffect(() => {
    console.warn(sessionId);
  getSingleSession(sessionId).then((data) => {
    setSession(data);
  })
  }, [sessionId])
  
  return (
    <div>
      <SessionDetails
        id={session?.id}
        session={session?.session}
        date={session?.date}
        summary={session?.summary}
        mapLocations={session?.mapLocations}
        npcs={session?.npcs}
      />
    </div>
  )
}
