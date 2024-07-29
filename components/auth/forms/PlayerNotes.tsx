import { useAuth } from "@/utils/context/AuthContext";
import { createPlayerNote, updatePlayerNote } from "@/utils/data";
import { PlayerNote } from "@/utils/types";
import { Button, FormControl, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const initialState: PlayerNote = {
  id: '',
  date: '',
  note: '',
  uid: '',
}

export default function PlayerNotes({
  id,
  date,
  note,
  uid,
}: {id: string | null, date: string | null, note: string | null, uid: string | null}) {
  const router = useRouter();
  const { user } = useAuth();
  const [playerNote, setPlayerNote] = React.useState<PlayerNote>(initialState);

  React.useEffect(() => {
    if (id && date && note && uid) {
      setPlayerNote({
        id,
        date,
        note,
        uid
      });
    };
  }, [id, date, note, uid])

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
      updatePlayerNote(playerNote).then(() => router.push('/'));
    } else {
      const payload = { ...playerNote, uid: user.uid };
      createPlayerNote(payload).then(({ name }: { name: string }) => {
        const patchPayload = { id: name };
        updatePlayerNote({ ...patchPayload, ...payload }).then(() => {
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
        id="playerNote--date"
        label="date"
        name="date"
        value={playerNote.date}
        required
        onChange={handleChange}
      />
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
