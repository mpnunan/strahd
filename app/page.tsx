import PlayerDisplay from "@/components/noauth/players/PlayerDisplay";
import styles from "./page.module.css";
import SessionDisplay from "@/components/noauth/sessions/SessionDisplay";
import MapLocationsButtons from "@/components/noauth/mapLocations/MapLocationButtons";
import MapCurrent from "@/components/noauth/mapCurrent/mapCurrent";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="header">Curse of Strahd</h1>
      <div className="homepage">
        <section className="section section-session">
          <SessionDisplay />
        </section>
        <section className="section section-players">
          <PlayerDisplay />
          <div className="section section-map">
            <MapCurrent />
          </div>
        </section>
      </div>
    </main>
  );
}
