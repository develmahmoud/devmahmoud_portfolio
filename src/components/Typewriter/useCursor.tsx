import { useState, useEffect } from 'react';

export const useCursor = (isTyping: boolean, text: string, displayedText: string) => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Only hide cursor when typing is complete and we're showing the full text
    if (!isTyping && text === displayedText) {
      const timeout = setTimeout(() => {
        setShowCursor(false);
      }, 2000); // Hide cursor 2 seconds after typing completes

      return () => clearTimeout(timeout);
    } else {
      setShowCursor(true);
    }
  }, [isTyping, text, displayedText]);

  return showCursor;
};