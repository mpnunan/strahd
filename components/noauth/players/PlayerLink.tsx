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
    <Link href={`/players/${id}`} passHref >
      <div className={!alive ? 'player notAlive' : 'player alive'}>
          <h3>{name}</h3>
          <p>
            <sub>{metaName}</sub>
          </p>
      </div>
    </Link>
  )
}
