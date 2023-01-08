import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { GoSignOut } from "react-icons/go";
import { SiDiscord } from "react-icons/si";

import ButtonActions from "./button-actions";

const Header: React.FunctionComponent = () => {
  const session = useSession();

  const isAuthenticated = session.status === "authenticated";
  const isLoading = session.status === "loading";

  return (
    <header>
      <div className="relative m-auto my-8 h-full max-h-full bg-center px-4">
        <svg
          width="1400"
          height="230"
          viewBox="0 0 456 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto max-w-full"
        >
          <path
            d="M46.8 20.1C34.1 20.1 23.8 23.6 17.4 30.3V-1.19209e-06H0.3V80H17.4V70.8C23.8 77.5 34.1 81 46.8 81C65.7 81 81.9 73.1 81.9 50.6C81.9 28.1 65.7 20.1 46.8 20.1ZM41.1 66.7C25.8 66.7 17.4 62.2 17.4 50.6C17.4 38.9 25.8 34.4 41.1 34.4C56.4 34.4 64.7 38.9 64.7 50.6C64.7 62.2 56.4 66.7 41.1 66.7ZM88.3859 -1.19209e-06V80H105.486V-1.19209e-06H88.3859ZM152.795 81C177.095 81 193.595 72.2 193.595 50.6C193.595 28.9 177.095 20.1 152.795 20.1C128.395 20.1 111.995 28.9 111.995 50.6C111.995 72.2 128.395 81 152.795 81ZM152.795 66.7C136.895 66.7 129.095 62.8 129.095 50.6C129.095 38.3 136.895 34.4 152.795 34.4C168.595 34.4 176.395 38.3 176.395 50.6C176.395 62.8 168.595 66.7 152.795 66.7ZM198.519 50.6C198.519 72.2 214.919 81 239.319 81C261.319 81 276.819 73.8 279.619 56.5H262.119C259.819 64.1 251.719 66.7 239.319 66.7C224.619 66.7 215.619 62.8 215.619 50.6C215.619 38.3 224.619 34.4 239.319 34.4C251.719 34.4 259.819 37 262.119 44.6H279.619C276.819 27.3 261.319 20.1 239.319 20.1C214.919 20.1 198.519 28.9 198.519 50.6ZM286.14 -1.19209e-06V14.9H303.24V-1.19209e-06H286.14ZM286.14 21.1V80H303.24V21.1H286.14ZM369.763 35.4V21.1H341.863V3.99999L324.663 8.9V21.1H309.163V35.4H324.663V62.3C324.663 75.3 334.463 81 349.663 81C357.563 81 364.063 80.5 369.763 79.5V65.7C362.863 66.7 359.863 66.7 354.463 66.7C344.063 66.7 341.863 63.8 341.863 52.4V35.4H369.763ZM413.807 67.1C402.407 67.1 393.407 64 391.507 54.6H455.107C455.107 27.8 437.207 20.1 414.807 20.1C390.907 20.1 374.007 28.9 374.007 50.6C374.007 72.2 391.407 81 413.807 81C435.607 81 450.207 73.9 454.107 58.9H437.107C432.807 64.9 425.607 67.1 413.807 67.1ZM414.707 33.1C425.507 33.1 433.907 35.4 436.807 43.7H392.107C394.807 35.4 403.007 33.1 414.707 33.1Z"
            fill="#5A5A5A"
          />
        </svg>
      </div>
      <div className="flex gap-x-2 px-4">
        <ButtonActions isLoading={isLoading} label="create" type="MAIN" />
        {isAuthenticated ? (
          <React.Fragment>
            <ButtonActions
              isLoading={isLoading}
              label="collections"
              type="SECONDARY"
            />
            <ButtonActions
              isLoading={isLoading}
              onClick={() => signOut()}
              type="SECONDARY"
            >
              <GoSignOut className="h-10 w-10" />
              sign out
            </ButtonActions>
          </React.Fragment>
        ) : (
          <ButtonActions
            isLoading={isLoading}
            onClick={() => signIn("discord")}
            type="SECONDARY"
          >
            <SiDiscord className="h-10 w-10" />
            sign in
          </ButtonActions>
        )}
      </div>
    </header>
  );
};

export default Header;
