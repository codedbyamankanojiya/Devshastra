"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Clock,
  Heart,
  Laptop,
  Users,
  GraduationCap,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/section-header";
import { staggerContainer, staggerItem } from "@/lib/animations";

const openPositions = [
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / Maharashtra",
    description: "Build scalable web applications using React, Next.js, Node.js, and cloud services.",
  },
  {
    title: "AI/ML Engineer",
    department: "AI & Data",
    type: "Full-time",
    location: "Remote / Maharashtra",
    description: "Develop machine learning models and AI-powered features for enterprise clients.",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-time / Part-time",
    location: "Remote",
    description: "Create intuitive, beautiful interfaces for web and mobile applications.",
  },
  {
    title: "IoT Engineer",
    department: "Hardware",
    type: "Full-time",
    location: "Maharashtra",
    description: "Design and implement IoT solutions using Arduino, ESP32, and sensor networks.",
  },
];

const benefits = [
  { icon: Laptop, title: "Remote-First", description: "Work from anywhere with flexible hours" },
  { icon: GraduationCap, title: "Learning Budget", description: "Annual budget for courses and conferences" },
  { icon: Users, title: "Small Team", description: "Direct impact and fast decision-making" },
  { icon: Heart, title: "Health & Wellness", description: "Health insurance and wellness programs" },
  { icon: Zap, title: "Cutting-Edge Stack", description: "Work with the latest technologies" },
  { icon: Briefcase, title: "Real Impact", description: "Projects that serve millions of users" },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.03] to-transparent" />
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="success" className="mb-6">
              We&apos;re Hiring
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight mb-6">
              Join Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Build the future of technology with a passionate team that values
              innovation, growth, and real-world impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="section-container">
          <SectionHeader
            eyebrow="Perks & Culture"
            title="Why Work With Us"
            gradient="With Us"
            description="We invest in our people because great products come from great teams."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={staggerItem}
                className="p-6 rounded-2xl glass-card group"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                  <benefit.icon className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-base font-semibold font-heading text-foreground mb-1.5">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding">
        <div className="section-container">
          <SectionHeader
            eyebrow="Open Roles"
            title="Current Openings"
            gradient="Openings"
            description="Find your next role and make an impact from day one."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {openPositions.map((position) => (
              <motion.div
                key={position.title}
                variants={staggerItem}
                className="p-6 md:p-8 rounded-2xl glass-card group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold font-heading text-foreground mb-2 group-hover:text-accent-cyan transition-colors">
                      {position.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {position.description}
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-3 h-3" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        {position.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" />
                        {position.location}
                      </span>
                    </div>
                  </div>
                  <Link href="/contact" className="flex-shrink-0">
                    <Button variant="outline" size="sm" className="gap-2">
                      Apply Now
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground mt-10"
          >
            Don&apos;t see a role that fits?{" "}
            <Link href="/contact" className="text-accent-cyan hover:underline">
              Send us your resume
            </Link>{" "}
            — we&apos;re always looking for exceptional talent.
          </motion.p>
        </div>
      </section>
    </>
  );
}
