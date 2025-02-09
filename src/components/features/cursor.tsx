"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

interface ClientCursorProps {
  children: React.ReactNode;
}

export default function ClientCursor({ children }: ClientCursorProps) {
  const [isHovering, setIsHovering] = useState(false);

  // Use springs for smoother mouse tracking
  const mouseX = useSpring(0, {
    stiffness: 500,
    damping: 30,
    mass: 0.2,
  });

  const mouseY = useSpring(0, {
    stiffness: 500,
    damping: 30,
    mass: 0.2,
  });

  useEffect(() => {
    // Use requestAnimationFrame for smoother updates
    let frame: number;

    const handleMouseMove = (e: MouseEvent) => {
      // Cancel any pending frame
      if (frame) {
        cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(() => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.getAttribute("role") === "button" ||
        target.tagName.toLowerCase() === "img" ||
        target.id === "test"
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.getAttribute("role") === "button" ||
        target.tagName.toLowerCase() === "img" ||
        target.id === "test"
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed pointer-events-none z-[9999] will-change-transform"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 0.1 : 0.5,
        }}
        transition={{
          scale: {
            type: "spring",
            stiffness: 500,
            damping: 30,
            mass: 0.2,
          },
        }}
      >
        <div className="w-8 h-8 bg-[#f69d78] rounded-full" />
      </motion.div>

      <div className="w-full cursor-none select-none">{children}</div>
    </>
  );
}
