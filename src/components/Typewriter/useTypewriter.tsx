import { useState, useEffect } from 'react';

type UseTypewriterProps = {
  text: string;
  speed: number;
  onComplete?: () => void;
};

export const useTypewriter = ({ text, speed, onComplete }: UseTypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsTyping(true);
    let index = 0;
    let mounted = true;

    const typeNextCharacter = () => {
      if (!mounted) return;

      setDisplayedText((prev) => {
        if (index < text.length) {
          const newText = text.slice(0, index + 1);
          index++;
          return newText;
        }
        setIsTyping(false);
        onComplete?.();
        return prev;
      });
    };

    // Add random variation to typing speed for more natural effect
    const getRandomSpeed = () => speed + Math.random() * (speed * 0.5);
    
    const type = () => {
      if (index < text.length && mounted) {
        typeNextCharacter();
        setTimeout(type, getRandomSpeed());
      }
    };

    type();

    return () => {
      mounted = false;
    };
  }, [text, speed, onComplete]);

  return { displayedText, isTyping };
};