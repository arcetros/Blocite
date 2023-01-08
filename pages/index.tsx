import { signIn, useSession } from "next-auth/react";
import React from "react";
import { SiDiscord } from "react-icons/si";

import ButtonActions from "@/components/main-section/button-actions";
import MainBanner from "@/components/main-section/logo";
import Container from "@/components/ui/container";

export default function Home() {
  const session = useSession();

  const isAuthenticated = session.status === "authenticated";
  const isLoading = session.status === "loading";

  return (
    <Container el="section">
      <div className="relative m-auto my-8 h-full max-h-full bg-center px-4">
        <MainBanner />
      </div>
      <div className="flex gap-x-2 px-4">
        <ButtonActions label="create" type="MAIN" />
        {isAuthenticated ? (
          <ButtonActions label="collections" type="SECONDARY" />
        ) : (
          <ButtonActions onClick={() => signIn("discord")} type="SECONDARY">
            <SiDiscord className="h-10 w-10" />
            sign in
          </ButtonActions>
        )}
      </div>
    </Container>
  );
}
