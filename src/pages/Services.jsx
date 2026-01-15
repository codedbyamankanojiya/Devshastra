import React from 'react';
import { FaCode, FaMobileAlt, FaBrain, FaMicrochip, FaLandmark, FaReact, FaPython, FaNodeJs, FaAndroid, FaApple, FaRobot, FaServer } from 'react-icons/fa';
import { SiTensorflow, SiArduino, SiFlutter } from 'react-icons/si';

const Services = () => {
  const services = [
    {
      icon: <FaCode size={50} />,
      title: 'Custom Website Development',
      description: 'We create stunning, responsive websites that not only look great but perform exceptionally. Our web solutions are built with modern frameworks and optimized for speed, SEO, and user experience.',
      technologies: [
        { name: 'React.js', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Next.js', icon: <FaCode /> },
      ],
      features: [
        'Responsive Design',
        'SEO Optimization',
        'Progressive Web Apps',
        'E-commerce Solutions',
        'CMS Integration',
        'API Development',
      ],
    },
    {
      icon: <FaMobileAlt size={50} />,
      title: 'Application Software Projects',
      description: 'From desktop applications to mobile apps, we build software that solves real-world problems. Our cross-platform solutions ensure your app reaches users on any device.',
      technologies: [
        { name: 'React Native', icon: <FaReact /> },
        { name: 'Flutter', icon: <SiFlutter /> },
        { name: 'Android', icon: <FaAndroid /> },
        { name: 'iOS', icon: <FaApple /> },
      ],
      features: [
        'Native & Cross-Platform Apps',
        'Desktop Applications',
        'Cloud Integration',
        'Real-time Sync',
        'Offline Functionality',
        'Push Notifications',
      ],
    },
    {
      icon: <FaBrain size={50} />,
      title: 'AI & Machine Learning Solutions',
      description: 'Harness the power of artificial intelligence to automate processes, gain insights, and create intelligent systems. From chatbots to predictive analytics, we make AI work for you.',
      technologies: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'TensorFlow', icon: <SiTensorflow /> },
        { name: 'AI Chatbots', icon: <FaRobot /> },
      ],
      features: [
        'AI Chatbots',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Recommendation Systems',
        'Custom ML Models',
      ],
    },
    {
      icon: <FaMicrochip size={50} />,
      title: 'IoT & Real-World Hardware Projects',
      description: 'We bridge the digital and physical worlds with IoT solutions. From smart home systems to industrial automation, our Arduino-based projects bring innovation to life.',
      technologies: [
        { name: 'Arduino', icon: <SiArduino /> },
        { name: 'Raspberry Pi', icon: <FaMicrochip /> },
        { name: 'IoT Platforms', icon: <FaServer /> },
      ],
      features: [
        'Smart Home Automation',
        'Industrial IoT',
        'Sensor Networks',
        'Remote Monitoring',
        'Data Logging Systems',
        'Custom Hardware Solutions',
      ],
    },
    {
      icon: <FaLandmark size={50} />,
      title: 'Large-Scale Government Projects',
      description: 'We deliver robust, scalable solutions for government and public sector organizations. Our expertise in handling large-scale projects ensures reliability and security.',
      technologies: [
        { name: 'Enterprise Solutions', icon: <FaServer /> },
        { name: 'Cloud Infrastructure', icon: <FaCode /> },
        { name: 'Security', icon: <FaLandmark /> },
      ],
      features: [
        'Railway Management Systems',
        'Infrastructure Solutions',
        'Public Service Platforms',
        'Data Management',
        'Security & Compliance',
        'Scalable Architecture',
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg py-20 border-b border-dark-tertiary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 data-reveal className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-accent-cyan">Services</span>
          </h1>
          <p data-reveal className="text-xl text-text-secondary max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and solve complex challenges
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-16 items-center`}
              >
                {/* Service Icon & Title */}
                <div className="lg:w-1/2">
                  <div className="glass-panel p-10 rounded-3xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent-cyan/10">
                    <div className="text-accent-cyan mb-8 p-4 bg-accent-cyan/10 rounded-2xl inline-block">{service.icon}</div>
                    <h2 className="text-4xl font-bold text-text-primary mb-6">{service.title}</h2>
                    <p className="text-text-secondary text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-8">
                      <h3 className="text-text-primary font-semibold mb-4 tracking-wide uppercase text-sm opacity-80">Technologies We Use</h3>
                      <div className="flex flex-wrap gap-3">
                        {service.technologies.map((tech, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2 bg-dark-bg/50 px-4 py-2 rounded-lg border border-dark-tertiary/50 hover:border-accent-cyan/50 transition-colors"
                          >
                            <span className="text-accent-cyan">{tech.icon}</span>
                            <span className="text-text-primary text-sm">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <div className="lg:w-1/2">
                  <div className="pl-4 border-l-2 border-accent-cyan/30">
                    <h3 className="text-3xl font-bold text-text-primary mb-8">What We Offer</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-4 bg-dark-secondary/30 p-5 rounded-xl border border-dark-tertiary/30 hover:border-accent-cyan/50 hover:bg-dark-secondary/50 transition-all duration-300 group"
                      >
                        <div className="w-2 h-2 bg-accent-cyan rounded-full group-hover:scale-150 transition-transform"></div>
                        <span className="text-text-secondary group-hover:text-text-primary transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 border-y border-dark-tertiary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 data-reveal className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p data-reveal className="text-xl text-text-secondary mb-8">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent-cyan text-dark-bg rounded-lg font-semibold hover:bg-accent-cyan/90 transition-all duration-300 transform hover:scale-105 btn-shine hover-glow w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-accent-primary/40 active:scale-95"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
