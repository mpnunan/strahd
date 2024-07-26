import { getSessions } from "@/utils/data";
import React from "react";

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
        {sessions.map((session) => (
          
        ))}
      </div>
    </div>
  );
}
