import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
      const { theme, toggleTheme } = useTheme();

      return (
            <button
                  onClick={toggleTheme}
                  className={`relative p-2 rounded-full transition-all duration-300 focus:outline-none border border-accent-primary/20 bg-secondary text-text-secondary hover:bg-tertiary hover:text-accent-primary`}
                  aria-label="Toggle Theme"
            >
                  {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
      );
};

export default ThemeToggle;
