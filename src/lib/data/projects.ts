export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  status: "completed" | "upcoming";
  image?: string;
  expectedLaunch?: string;
  impact?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with payment integration, inventory management, real-time analytics dashboard, and multi-vendor support system.",
    category: "Web Development",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    status: "completed",
    image: "/projects/ecommerce.svg",
  },
  {
    id: 2,
    title: "AI Customer Service Bot",
    description:
      "Intelligent chatbot using advanced NLP to handle customer queries autonomously, reducing response time by 70% and improving customer satisfaction scores.",
    category: "AI & ML",
    tags: ["Python", "TensorFlow", "NLP", "React"],
    status: "completed",
    image: "/projects/ai-chatbot.svg",
  },
  {
    id: 3,
    title: "Smart Rail Crossing System",
    description:
      "Automated railway crossing safety system using advanced sensors and signaling to prevent accidents and optimize traffic flow at unmanned crossings.",
    category: "IoT & Safety",
    tags: ["IoT", "Embedded Systems", "Sensors", "Automation"],
    status: "completed",
    image: "/projects/smart-rail.svg",
  },
  {
    id: 4,
    title: "AI-Powered Traffic Management",
    description:
      "Computer vision and machine learning system to optimize traffic flow in smart cities, reducing congestion by predicting patterns and adjusting signals in real-time.",
    category: "AI & ML",
    tags: ["AI", "Computer Vision", "IoT", "Python"],
    status: "upcoming",
    expectedLaunch: "Q3 2026",
    impact: "Expected to reduce urban traffic congestion by 40%",
  },
  {
    id: 5,
    title: "Blockchain Supply Chain",
    description:
      "Transparent and secure supply chain tracking system for government procurement, ensuring full accountability, audit trails, and fraud prevention.",
    category: "Enterprise",
    tags: ["Blockchain", "Ethereum", "React", "Node.js"],
    status: "upcoming",
    expectedLaunch: "Q4 2026",
    impact: "Will track ₹4000Cr+ in government contracts",
  },
  {
    id: 6,
    title: "Agricultural AI Assistant",
    description:
      "Mobile app helping farmers with crop disease detection using camera, weather predictions, market prices, and soil health analysis using AI and satellite imagery.",
    category: "Mobile",
    tags: ["AI", "React Native", "TensorFlow", "Satellite API"],
    status: "upcoming",
    expectedLaunch: "Q1 2027",
    impact: "Targeting 100,000+ farmers in rural Maharashtra",
  },
];

export const projectCategories = [
  "All",
  "Web Development",
  "AI & ML",
  "IoT & Safety",
  "Enterprise",
  "Mobile",
];
