'use client'
import { signOut } from "next-auth/react";

function User() {
  return (
    <>
      <button onClick={() => signOut()}>Logout</button>
    </>
  );
}

export default User;
