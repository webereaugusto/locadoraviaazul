import React from 'react';
import { WHATSAPP_LINK } from '../constants';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'whatsapp';
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  className = '', 
  children, 
  fullWidth = false 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-full shadow-lg transform transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent text-white bg-via-blue hover:bg-via-dark focus:ring-via-blue",
    secondary: "border-transparent text-via-blue bg-white hover:bg-gray-50 focus:ring-via-light",
    whatsapp: "border-transparent text-white bg-brand-green hover:bg-green-600 focus:ring-green-500"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <a 
      href={WHATSAPP_LINK} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;
