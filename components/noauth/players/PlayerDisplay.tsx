'use client'
import React from "react";
import { getPlayers } from "@/utils/data";
import type { Player, Players } from "@/utils/types";
import PlayerLink from "./PlayerLink";

export default function PlayerDisplay() {
  const [players, setPlayers] = React.useState<Players>([]);

  React.useEffect(() => {
    getPlayers().then((array: Players) => {
      setPlayers(array);
    });
  }, [])

  return (
    <div>
      <h2>The Party</h2>
      <div>
        {players.map((player: Player) => (
          <PlayerLink
            key={`player-${player.id}`}
            id={player.id}
            name={player.name}
            metaName={player.metaName}
            alive={player.alive}
          />
        ))}
      </div>
    </div>
  );
}
