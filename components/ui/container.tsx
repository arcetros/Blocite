import cn from "clsx";
import React, { FC } from "react";

interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
  el?: React.ComponentType | keyof JSX.IntrinsicElements;
  clean?: boolean;
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  el = "div",
  clean = false, // Full Width Screen
}) => {
  const rootClassName = cn(className, {
    "mx-auto max-w-[1280px] w-full": !clean,
  });

  const Component = el;

  return <Component className={rootClassName}>{children}</Component>;
};

export default Container;
