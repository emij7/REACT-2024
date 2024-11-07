import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
};

export const Button = ({ children, disabled = false }: ButtonProps) => {
  return <button disabled={disabled}>{children}</button>;
};
