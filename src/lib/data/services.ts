import {
  Globe,
  Smartphone,
  Brain,
  Cpu,
  Landmark,
  Server,
  Sparkles,
  Rocket,
  Code2,
} from "lucide-react";

export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

export const services: Service[] = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom, high-performance web applications built with modern frameworks. From progressive web apps to complex enterprise portals, we deliver scalable solutions optimized for speed and SEO.",
    features: [
      "React / Next.js Applications",
      "Progressive Web Apps",
      "E-Commerce Platforms",
      "CMS & Admin Dashboards",
      "API Development & Integration",
      "Performance Optimization",
    ],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps for iOS and Android that deliver seamless user experiences. Built with React Native and Flutter for maximum code reuse and performance.",
    features: [
      "iOS & Android Development",
      "Cross-Platform (React Native / Flutter)",
      "App Store Optimization",
      "Push Notifications",
      "Offline-First Architecture",
      "Real-Time Sync",
    ],
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    icon: Brain,
    title: "AI-Powered Applications",
    description:
      "Intelligent systems powered by machine learning and AI. From chatbots to predictive analytics, we integrate cutting-edge AI capabilities into your business workflows.",
    features: [
      "Custom ML Models",
      "NLP & Chatbots",
      "Computer Vision",
      "Predictive Analytics",
      "Recommendation Engines",
      "Agentic AI Systems",
    ],
    gradient: "from-violet-500/20 to-pink-500/20",
  },
  {
    icon: Server,
    title: "SaaS Platforms",
    description:
      "End-to-end SaaS product development from concept to launch. Multi-tenant architectures, subscription billing, analytics dashboards, and scalable cloud infrastructure.",
    features: [
      "Multi-Tenant Architecture",
      "Subscription & Billing Systems",
      "User Management & Auth",
      "Analytics Dashboards",
      "API-First Design",
      "Cloud Deployment (AWS/GCP)",
    ],
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Cpu,
    title: "IoT Systems",
    description:
      "Bridge the digital and physical worlds with IoT solutions. Smart sensors, real-time monitoring, and hardware integration using Arduino, ESP32, and Raspberry Pi.",
    features: [
      "Smart Home Automation",
      "Industrial IoT Solutions",
      "Sensor Networks",
      "Remote Monitoring Systems",
      "Data Logging & Analytics",
      "Custom Hardware Prototyping",
    ],
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    icon: Landmark,
    title: "Government Solutions",
    description:
      "Large-scale, secure, and compliant technology solutions for government and public sector organizations. Infrastructure management, citizen services, and regulatory systems.",
    features: [
      "Railway Management Systems",
      "Infrastructure Monitoring",
      "Public Service Portals",
      "Data Security & Compliance",
      "Scalable Architecture",
      "Legacy System Modernization",
    ],
    gradient: "from-blue-500/20 to-sky-500/20",
  },
  {
    icon: Code2,
    title: "Enterprise Software",
    description:
      "Robust enterprise applications that streamline operations, improve efficiency, and drive digital transformation across your organization.",
    features: [
      "ERP Systems",
      "CRM Solutions",
      "Workflow Automation",
      "Business Intelligence",
      "System Integration",
      "Cloud Migration",
    ],
    gradient: "from-rose-500/20 to-red-500/20",
  },
  {
    icon: Rocket,
    title: "Startup MVP Development",
    description:
      "Rapid MVP development for startups. We help validate your ideas quickly with lean, scalable prototypes that can grow into full-scale products.",
    features: [
      "Rapid Prototyping",
      "MVP Architecture",
      "Investor-Ready Demos",
      "Growth-Ready Codebase",
      "Technical Co-Founding",
      "Product Strategy",
    ],
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Sparkles,
    title: "Freelance Development",
    description:
      "Flexible development services for businesses of all sizes. Whether you need a single feature, a complete overhaul, or ongoing technical support, we've got you covered.",
    features: [
      "Feature Development",
      "Code Reviews & Audits",
      "Bug Fixing & Optimization",
      "Technical Consultation",
      "Ongoing Maintenance",
      "Team Augmentation",
    ],
    gradient: "from-fuchsia-500/20 to-pink-500/20",
  },
];
