import { useEffect, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 900, damping: 60, mass: 0.3 });
  const dotY = useSpring(y, { stiffness: 900, damping: 60, mass: 0.3 });
  const ringX = useSpring(x, { stiffness: 220, damping: 24, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 220, damping: 24, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovered(!!t.closest("a, button, [data-hover]"));
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[130] h-3 w-3 rounded-full bg-volt"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: pressed ? 2.4 : hovered ? 0.4 : 1 }}
        transition={{ duration: 0.25 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[129] h-10 w-10 rounded-full border border-bone/50 mix-blend-difference"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: pressed ? 0.7 : hovered ? 2.2 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  );
}

export function Magnetic({
  children,
  strength = 0.4,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });

  useEffect(() => {
    setEnabled(window.matchMedia("(pointer: fine)").matches);
  }, []);

  return (
    <motion.div
      className={className}
      style={enabled ? { x: sx, y: sy } : undefined}
      onMouseMove={(e) => {
        if (!enabled) return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
