import type { RefObject } from "react";
import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Asterisk, Mail } from "lucide-react";
import type Lenis from "lenis";
import { Magnetic } from "./Cursor";

const NAV = [
  { label: "Manifiesto", href: "#manifiesto" },
  { label: "Trabajo", href: "#trabajo" },
  { label: "Servicios", href: "#servicios" },
];

const SOCIALS = ["Instagram", "Behance", "LinkedIn", "Dribbble"];

export default function Footer({ lenisRef }: { lenisRef: RefObject<Lenis | null> }) {
  const go = (href: string) => lenisRef.current?.scrollTo(href, { duration: 1.6 });

  return (
    <footer id="contacto" className="relative overflow-hidden pt-28 md:pt-40">
      <div className="px-6 md:px-10">
        <div className="mb-10 flex items-center justify-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-smoke">
          <Asterisk className="h-4 w-4 animate-spin-slower text-volt" />
          ¿Tienes un proyecto entre manos?
          <Asterisk className="h-4 w-4 animate-spin-slower text-volt" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center font-display text-[12.5vw] font-extrabold uppercase leading-[0.9] tracking-tight md:text-[9.5vw]"
        >
          Hagamos algo
          <br />
          <span className="font-serif font-normal normal-case italic text-volt">irresistible</span>
        </motion.h2>

        <div className="relative mt-16 flex justify-center md:mt-20">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-spin-slower rounded-full border border-dashed border-bone/20 md:h-80 md:w-80"
          />
          <Magnetic strength={0.45}>
            <a
              href="mailto:hola@magnet.studio"
              data-hover
              className="group relative grid h-44 w-44 place-items-center rounded-full bg-volt text-center text-ink transition-transform duration-500 hover:scale-105 md:h-56 md:w-56"
            >
              <span className="flex flex-col items-center gap-2 font-display text-sm font-extrabold uppercase tracking-[0.15em] md:text-base">
                <Mail className="h-6 w-6 transition-transform duration-300 group-hover:-rotate-12" />
                Escríbenos
                <span className="font-mono text-[10px] font-normal normal-case tracking-[0.2em] text-ink/60">
                  hola@magnet.studio
                </span>
              </span>
              <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          </Magnetic>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-10 border-t border-bone/10 py-12 md:mt-32 md:grid-cols-4">
          <div>
            <p className="font-display text-2xl font-extrabold tracking-tight">
              MAGNET<span className="text-volt">®</span>
            </p>
            <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-smoke">
              Estudio creativo independiente. Barcelona · Madrid · Remoto.
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-smoke">Mapa</p>
            <ul className="space-y-2.5">
              {NAV.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => go(l.href)}
                    data-hover
                    className="text-sm text-bone/80 transition-colors hover:text-volt"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-smoke">Social</p>
            <ul className="space-y-2.5">
              {SOCIALS.map((s) => (
                <li key={s}>
                  <a
                    href="mailto:hola@magnet.studio"
                    data-hover
                    className="group inline-flex items-center gap-1.5 text-sm text-bone/80 transition-colors hover:text-volt"
                  >
                    {s}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 md:items-end">
            <p className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.2em] text-smoke md:text-right">
              © 2026 MAGNET · Estudio<br />Hecho con obsesión en BCN
            </p>
            <button
              onClick={() => go("#top")}
              data-hover
              className="group flex items-center gap-3 rounded-full border border-bone/20 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.25em] transition-colors hover:border-volt hover:text-volt"
            >
              Volver arriba
              <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none relative h-[19vw] select-none overflow-hidden">
        <p className="absolute inset-x-0 top-2 text-center font-display text-[22vw] font-extrabold uppercase leading-[0.8] tracking-tight text-bone/[0.05]">
          MAGNET
        </p>
      </div>
    </footer>
  );
}
