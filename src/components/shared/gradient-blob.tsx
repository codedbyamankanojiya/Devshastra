"use client";

import { cn } from "@/lib/utils";

interface GradientBlobProps {
  className?: string;
}

export function GradientBlob({ className }: GradientBlobProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      {/* Primary cyan blob */}
      <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[hsl(var(--accent-cyan)/0.08)] blur-[120px] animate-float-slow" />
      {/* Secondary indigo blob */}
      <div className="absolute -bottom-[15%] -right-[10%] w-[45vw] h-[45vw] rounded-full bg-[hsl(var(--accent-indigo)/0.06)] blur-[120px] animate-float" />
      {/* Tertiary violet blob */}
      <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-[hsl(var(--accent-violet)/0.04)] blur-[100px] animate-float-slow" style={{ animationDelay: "-3s" }} />
    </div>
  );
}
