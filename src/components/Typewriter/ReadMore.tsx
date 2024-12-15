import React, { useState } from 'react';

interface ReadMoreProps {
  children: string;
  maxCharacterCount?: number;
}

const ReadMore: React.FC<ReadMoreProps> = ({ children, maxCharacterCount = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const displayText = isExpanded ? children : children.slice(0, maxCharacterCount);

  return (
    <div className="text-gray-700">
      <p className="inline">
        {displayText}
        {children.length > maxCharacterCount && (
          <span>
            {isExpanded ? '...' : ''} 
            <button 
              onClick={toggleReadMore} 
              className="text-blue-500 ml-2"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          </span>
        )}
      </p>
    </div>
  );
};

export default ReadMore;
