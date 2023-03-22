import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import "./Scroll.css"
const ScrollToTopButton = () => {
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
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div id='go-to-top' className={ `scroll-to-top ${isVisible ? '' : 'hidden'}`}>
      <button onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
