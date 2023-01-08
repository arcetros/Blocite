import clsx from "clsx";
import React from "react";

import LoadingDots from "../ui/loading-dots/loading-dots";

interface Props {
  type: "MAIN" | "SECONDARY";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  label?: string;
  children?: React.ReactNode;
  isLoading: boolean;
}

const ButtonActions: React.FunctionComponent<Props> = ({
  type,
  onClick,
  label,
  children,
  isLoading,
}) => {
  const styles = clsx(
    "h-20 flex-1 flex rounded text-4xl font-bold items-center justify-center gap-x-4",
    {
      "bg-[#202020] text-[#5a5a5a]": type === "MAIN",
      "bg-[#5a5a5a] text-[#202020]": type === "SECONDARY",
    },
  );
  return (
    <button disabled={isLoading} onClick={onClick} className={styles}>
      {isLoading ? (
        <LoadingDots />
      ) : (
        <React.Fragment>
          {children}
          <span>{label}</span>
        </React.Fragment>
      )}
    </button>
  );
};

export default ButtonActions;
