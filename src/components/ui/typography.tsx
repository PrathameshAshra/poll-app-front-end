import React from "react";

type Props = {
  children: React.ReactNode;
};

export const TypographyMuted = ({ children }: Props) => {
  return <p className="text-sm text-muted-foreground">{children}</p>;
};

export const TypographyH2 = ({ children }: Props) => {
  return (
    <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
};
export const TypographyH3 = ({ children }: Props) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
};
export const TypographyP = ({ children }: Props) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
};
export const TypographySmall = ({ children }: Props) => {
  return <small className="text-sm font-medium leading-none">{children}</small>;
};
