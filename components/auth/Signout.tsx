'use client'
import React from 'react';
import { Button } from "@mui/material";
import { signOut } from "@/utils/auth";

export default function SignOut() {
  return (
    <>
      <Button onClick={signOut}>Sign Out</Button>
    </>
  )
}
