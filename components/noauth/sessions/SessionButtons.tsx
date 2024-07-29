import MapLocationsButtons from "../mapLocations/MapLocationButtons";
import NpcsButtons from "../npcs/NpcButtons";

export default function SessionButtons({ sessionId }: { sessionId: string }) {
  return (
    <div className="session-buttons">
      <MapLocationsButtons sessionId={sessionId} />
      <NpcsButtons sessionId={sessionId} />
    </div>
  );
}
