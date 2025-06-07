import React from 'react';
import '../components/Button.css';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  type = 'button', 
  disabled = false,
  className = '',
  icon: Icon
}) => {
  const buttonClass = `btn btn-${variant} ${className} ${disabled ? 'btn-disabled' : ''}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
    >
      {Icon && <Icon size={18} className="btn-icon" />}
      {children}
    </button>
  );
};

export default Button;