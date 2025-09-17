import React, { useRef, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppFloating = () => {
  const [position, setPosition] = useState({ bottom: 40, right: 30 });
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef(null);
  const offset = useRef({ x: 0, y: 0 });

  // Mouse events for drag
  const handleMouseDown = (e) => {
    setDragging(true);
    offset.current = {
      x: e.clientX,
      y: e.clientY,
      bottom: position.bottom,
      right: position.right,
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const dx = offset.current.x - e.clientX;
    const dy = offset.current.y - e.clientY;
    setPosition({
      bottom: Math.max(0, offset.current.bottom + dy),
      right: Math.max(0, offset.current.right + dx),
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  // Touch events for mobile drag
  const handleTouchStart = (e) => {
    setDragging(true);
    const touch = e.touches[0];
    offset.current = {
      x: touch.clientX,
      y: touch.clientY,
      bottom: position.bottom,
      right: position.right,
    };
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
  };

  const handleTouchMove = (e) => {
    if (!dragging) return;
    const touch = e.touches[0];
    const dx = offset.current.x - touch.clientX;
    const dy = offset.current.y - touch.clientY;
    setPosition({
      bottom: Math.max(0, offset.current.bottom + dy),
      right: Math.max(0, offset.current.right + dx),
    });
  };

  const handleTouchEnd = () => {
    setDragging(false);
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
  };

  return (
    <a
      href="https://wa.me/254725710350"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      style={{
        position: 'fixed',
        bottom: position.bottom,
        right: position.right,
        zIndex: 9999,
        cursor: dragging ? 'grabbing' : 'grab',
        transition: dragging ? 'none' : 'box-shadow 0.2s',
        boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
        borderRadius: '50%',
        background: '#25D366',
        width: 48,
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none',
      }}
      ref={dragRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <FaWhatsapp size={28} color="#fff" />
    </a>
  );
};

export default WhatsAppFloating;

// Example in App.jsx
import WhatsAppFloating from './components/WhatsAppFloating';

function App() {
  return (
    <>
      {/* ...your routes/components... */}
      <WhatsAppFloating />
    </>
  );
}