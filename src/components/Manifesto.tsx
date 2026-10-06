import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const STATS = [
  { value: 127, suffix: "+", label: "Proyectos lanzados" },
  { value: 14, suffix: "", label: "Premios internacionales" },
  { value: 98, suffix: "%", label: "Clientes que repiten" },
  { value: 9, suffix: "", label: "Años creando imanes" },
];

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 42, damping: 16 });
  const rounded = useTransform(spring, (v) => Math.round(v).toLocaleString("es-ES"));

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, mv, value]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix && <span className="text-volt">{suffix}</span>}
    </span>
  );
}

export default function Manifesto() {
  return (
    <section id="manifiesto" className="relative">
      <div className="px-6 pb-28 pt-28 md:px-10 md:pb-40 md:pt-40">
        <div className="mb-10 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-smoke">
          <span className="h-1.5 w-1.5 rounded-full bg-volt" />
          Manifiesto
          <span className="h-px flex-1 bg-bone/10" />
          <span>(01)</span>
        </div>

        <div>
          <p className="max-w-6xl font-display text-[clamp(1.9rem,4.6vw,4.2rem)] font-bold leading-[1.15] tracking-tight text-bone">
            No hacemos webs bonitas. Construimos <span className="font-serif italic font-normal text-volt">imanes</span> digitales: marcas que <span className="text-volt">atraen</span>, <span className="text-volt">retienen</span> y <span className="text-volt">convierten</span>. Cada píxel es una decisión; cada interacción, una <span className="font-serif italic font-normal text-volt">seducción</span>.
          </p>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-x-6 gap-y-12 border-t border-bone/10 pt-12 md:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="font-display text-6xl font-extrabold tracking-tight md:text-7xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.25em] text-smoke">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
