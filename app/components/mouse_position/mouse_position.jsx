import React, { useEffect, useState } from 'react';
const MouseFollower = () => {
    const getPosition = (event) => {
        const { clientX, clientY } = event;
        return { x: clientX, y: clientY };
      };

      const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const position = getPosition(event);
        setMousePosition(position);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: mousePosition.y - 25,
        left: mousePosition.x - 25,
        width: 50,
        height: 50,
        borderRadius: '50%',
        backgroundColor: 'var(--bg-icons-light)',
        zIndex: 0
      }}
    ></div>
  );
};

export default MouseFollower;
