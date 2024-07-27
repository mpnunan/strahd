import Link from "next/link";

type SessionObj = {
  id: string;
  session: number;
  date: string;
}

export default function SessionLink({
  id,
  session,
  date,
}: SessionObj) {
  return (
    <div>
      <Link href={`/sessions/${id}`} passHref >
        <h3>{`Session ${session}: ${date}`}</h3>
      </Link>
    </div>
  )
}
