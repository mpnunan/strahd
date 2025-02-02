'use client'
import React from "react";
import { getSingleNpc } from "@/utils/data";
import { Npc } from "@/utils/types";
import Link from "next/link";
import { Button } from "@mui/material";

export default function SingleNpc({ params }: { params: { id: string } }) {

  const npcId = params.id;
 
  const [npc, setNpc] = React.useState<Npc>();

  React.useEffect(() => {
    getSingleNpc(npcId).then((data) => {
      setNpc(data);
    })
  }, [npcId])
  
  return (
    <div className="details-page">
      <div className="nav-buttons">
        <Link href="/" passHref>
          <Button variant="outlined">Home</Button>
        </Link>
      </div>
      <h1>{npc?.name}</h1>
      <h2>
        {npc?.reachable ? null : 'Deceased'}
      </h2>
      <div>
        <p>{npc?.details}</p>
      </div>
    </div>
  )
}
