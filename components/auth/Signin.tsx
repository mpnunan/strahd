'use client'
import React from 'react';
import { Button } from '@mui/material';
import { signIn } from '@/utils/auth';

export default function Signin() {
  return (
    <div
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <h1>Curse of Strahd</h1>
      <Button className="sign-in" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}
