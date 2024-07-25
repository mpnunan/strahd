// Context API Docs: https://beta.reactjs.org/learn/passing-data-deeply-with-context
'use client'
import React from 'react';
import { firebase } from '@/utils/client';

const AuthContext = React.createContext();

AuthContext.displayName = 'AuthContext'; // Context object accepts a displayName string property. React DevTools uses this string to determine what to display for the context. https://reactjs.org/docs/context.html#contextdisplayname

function AuthProvider(props) {
  const [user, setUser] = React.useState();

  // there are 3 states for the user:
  // null = application initial state, not yet loaded
  // false = user is not logged in, but the app has loaded
  // an object/value = user is logged in

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(function (fbUser) {
      if (fbUser) {
        setUser(fbUser);
      } else {
        setUser(false);
      }
    }); // creates a single global listener for auth state changed
  }, []);

  const value = React.useMemo( // https://reactjs.org/docs/hooks-reference.html#usememo
    () => ({
      user,
      userLoading: user === null,
      // as long as user === null, will be true
      // As soon as the user value !== null, value will be false
    }),
    [user],
  );

  return <AuthContext.Provider value={value} {...props} />;
};
const AuthConsumer = AuthContext.Consumer;

const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth, AuthConsumer };
