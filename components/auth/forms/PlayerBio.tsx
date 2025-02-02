import { useAuth } from "@/utils/context/AuthContext";
import { createPlayer, updatePlayer } from "@/utils/data";
import { Player } from "@/utils/types";
import { Button, FormControl, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

type PlayerBio = {
  id: string;
  name: string;
  bio: string;
  uid: string
}

const initialState: PlayerBio = {
  id: '',
  name: '',
  bio: '',
  uid: '',
}

export default function NewPlayerBio({
  id,
  name,
  bio,
  uid,
}: {
  id: string | null | undefined,
  name: string | null | undefined,
  bio: string | null | undefined,
  uid: string,
}) {
  const router = useRouter();
  const { user } = useAuth();
  const [playerBio, setPlayerBio] = React.useState<PlayerBio>(initialState);

  React.useEffect(() => {
    if (id  && name && bio) {
      setPlayerBio({
        id,
        name,
        bio,
        uid: uid,
      });
    };
  }, [id, name, bio, uid])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setPlayerBio((defaultState) => ({
      ...defaultState,
      [name]: value,
    }));
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (id) {
      updatePlayer(id, playerBio).then(() => router.push('/'));
    } else {
      const payload: Player = { ...playerBio, uid: user.uid, metaName: user.displayName, alive: true };
      createPlayer(payload).then(({ name }: { name: string }) => {
        const patchPayload = { id: name };
        updatePlayer(patchPayload.id, { ...patchPayload, ...payload }).then(() => {
          router.push('/');
        });
      });
    }
  };

  return (
    <FormControl
      id="playerBioForm"
      component="form"
      onSubmit={handleSubmit}
    >
      <TextField
        id="playerBio--name"
        label="Name Please"
        name="name"
        value={playerBio.name}
        required
        onChange={handleChange}
      />
       <TextField
        id="playerBio--bio"
        label="Tell us about yourself"
        name="bio"
        value={playerBio.bio}
        required
        onChange={handleChange}
        multiline
        minRows={4}
      />
      <Button
        type="submit"
        variant="outlined"
      >
        Publish
      </Button>
    </FormControl>
  );
}
