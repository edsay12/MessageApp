import client from "@/app/libs/prismadb";
import getSession from "./getSession";
import { authOption } from "../api/auth/[...nextauth]/route";

const getCurrentUser = async () => {
  try {
    const session = await getSession();
    if (!session?.user?.email) return null;

    const currentUser = client.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });
    if (!currentUser) return null;
    return currentUser;
  } catch (error) {
    return null;
  }
};
