import { getSingleSession } from "@/utils/data";
import { useRouter } from "next/router"
import React from "react";

export default function SingleSession() {
  const router = useRouter();
  const { id } = router.query;
  const sessionId = id?.toString()
 
  const [session, setSession] = React.useState<Session>();

  React.useEffect(() => {
    getSingleSession(sessionId).then((data) => {
      setSession(data);
    })
  }, [sessionId])
  
  return (
    <div>
      <h1>{`Session ${session?.session}`}</h1>
      <h2>{session?.date}</h2>
      <p></p>
    </div>
  )
}
