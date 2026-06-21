export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Scalable SaaS Architectures with Next.js and AWS",
    excerpt:
      "A deep dive into designing multi-tenant SaaS platforms that handle thousands of concurrent users while maintaining sub-second response times.",
    category: "Engineering",
    date: "2026-06-15",
    readTime: "8 min",
    author: "Aman Kanojiya",
    slug: "scalable-saas-nextjs-aws",
  },
  {
    id: 2,
    title: "How AI is Transforming Government Service Delivery in India",
    excerpt:
      "Exploring real-world case studies of AI-powered citizen services, from automated document processing to intelligent traffic management systems.",
    category: "AI & Innovation",
    date: "2026-06-08",
    readTime: "6 min",
    author: "Karan Angane",
    slug: "ai-transforming-government-services",
  },
  {
    id: 3,
    title: "IoT Security Best Practices for Smart Infrastructure",
    excerpt:
      "Essential security considerations when deploying IoT sensor networks in critical infrastructure like railways, power grids, and water systems.",
    category: "IoT & Security",
    date: "2026-05-28",
    readTime: "10 min",
    author: "Aaditya Kadam",
    slug: "iot-security-smart-infrastructure",
  },
  {
    id: 4,
    title: "From MVP to Scale: A Startup's Technical Journey",
    excerpt:
      "Lessons learned from helping 15+ startups transition from rapid prototypes to production-ready systems serving millions of users.",
    category: "Startups",
    date: "2026-05-20",
    readTime: "7 min",
    author: "Vaishnav Kadav",
    slug: "mvp-to-scale-startup-journey",
  },
  {
    id: 5,
    title: "Design Systems That Scale: Building UI Components for Enterprise",
    excerpt:
      "How we approach component architecture, theming, and accessibility in large-scale enterprise applications used by thousands of employees.",
    category: "Design",
    date: "2026-05-12",
    readTime: "5 min",
    author: "Yash Kadam",
    slug: "design-systems-enterprise",
  },
  {
    id: 6,
    title: "React Native vs Flutter in 2026: A Comprehensive Comparison",
    excerpt:
      "An honest technical comparison based on real projects we've built with both frameworks, covering performance, DX, ecosystem, and hiring.",
    category: "Mobile",
    date: "2026-05-05",
    readTime: "9 min",
    author: "Aman Kanojiya",
    slug: "react-native-vs-flutter-2026",
  },
];

export const blogCategories = [
  "All",
  "Engineering",
  "AI & Innovation",
  "IoT & Security",
  "Startups",
  "Design",
  "Mobile",
];
