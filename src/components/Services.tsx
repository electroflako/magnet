import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { cn } from "../utils/cn";

const SERVICES = [
  {
    title: "Branding & Identidad",
    desc: "Logos que se quedan grabados y sistemas visuales que escalan. Naming, tono, dirección de arte y universos de marca con personalidad magnética.",
    tags: ["Naming", "Logotipo", "Sistemas visuales", "Brand books", "Tono de voz"],
  },
  {
    title: "Diseño Web & Producto",
    desc: "Interfaces que se sienten inevitables. Diseñamos webs y productos digitales donde cada clic acerca al usuario a la conversión.",
    tags: ["UX/UI", "Webs corporativas", "E-commerce", "Design systems", "Prototipado"],
  },
  {
    title: "Motion & 3D",
    desc: "Movimiento con propósito. Animación, render 3D y micro-interacciones que transforman lo estático en algo hipnótico.",
    tags: ["Animación", "Render 3D", "WebGL", "Vídeo", "Micro-interacciones"],
  },
  {
    title: "Desarrollo Creativo",
    desc: "Código como material de diseño. Front-ends de alto rendimiento, experimentos interactivos y experiencias premiadas.",
    tags: ["React", "WebGL / Three.js", "GSAP", "Headless CMS", "Performance"],
  },
  {
    title: "Estrategia Digital",
    desc: "La atracción no es casualidad. Investigamos, posicionamos y medimos para que cada decisión creativa tenga impacto en negocio.",
    tags: ["Research", "Posicionamiento", "CRO", "Analítica", "Contenido"],
  },
];

export default function Services() {
  const [open, setOpen] = useState<number | null>(1);

  return (
    <section id="servicios" className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-smoke">
        <span className="h-1.5 w-1.5 rounded-full bg-volt" />
        Qué hacemos
        <span className="h-px flex-1 bg-bone/10" />
        <span>(05)</span>
      </div>

      <div className="mb-16 flex flex-wrap items-end justify-between gap-6 md:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[10.5vw] font-extrabold uppercase leading-[0.9] tracking-tight md:text-[8.5vw]"
        >
          Super<span className="text-outline">poderes</span>
        </motion.h2>
        <p className="max-w-sm pb-3 text-sm leading-relaxed text-smoke">
          Cinco disciplinas, un único objetivo: que sea imposible mirar hacia otro lado.
        </p>
      </div>

      <div>
        {SERVICES.map((service, index) => {
          const isOpen = open === index;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{ delay: index * 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-bone/15 last:border-b"
            >
              <button
                onClick={() => setOpen(isOpen ? null : index)}
                data-hover
                className="group flex w-full items-center gap-5 py-6 text-left transition-colors md:gap-10 md:py-9"
              >
                <span className="font-mono text-sm text-volt">0{index + 1}</span>
                <h3
                  className={cn(
                    "font-display text-2xl font-extrabold uppercase tracking-tight transition-all duration-400 group-hover:translate-x-3 md:text-5xl",
                    isOpen ? "text-volt" : "group-hover:text-volt"
                  )}
                >
                  {service.title}
                </h3>
                <span
                  className={cn(
                    "ml-auto grid h-11 w-11 shrink-0 place-items-center rounded-full border transition-all duration-500 md:h-14 md:w-14",
                    isOpen
                      ? "rotate-45 border-volt bg-volt text-ink"
                      : "border-bone/25 text-bone group-hover:border-volt group-hover:text-volt"
                  )}
                >
                  <Plus className="h-5 w-5" />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-6 pb-10 md:grid-cols-[1fr_1.2fr] md:pl-[4.5rem]">
                      <p className="max-w-md text-base leading-relaxed text-smoke">{service.desc}</p>
                      <div className="flex flex-wrap content-start gap-2.5">
                        {service.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-bone/15 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-bone/80 transition-colors hover:border-volt hover:text-volt"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      <motion.a
        href="mailto:hola@magnet.studio?subject=Proyecto%20a%20medida"
        data-hover
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="group mt-14 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-smoke transition-colors hover:text-volt"
      >
        ¿No encuentras lo que buscas? Lo construimos a medida
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
      </motion.a>
    </section>
  );
}
