import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Our Team', path: '/team' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const services = [
    'Web Development',
    'App Development',
    'AI & ML Solutions',
    'IoT Projects',
    'Government Solutions',
  ];

  return (
    <footer className="relative bg-primary pt-20 pb-10 border-t border-accent-primary/10">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-accent-purple/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-accent-cyan/5 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-lg flex items-center justify-center shadow-lg shadow-accent-cyan/10 hover-tilt">
                <span className="text-white font-bold text-xl">DS</span>
              </div>
              <span className="text-xl font-bold text-text-primary tracking-tight">DevShastra Technologies</span>
            </div>
            <p className="text-text-secondary text-base leading-relaxed">
              Engineering the Future. We deliver cutting-edge technology solutions
              that empower businesses and governments to scale new heights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-text-primary font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-accent-cyan transition-colors duration-300 text-base link-underline-anim"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-text-primary font-bold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service} className="text-text-secondary text-base hover:text-accent-cyan transition-colors duration-300 cursor-default">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-text-primary font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-4 text-text-secondary">
                <FaEnvelope className="mt-1 text-accent-cyan flex-shrink-0" />
                <span>contact@devshastratech.com</span>
              </li>
              <li className="flex items-start space-x-4 text-text-secondary">
                <FaMapMarkerAlt className="mt-1 text-accent-cyan flex-shrink-0" />
                <span>Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-accent-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-secondary text-sm">
              © {currentYear} DevShastra Technologies. All rights reserved.
            </p>
            <div className="flex space-x-8 text-sm">
              <button className="text-text-secondary hover:text-accent-cyan transition-colors duration-300 link-underline-anim">
                Privacy Policy
              </button>
              <button className="text-text-secondary hover:text-accent-cyan transition-colors duration-300 link-underline-anim">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
