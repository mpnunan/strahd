import { deletePlayerNote } from "@/utils/data";
import { Button } from "@mui/material";

export default function Note({
  id,
  note,
  loadNotes
}: {
  id: string,
  note: string,
  loadNotes: () => void,
}) {

  const deleteFunc = () => {
    if (window.confirm('Delete this note?')) {
      deletePlayerNote(id).then(() => loadNotes());
    }
  }

  return (
    <div className="single-note">
      <p>{note}</p>
      <Button variant="outlined" onClick={deleteFunc}>Delete</Button>
    </div>
  );
}
