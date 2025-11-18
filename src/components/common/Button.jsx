import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  className = '', 
  icon, 
  iconPosition = 'left',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl rounded-2xl border-0 cursor-pointer relative overflow-hidden";
  
  const variants = {
    primary: "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white",
    secondary: "bg-white/15 backdrop-blur-md text-white border-2 border-white/40 hover:border-white hover:bg-white/25",
    outline: "bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white",
    glass: "bg-white/20 backdrop-blur-xl text-white border border-white/30 hover:bg-white/30"
  };

  const sizes = {
    small: "px-6 py-3 text-sm",
    medium: "px-8 py-4 text-base",
    large: "px-10 py-5 text-lg"
  };

  const variantClass = variants[variant];
  const sizeClass = sizes[size];

  return (
    <button 
      className={`${baseStyles} ${variantClass} ${sizeClass} ${className} group`}
      {...props}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative flex items-center justify-center">
        {icon && iconPosition === 'left' && (
          <span className="mr-3 group-hover:animate-bounce">
            {icon}
          </span>
        )}
        
        {children}
        
        {icon && iconPosition === 'right' && (
          <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">
            {icon}
          </span>
        )}
      </div>
    </button>
  );
};

export default Button;