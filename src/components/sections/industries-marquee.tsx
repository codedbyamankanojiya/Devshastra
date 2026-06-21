"use client";

import { Building2, Heart, GraduationCap, ShoppingCart, Landmark, Tractor, Train, Home } from "lucide-react";
import { Marquee } from "@/components/shared/marquee";
import { SectionHeader } from "@/components/shared/section-header";

const industries = [
  { name: "Healthcare", icon: Heart },
  { name: "Finance", icon: Building2 },
  { name: "Government", icon: Landmark },
  { name: "E-Commerce", icon: ShoppingCart },
  { name: "Education", icon: GraduationCap },
  { name: "Agriculture", icon: Tractor },
  { name: "Transportation", icon: Train },
  { name: "Real Estate", icon: Home },
];

export function IndustriesMarquee() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="section-container mb-12">
        <SectionHeader
          eyebrow="Industries"
          title="Serving Diverse Sectors"
          gradient="Diverse Sectors"
          description="We bring deep domain expertise across industries to deliver solutions that understand your business."
        />
      </div>

      <Marquee speed="slow" pauseOnHover>
        {industries.map((industry) => (
          <div
            key={industry.name}
            className="flex items-center gap-4 px-8 py-5 rounded-2xl glass-card min-w-[220px] group cursor-default"
          >
            <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors">
              <industry.icon className="w-5 h-5 text-accent-cyan" />
            </div>
            <span className="text-sm font-medium text-foreground whitespace-nowrap">
              {industry.name}
            </span>
          </div>
        ))}
      </Marquee>

      <div className="mt-4">
        <Marquee speed="slow" reverse pauseOnHover>
          {industries.map((industry) => (
            <div
              key={industry.name + "-reverse"}
              className="flex items-center gap-4 px-8 py-5 rounded-2xl glass-card min-w-[220px] group cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-indigo/10 flex items-center justify-center group-hover:bg-accent-indigo/20 transition-colors">
                <industry.icon className="w-5 h-5 text-[hsl(var(--accent-indigo))]" />
              </div>
              <span className="text-sm font-medium text-foreground whitespace-nowrap">
                {industry.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
