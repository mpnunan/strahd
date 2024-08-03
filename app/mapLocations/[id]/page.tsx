'use client'
import React from "react";
import { getSingleMapLocation } from "@/utils/data";
import { MapLocation } from "@/utils/types";
import Link from "next/link";
import { Button } from "@mui/material";

export default function SingleMapLocation({ params }: { params: { id: string } }) {

  const mapLocationId = params.id;
 
  const [mapLocation, setMapLocation] = React.useState<MapLocation>();

  React.useEffect(() => {
    getSingleMapLocation(mapLocationId).then((data) => {
      setMapLocation(data);
    })
  }, [mapLocationId])
  
  return (
    <div className="details-page">
      <div className="nav-buttons">
        <Link href="/" passHref>
          <Button variant="outlined">Home</Button>
        </Link>
      </div>
      <h1>{mapLocation?.name}</h1>
      <div>
        <p>{mapLocation?.details}</p>
      </div>
    </div>
  )
}
