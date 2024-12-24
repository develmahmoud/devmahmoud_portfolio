import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import classNames from 'classnames';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      className={classNames(
        'fixed bottom-4 right-4 p-4 bg-blue-500 text-white rounded-full shadow-lg transition-opacity duration-300',
        {
          'opacity-0': !isVisible,
          'opacity-100': isVisible,
        }
      )}
      onClick={scrollToTop}
      style={{ cursor: 'pointer', display: isVisible ? 'block' : 'none' }}
    >
      <FaArrowUp />
    </div>
  );
};

export default BackToTopButton;
