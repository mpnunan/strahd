import SessionSummary from "./SessionSummary";

type SessionObj = {
  id: string | undefined;
  session: number | undefined;
  title: string | undefined;
  date: string | undefined;
  summary: string | undefined;
}

export default function SessionDetails({
  id,
  session,
  title,
  date,
  summary,
}: SessionObj) {
  return (
    <div>
        <h1>{session ? `Session ${session}` : null}</h1>
        <h2>{title ? title : null}</h2>
        <h3>{date ? date : null}</h3>
        <div>
        <SessionSummary
          summary={summary}
          id={id}
          />
        </div>
    </div>
  )
}
