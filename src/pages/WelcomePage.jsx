import React, { useState, useEffect } from 'react';
import { ChefHat } from 'lucide-react';
import Title from '../components/Title';
import Button from '../components/Button';
import '../pages/WelcomePage.css';

const WelcomePage = ({ onNavigate }) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          onNavigate('home');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onNavigate]);

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <div className="welcome-header">
          <ChefHat size={120} className="welcome-icon" />
          <Title className="welcome-title">
            Bienvenido al
          </Title>
          <h2 className="welcome-subtitle">
            Administrador de Recetas
          </h2>
          <p className="welcome-description">
            La herramienta perfecta para organizar y gestionar todas las recetas del Chef Ricardo
          </p>
        </div>

        <div className="welcome-actions">
          <p className="countdown-text">
            Redirigiendo automáticamente en {countdown} segundos...
          </p>
          <Button
            onClick={() => onNavigate('home')}
            variant="secondary"
            className="welcome-button"
          >
            Ir al Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;