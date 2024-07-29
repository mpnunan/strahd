type BioProps = {
  bio: string | undefined;
  id: string | undefined;
}

export default function PlayerBio({bio, id}: BioProps) {
  const bioSpaced = bio?.split('\n');

  return (
    <div>
        {bioSpaced?.map((paragraph) => (
          <p key={`${id}-${bioSpaced.indexOf(paragraph)}`}>{paragraph}</p>
        ))}
    </div>
  )
}
