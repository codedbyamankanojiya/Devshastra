import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Contact from './pages/Contact';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App min-h-screen bg-primary text-text-primary relative overflow-hidden transition-colors duration-300">
          {/* Animated Background - Managed via CSS classes in index.css */}
          <div className="nebula-bg">
            <div className="nebula-orb orb-1"></div>
            <div className="nebula-orb orb-2"></div>
            <div className="nebula-orb orb-3"></div>
          </div>

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
      </Router>
    </ThemeProvider>
  );
}

export default App;
