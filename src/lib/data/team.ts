export interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
  objectPosition?: string;
  specialties: string[];
  bio: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Yash Kadam",
    title: "Founder",
    image: "/team/Yash.png",
    objectPosition: "50% 12%",
    specialties: ["UI/UX Design", "Graphics Design"],
    bio: "Visionary leader driving DevShastra's mission to deliver world-class technology solutions. Specializes in design thinking and brand strategy.",
    linkedin: "https://www.linkedin.com/in/yash-kadam-740992268",
    github: "https://github.com/santa2902",
  },
  {
    id: 2,
    name: "Aman Kanojiya",
    title: "Co-founder & Team Lead",
    image: "/team/Aman.jpg",
    objectPosition: "50% 8%",
    specialties: ["Full Stack Development", "AI/ML", "UI/UX", "Cyber Security"],
    bio: "Leading technical direction across web, mobile, AI/ML, and security domains. Expert architect with a passion for scalable, elegant solutions.",
    linkedin: "https://www.linkedin.com/in/aman-kanojiya-7386822b0",
    github: "https://github.com/codedbyamankanojiya",
    portfolio: "https://codedbyamankanojiya.vercel.app",
  },
  {
    id: 3,
    name: "Ajay Patil",
    title: "Co-founder & Treasurer",
    image: "/team/Ajay.png",
    objectPosition: "50% 8%",
    specialties: ["UI/UX Design", "Graphics Design"],
    bio: "Creative force behind DevShastra's visual identity. Combines design excellence with business acumen to drive brand consistency.",
    linkedin: "https://www.linkedin.com/in/ajay-patil-a4986b326",
    github: "https://github.com/ajaypatil8658",
  },
  {
    id: 4,
    name: "Aaditya Kadam",
    title: "Electronics Engineer",
    image: "/team/Aaditya.jpg",
    objectPosition: "50% 15%",
    specialties: ["IoT & Hardware", "Embedded Systems"],
    bio: "Hardware specialist with deep expertise in circuit design, microcontrollers (ESP32, Arduino), and IoT system architecture.",
    linkedin: "https://www.linkedin.com/in/aaditya-kadam-90b881334/",
    github: "https://github.com/AK0514",
  },
  {
    id: 5,
    name: "Vaishnav Kadav",
    title: "Full Stack Developer",
    image: "/team/Vaishnav.png",
    objectPosition: "50% 15%",
    specialties: ["Web Development", "App Development", "Digital Marketing"],
    bio: "Versatile developer blending code, design, and marketing strategy. Passionate about e-commerce solutions and user-centric development.",
    linkedin: "https://www.linkedin.com/in/vaishnav-kadav-1aba072ab/",
    github: "https://github.com/DreamingVaishu",
    portfolio: "https://knowaboutvaishnav.vercel.app/",
  },
  {
    id: 6,
    name: "Karan Angane",
    title: "AI/ML Developer",
    image: "/team/Karan.png",
    objectPosition: "50% 10%",
    specialties: ["AI & ML", "IoT & Hardware"],
    bio: "AI/ML engineer with hands-on experience in Arduino and ESP32 projects. Building intelligent systems that bridge software and hardware.",
    linkedin: "https://www.linkedin.com/in/karan-angane-7a4b60331/",
    github: "https://github.com/Timepass2117",
  },
];
