import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { IndustriesMarquee } from "@/components/sections/industries-marquee";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { TechStack } from "@/components/sections/tech-stack";
import { DevProcess } from "@/components/sections/dev-process";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <IndustriesMarquee />
      <FeaturedProjects />
      <TechStack />
      <DevProcess />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  );
}
