import { SessionProvider } from "next-auth/react";

type AuthContextProps = {
  children: React.ReactNode;
};

function AuthContext({ children }: AuthContextProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
export default AuthContext;
