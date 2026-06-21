"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { blogPosts, blogCategories } from "@/lib/data/blog-posts";
import { Badge } from "@/components/ui/badge";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { cn } from "@/lib/utils";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const featured = blogPosts[0];
  const rest = filtered.filter((p) => p.id !== featured.id || activeCategory !== "All");

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-6">Insights</Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight mb-6">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Insights, tutorials, and perspectives from the DevShastra engineering team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {activeCategory === "All" && (
        <section className="pb-16">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-2xl glass-card group cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Image placeholder */}
                <div className="lg:w-2/5 h-52 lg:h-auto rounded-xl bg-gradient-to-br from-accent-cyan/10 to-accent-indigo/10 flex items-center justify-center overflow-hidden">
                  <span className="text-7xl font-bold font-heading text-white/[0.03]">01</span>
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <Badge className="w-fit mb-4">{featured.category}</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-3 group-hover:text-accent-cyan transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {featured.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-6">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3 h-3" /> {featured.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3" /> {new Date(featured.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3" /> {featured.readTime} read
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-accent-cyan group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filter */}
      <section className="pb-8">
        <div className="section-container">
          <div className="flex flex-wrap justify-center gap-2">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300",
                  activeCategory === cat
                    ? "bg-accent-cyan text-background"
                    : "text-muted-foreground hover:text-foreground bg-white/5 hover:bg-white/10"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {(activeCategory === "All" ? blogPosts.slice(1) : filtered).map((post) => (
              <motion.div
                key={post.id}
                variants={staggerItem}
                className="group rounded-2xl glass-card overflow-hidden cursor-pointer"
              >
                {/* Image Placeholder */}
                <div className="h-44 bg-gradient-to-br from-muted/30 to-background flex items-center justify-center">
                  <span className="text-4xl font-bold font-heading text-white/[0.03]">
                    {String(post.id).padStart(2, "0")}
                  </span>
                </div>

                <div className="p-6">
                  <Badge variant="secondary" className="mb-3 text-[10px]">
                    {post.category}
                  </Badge>
                  <h3 className="text-base font-semibold font-heading text-foreground mb-2 line-clamp-2 group-hover:text-accent-cyan transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
