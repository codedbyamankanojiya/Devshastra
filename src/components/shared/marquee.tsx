import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  speed?: "slow" | "normal" | "fast";
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  speed = "normal",
}: MarqueeProps) {
  const speedMap = {
    slow: "60s",
    normal: "40s",
    fast: "25s",
  };

  return (
    <div
      className={cn("group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]", className)}
    >
      <div
        className={cn(
          "flex shrink-0 gap-8 py-4",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${speedMap[speed]} linear infinite`,
        }}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 gap-8 py-4",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${speedMap[speed]} linear infinite`,
        }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
