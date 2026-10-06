import { Asterisk } from "lucide-react";
import { cn } from "../utils/cn";

export default function Marquee({
  items,
  variant = "volt",
  duration = "26s",
  className,
}: {
  items: string[];
  variant?: "volt" | "ghost";
  duration?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border-y py-4 md:py-5",
        variant === "volt"
          ? "-rotate-[1.6deg] scale-[1.02] border-ink bg-volt text-ink"
          : "border-bone/10 bg-transparent text-transparent",
        className
      )}
    >
      <div
        className="flex w-max animate-marquee will-change-transform hover:[animation-play-state:paused]"
        style={{ animationDuration: duration }}
      >
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {items.map((item, i) => (
              <span key={i} className="flex items-center">
                <span
                  className={cn(
                    "whitespace-nowrap font-display text-4xl font-extrabold uppercase tracking-tight md:text-6xl",
                    variant === "ghost" && "text-outline"
                  )}
                >
                  {item}
                </span>
                <Asterisk
                  className={cn(
                    "mx-6 h-8 w-8 shrink-0 md:mx-10 md:h-10 md:w-10",
                    variant === "volt" ? "text-ink" : "text-volt"
                  )}
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
