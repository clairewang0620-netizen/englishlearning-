
import React from 'react';
import { speak } from '../utils/speech';

interface TTSButtonProps {
  text: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const TTSButton: React.FC<TTSButtonProps> = ({ text, className = "", size = "md" }) => {
  const iconSize = size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-7 h-7';
  
  return (
    <button 
      onClick={(e) => {
        e.stopPropagation();
        speak(text);
      }}
      className={`p-2 rounded-full bg-green-50 text-green-600 hover:bg-green-100 active:scale-95 transition-all flex items-center justify-center border border-green-100 ${className}`}
      title="Pronounce"
    >
      <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    </button>
  );
};

export default TTSButton;
