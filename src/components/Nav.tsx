import { useEffect, useState, type RefObject } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Asterisk } from "lucide-react";
import type Lenis from "lenis";

const LINKS = [
  { n: "01", label: "Inicio", href: "#top" },
  { n: "02", label: "Manifiesto", href: "#manifiesto" },
  { n: "03", label: "Trabajo", href: "#trabajo" },
  { n: "04", label: "Servicios", href: "#servicios" },
  { n: "05", label: "Contacto", href: "#contacto" },
];

const SOCIALS = ["Instagram", "Behance", "LinkedIn", "Dribbble"];

export default function Nav({ lenisRef }: { lenisRef: RefObject<Lenis | null> }) {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Europe/Madrid",
        }).format(new Date())
      );
    tick();
    const iv = setInterval(tick, 1000);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current;
    if (open) {
      lenis?.stop();
      document.documentElement.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.documentElement.style.overflow = "";
    }
  }, [open, lenisRef]);

  const go = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      lenisRef.current?.scrollTo(href, { duration: 1.6 });
    }, 450);
  };

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-[70] mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-5 md:px-10">
          <button
            onClick={() => go("#top")}
            className="pointer-events-auto font-display text-xl font-extrabold tracking-tight text-bone"
            data-hover
          >
            MAGNET<span className="align-super text-[0.6em]">®</span>
          </button>

          <div className="hidden items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-bone/70 md:flex">
            <Asterisk className="h-3.5 w-3.5 animate-spin-slower" />
            <span>Barcelona {time}</span>
          </div>

          <button
            onClick={() => setOpen(!open)}
            data-hover
            className="pointer-events-auto group flex h-11 items-center gap-3 rounded-full border border-bone/30 px-5 font-mono text-[11px] uppercase tracking-[0.25em] text-bone transition-colors hover:border-bone"
          >
            {open ? "Cerrar" : "Menú"}
            <span className="relative flex h-3 w-5 flex-col justify-between">
              <span
                className={`h-px w-full bg-bone transition-transform duration-300 ${open ? "translate-y-[5.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-full bg-bone transition-all duration-300 ${open ? "-translate-y-[5.5px] -rotate-45" : "group-hover:w-3/4"}`}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-coal"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.83, 0, 0.17, 1] }}
          >
            <div className="flex h-full flex-col justify-between px-6 pb-8 pt-28 md:px-10 md:pt-32">
              <nav className="flex flex-col">
                {LINKS.map((link, i) => (
                  <div key={link.n} className="overflow-hidden border-b border-bone/10">
                    <motion.button
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "110%", transition: { duration: 0.3, delay: 0 } }}
                      transition={{ delay: 0.25 + i * 0.07, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      onClick={() => go(link.href)}
                      data-hover
                      className="group flex w-full items-baseline gap-4 py-3 text-left md:gap-8 md:py-4"
                    >
                      <span className="font-mono text-xs text-volt md:text-sm">{link.n}</span>
                      <span className="font-display text-[11vw] font-extrabold uppercase leading-[0.95] tracking-tight transition-all duration-300 group-hover:translate-x-4 group-hover:text-volt md:text-[6.5vw]">
                        {link.label}
                      </span>
                      <ArrowUpRight className="ml-auto h-8 w-8 shrink-0 -translate-x-3 text-volt opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:h-12 md:w-12" />
                    </motion.button>
                  </div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
              >
                <a
                  href="mailto:hola@magnet.studio"
                  data-hover
                  className="font-serif text-2xl italic text-bone/80 transition-colors hover:text-volt md:text-3xl"
                >
                  hola@magnet.studio
                </a>

                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {SOCIALS.map((s) => (
                    <a
                      key={s}
                      href="#contacto"
                      onClick={(e) => {
                        e.preventDefault();
                        go("#contacto");
                      }}
                      data-hover
                      className="font-mono text-[11px] uppercase tracking-[0.25em] text-smoke transition-colors hover:text-volt"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
