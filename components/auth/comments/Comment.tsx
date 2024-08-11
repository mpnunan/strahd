import { deleteSessionComment } from "@/utils/data";
import { Button } from "@mui/material";

export default function Comment({
  id,
  comment,
  uid,
  playerUid,
  loadComments,
}: {
  id: string,
  comment: string,
  uid: string,
  playerUid: string,
  loadComments: () => void,
}) {

  const deleteFunc = () => {
    if (window.confirm('Delete this comment?')) {
      deleteSessionComment(id).then(() => loadComments());
    }
  }
  
  return (
    <div className="single-comment">
      <p>{comment}</p>
      {uid === playerUid ? <Button variant="outlined" onClick={deleteFunc}>Delete Comment</Button>: null}
    </div>
  );
}
