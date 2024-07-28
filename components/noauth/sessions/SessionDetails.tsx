import SessionSummary from "./SessionSummary";

type SessionObj = {
  id: string | undefined;
  session: number | undefined;
  date: string | undefined;
  summary: string | undefined;
}

export default function SessionDetails({
  id,
  session,
  date,
  summary,
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
