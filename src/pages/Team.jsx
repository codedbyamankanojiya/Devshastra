import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import YashImg from '../assets/Team/Yash.png';
import AmanImg from '../assets/Team/Aman.png';
import AjayImg from '../assets/Team/Ajay.png';
import AadityaImg from '../assets/Team/Aaditya.jpg';
import VaishnavImg from '../assets/Team/Vaishnav.png';
import AryanImg from '../assets/Team/Aryan.jpg';
import KaranImg from '../assets/Team/Karan.png';

const Team = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter categories
  const filters = ['All', 'UI/UX & Design', 'Web Dev', 'AI & ML', 'IoT & Hardware', 'Cyber Security', 'App Dev', 'Marketing'];

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: 'Yash Kadam',
      title: 'Founder',
      image: YashImg,
      specialties: ['UI/UX & Design', 'Graphics Design'],
      linkedin: 'https://www.linkedin.com/in/yash-kadam-740992268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://github.com/santa2902',
      bio: 'Pursuing BCA. Specializes in graphics design and UI/UX.',
    },
    {
      id: 2,
      name: 'Aman Kanojiya',
      title: 'Co-founder & Team Lead',
      image: AmanImg,
      specialties: ['Web Dev', 'UI/UX & Design', 'AI & ML', 'IoT & Hardware', 'Cyber Security', 'App Dev'],
      linkedin: 'https://www.linkedin.com/in/aman-kanojiya-7386822b0',
      github: 'https://github.com/codedbyamankanojiya',
      bio: 'Leading technical direction. Expert in Web & App Dev, UI/UX, AI/ML/IoT integrations, and Cyber Security.',
    },
    {
      id: 3,
      name: 'Ajay Patil',
      title: 'Co-founder & Treasurer',
      image: AjayImg,
      specialties: ['UI/UX & Design', 'Graphics Design'],
      linkedin: 'https://www.linkedin.com/in/ajay-patil-a4986b326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: '#',
      bio: 'Pursuing BCA. Focused on graphics design and UI/UX.',
    },
    {
      id: 4,
      name: 'Aaditya Dilip Kadam',
      title: 'Electronics Engineer',
      image: AadityaImg,
      specialties: ['IoT & Hardware', 'Circuit Building'],
      linkedin: '#',
      github: '#',
      bio: 'Pursuing BTech in Electronics Engineering. Specialized in circuit building and microcontrollers like ESP and Arduino.',
    },
    {
      id: 5,
      name: 'Vaishnav Kadav',
      title: 'Full Stack Developer',
      image: VaishnavImg,
      specialties: ['Web Dev', 'UI/UX & Design', 'Marketing'],
      linkedin: '#',
      github: 'https://github.com/dreamingVaishu',
      bio: 'Pursuing BCA. Passionate about marketing and eCommerce. Blends code, design, and strategy.',
    },
    {
      id: 6,
      name: 'Aryan Bhosale',
      title: 'AI/ML Developer',
      image: AryanImg,
      specialties: ['AI & ML', 'Agentic AI', 'Gen AI'],
      linkedin: '#',
      github: 'https://github.com/aryanbhosale285-web',
      bio: 'Pursuing BSc CS. AI/ML learner passionate about building new AI tools for quick work.',
    },
    {
      id: 7,
      name: 'Karan Angane',
      title: 'Web & AIML Developer',
      image: KaranImg,
      specialties: ['Web Dev', 'AI & ML', 'IoT & Hardware'],
      linkedin: '#',
      github: 'https://github.com/Timepass2117',
      bio: 'Pursuing BE in CSE AIML. Worked on Arduino mini-projects and currently working on website making.',
    },
  ];

  // Filter logic: Show members whose specialties include the active filter
  // Updated logic to handle overlapping categories better if needed, but existing includes check is fine if string matches.
  // Note: Specialties in data are Arrays. Filter is a String.
  // The existing logic: teamMembers.filter(member => member.specialties.includes(activeFilter))
  // This works fine.
  const filteredMembers = activeFilter === 'All'
    ? teamMembers
    : teamMembers.filter(member => member.specialties.some(s => s.includes(activeFilter) || (activeFilter === 'Web Dev' && s === 'Web Dev'))); // Adjusted slightly to be safe but standard includes is likely fine.

  // Actually, standard includes is exact match.
  // My filters: 'UI/UX & Design'. Data: 'UI/UX & Design'. Match.
  // My filters: 'IoT & Hardware'. Data: 'IoT & Hardware'. Match.
  // So I can keep the logic simple.

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary py-16 md:py-20 border-b border-accent-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Meet Our <span className="text-gradient">Team</span>
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            The brilliant minds behind the magic. Our diverse team of experts brings innovation to life.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="sticky top-20 z-40 glass-panel border-b border-accent-primary/20 py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 md:px-6 py-2 rounded-full font-semibold transition-all duration-300 text-sm md:text-base whitespace-nowrap ${activeFilter === filter
                    ? 'bg-accent-primary text-white shadow-lg shadow-accent-primary/30'
                    : 'bg-secondary text-text-secondary border border-accent-primary/20 hover:border-accent-primary hover:text-accent-primary'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredMembers.map((member, index) => (
              <div
                key={member.id}
                className="group bg-dark-secondary rounded-xl overflow-hidden border border-dark-tertiary hover:border-accent-cyan transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-accent-cyan/20"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Member Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent opacity-80"></div>

                  {/* Social Links - Appear on Hover */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-accent-cyan rounded-full flex items-center justify-center text-dark-bg hover:bg-accent-cyan/90 transition-colors duration-300"
                    >
                      <FaLinkedin size={18} />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-accent-cyan rounded-full flex items-center justify-center text-dark-bg hover:bg-accent-cyan/90 transition-colors duration-300"
                    >
                      <FaGithub size={18} />
                    </a>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-text-primary mb-1 group-hover:text-accent-cyan transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-accent-cyan text-sm font-semibold mb-3">{member.title}</p>
                  <p className="text-text-secondary text-sm mb-4">{member.bio}</p>

                  {/* Specialties Tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-dark-bg px-3 py-1 rounded-full text-xs text-accent-cyan border border-dark-tertiary"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredMembers.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-secondary text-xl">No team members found for this specialty.</p>
            </div>
          )}
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 border-y border-dark-tertiary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            We're always looking for talented individuals who are passionate about technology and innovation.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-accent-cyan text-dark-bg rounded-lg font-semibold hover:bg-accent-cyan/90 transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Team;
