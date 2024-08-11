import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/utils/context/AuthContext";
import ViewDirectorBasedOnUserAuthStatus from "@/utils/ViewDirector";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Curse of Strahd",
  description: "Roll for Initiative",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        {' '}
        {/* gives children components access to user and auth methods */}
          <ViewDirectorBasedOnUserAuthStatus>{children}</ViewDirectorBasedOnUserAuthStatus>
        </AuthProvider>
      </body>
    </html>
  );
}
