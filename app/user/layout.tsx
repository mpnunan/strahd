import { AuthProvider } from '@/utils/context/AuthContext';
import ViewDirectorBasedOnUserAuthStatus from '@/utils/ViewDirector';

function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      {' '}
      {/* gives children components access to user and auth methods */}
      <ViewDirectorBasedOnUserAuthStatus>{children}</ViewDirectorBasedOnUserAuthStatus>
    </AuthProvider>
  );
}

export default UserLayout;
