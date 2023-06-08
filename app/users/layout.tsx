"use client";

import Sidebar from "@/components/Sidebar";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Sidebar>
      <div>{children}</div>
    </Sidebar>
  );
}
