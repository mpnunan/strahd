/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { getSessionMapLocations } from "@/utils/data";
import { SessionMapLocations } from "@/utils/types";
import { Button, ButtonGroup } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function MapLocationsButtons({ sessionId }: {sessionId: string}) {
  const [sessionMapLocations, setSessionMapLocations] = React.useState<SessionMapLocations>();

  React.useEffect(() => {
    getSessionMapLocations(sessionId).then((data) => {
      setSessionMapLocations(data);
    });
  }, [])

  return (
    <ButtonGroup>
      {sessionMapLocations?.map((mapLocation) => (
        <Link
          key={`button-${mapLocation.mapLocationId}`}
          href={`/mapLocations/${mapLocation.mapLocationId}`}
          passHref
        >
          <Button variant='outlined'>{mapLocation.mapLocation.name}</Button>
        </Link>
      ))}
    </ButtonGroup>
  );
}
