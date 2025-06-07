import React from 'react';
import { ChefHat } from 'lucide-react';
import '../components/LoadingSpinner.css';

const LoadingSpinner = ({ size = 'medium', text = '' }) => {
  const sizeClass = `spinner-${size}`;

  return (
    <div className="loading-spinner">
      <ChefHat size={size === 'large' ? 64 : size === 'small' ? 32 : 48} className={`spinner-icon ${sizeClass}`} />
      {text && <p className="spinner-text">{text}</p>}
    </div>
  );
};

export default LoadingSpinner;