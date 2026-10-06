import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Asterisk } from "lucide-react";

export default function Hero({ ready }: { ready: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-svh flex-col justify-between overflow-hidden px-6 pb-8 pt-28 md:px-10 md:pt-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full opacity-25 blur-[140px]"
        style={{ background: "radial-gradient(circle, #d9ff3f 0%, transparent 65%)" }}
      />

      <motion.div style={{ y, opacity }} className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mb-8 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-smoke md:mb-12"
        >
          <span className="flex items-center gap-2 rounded-full border border-bone/15 px-4 py-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-volt" />
            Estudio creativo independiente
          </span>
          <span className="hidden rounded-full border border-bone/15 px-4 py-2 md:inline-block">
            Desde 2017 · BCN / MAD
          </span>
        </motion.div>

        <h1 className="font-display text-[clamp(2.4rem,10.5vw,11.5rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.02em]">
          <span className="block">Diseñamos</span>
          <span className="flex items-center gap-[0.25em]">
            <span className="inline-block whitespace-nowrap font-serif font-normal normal-case italic tracking-normal text-volt">
              experiencias
            </span>
          </span>
          <span className="flex items-center gap-[0.2em]">
            <span className="text-outline">Irresistibles</span>
            <Asterisk className="h-[0.55em] w-[0.55em] shrink-0 animate-spin-slower text-volt" />
          </span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-12 flex items-end justify-between gap-8"
      >
        <p className="max-w-md text-base leading-relaxed text-smoke md:text-lg">
          Somos <span className="text-bone">MAGNET®</span> — un estudio de diseño y tecnología que
          convierte marcas en imanes: atraen miradas, retienen usuarios y multiplican ingresos.
        </p>

        <div className="relative hidden h-32 w-32 shrink-0 md:block">
          <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slower">
            <defs>
              <path id="circlePath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="fill-smoke font-mono text-[8.2px] uppercase tracking-[2.5px]">
              <textPath href="#circlePath">
                scroll para explorar · scroll para explorar ·
              </textPath>
            </text>
          </svg>
          <ArrowDown className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 text-volt" />
        </div>
      </motion.div>
    </section>
  );
}
