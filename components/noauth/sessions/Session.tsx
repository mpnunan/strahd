import Link from "next/link";

export default function SessionLink(session: Session) {
  return (
    <div>
      <Link href={`/sessions/${session.id}`} passHref >
        <h3>{`${session.session}: ${session.date}`}</h3>
      </Link>
    </div>
  )
}
