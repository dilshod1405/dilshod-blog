import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';

interface CountUpOnScrollProps {
    start: number;
    end: number | string;
    duration: number;
    onEnd: () => void;
  }

const CountUpOnScroll: React.FC<CountUpOnScrollProps> = ({end}) => {
  const [counting, setCounting] = useState(false);
  const [resetCount, setResetCount] = useState(false);
  const countRef = useRef(null);
  

  const handleScroll = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setCounting(true);
        setResetCount(true);
      } else {
        setCounting(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1, 
    });

    const currentNode = countRef.current;

    if (currentNode) {
      observer.observe(currentNode);
    }

    return () => {
      if (currentNode) {
        observer.unobserve(currentNode);
      }
    };
  }, []);

  return (
    <div ref={countRef}>
      {counting && (
        <CountUp
          start={0}
          end={Number(end)}
          duration={2}
          onEnd={() => setResetCount(true)}
          key={resetCount ? 'reset' : 'count'}
        />
      )}
    </div>
  );
};

export default CountUpOnScroll;
