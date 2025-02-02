import React from "react";
import { useAuth } from "@/utils/context/AuthContext";
import { SessionComment } from "@/utils/types";
import { Button, FormControl, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { createSessionComment, updateSessionComment } from "@/utils/data";

const initialState: SessionComment = {
  id: '',
  comment: '',
  sessionId: '',
  sessionTitle: '',
  uid: '',
  playerName: '',
}

export default function NewSessionComment({
  id,
  comment,
  sessionId,
  sessionTitle,
  uid,
  playerName
}: {
  id: string | null,
  comment: string | null,
  sessionId: string,
  sessionTitle: string,
  uid: string,
  playerName: string,
}) {
  const router = useRouter();
  const { user } = useAuth();
  const [sessionComment, setSessionComment] = React.useState<SessionComment>(initialState);

  React.useEffect(() => {
    if (id && comment) {
      setSessionComment({
        id,
        comment,
        sessionId,
        sessionTitle,
        uid,
        playerName,
      });
    } else {
      setSessionComment({
        ...initialState,
        sessionId,
        sessionTitle,
        uid,
        playerName,
      });
    }
  }, [id, comment, sessionId, sessionTitle, uid, playerName])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setSessionComment((defaultState) => ({
      ...defaultState,
      [name]: value,
    }));
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    if (id) {
      updateSessionComment(id, sessionComment).then(() => router.push('/'));
    } else {
      const payload = { ...sessionComment, uid: user.uid, playerName: user.displayName };
      createSessionComment(payload)
        .then(({ name }: { name: string }) => {
          updateSessionComment(name, { id: name });
      })
        .then(() => {
          router.push('/');
      });
    }
  };

  return (
    <FormControl
      id="sessionCommentForm"
      component="form"
      onSubmit={handleSubmit}
    >
       <TextField
        id="playerNote--note"
        label="Whatcha thinkin"
        name="comment"
        value={sessionComment.comment}
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
