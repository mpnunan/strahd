import PlayerBio from "./PlayerBio";

type PlayerObj = {
  id: string | undefined;
  name: string | undefined;
  metaName: string | undefined;
  alive: boolean | undefined;
  bio: string | undefined;
}

export default function PlayerDetails({
  id,
  name,
  metaName,
  alive,
  bio,
}: PlayerObj) {
  return (
    <div>
        <h1>{name ? `${name}` : null}</h1>
        <h2>{metaName}</h2>
        <h3>{!alive ? 'Dead' : 'Alive'}</h3>
        <div>
          <PlayerBio
            bio={bio}
            id={id}
            />
        </div>
    </div>
  )
}
