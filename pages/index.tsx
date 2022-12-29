import React from "react";

import { trpc } from "../utils/trpc";

export default function Home() {
  const hello = trpc.hello.useQuery({ text: "client" });

  if (!hello.data) {
    return <div>Loading</div>;
  }

  return (
    <div className="m-auto flex h-screen flex-col items-center justify-center">
      <h1 className="font-primary text-3xl">Blocite</h1>
      <p>{hello.data.greeting}</p>
    </div>
  );
}
