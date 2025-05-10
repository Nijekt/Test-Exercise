import React, { FC } from "react";
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  variant: "default" | "secondary" | "dark" | "outline" | "empty";
  className?: string;
  onClick?: () => void;
};

export const Button: FC<Props> = ({
  children,
  variant,
  className,
  onClick,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all cursor-pointer hover:scale-102";

  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    dark: "border bg-[#0c0f17] text-foreground hover:bg-accent hover:text-accent-foreground border-secondary border-[2px]",
    outline:
      "border bg-transparent text-blue-500 hover:bg-accent hover:text-accent-foreground border-blue-500 border-[2px]",
    empty: "text-primary-foreground",
  };

  return (
    <button
      onClick={onClick}
      className={classNames(baseStyles, variantStyles[variant], className)}
    >
      {children}
    </button>
  );
};
