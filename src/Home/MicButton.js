import React, { useState, useEffect } from 'react';
import { FaMicrophone } from 'react-icons/fa';

const BlinkingVoiceIcon = () => {
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 500); // Toggle blinking every 500ms

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div
      style={{
        fontSize: '40px',
        animation: isBlinking ? 'blink 1s infinite' : 'none',
      }}
    >
      <FaMicrophone />
    </div>
  );
};

export default BlinkingVoiceIcon;
