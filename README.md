# DevShastra Technologies 🚀

<div align="center">

![DevShastra Banner](https://img.shields.io/badge/DevShastra-Technologies-64ffda?style=for-the-badge&logo=react&logoColor=white)

**Engineering the Future, Solving the Present.**

A modern, fully responsive corporate website showcasing cutting-edge technology solutions in Web Development, AI/ML, IoT, and Government-Scale Projects.

[![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=flat-square&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.18-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7.9.4-ca4245?style=flat-square&logo=react-router)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-Private-red?style=flat-square)](LICENSE)

[Live Demo](#) • [Documentation](PROJECT_SUMMARY.md) • [Quick Start](QUICK_START.md)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Pages](#-pages)
- [Design System](#-design-system)
- [Customization](#-customization)
- [Deployment](#-deployment)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Overview

**DevShastra Technologies** is a comprehensive corporate website built with modern web technologies, featuring a sleek dark theme with vibrant cyan and purple accents. The website provides an immersive experience showcasing the company's expertise in technology solutions, completed projects, team members, and contact information.

### Key Highlights

✨ **Modern Design** - Dark tech-inspired theme with glassmorphism effects  
🎨 **Smooth Animations** - Fade-in, slide-up, and hover effects throughout  
📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices  
⚡ **Performance Optimized** - Fast loading times and smooth interactions  
🔍 **SEO Ready** - Semantic HTML, meta tags, and proper heading hierarchy  
♿ **Accessible** - WCAG compliant with proper ARIA labels  

---

## ✨ Features

### 🏠 Interactive Pages

- **Home Page** - Hero section with animated background, core services, and call-to-action
- **Services** - Detailed breakdown of 5 comprehensive technology services
- **Projects** - Tabbed showcase of completed projects and upcoming ventures
- **Team** - Filterable grid of team members with social links
- **Contact** - Validated contact form with real-time error handling

### 🎨 Visual Excellence

- **Gradient Effects** - Animated cyan and purple gradient blobs
- **Grid Patterns** - Subtle tech-inspired background overlays
- **Glassmorphism** - Backdrop blur effects on navigation and cards
- **Custom Scrollbar** - Branded scrollbar with accent colors
- **Hover Animations** - Cards lift, glow, and transform on interaction

### 🔧 Interactive Components

- **Sticky Navigation** - Blur effect on scroll with mobile hamburger menu
- **Filterable Team Grid** - Filter by specialty (AI/ML, Web Dev, IoT, etc.)
- **Tabbed Projects** - Switch between completed and upcoming projects
- **Form Validation** - Real-time validation with success/error messages
- **Reusable Buttons** - Three variants (primary, secondary, outline)

---

## 🛠️ Tech Stack

### Core Technologies

- **[React 19.2.0](https://reactjs.org/)** - Modern UI library with hooks
- **[React Router DOM 7.9.4](https://reactrouter.com/)** - Client-side routing
- **[Tailwind CSS 3.4.18](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React Icons 5.5.0](https://react-icons.github.io/react-icons/)** - Icon library (Font Awesome, Simple Icons)

### Development Tools

- **PostCSS & Autoprefixer** - CSS processing and vendor prefixing
- **React Scripts 5.0.1** - Build tooling and development server
- **Simple Icons** - Brand icons for technology stack display

### Fonts

- **[Inter](https://fonts.google.com/specimen/Inter)** - Primary font family
- **[Poppins](https://fonts.google.com/specimen/Poppins)** - Secondary font family

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd DevShastra
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000` (or `http://localhost:3001` if port 3000 is busy)

4. **Build for production**
   ```bash
   npm run build
   ```
   Optimized production files will be generated in the `build/` folder

### Quick Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Create production build |
| `npm test` | Run test suite |
| `npm run eject` | Eject from Create React App (⚠️ irreversible) |

---

## 📁 Project Structure

```
DevShastra/
├── public/
│   ├── index.html              # HTML template with meta tags
│   ├── favicon.ico             # Website favicon
│   └── manifest.json           # PWA manifest
│
├── src/
│   ├── components/             # Reusable components
│   │   ├── Navbar.jsx          # Sticky navigation with mobile menu
│   │   ├── Footer.jsx          # Footer with links and contact info
│   │   ├── PrimaryButton.jsx   # Button component (3 variants)
│   │   └── AnimatedCounter.jsx # Animated statistics counter
│   │
│   ├── pages/                  # Page components
│   │   ├── Home.jsx            # Landing page
│   │   ├── Services.jsx        # Services showcase
│   │   ├── Projects.jsx        # Project portfolio
│   │   ├── Team.jsx            # Team members grid
│   │   └── Contact.jsx         # Contact form and info
│   │
│   ├── context/                # React context providers
│   │   └── ThemeContext.jsx    # Theme management (if applicable)
│   │
│   ├── assets/                 # Static assets
│   │   └── images/             # Images and graphics
│   │
│   ├── App.js                  # Main app component with routing
│   ├── App.css                 # Custom animations and styles
│   ├── index.js                # Entry point
│   └── index.css               # Global styles and Tailwind imports
│
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Dependencies and scripts
├── PROJECT_SUMMARY.md          # Detailed project documentation
├── QUICK_START.md              # Quick start guide
└── README.md                   # This file
```

---

## 📄 Pages

### 🏠 Home (`/`)
- **Hero Section** - Full-screen with animated background and CTA
- **Core Services** - 5 service cards with icons and descriptions
- **Why Choose Us** - Key differentiators with gradient backgrounds
- **Statistics** - Animated counters for projects, clients, and team size

### 💼 Services (`/services`)
- **Web Development** - Custom websites, e-commerce, and web apps
- **AI & Machine Learning** - Predictive analytics, NLP, and computer vision
- **IoT Solutions** - Smart devices and industrial automation
- **Government Projects** - Large-scale digital transformation
- **Mobile Development** - Cross-platform mobile applications

### 🎯 Projects (`/projects`)
- **Completed Projects** - 6 showcase projects with images and tags
- **Upcoming Ventures** - 3 future projects with launch dates and impact metrics
- **Tabbed Interface** - Easy navigation between project categories

### 👥 Team (`/team`)
- **9 Team Members** - Profiles with photos, titles, and bios
- **Filterable Grid** - Filter by specialty (All, AI/ML, Web Dev, IoT, etc.)
- **Social Links** - LinkedIn and GitHub links on hover
- **Specialty Tags** - Visual indicators for expertise areas

### 📧 Contact (`/contact`)
- **Contact Form** - Name, email, service selection, and message
- **Real-time Validation** - Error messages and success notifications
- **Contact Information** - Email, phone, location, and office hours
- **Interactive Cards** - Hover effects on contact info cards

---

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--bg-primary: #0a192f;      /* Dark Navy Blue */
--bg-secondary: #112240;    /* Darker Blue */
--bg-tertiary: #1e3a5f;     /* Medium Blue */

/* Accent Colors */
--accent-cyan: #64ffda;     /* Bright Cyan */
--accent-purple: #7c3aed;   /* Vibrant Purple */

/* Text Colors */
--text-primary: #e6f1ff;    /* Off-white */
--text-secondary: #8892b0;  /* Gray */
```

### Typography

- **Primary Font**: Inter (300, 400, 500, 600, 700, 800)
- **Secondary Font**: Poppins (300, 400, 500, 600, 700, 800)
- **Font Sizes**: Responsive scaling from mobile to desktop

### Animations

- **Fade In** - Smooth entry animations on scroll
- **Slide Up** - Bottom-to-top reveals
- **Hover Effects** - Scale, glow, and color transitions
- **Pulse** - Attention-grabbing animations for CTAs

### Responsive Breakpoints

| Breakpoint | Size | Columns |
|------------|------|---------|
| Mobile | < 768px | 1 column |
| Tablet | 768px - 1024px | 2 columns |
| Desktop | > 1024px | 3-4 columns |

---

## ⚙️ Customization

### Update Company Information

**Footer & Contact Details**
```javascript
// src/components/Footer.jsx (lines 71-83)
Email: contact@devshastratech.com
Phone: +91 1234567890
Location: Your City, Country

// src/pages/Contact.jsx (lines 172-190)
Update contact information cards
```

### Modify Services

```javascript
// src/pages/Services.jsx (lines 6-68)
const services = [
  {
    title: "Your Service",
    description: "Service description",
    technologies: ["Tech1", "Tech2"],
    features: ["Feature1", "Feature2"]
  }
];
```

### Add Projects

```javascript
// src/pages/Projects.jsx (lines 8-109)
const completedProjects = [
  {
    title: "Project Name",
    description: "Project description",
    image: "/path/to/image.jpg",
    tags: ["React", "Node.js"],
    link: "https://project-url.com"
  }
];
```

### Update Team Members

```javascript
// src/pages/Team.jsx (lines 13-95)
const teamMembers = [
  {
    name: "Member Name",
    title: "Job Title",
    specialty: "AI & ML",
    bio: "Short bio",
    image: "/path/to/photo.jpg",
    linkedin: "https://linkedin.com/in/username",
    github: "https://github.com/username"
  }
];
```

### Change Color Scheme

```javascript
// tailwind.config.js (lines 6-12)
theme: {
  extend: {
    colors: {
      'dark-bg': '#0a192f',
      'accent-cyan': '#64ffda',
      'accent-purple': '#7c3aed',
      // Add your custom colors
    }
  }
}
```

---

## 🚀 Deployment

### Netlify (Recommended)

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `build/` folder to [Netlify Drop](https://app.netlify.com/drop)

3. Or connect your Git repository for automatic deployments

### Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### AWS S3 + CloudFront

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload `build/` folder to S3 bucket

3. Configure CloudFront distribution for CDN

### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/devshastra",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest ✅ |
| Firefox | Latest ✅ |
| Safari | Latest ✅ |
| Edge | Latest ✅ |
| Opera | Latest ✅ |
| Mobile Safari | iOS 12+ ✅ |
| Chrome Mobile | Latest ✅ |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and structure
- Write meaningful commit messages
- Test your changes on multiple devices and browsers
- Update documentation if needed

---

## 📝 License

This project is **private** and proprietary to DevShastra Technologies. All rights reserved.

---

## 📧 Contact & Support

For questions, customization requests, or support:

- **Email**: contact@devshastratech.com
- **Website**: [DevShastra Technologies]
- **Documentation**: See [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) for detailed information
- **Quick Start**: See [QUICK_START.md](QUICK_START.md) for setup instructions

---

## 🙏 Acknowledgments

- **React Team** - For the amazing React library
- **Tailwind Labs** - For Tailwind CSS
- **React Icons** - For the comprehensive icon library
- **Google Fonts** - For Inter and Poppins fonts

---

<div align="center">

**Built with ❤️ by DevShastra Technologies**

*Engineering the Future, Solving the Present.*

[![React](https://img.shields.io/badge/Made_with-React-61dafb?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Tailwind](https://img.shields.io/badge/Styled_with-Tailwind_CSS-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

</div>
