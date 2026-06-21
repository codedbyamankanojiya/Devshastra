"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  gradient?: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  gradient,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
      }}
      className={cn(
        "mb-16 md:mb-20",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.div variants={fadeUp} className="mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
            {eyebrow}
          </span>
        </motion.div>
      )}

      <motion.h2
        variants={fadeUp}
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight",
          align === "center" && "max-w-4xl mx-auto"
        )}
      >
        {gradient ? (
          <>
            {title.split(gradient)[0]}
            <span className="text-gradient">{gradient}</span>
            {title.split(gradient)[1]}
          </>
        ) : (
          title
        )}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeUp}
          className={cn(
            "mt-5 text-lg text-muted-foreground leading-relaxed",
            align === "center" && "max-w-2xl mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
