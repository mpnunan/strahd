'use client'
import React from "react";
import { getSessions } from "@/utils/data";
import type { Session, Sessions } from "@/utils/types";
import SessionDropdown from "./SessionDropdown";

export default function SessionDisplay() {
  const [sessions, setSessions] = React.useState<Sessions>([]);

  React.useEffect(() => {
    getSessions().then((array: Sessions) => {
      setSessions(array);
    });
  }, [])

  return (
    <div>
      <h2>Sessions</h2>
      <div>
        {sessions.map((session: Session) => (
          <SessionDropdown
            key={`session-${session.id}`}
            id={session.id}
            session={session.session}
            date={session.date}
            summary={session.summary}
          />
        ))}
      </div>
    </div>
  );
}
