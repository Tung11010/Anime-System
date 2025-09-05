// src/component/Scroll/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Khi pathname thay đổi (chuyển route), scroll lên top
   window.scrollTo({
    top: 0,
    behavior: 'instant', // cuộn mượt mà
    });
  }, [pathname]);

  return null; // Component này không render gì cả
};

export default ScrollToTop;
