import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
      const [theme, setTheme] = useState('light');

      useEffect(() => {
            // Check local storage or system preference
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                  setTheme(savedTheme);
            } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  setTheme('dark');
            }
      }, []);

      useEffect(() => {
            const root = window.document.documentElement;
            if (theme === 'dark') {
                  root.classList.add('dark');
            } else {
                  root.classList.remove('dark');
            }
            localStorage.setItem('theme', theme);
      }, [theme]);

      const toggleTheme = () => {
            setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
      };

      return (
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                  {children}
            </ThemeContext.Provider>
      );
};

export const useTheme = () => useContext(ThemeContext);
