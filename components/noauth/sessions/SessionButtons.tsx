import MapLocationsButtons from "../mapLocations/MapLocationButtons";
import NpcsButtons from "../npcs/NpcButtons";

export default function SessionButtons({ sessionId }: { sessionId: string }) {
  return (
    <div>
      <MapLocationsButtons sessionId={sessionId} />
      <NpcsButtons sessionId={sessionId} />
    </div>
  );
}
