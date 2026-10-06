import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { Cursor } from "./components/Cursor";
import Preloader from "./components/Preloader";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Manifesto from "./components/Manifesto";
import Work from "./components/Work";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 1.05 });
    lenisRef.current = lenis;
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-ink text-bone">
      <Cursor />
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <Nav lenisRef={lenisRef} />
      <Hero ready={!loading} />
      <div className="py-10 md:py-16">
        <Marquee items={["Estrategia", "Branding", "Diseño Web", "Motion", "3D", "Desarrollo"]} />
      </div>
      <Manifesto />
      <Work />
      <Services />
      <Marquee
        items={["Hablemos", "¿Tienes un proyecto?", "Hablemos", "Sin compromiso"]}
        variant="ghost"
        duration="38s"
        className="border-b"
      />
      <Footer lenisRef={lenisRef} />
    </main>
  );
}
