import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  href,
  target,
  rel,
  disabled = false,
  type = 'button',
  ...props 
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-3 font-light transition-all duration-300 border";
  
  const variantClasses = {
    primary: "bg-white text-black border border-white hover:bg-white/90 transition-all duration-300",
    secondary: "bg-transparent text-white border border-white hover:bg-white hover:text-black transition-all duration-300",
    ghost: "bg-transparent text-white/70 border-transparent hover:text-white hover:border-white/20"
  };

  const sizeClasses = {
    sm: "px-6 py-3 text-sm font-light tracking-wide",
    md: "px-8 py-4 text-sm font-light tracking-wide",
    lg: "px-10 py-4 text-sm font-light tracking-wide"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`;

  if (href) {
    return (
      <a 
        href={href}
        target={target} 
        rel={rel}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type}
      onClick={onClick} 
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}