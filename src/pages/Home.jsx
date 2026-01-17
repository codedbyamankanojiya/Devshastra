import React, { useEffect, useState } from 'react';
import { FaCode, FaMobileAlt, FaBrain, FaMicrochip, FaLandmark, FaRocket, FaUsers, FaAward } from 'react-icons/fa';
import PrimaryButton from '../components/PrimaryButton';
import AnimatedCounter from '../components/AnimatedCounter';

const Home = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <FaCode size={40} />,
      title: 'Web Development',
      description: 'Custom, responsive websites built with cutting-edge technologies for optimal performance.',
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
    },
    {
      icon: <FaBrain size={40} />,
      title: 'AI & ML Solutions',
      description: 'Intelligent systems, chatbots, and machine learning models tailored to your needs.',
    },
    {
      icon: <FaMicrochip size={40} />,
      title: 'IoT Projects',
      description: 'Arduino-based hardware solutions and real-world IoT implementations.',
    },
    {
      icon: <FaLandmark size={40} />,
      title: 'Government Solutions',
      description: 'Large-scale projects for railways, infrastructure, and public services.',
    },
  ];

  const whyChooseUs = [
    {
      icon: <FaRocket size={30} />,
      title: 'Innovation First',
      description: 'We leverage the latest technologies to deliver future-proof solutions.',
    },
    {
      icon: <FaUsers size={30} />,
      title: 'Expert Team',
      description: 'A diverse team of specialists in AI, web, mobile, and hardware development.',
    },
    {
      icon: <FaAward size={30} />,
      title: 'Real-World Impact',
      description: 'Our solutions solve real problems and create measurable value.',
    },
  ];

  return (
    <div data-reveal className="min-h-screen route-fade">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-secondary to-dark-bg"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan rounded-full filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple rounded-full filter blur-3xl animate-pulse delay-1000"></div>
          </div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div data-reveal className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent-primary/10 border border-accent-primary/20 backdrop-blur-md animate-fade-in">
            <span className="text-accent-primary font-semibold text-sm tracking-wide uppercase">Engineering the Future</span>
          </div>

          <h1 data-reveal className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 animate-fade-in tracking-tight leading-none text-text-primary">
            We Build <br className="hidden md:block" />
            <span className="text-gradient-animate relative inline-block title-backdrop">
              What's Next
              {/* Decorative underline */}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent-secondary opacity-50" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00024 7.00003C51.6427 1.83336 151.776 -3.3333 198.001 3.50003" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
            </span>
          </h1>

          <p data-reveal className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto animate-fade-in-delay font-normal leading-relaxed">
            DevShastra Technologies delivers enterprise-grade software solutions. From scalable web architectures to intelligent government systems, we turn complexity into clarity.
          </p>

          <div data-reveal className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-delay-2 items-center">
            <PrimaryButton to="/projects">View Case Studies</PrimaryButton>
            <PrimaryButton to="/contact" variant="outline">Partner With Us</PrimaryButton>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent-cyan rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent-cyan rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" data-animate className="py-24 relative section-ambient section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 data-reveal className="text-4xl md:text-6xl font-bold mb-6">
              <span className="title-backdrop">Our <span className="text-accent-cyan">Core Services</span></span>
            </h2>
            <p data-reveal className="text-text-secondary text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger">
            {services.map((service, index) => (
              <div
                key={index}
                className={`glass-card p-8 rounded-2xl transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-accent-cyan/20 hover-tilt card-glow spotlight spotlight-border group ${isVisible['services'] ? 'animate-slide-up' : 'opacity-0'
                  }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-accent-cyan mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-4">{service.title}</h3>
                <p className="text-text-secondary leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" data-animate className="py-20 relative section-ambient section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 data-reveal className="text-4xl md:text-5xl font-bold mb-4">
              <span className="title-backdrop">Why <span className="text-accent-cyan">Choose Us?</span></span>
            </h2>
            <p data-reveal className="text-text-secondary text-lg max-w-2xl mx-auto">
              We don't just build software—we create solutions that make a difference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className={`text-center p-8 glass-card rounded-2xl border border-dark-tertiary/30 transition-all duration-500 hover-tilt card-glow spotlight spotlight-border ${isVisible['why-us'] ? 'animate-fade-in' : 'opacity-0'
                  }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-full mb-6">
                  <div className="text-dark-bg">{item.icon}</div>
                </div>
                <h3 className="text-2xl font-semibold text-text-primary mb-3">{item.title}</h3>
                <p className="text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5 section-ambient section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-accent-primary mb-2">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <p className="text-text-secondary text-sm md:text-base font-medium">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-accent-primary mb-2">
                <AnimatedCounter end={30} suffix="+" />
              </div>
              <p className="text-text-secondary text-sm md:text-base font-medium">Happy Clients</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-accent-primary mb-2">
                <AnimatedCounter end={7} suffix="" />
              </div>
              <p className="text-text-secondary text-sm md:text-base font-medium">Team Members</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-accent-primary mb-2">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <p className="text-text-secondary text-sm md:text-base font-medium">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section data-reveal className="py-16 md:py-20 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 border-y border-accent-primary/20 section-ambient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="title-backdrop">Have a Project in Mind?</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-6 md:mb-8 max-w-2xl mx-auto">
            Let's turn your ideas into reality. Get in touch with our team today.
          </p>
          <PrimaryButton to="/contact" variant="primary">
            Contact Us
          </PrimaryButton>
        </div>
      </section>
    </div>
  );
};

export default Home;
