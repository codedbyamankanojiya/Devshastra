import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-accent-cyan/10 text-accent-cyan",
        secondary:
          "border-white/5 bg-white/5 text-muted-foreground",
        outline:
          "border-white/10 text-muted-foreground",
        indigo:
          "border-transparent bg-accent-indigo/10 text-[hsl(239,84%,67%)]",
        violet:
          "border-transparent bg-[hsl(263,70%,76%)]/10 text-[hsl(263,70%,76%)]",
        success:
          "border-transparent bg-emerald-500/10 text-emerald-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
