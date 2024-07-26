'use client'
import React from 'react';
import { useAuth } from '@/utils/context/AuthContext';
import Loading from '@/components/auth/Loading';
import NavHeader from '@/components/auth/NavHeader';
import Signin from '@/components/auth/Signin';

export default function ViewDirectorBasedOnUserAuthStatus({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, userLoading }: any = useAuth();

  // if user state is null, then show loader
  if (userLoading) {
    return <Loading />;
  }

  // what the user should see if they are logged in
  if (user) {
    return (
      <>
        <NavHeader /> {/* NavBar only visible if user is logged in and is in every view */}
        <div className="container">
          {children}
        </div>
      </>
    );
  }

  return <Signin />;
};
