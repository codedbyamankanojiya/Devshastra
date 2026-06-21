export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Mehta",
    role: "CTO",
    company: "CloudNest Solutions",
    quote:
      "DevShastra Technologies delivered our SaaS platform 2 weeks ahead of schedule. Their technical expertise and attention to detail exceeded our expectations. Truly enterprise-grade work.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Director of Operations",
    company: "GovTech India",
    quote:
      "The railway crossing safety system they built is now deployed across 15 stations. Their IoT expertise and understanding of government compliance requirements is remarkable.",
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Founder",
    company: "AgriSense",
    quote:
      "We came to DevShastra with just an idea for an agricultural AI assistant. They not only built a working prototype but also helped us define the product strategy. Outstanding partner.",
  },
  {
    id: 4,
    name: "Sneha Kulkarni",
    role: "Product Manager",
    company: "FinEdge",
    quote:
      "The e-commerce platform they developed handles 10,000+ daily transactions flawlessly. Their React and Node.js expertise is top-tier. Highly recommended for any tech project.",
  },
  {
    id: 5,
    name: "Vikram Desai",
    role: "CEO",
    company: "SmartCity Labs",
    quote:
      "DevShastra's AI traffic management system is transforming how we approach urban planning. Their ability to combine computer vision with IoT is genuinely innovative.",
  },
];
