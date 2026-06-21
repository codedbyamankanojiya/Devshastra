"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Scale, HeartHandshake } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { SectionHeader } from "@/components/shared/section-header";

const reasons = [
  {
    icon: Zap,
    title: "Innovation First",
    description:
      "We leverage the latest technologies and methodologies to deliver future-proof solutions that keep you ahead of the curve.",
  },
  {
    icon: Shield,
    title: "Enterprise Quality",
    description:
      "Rigorous code reviews, comprehensive testing, and industry-standard security practices ensure production-grade reliability.",
  },
  {
    icon: Scale,
    title: "Built to Scale",
    description:
      "Our architectures are designed for growth — from startup MVPs handling 100 users to enterprise systems serving millions.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership Approach",
    description:
      "We're not just vendors. We embed ourselves in your team, understand your domain, and become true technology partners.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent-cyan/[0.02] to-background" />

      <div className="section-container relative z-10">
        <SectionHeader
          eyebrow="Why Us"
          title="Why Choose DevShastra"
          gradient="DevShastra"
          description="We don't just build software — we create solutions that make a measurable difference."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={staggerItem}
              className="group p-8 rounded-2xl glass-card"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-indigo/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-6 h-6 text-accent-cyan" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
