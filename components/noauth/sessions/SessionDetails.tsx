import SessionSummary from "./SessionSummary";

type SessionObj = {
  id: string | undefined;
  session: number | undefined;
  date: string | undefined;
  summary: string | undefined;
  mapLocations: Array<string> | undefined;
  npcs: Array<string> | undefined;
}

export default function SessionDetails({
  id,
  session,
  date,
  summary,
  mapLocations,
  npcs,
}: SessionObj) {
  return (
    <div>
        <h1>{session ? `Session ${session}` : null}</h1>
        <h2>{date}</h2>
        <div>
        <SessionSummary
          summary={summary}
          id={id}
          />
        </div>
    </div>
  )
}
