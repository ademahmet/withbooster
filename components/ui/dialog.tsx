import * as React from "react";
import { cn } from "../../lib/utils";

export function Dialog({ open, onOpenChange, children }: { open: boolean, onOpenChange: (v: boolean) => void, children: React.ReactNode }) {
  return open ? (
    <div className="fixed inset-0 z-50 flex justify-center items-center" style={{ minHeight: '100vh', minWidth: '100vw' }}>
      <div className="relative bg-white rounded-2xl shadow-2xl p-0 min-w-[320px] max-w-full flex flex-col items-center justify-center" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  ) : null;
}

export function DialogContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function DialogHeader({ children }: { children: React.ReactNode }) {
  return <div className="mb-4">{children}</div>;
}

export function DialogTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold text-black">{children}</h2>;
} 