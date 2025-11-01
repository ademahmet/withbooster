"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "default"
  | "secondary"
  | "ghost"
  | "outline"
  | "link";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  default:
    "bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary/40",
  secondary:
    "bg-transparent text-white border border-white/20 hover:border-white/40 hover:bg-white/5",
  ghost:
    "bg-transparent text-white hover:bg-white/10 focus-visible:ring-white/20",
  outline:
    "border border-accent text-accent hover:bg-accent/10 focus-visible:ring-accent/30",
  link: "text-accent underline-offset-4 hover:underline",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-60";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(baseStyles, variantStyles[variant], className)}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };

