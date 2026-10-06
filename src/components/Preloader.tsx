import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Asterisk } from "lucide-react";

const WORDS = ["IDEAS", "MARCAS", "EMOCIONES", "IMANES"];

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const iv = setInterval(() => {
      setCount((c) => {
        const next = c + Math.floor(Math.random() * 7) + 2;
        return Math.min(next, 100);
      });
    }, 60);
    return () => {
      clearInterval(iv);
      document.documentElement.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (count >= 100 && !done.current) {
      done.current = true;
      const t = setTimeout(onComplete, 350);
      return () => clearTimeout(t);
    }
  }, [count, onComplete]);

  const word = WORDS[Math.min(WORDS.length - 1, Math.floor(count / 26))];

  return (
    <motion.div
      className="fixed inset-0 z-[110] flex flex-col justify-between bg-ink px-6 py-6 md:px-10 md:py-8"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-lg font-extrabold tracking-tight">
          MAGNET<span className="text-volt">®</span>
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-smoke">
          Cargando universo
        </span>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Asterisk className="h-8 w-8 animate-spin-slower text-volt md:h-12 md:w-12" />
        <motion.span
          key={word}
          initial={{ y: "60%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[13vw] font-extrabold uppercase leading-none tracking-tight md:text-[9vw]"
        >
          {word}
        </motion.span>
      </div>

      <div>
        <div className="mb-4 flex items-end justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-smoke">
            Estudio creativo · BCN / MAD
          </span>
          <span className="font-display text-6xl font-extrabold leading-none text-volt md:text-8xl">
            {count}
            <span className="text-bone/40">%</span>
          </span>
        </div>
        <div className="h-px w-full bg-bone/10">
          <div
            className="h-full bg-volt transition-[width] duration-150 ease-out"
            style={{ width: `${count}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
