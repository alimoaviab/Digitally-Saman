'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 350, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    
    // Disable custom cursor on touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, select, textarea, .interactive'
      );
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleLinkHoverStart);
        el.addEventListener('mouseleave', handleLinkHoverEnd);
      });
    };

    // Attach listener initially and watch for page structural changes
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
      
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], input, select, textarea, .interactive'
      );
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleLinkHoverStart);
        el.removeEventListener('mouseleave', handleLinkHoverEnd);
      });
    };
  }, [cursorX, cursorY, visible]);

  if (!mounted || !visible) return null;

  return (
    <>
      {/* Glowing Outer Ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ff758f]/50 bg-[#ff758f]/5 backdrop-blur-[1px]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: clicked ? 0.75 : linkHovered ? 1.5 : 1,
          borderColor: linkHovered ? '#ff007f' : 'rgba(255, 117, 143, 0.4)',
          backgroundColor: linkHovered ? 'rgba(255, 0, 127, 0.1)' : 'rgba(255, 117, 143, 0.04)',
        }}
      />
      {/* Sharp Inner Dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff007f] shadow-[0_0_12px_#ff007f]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: clicked ? 1.4 : linkHovered ? 0.5 : 1,
        }}
      />
    </>
  );
}
