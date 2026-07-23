"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  maxTilt?: number;
}

export default function TiltCard({
  children,
  className = "",
  glowColor = "#d4b896",
  maxTilt = 12,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const [isTouchDevice] = useState(() => {
    if (typeof window === "undefined") return false;
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || isTouchDevice) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setPosition({ x, y });
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsHovering(true);
  };
  const handleMouseLeave = () => {
    setIsHovering(false);
    setPosition({ x: 0, y: 0 });
  };

  // Use the passed maxTilt, but cap at 4 for touch devices
  const tiltAngle = isTouchDevice ? Math.min(maxTilt * 0.2, 3) : maxTilt;

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: isHovering ? -position.y * tiltAngle : 0,
        rotateY: isHovering ? position.x * tiltAngle : 0,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {isHovering && !isTouchDevice && (
        <motion.div
          className="absolute -inset-4 rounded-3xl opacity-50 blur-2xl pointer-events-none"
          animate={{
            background: `radial-gradient(circle at ${position.x * 100 + 50}% ${position.y * 100 + 50}%, ${glowColor}33, transparent 70%)`,
          }}
          transition={{ duration: 0.1 }}
        />
      )}
      {children}
    </motion.div>
  );
}