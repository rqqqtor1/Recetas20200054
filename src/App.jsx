import React, { useState } from 'react';
import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';
import '.././src/App.css';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('welcome');

  const handleNavigate = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="App">
      {currentScreen === 'welcome' && (
        <WelcomePage onNavigate={handleNavigate} />
      )}
      {currentScreen === 'home' && (
        <HomePage onNavigate={handleNavigate} />
      )}
    </div>
  );
};

export default App;