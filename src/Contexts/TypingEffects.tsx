import React, { useState, useEffect, useRef } from 'react';
import './blink.scss'
interface TypingEffectProps {
  text: string;
  speed?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const index = useRef(0);
  const deletingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isDeleting) {
        setDisplayText(prev => prev.slice(0, -1));
        index.current -= 1;
        if (index.current === 0) {
          setIsDeleting(false);
          clearInterval(typingIntervalRef.current!);
          typingIntervalRef.current = setInterval(() => {
            setDisplayText(prev => prev + text.charAt(index.current));
            index.current += 1;
            if (index.current === text.length) {
              setIsDeleting(true);
              clearInterval(typingIntervalRef.current!);
              deletingTimeoutRef.current = setTimeout(() => {}, 2000); // Pause before deleting
            }
          }, speed);
        }
      } else {
        setDisplayText(prev => prev + text.charAt(index.current));
        index.current += 1;
        if (index.current === text.length) {
          setIsDeleting(true);
          clearInterval(typingIntervalRef.current!);
          deletingTimeoutRef.current = setTimeout(() => {}, 2000); // Pause before deleting
        }
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(deletingTimeoutRef.current!);
      clearInterval(typingIntervalRef.current!);
    };
  }, [isDeleting, text, speed]);

  return (
    <h1 className="typing" style={{ borderRight: '2px solid black', paddingRight: '5px', whiteSpace: 'nowrap', overflow: 'hidden', display: 'inline-block'}}>
      {displayText}
      <span className="blink-caret"></span>
    </h1>
  );
};

export default TypingEffect;