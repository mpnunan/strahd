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
      }}
    >
      <h1>Hi there!</h1>
      <p>Click the button below to login!</p>
      <Button onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}
