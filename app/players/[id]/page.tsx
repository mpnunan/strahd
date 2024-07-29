'use client'
import PlayerDetails from "@/components/noauth/players/PlayerDetails";
import { getSinglePlayer } from "@/utils/data";
import { Player } from "@/utils/types";
import React from "react";

export default function SinglePlayer({ params }: { params: { id: string } }) {

  const playerId = params.id;
 
  const [player, setPlayer] = React.useState<Player>();

  React.useEffect(() => {
    getSinglePlayer(playerId).then((data) => {
      setPlayer(data);
    })
  }, [playerId])
  
  return (
    <div className="details-page">
      <PlayerDetails
        id={player?.id}
        name={player?.name}
        metaName={player?.metaName}
        alive={player?.alive}
        bio={player?.bio}
      />
    </div>
  )
}
