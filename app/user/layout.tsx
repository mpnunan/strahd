/* eslint-disable react/prop-types */
'use client'
import { AuthProvider } from '@/utils/context/AuthContext';
import ViewDirectorBasedOnUserAuthStatus from '@/utils/ViewDirector';

function MyApp({ Component, pageProps }: any) {
  return (
    <AuthProvider>
      {' '}
      {/* gives children components access to user and auth methods */}
      <ViewDirectorBasedOnUserAuthStatus
        // if status is pending === loading
        // if status is logged in === view app
        // if status is logged out === sign in page
        component={Component}
        pageProps={pageProps}
      />
    </AuthProvider>
  );
}

export default MyApp;
