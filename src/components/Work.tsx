import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "../utils/cn";

const PROJECTS = [
  {
    title: "Nocturna",
    tags: "Identidad · Dirección de arte",
    year: "2025",
    span: "md:col-span-7",
    aspect: "aspect-[4/3]",
    gradient: "from-purple-900/60 to-black",
  },
  {
    title: "Monolito",
    tags: "Web interactiva · 3D",
    year: "2025",
    span: "md:col-span-5 md:mt-40",
    aspect: "aspect-[4/5]",
    gradient: "from-zinc-800/80 to-black",
  },
  {
    title: "Pulso",
    tags: "Producto digital · UX",
    year: "2024",
    span: "md:col-span-5 md:-mt-16",
    aspect: "aspect-[4/5]",
    gradient: "from-emerald-900/60 to-black",
  },
  {
    title: "Ácida",
    tags: "Campaña · Motion",
    year: "2024",
    span: "md:col-span-7 md:mt-24",
    aspect: "aspect-[4/3]",
    gradient: "from-lime-900/60 to-black",
  },
];

export default function Work() {
  return (
    <section id="trabajo" className="relative px-6 py-28 md:px-10 md:py-40">
      <div className="mb-6 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-smoke">
        <span className="h-1.5 w-1.5 rounded-full bg-volt" />
        Trabajo seleccionado
        <span className="h-px flex-1 bg-bone/10" />
        <span>(04)</span>
      </div>

      <div className="mb-16 flex flex-wrap items-end justify-between gap-6 md:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[10.5vw] font-extrabold uppercase leading-[0.9] tracking-tight md:text-[8.5vw]"
        >
          Cosas que{" "}
          <span className="font-serif font-normal normal-case italic text-volt">atrapan</span>
        </motion.h2>
        <p className="max-w-sm pb-3 text-sm leading-relaxed text-smoke">
          Una selección de proyectos donde estrategia, arte y código chocaron para crear algo memorable.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className={cn("group block", project.span)}
          >
            <div className={cn("relative overflow-hidden rounded-2xl bg-gradient-to-br border border-white/10 p-8 flex flex-col justify-between", project.aspect, project.gradient)}>
              <span className="self-start rounded-full border border-bone/25 bg-ink/40 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-bone backdrop-blur-sm">
                {project.year}
              </span>
              <div className="space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-volt">
                  (0{index + 1}) Caso de estudio
                </span>
                <h4 className="font-display text-4xl font-extrabold uppercase tracking-tight text-white">
                  {project.title}
                </h4>
              </div>
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-bone/10 pb-5">
              <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-2 md:text-4xl">
                {project.title}
              </h3>
              <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.2em] text-smoke">
                {project.tags}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24 flex justify-center"
      >
        <a
          href="mailto:hola@magnet.studio?subject=Consulta%20proyectos"
          data-hover
          className="group flex items-center gap-4 rounded-full border border-bone/20 px-8 py-4 font-mono text-[11px] uppercase tracking-[0.3em] transition-all duration-300 hover:border-volt hover:text-volt"
        >
          Archivo completo · 127 proyectos
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
        </a>
      </motion.div>
    </section>
  );
}
