import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "About Us", path: "/about" },
  { name: "Careers", path: "/careers" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const serviceLinks = [
  "Web Development",
  "Mobile Applications",
  "AI-Powered Apps",
  "SaaS Platforms",
  "IoT Systems",
  "Government Solutions",
  "Enterprise Software",
];

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "#" },
  { name: "GitHub", icon: Github, url: "https://github.com" },
  { name: "Twitter", icon: Twitter, url: "#" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[hsl(240,6%,3%)]">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent" />

      <div className="section-container pt-16 pb-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg overflow-hidden">
                <Image
                  src="/Favicon.png"
                  alt="DevShastra"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg font-bold font-heading tracking-tight">
                DevShastra
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Engineering the future. We deliver enterprise-grade technology solutions 
              that empower businesses and governments to scale new heights.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold font-heading text-foreground mb-5 tracking-wide uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold font-heading text-foreground mb-5 tracking-wide uppercase">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li
                  key={service}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-default"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold font-heading text-foreground mb-5 tracking-wide uppercase">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 text-accent-cyan flex-shrink-0" />
                <a
                  href="mailto:contact@devshastratech.com"
                  className="hover:text-foreground transition-colors"
                >
                  contact@devshastratech.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-accent-cyan flex-shrink-0" />
                <span>Maharashtra, India</span>
              </li>
            </ul>

            <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <p className="text-xs text-muted-foreground font-medium mb-2">
                Office Hours
              </p>
              <p className="text-xs text-muted-foreground">Mon – Fri: 9 AM – 6 PM</p>
              <p className="text-xs text-muted-foreground">Sat: 10 AM – 4 PM</p>
            </div>
          </div>
        </div>

        <Separator className="bg-white/5" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6">
          <p className="text-xs text-muted-foreground">
            © {currentYear} DevShastra Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <button className="hover:text-foreground transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-foreground transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
