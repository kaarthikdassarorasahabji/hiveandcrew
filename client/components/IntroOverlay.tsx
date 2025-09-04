import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function IntroOverlay() {
  const [done, setDone] = useState(false);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl.set("body", { overflow: "hidden" })
      .fromTo(leftRef.current, { xPercent: 0 }, { xPercent: -100, duration: 1.6 })
      .fromTo(rightRef.current, { xPercent: 0 }, { xPercent: 100, duration: 1.6 }, "<")
      .fromTo(logoRef.current, { scale: 1.05, opacity: 1 }, { scale: 0.88, opacity: 0, duration: 1.0 }, "<")
      .to(containerRef.current, { scale: 1.04, duration: 0.9 }, "<")
      .to(containerRef.current, { scale: 1, duration: 0.6 })
      .set("body", { overflow: "auto" })
      .add(() => setDone(true));
    return () => { tl.kill(); };
  }, []);

  if (done) return null;
  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] bg-background">
      <div ref={leftRef} className="absolute inset-y-0 left-0 w-1/2 bg-card border-r" />
      <div ref={rightRef} className="absolute inset-y-0 right-0 w-1/2 bg-card border-l" />
      <div ref={logoRef} className="absolute inset-0 grid place-items-center">
        <div className="text-2xl md:text-4xl font-extrabold tracking-wide glow-soft">
          Hive <span className="text-primary">&</span> Crew
        </div>
      </div>
    </div>
  );
}
