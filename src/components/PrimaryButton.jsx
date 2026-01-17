import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = ({ children, to, onClick, className = '', variant = 'primary' }) => {
  const baseStyles = "px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-block text-center w-full sm:w-auto btn-shine hover-glow btn-gradient-border spotlight spotlight-border pressable focus-ring focus:outline-none focus:ring-2 focus:ring-accent-primary/40 active:scale-95";
  
  const variants = {
    primary: "bg-accent-cyan text-dark-bg hover:bg-accent-cyan/90 hover:shadow-lg hover:shadow-accent-cyan/50",
    secondary: "bg-accent-purple text-white hover:bg-accent-purple/90 hover:shadow-lg hover:shadow-accent-purple/50",
    outline: "border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-dark-bg",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default PrimaryButton;
