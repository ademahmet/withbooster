import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          variant === "default" ? "" : "border border-primary text-primary bg-white hover:bg-primary hover:text-white",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button"; 