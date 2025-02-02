'use client'
import React from 'react';
import { Button } from "@mui/material";
import { signOut } from "@/utils/auth";

export default function SignOut() {
  return (
    <div className="sign-out-wrapper">
      <Button className="sign-out" onClick={signOut}>Sign Out</Button>
    </div>
  )
}
