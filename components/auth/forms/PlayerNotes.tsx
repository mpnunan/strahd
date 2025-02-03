import { AuthContextType, useAuth, User } from "@/utils/context/AuthContext";
import { createPlayerNote, updatePlayerNote } from "@/utils/data";
import { PlayerNote } from "@/utils/types";
import { Button, FormControl, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const initialState: PlayerNote = {
  id: '',
  note: '',
  uid: '',
}

export default function NewPlayerNote({
  id,
  note,
  uid,
}: {
  id: string | null,
  note: string | null,
  uid: string | null,
}) {
  const router = useRouter();
  const auth: AuthContextType = useAuth();
  const user: User = auth.user as User;
  const [playerNote, setPlayerNote] = React.useState<PlayerNote>(initialState);

  React.useEffect(() => {
    if (id  && note && uid) {
      setPlayerNote({
        id,
        note,
        uid
      });
    };
  }, [id, note, uid])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setPlayerNote((defaultState) => ({
      ...defaultState,
      [name]: value,
    }));
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (id) {
      updatePlayerNote(id, playerNote).then(() => router.push('/'));
    } else {
      const payload = { ...playerNote, uid: user?.uid };
      createPlayerNote(payload).then(({ name }: { name: string }) => {
        const patchPayload = { id: name };
        updatePlayerNote(patchPayload.id, { ...patchPayload, ...payload }).then(() => {
          router.push('/');
        });
      });
    }
  };

  return (
    <FormControl
      id="playerNoteForm"
      component="form"
      onSubmit={handleSubmit}
    >
       <TextField
        id="playerNote--note"
        label="Whatcha thinkin"
        name="note"
        value={playerNote.note}
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
