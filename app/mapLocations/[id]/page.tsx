'use client'
import React from "react";
import { getSingleMapLocation } from "@/utils/data";
import { MapLocation } from "@/utils/types";

export default function SingleMapLocation({ params }: { params: { id: string } }) {

  const mapLocationId = params.id;
 
  const [mapLocation, setMapLocation] = React.useState<MapLocation>();

  React.useEffect(() => {
    getSingleMapLocation(mapLocationId).then((data) => {
      setMapLocation(data);
    })
  }, [mapLocationId])
  
  return (
    <div>
      <h1>{mapLocation?.name}</h1>
      <div>
        <p>{mapLocation?.details}</p>
      </div>
    </div>
  )
}
