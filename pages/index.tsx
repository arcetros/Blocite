import { signIn, useSession } from "next-auth/react";
import React from "react";

export default function Home() {
  const { data } = useSession();
  return (
    <div className="m-auto flex h-screen flex-col items-center justify-center">
      <h1 className="font-primary text-3xl" onClick={() => signIn("discord")}>
        Blocite
      </h1>
      <div>
        {data?.user?.name ? `Welcome ${data.user.name}` : "Not logged in"}
      </div>
    </div>
  );
}
