import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...args: any[]) {
  return args.filter(Boolean).join(" ");
}
