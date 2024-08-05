/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from "@/utils/context/AuthContext";
import { getPlayerNotes } from "@/utils/data";
import type { PlayerNotes } from "@/utils/types";
import React from "react";
import Note from "./Note";

export default function NoteSection() {
  const [notes, setNotes] = React.useState<PlayerNotes>([]);
  const { user } = useAuth();

  const getNotes = (): void => {
    getPlayerNotes(user.uid).then((data) => {
      setNotes(data);
    });
  }

  React.useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="note-section">
      {notes.map((note) => (
        <Note
          key={`note--${note.id}`}
          id={note.id}
          note={note.note}
          loadNotes={getNotes}
        />
      ))}
    </div>
  );
}
