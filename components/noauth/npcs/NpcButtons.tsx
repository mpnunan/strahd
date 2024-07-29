/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { getSessionNpcs } from "@/utils/data";
import { SessionNpcs } from "@/utils/types";
import { Button, ButtonGroup } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function NpcsButtons({ sessionId }: {sessionId: string}) {
  const [sessionNpcs, setSessionNpcs] = React.useState<SessionNpcs>();

  React.useEffect(() => {
    getSessionNpcs(sessionId).then((data) => {
      setSessionNpcs(data);
    });
  }, [])

  return (
    <ButtonGroup>
      {sessionNpcs?.map((npc) => (
        <Link
          key={`button-${npc.npcId}`}
          href={`/npcs/${npc.npcId}`}
          passHref
        >
          <Button variant='outlined'>{npc.npc.name}</Button>
        </Link>
      ))}
    </ButtonGroup>
  );
}
