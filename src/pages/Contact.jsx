import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Web Development',
    'App Development',
    'AI & ML Solutions',
    'AI Chatbots',
    'IoT & Hardware',
    'Government Projects',
    'Other',
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // Form is valid - In production, send to backend
      console.log('Form submitted:', formData);
      setSubmitted(true);
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        service: '',
        message: '',
      });
      // Reset submitted message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen pt-20 route-fade">
      {/* Hero Section */}
      <section className="hero-animated bg-gradient-to-br from-primary via-secondary to-primary py-20 border-b border-accent-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 data-reveal className="text-5xl md:text-6xl font-bold mb-6">
            <span className="title-backdrop">Get in <span className="text-accent-primary">Touch</span></span>
          </h1>
          <p data-reveal className="text-xl text-text-secondary max-w-3xl mx-auto">
            Let's build something together. Reach out to discuss your project or ask any questions.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative section-ambient section-divider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="glass-panel p-10 rounded-3xl">
              <h2 className="text-3xl font-bold text-text-primary mb-8">Send Us a Message</h2>

              {submitted && (
                <div className="mb-6 p-4 bg-accent-primary/10 border border-accent-primary rounded-lg">
                  <p className="text-accent-primary font-semibold">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-text-secondary text-sm font-semibold mb-2 uppercase tracking-wide">
                    Full Name <span className="text-accent-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-secondary/50 border ${errors.fullName ? 'border-red-500' : 'border-accent-primary/20'
                      } rounded-xl text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all duration-300`}
                    placeholder="Rohit Sharma"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-red-500 text-sm">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-text-secondary text-sm font-semibold mb-2 uppercase tracking-wide">
                    Email Address <span className="text-accent-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-secondary/50 border ${errors.email ? 'border-red-500' : 'border-accent-primary/20'
                      } rounded-xl text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all duration-300`}
                    placeholder="rohit.sharma@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                {/* Service of Interest */}
                <div>
                  <label htmlFor="service" className="block text-text-secondary text-sm font-semibold mb-2 uppercase tracking-wide">
                    Service of Interest <span className="text-accent-primary">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-secondary/50 border ${errors.service ? 'border-red-500' : 'border-accent-primary/20'
                        } rounded-xl text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all duration-300 appearance-none`}
                    >
                      <option value="" className="bg-secondary">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-secondary">
                          {service}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-secondary">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                  </div>
                  {errors.service && (
                    <p className="mt-1 text-red-500 text-sm">{errors.service}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-text-secondary text-sm font-semibold mb-2 uppercase tracking-wide">
                    Your Message <span className="text-accent-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`w-full px-4 py-3 bg-secondary/50 border ${errors.message ? 'border-red-500' : 'border-accent-primary/20'
                      } rounded-xl text-text-primary focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary transition-all duration-300 resize-none`}
                    placeholder="Tell us about your project or idea..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent-primary to-accent-primary/90 text-white py-5 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-accent-primary/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3 border border-accent-primary/20 btn-shine hover-glow focus:outline-none focus:ring-2 focus:ring-accent-primary/40 active:translate-y-0"
                >
                  <span>Send Message</span>
                  <FaPaperPlane />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-text-primary mb-6">Contact Information</h2>
                <p className="text-text-secondary mb-8">
                  Have questions? We're here to help. Reach out through any of these channels.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Email */}
                <div className="glass-card p-6 rounded-xl border border-accent-primary/20 hover:border-accent-primary transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <FaEnvelope className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-text-primary font-semibold mb-2">Email Us</h3>
                      <a
                        href="mailto:contact@devshastratech.com"
                        className="text-accent-primary hover:text-accent-primary/80 transition-colors duration-300"
                      >
                        contact@devshastratech.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="glass-card p-6 rounded-xl border border-accent-primary/20 hover:border-accent-primary transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <FaPhone className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-text-primary font-semibold mb-2">Call Us</h3>
                      <a
                        href="tel:+91XXXXXXXXXX"
                        className="text-accent-primary hover:text-accent-primary/80 transition-colors duration-300"
                      >
                        +91 XXXXX XXXXX
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="glass-card p-6 rounded-xl border border-accent-primary/20 hover:border-accent-primary transition-all duration-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-primary to-accent-secondary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <FaMapMarkerAlt className="text-white" size={20} />
                    </div>
                    <div>
                      <h3 className="text-text-primary font-semibold mb-2">Visit Us</h3>
                      <p className="text-text-secondary">
                        Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 p-6 rounded-xl border border-accent-primary/20">
                <h3 className="text-text-primary font-semibold mb-4">Office Hours</h3>
                <div className="space-y-2 text-text-secondary">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
