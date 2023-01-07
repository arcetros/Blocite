import { signIn, useSession } from "next-auth/react";
import React from "react";

import Container from "@/components/ui/container";
import MainBanner from "@/components/ui/logo";

export default function Home() {
  const { data } = useSession();
  return (
    <Container el="section">
      <div className="relative m-auto my-8 h-full max-h-full bg-center px-4">
        <MainBanner />
      </div>
      <div className="flex gap-x-2 px-4">
        <button className="h-20 flex-1 rounded bg-[#202020] text-4xl font-bold text-[#5a5a5a]">
          create
        </button>
        <button className="h-20 flex-1 rounded bg-[#5a5a5a] text-4xl font-bold text-[#202020]">
          sign in
        </button>
      </div>
    </Container>
  );
}
