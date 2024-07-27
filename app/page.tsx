import styles from "./page.module.css";
import SessionDisplay from "@/components/noauth/sessions/SessionDisplay";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Curse of Strahd</h1>
      <section>
        <SessionDisplay />
      </section>
      <section></section>
    </main>
  );
}
