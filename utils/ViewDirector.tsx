import PropTypes from 'prop-types';
import { useAuth } from './context/AuthContext';
import Loading from '@/components/Loading';
import Signin from '@/components/Signin';
import NavHeader from '@/components/NavHeader';

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

ViewDirectorBasedOnUserAuthStatus.propTypes = {
  component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
};