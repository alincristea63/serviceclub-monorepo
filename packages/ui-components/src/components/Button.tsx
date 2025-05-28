import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  className = '',
}) => {
  const baseClasses = 'font-body-medium rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:-translate-y-0.5';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-brand-primary to-red-75 text-white hover:shadow-brand-lg focus:ring-red-100',
    secondary: 'bg-gradient-to-r from-navy-100 to-navy-75 text-white hover:shadow-navy-lg focus:ring-navy-100',
    outline: 'border-2 border-navy-100 text-navy-100 hover:bg-navy-25 focus:ring-navy-100',
    success: 'bg-gradient-to-r from-green-100 to-green-75 text-white hover:shadow-lg focus:ring-green-100',
    warning: 'bg-gradient-to-r from-neon-100 to-neon-75 text-navy-100 hover:shadow-lg focus:ring-neon-100',
    error: 'bg-gradient-to-r from-red-100 to-red-75 text-white hover:shadow-brand-lg focus:ring-red-100',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed transform-none hover:translate-y-0' : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`.trim();

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}; 