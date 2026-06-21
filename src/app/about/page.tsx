"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Github, Globe, Target, Eye, Heart } from "lucide-react";
import { teamMembers } from "@/lib/data/team";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/section-header";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { CTASection } from "@/components/sections/cta-section";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To empower businesses and governments with cutting-edge technology solutions that drive measurable impact and sustainable growth.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To become India's most trusted technology partner, recognized for innovation, quality, and relentless commitment to client success.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Innovation, integrity, collaboration, and excellence guide every decision we make and every solution we deliver.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-accent-violet/[0.03] to-transparent" />
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="violet" className="mb-6">
              About Us
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight mb-6">
              Engineering the <span className="text-gradient">Future</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              DevShastra Technologies is a software engineering company building
              enterprise-grade solutions for businesses and governments across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Founded with the belief that great technology should be accessible to
              every organization, DevShastra Technologies brings together a team of
              passionate engineers, designers, and strategists dedicated to solving
              complex problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From startups seeking their first MVP to government bodies modernizing
              critical infrastructure, we deliver solutions that are scalable, secure,
              and built to last. Our expertise spans web, mobile, AI, IoT, and enterprise
              systems — all under one roof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20">
        <div className="section-container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {values.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="p-8 rounded-2xl glass-card text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-indigo/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-accent-cyan" />
                </div>
                <h3 className="text-lg font-semibold font-heading text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeader
            eyebrow="Our Team"
            title="Meet the Team Behind the Magic"
            gradient="the Magic"
            description="A diverse team of engineers, designers, and strategists united by a passion for technology."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={staggerItem}
                className="group rounded-2xl glass-card overflow-hidden"
              >
                {/* Photo */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-muted/30 to-background">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover filter grayscale contrast-115 brightness-95 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
                    style={{ objectPosition: member.objectPosition || "center" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                  {/* Social Links on Hover */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-accent-cyan/20 transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-accent-cyan/20 transition-colors"
                        aria-label={`${member.name} GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {member.portfolio && (
                      <a
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-accent-cyan/20 transition-colors"
                        aria-label={`${member.name} Portfolio`}
                      >
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold font-heading text-foreground mb-1 group-hover:text-accent-cyan transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-accent-cyan mb-3">
                    {member.title}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialties.map((spec) => (
                      <Badge key={spec} variant="secondary" className="text-[10px]">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
