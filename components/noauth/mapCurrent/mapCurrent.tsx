"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const MapCurrent: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <Button
        variant="outlined"
        onClick={() => {
          router.push("/mapCurrent");
        }}
      >
        Session Start Location
      </Button>
    </div>
  );
};

export default MapCurrent;
