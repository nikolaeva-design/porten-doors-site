"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "inverse" | "ghost";
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
  icon?: string;
  size?: "default" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  onClick,
  className = "",
  icon,
  size = "default",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer";

  const sizeStyles = {
    default: "px-7 py-3.5 text-sm rounded-full sm:text-base",
    lg: "px-9 py-4 text-base rounded-full sm:text-lg",
  };

  const variants = {
    primary:
      "bg-neutral-900 text-white hover:bg-neutral-800 active:scale-[0.99] shadow-sm",
    secondary:
      "border border-neutral-900/20 bg-white text-neutral-900 hover:border-neutral-900/40 hover:bg-neutral-50 active:scale-[0.99]",
    inverse:
      "bg-white text-neutral-900 hover:bg-neutral-100 active:scale-[0.99]",
    ghost: "text-neutral-900 hover:bg-neutral-100 active:scale-[0.99] rounded-full",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`;

  const content = (
    <span className="flex items-center gap-2">
      {children}
      {icon ? (
        <iconify-icon
          icon={icon}
          width={size === "lg" ? "22" : "20"}
          height={size === "lg" ? "22" : "20"}
          className="shrink-0"
        />
      ) : null}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {content}
    </button>
  );
}
