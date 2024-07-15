import Loading from "@/components/Loading";
import NavHeader from "@/components/NavHeader";
import Signin from "@/components/Signin";
import { AuthProvider, useAuth } from "@/utils/context/AuthContext";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user, userLoading }: any = useAuth();

  // if user state is null, then show loader
 return (
  <AuthProvider>
    {userLoading ? <Loading /> : null}
    {user ? (
        <>
          <NavHeader />
          <div className="container">
            {children}
          </div>
        </>
      ) : null
    }
    {!userLoading && !user ? <Signin /> : null}
 </AuthProvider>
 )
}
