import { PrismaClient } from "@prisma/client";

// O GlobalThis e uma variavel global
// Se eu estiver em um modo diferente de pro
declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV != "production") globalThis.prisma = client;

export default client;
