import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
      const { theme, toggleTheme } = useTheme();

      return (
            <button
                  onClick={toggleTheme}
                  className={`relative p-2 rounded-full transition-all duration-300 focus:outline-none ${theme === 'dark'
                              ? 'bg-secondary text-accent-primary hover:bg-tertiary'
                              : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
                        }`}
                  aria-label="Toggle Theme"
            >
                  {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
      );
};

export default ThemeToggle;
