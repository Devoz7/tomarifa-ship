import React, { useEffect } from 'react';
import { LoginSuccessToast } from './LoginSuccessToast';

const LoginSuccessModal = ({ isOpen, userName, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Empêcher le scroll du body
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Overlay avec blur */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm cursor-pointer"
        onClick={handleOverlayClick}
      ></div>
      
      {/* Modal content */}
      <div className="relative z-[10000] animate-in fade-in zoom-in duration-300">
        <LoginSuccessToast userName={userName} onClose={onClose} />
      </div>
    </div>
  );
};

export default LoginSuccessModal;
