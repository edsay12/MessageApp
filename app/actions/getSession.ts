import { getServerSession } from "next-auth";

import { authOption } from "../api/auth/[...nextauth]/route";

export default async function getSession() {
  return await getServerSession(authOption); // pega as seção aqui vem o usuario logado
}
