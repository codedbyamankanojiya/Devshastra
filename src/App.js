import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Contact from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import './styles/tech.css';

function AppEffects() {
  const location = useLocation();
  const [revealKey, setRevealKey] = useState(0);

  useEffect(() => {
    const onRefresh = () => setRevealKey((k) => k + 1);
    window.addEventListener('reveal:refresh', onRefresh);
    return () => window.removeEventListener('reveal:refresh', onRefresh);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [location.pathname, revealKey]);

  useEffect(() => {
    const nebula = document.querySelector('.nebula-bg');
    const tech = document.querySelector('.tech-bg');
    const scan = document.querySelector('.tech-scanlines');
    let raf = 0;
    const onMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (nebula) nebula.style.transform = `translate3d(${dx * 10}px, ${dy * 10}px, 0)`;
        if (tech) tech.style.transform = `translate3d(${dx * 8}px, ${dy * 8}px, 0)`;
        if (scan) scan.style.transform = `translate3d(${dx * 12}px, ${dy * 12}px, 0)`;
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const docHeight = doc.scrollHeight - doc.clientHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      bar.style.transform = `scaleX(${progress})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
}

function AppShell() {
  return (
    <div className="App min-h-screen bg-primary text-text-primary relative overflow-hidden transition-colors duration-300">
      <AppEffects />

      {/* Animated Background - Managed via CSS classes in index.css */}
      <div className="nebula-bg">
        <div className="nebula-orb orb-1"></div>
        <div className="nebula-orb orb-2"></div>
        <div className="nebula-orb orb-3"></div>
      </div>
      <div className="tech-bg" aria-hidden="true"></div>
      <div className="tech-scanlines" aria-hidden="true"></div>
      <div id="scroll-progress" className="scroll-progress" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true"></div>

      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppShell />
      </Router>
    </ThemeProvider>
  );
}

export default App;
