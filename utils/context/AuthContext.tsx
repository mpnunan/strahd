'use client'
import * as React from 'react';
import { firebase } from '@/utils/client';

export type User = {
  fbUser: firebase.User | false;
  uid: string;
  [key: string]: any;
}

export type AuthContextType = {
  user: User | false | null;
  updateUser: (uid: string) => void;
  userLoading: boolean;
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

AuthContext.displayName = 'AuthContext';

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<User | false | null>(null);
  const [oAuthUser, setOAuthUser] = React.useState<firebase.User | false | null>(null);

  const updateUser = React.useMemo(
      () => (uid: string): void => {
          setUser({ fbUser: oAuthUser!, uid });
      },
      [oAuthUser]
  );

  React.useEffect(() => {
      firebase.auth().onAuthStateChanged((fbUser) => {
          if (fbUser) {
              setOAuthUser(fbUser);
              setUser({fbUser, uid: fbUser.uid });
          } else {
              setOAuthUser(false);
              setUser(false);
          }
      });
  }, []);

  const value = React.useMemo<AuthContextType>(
      () => ({
          user,
          updateUser,
          userLoading: user === null || oAuthUser === null,
      }),
      [user, oAuthUser, updateUser]
  );

  return (
      <AuthContext.Provider value={value}>
          {children}
      </AuthContext.Provider>
  );
};

const AuthConsumer = AuthContext.Consumer;

const useAuth = (): AuthContextType => {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
      throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export {
  AuthProvider,
  useAuth,
  AuthConsumer,
};
