import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/", // SignIn page aqui
  },
});

export const config = {
  matcher: ["/user/:path*"], // aqui e a pagina que queremos proteger
  // aqui eu estou protegento a pagina user e tudo que pode vir depois tipo 
  // user/message
};
