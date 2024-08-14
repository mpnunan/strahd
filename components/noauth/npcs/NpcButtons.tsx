'use client'
import { getSessionNpcs } from "@/utils/data";
import { SessionNpcs } from "@/utils/types";
import { Button, ButtonGroup } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function NpcsButtons({ sessionId }: {sessionId: string | undefined}) {
  const [sessionNpcs, setSessionNpcs] = React.useState<SessionNpcs>();

  React.useEffect(() => {
    getSessionNpcs(sessionId).then((data) => {
      setSessionNpcs(data);
    });
  }, [sessionId])

  return (
    <ButtonGroup className="session-buttons-group session-buttons--npcs">
      {sessionNpcs?.map((npc) => (
        <Link
          key={`button-${npc.npcId}`}
          href={`/npcs/${npc.npcId}`}
          passHref
        >
          <Button variant='text'>{npc.npc.name}</Button>
        </Link>
      ))}
    </ButtonGroup>
  );
}
