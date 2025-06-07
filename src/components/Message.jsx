import React, { useEffect } from 'react';
import { Check, AlertCircle, X } from 'lucide-react';
import '../components/Message.css';

const Message = ({ type, message, onClose }) => {
  const icons = {
    success: Check,
    error: AlertCircle,
    info: AlertCircle
  };

  const Icon = icons[type];

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`message message-${type}`}>
      <div className="message-content">
        <Icon size={20} className="message-icon" />
        <span className="message-text">{message}</span>
        <button onClick={onClose} className="message-close">
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default Message;