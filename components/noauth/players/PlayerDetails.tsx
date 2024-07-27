type PlayerObj = {
  name: string | undefined;
  metaName: string | undefined;
  alive: boolean | undefined;
}

export default function PlayerDetails({
  name,
  metaName,
  alive
}: PlayerObj) {
  return (
    <div>
        <h1>{name ? `${name}` : null}</h1>
        <h2>{metaName}</h2>
        <h3>{!alive ? 'Dead' : 'Alive'}</h3>
    </div>
  )
}
