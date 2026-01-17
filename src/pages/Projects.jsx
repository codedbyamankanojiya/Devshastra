import React, { useEffect, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('completed');

  useEffect(() => {
    window.dispatchEvent(new Event('reveal:refresh'));
  }, [activeTab]);

  const completedProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with payment integration, inventory management, and real-time analytics.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Web Development',
    },
    {
      id: 2,
      title: 'AI Chatbot for Customer Service',
      description: 'Intelligent chatbot using NLP to handle customer queries, reducing response time by 70%.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop',
      tags: ['Python', 'TensorFlow', 'NLP', 'React'],
      category: 'AI & ML',
    },
    {
      id: 5,
      title: 'Smart Rail Crossing System',
      description: 'Automated railway crossing safety system using advanced sensors and signaling to prevent accidents and optimize traffic flow.',
      image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800&h=600&fit=crop',
      tags: ['IoT', 'Embedded Systems', 'Sensors', 'Automation'],
      category: 'IoT & Safety',
    },
  ];

  const upcomingProjects = [
    {
      id: 1,
      title: 'AI-Powered Traffic Management',
      description: 'Using computer vision and machine learning to optimize traffic flow in smart cities, reducing congestion by predicting patterns and adjusting signals in real-time.',
      status: 'In Development',
      expectedLaunch: 'Q2 2026',
      tags: ['AI', 'Computer Vision', 'IoT', 'Python'],
      impact: 'Expected to reduce urban traffic congestion by 40%',
    },
    {
      id: 2,
      title: 'Blockchain-Based Supply Chain',
      description: 'Transparent and secure supply chain tracking system for government procurement, ensuring accountability and reducing fraud.',
      status: 'Planning Phase',
      expectedLaunch: 'Q4 2026',
      tags: ['Blockchain', 'Ethereum', 'React', 'Node.js'],
      impact: 'Will track $500M+ in government contracts',
    },
    {
      id: 3,
      title: 'Agricultural AI Assistant',
      description: 'Mobile app helping farmers with crop disease detection, weather predictions, and market prices using AI and satellite imagery.',
      status: 'Prototype Ready',
      expectedLaunch: 'Q1 2026',
      tags: ['AI', 'React Native', 'TensorFlow', 'Satellite API'],
      impact: 'Targeting 100,000+ farmers in rural areas',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="hero-animated bg-gradient-to-br from-primary via-secondary to-primary py-16 md:py-20 border-b border-accent-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 data-reveal className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="title-backdrop">Our <span className="text-gradient">Projects</span></span>
          </h1>
          <p data-reveal className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Explore our portfolio of successful projects and upcoming innovations
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="sticky top-20 z-40 glass-panel border-b border-accent-primary/20 section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4 md:space-x-8 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setActiveTab('completed')}
              className={`py-3 md:py-4 px-4 md:px-6 font-semibold transition-all duration-300 border-b-2 whitespace-nowrap text-sm md:text-base ${activeTab === 'completed'
                  ? 'border-accent-primary text-accent-primary'
                  : 'border-transparent text-text-secondary hover:text-text-primary'
                }`}
            >
              Completed Projects
            </button>
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`py-3 md:py-4 px-4 md:px-6 font-semibold transition-all duration-300 border-b-2 whitespace-nowrap text-sm md:text-base ${activeTab === 'upcoming'
                  ? 'border-accent-primary text-accent-primary'
                  : 'border-transparent text-text-secondary hover:text-text-primary'
                }`}
            >
              Upcoming Ventures
            </button>
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      {activeTab === 'completed' && (
        <section className="py-12 md:py-20 lg:py-24 relative section-ambient section-divider">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 stagger">
              {completedProjects.map((project) => (
                <div data-reveal
                  key={project.id}
                  className="glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover-tilt card-glow spotlight spotlight-border"
                >
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary/80 backdrop-blur-sm text-accent-primary px-3 py-1 rounded-full text-xs font-bold border border-accent-primary/20">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-text-primary mb-3 leading-tight group-hover:text-accent-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary mb-6 line-clamp-3 leading-relaxed text-sm">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="bg-accent-cyan/5 px-3 py-1 rounded-full text-xs text-accent-cyan border border-accent-cyan/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between border-t border-accent-primary/10 pt-6">
                      <button className="flex items-center space-x-2 text-text-primary hover:text-accent-cyan transition-colors font-medium text-sm">
                        <span>View Details</span>
                        <FaExternalLinkAlt size={12} />
                      </button>
                      <button className="text-text-secondary hover:text-text-primary transition-colors">
                        <FaGithub size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Upcoming Ventures */}
      {activeTab === 'upcoming' && (
        <section className="py-20 section-ambient section-divider">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 data-reveal className="text-3xl font-bold text-text-primary mb-4">
                Innovation in <span className="text-accent-cyan">Progress</span>
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                These are the cutting-edge projects we're currently developing to solve tomorrow's challenges
              </p>
            </div>

            <div className="space-y-8">
              {upcomingProjects.map((project, index) => (
                <div data-reveal
                  key={project.id}
                  className="glass-card p-8 rounded-xl border border-dark-tertiary/40 hover:border-accent-purple/70 transition-all duration-300 hover-tilt card-glow spotlight spotlight-border"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <h3 className="text-2xl font-bold text-text-primary">{project.title}</h3>
                        <span className="bg-accent-purple/20 text-accent-purple px-3 py-1 rounded-full text-sm font-semibold">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-text-secondary text-lg mb-4">{project.description}</p>

                      {/* Impact */}
                      <div className="bg-secondary/30 backdrop-blur-sm p-4 rounded-lg border border-accent-primary/10 mb-4">
                        <p className="text-accent-cyan font-semibold mb-1">Expected Impact:</p>
                        <p className="text-text-secondary">{project.impact}</p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="bg-secondary/30 px-3 py-1 rounded-full text-xs text-text-secondary border border-accent-primary/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="lg:w-48 text-center lg:text-right">
                      <p className="text-text-secondary text-sm mb-2">Expected Launch</p>
                      <p className="text-2xl font-bold text-accent-cyan">{project.expectedLaunch}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Projects;
