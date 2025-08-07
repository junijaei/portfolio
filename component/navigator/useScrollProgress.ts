'use client';

import { useEffect, useState } from 'react';

export default function useScrollProgress() {
  const [progress, setProgress] = useState(0); // 0 ~ 1

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = docHeight === 0 ? 0 : scrollTop / docHeight;

      setProgress(Math.min(Math.max(scrollFraction, 0), 1));
    };

    updateScrollProgress(); // 초기 렌더 시

    window.addEventListener('scroll', updateScrollProgress);
    window.addEventListener('resize', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, []);

  return progress;
}
