/* eslint-disable @next/next/no-img-element */
'use client'
import React from "react";
import { getMapImages, getSingleMapLocation } from "@/utils/data";
import { MapImages, MapLocation } from "@/utils/types";
import Link from "next/link";
import { Button } from "@mui/material";

export default function SingleMapLocation({ params }: { params: { id: string } }) {

  const mapLocationId = params.id;
 
  const [mapLocation, setMapLocation] = React.useState<MapLocation>();
  const [mapImages, setMapImages] = React.useState<MapImages>();

  React.useEffect(() => {
    getSingleMapLocation(mapLocationId).then((data) => {
      setMapLocation(data);
    })
    getMapImages(mapLocationId).then((data) => {
      setMapImages(data);
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
      <section className="map-image-section">
        {mapImages?.map((mapImage) => (
          <div
            key={`map-image-${mapImage.id}`}
            className="image-wrapper"
          >
            <h2>{mapImage.name}</h2>
            <img
              className="map-image"
              src={`/assets/${mapImage.fileName}`}
              alt={mapImage.name}
            />
          </div>
        ))}
      </section>
    </div>
  )
}
