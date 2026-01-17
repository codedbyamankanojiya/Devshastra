import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
      const [count, setCount] = useState(0);
      const [isVisible, setIsVisible] = useState(false);
      const counterRef = useRef(null);

      useEffect(() => {
            if (isVisible) return;

            const node = counterRef.current;
            if (!node) return;

            const observer = new IntersectionObserver(
                  ([entry]) => {
                        if (entry.isIntersecting && !isVisible) {
                              setIsVisible(true);
                              observer.disconnect();
                        }
                  },
                  { threshold: 0.1 }
            );

            observer.observe(node);

            return () => {
                  observer.disconnect();
            };
      }, [isVisible]);

      useEffect(() => {
            if (!isVisible) return;

            let startTime;
            let animationFrame;

            const animate = (currentTime) => {
                  if (!startTime) startTime = currentTime;
                  const progress = Math.min((currentTime - startTime) / duration, 1);

                  setCount(Math.floor(progress * end));

                  if (progress < 1) {
                        animationFrame = requestAnimationFrame(animate);
                  }
            };

            animationFrame = requestAnimationFrame(animate);

            return () => {
                  if (animationFrame) {
                        cancelAnimationFrame(animationFrame);
                  }
            };
      }, [isVisible, end, duration]);

      return (
            <span ref={counterRef} className="font-bold">
                  {prefix}{count}{suffix}
            </span>
      );
};

export default AnimatedCounter;
