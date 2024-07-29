import Link from "next/link";

type PlayerObj = {
  id: string;
  name: string;
  metaName: string;
  alive: boolean;
}

export default function PlayerLink({
  id,
  name,
  metaName,
  alive
}: PlayerObj) {
  return (
    <div className={!alive ? 'player notAlive' : 'player alive'}>
      <Link href={`/players/${id}`} passHref >
        <h3>{name}</h3>
        <p>
          <sub>{metaName}</sub>
        </p>
      </Link>
    </div>
  )
}
