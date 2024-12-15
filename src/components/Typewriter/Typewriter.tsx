import React from 'react';
import { useTypewriter } from './useTypewriter';
import { useCursor } from './useCursor';
import './styles.css';

type TypewriterProps = {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
};

const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  speed = 100,
  onComplete,
  className = ''
}) => {
  const { displayedText, isTyping } = useTypewriter({
    text,
    speed,
    onComplete
  });
  
  const showCursor = useCursor(isTyping, text, displayedText);

  return (
    <div 
      className={`relative inline-block ${className}`}
      role="status"
      aria-label={`Typing animation: ${text}`}
      aria-live="polite"
    >
      <span className="whitespace-pre-wrap">{displayedText}</span>
      {showCursor && <span className="cursor" aria-hidden="true" />}
      {isTyping && <span className="sr-only">Typing in progress</span>}
    </div>
  );
};

export default Typewriter;