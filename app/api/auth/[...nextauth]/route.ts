import bcrypt from "bcryptjs-react";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

// O next-auth prisma adapter é um adaptador de banco de dados para o NextAuth.js
// que permite que você armazene informações de sessão e usuário em um banco de dados
// Prisma. Ele é usado para gerenciar a autenticação e autorização em aplicativos da web.

import prisma from "@/app/libs/prismadb";

export const authOption: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      // função que verificara se o usuario ja esta no banco
      // e pode fazer o login
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error("Invalid Credentials");
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user || !user.passwordHash) {
          throw new Error("Invalid Credentials");
        }
        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.passwordHash
        );
        if (!isCorrectPassword) throw new Error("Invalid Credentials");

        return user;
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development", // se tiver em development vamos ativar o debug mode
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET, // Será usada pelo jwt.
};

const handle = NextAuth(authOption);

export {handle as GET , handle as POST}