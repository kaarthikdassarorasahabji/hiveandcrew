import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { formatCurrencyINR } from "@/lib/currency";

const products = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: ["Neo Canvas Tee", "Aurora Hoodie", "Flux Cap", "Mono Tote", "Circuit Overshirt", "Pulse Socks", "Grid Scarf", "Vector Joggers"][i],
  price: [799, 1499, 599, 999, 1999, 599, 1299, 1799][i],
  color: i % 2 === 0 ? "from-primary/20 to-primary/5" : "from-secondary/20 to-secondary/5",
}));

const services = [
  { name: "Starter", price: 12999, features: ["1 page", "Responsive", "Deployed"], tag: "Popular" },
  { name: "Landing Page", price: 19999, features: ["High-convert", "Animations", "SEO"], tag: "Best" },
  { name: "E-commerce", price: 59999, features: ["Products", "Cart", "Payments"], tag: "Pro" },
  { name: "Premium", price: 99999, features: ["Custom UX", "Integrations", "A/B"], tag: "Elite" },
  { name: "Automation", price: 39999, features: ["Workflows", "APIs", "Bots"], tag: "Ops" },
  { name: "Maintenance", price: 2499, features: ["Updates", "Backups", "Monitoring"], tag: "Care" },
];

export default function Index() {
  const logoRef = useRef<HTMLDivElement>(null);
  const [stats, setStats] = useState({ clients: 0, projects: 0, uptime: 0 });

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      logoRef.current,
      { y: 20, opacity: 0, filter: "blur(8px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.9 },
    )
      .to(logoRef.current, { scale: 1.02, duration: 0.8, yoyo: true, repeat: 1 })
      .from(".stagger", { y: 24, opacity: 0, duration: 0.6, stagger: 0.08 }, "<0.1");

    const target = { clients: 120, projects: 260, uptime: 99.9 };
    const start = performance.now();
    const animate = (now: number) => {
      const p = Math.min(1, (now - start) / 1200);
      setStats({
        clients: Math.round(target.clients * p),
        projects: Math.round(target.projects * p),
        uptime: Math.round(target.uptime * 10 * p) / 10,
      });
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);

  return (
    <div>
      {/* Hero Split */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div ref={logoRef} className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              <span className="text-foreground">Hive</span>
              <span className="text-foreground/60"> & </span>
              <span className="text-foreground">Crew</span>
            </h1>
            <div className="mx-auto mt-3 h-[3px] w-28 rounded-full bg-gradient-to-r from-primary to-secondary" />
            <p className="stagger mt-4 text-foreground/70 max-w-2xl mx-auto">
              Dual-brand platform combining Design Hive (clothing & art) and Code Crew (websites & automation). Premium. Animated. Fast.
            </p>
            <div className="stagger mt-6 flex items-center justify-center gap-3">
              <Link to="/shop" className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow hover:-translate-y-0.5 hover:shadow-lg transition">
                Explore Shop
              </Link>
              <Link to="/services" className="rounded-lg border border-primary/40 px-6 py-3 text-sm hover:bg-primary/10">
                View Services
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Design Hive */}
            <motion.div whileHover={{ y: -4 }} className="group rounded-xl p-6 lg:p-8 border glass card-neon">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">
                  <span className="text-secondary">Design</span> Hive
                </h3>
                <span className="text-xs px-2 py-1 rounded bg-secondary/15 text-secondary border border-secondary/30">Clothing & Art</span>
              </div>
              <div className="aspect-[16/10] rounded-xl bg-accent/40 grid place-items-center">
                <div className="text-4xl font-black tracking-wider text-secondary">DH</div>
              </div>
              <p className="mt-4 text-foreground/70">
                Minimalist apparel and art prints with premium materials, crafted by our in‑house artists.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Link to="/shop" className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground shadow hover:-translate-y-0.5 hover:shadow-lg transition">
                  Shop Now
                </Link>
                <Link to="/about" className="text-sm text-foreground/70 hover:text-foreground">Meet the artists →</Link>
              </div>
            </motion.div>

            {/* Code Crew */}
            <motion.div whileHover={{ y: -4 }} className="group rounded-xl p-6 lg:p-8 border glass card-neon">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">
                  <span className="text-primary">Code</span> Crew
                </h3>
                <span className="text-xs px-2 py-1 rounded bg-primary/15 text-primary border border-primary/30">Websites & Automation</span>
              </div>
              <div className="aspect-[16/10] rounded-xl bg-accent/40 grid place-items-center">
                <div className="text-4xl font-black tracking-wider text-primary">CC</div>
              </div>
              <p className="mt-4 text-foreground/70">
                High‑performance websites, e‑commerce, and automations built by the Code Crew engineers.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Link to="/services" className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow hover:-translate-y-0.5 hover:shadow-lg transition">
                  View Packages
                </Link>
                <a href="https://wa.me/919999999999?text=Hi%20Hive%20%26%20Crew%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noreferrer" className="text-sm text-foreground/70 hover:text-foreground">Discuss on WhatsApp →</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Showcase rows */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Featured Products</h3>
          <Link to="/shop" className="text-sm text-foreground/70 hover:text-foreground">See all →</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <motion.div key={p.id} whileHover={{ y: -4 }} className="rounded-lg overflow-hidden border glass group">
              <div className={`aspect-square bg-accent/30 grid place-items-center`}>
                <div className="text-3xl font-extrabold tracking-wider opacity-80">{p.title.split(" ")[0]}</div>
              </div>
              <div className="p-4">
                <div className="font-medium">{p.title}</div>
                <div className="text-sm text-foreground/70">{formatCurrencyINR(p.price)}</div>
                <div className="mt-3 flex gap-2">
                  <button className="inline-flex items-center rounded-md border border-primary/40 px-3 py-1.5 text-xs hover:bg-primary/10">Add to Cart</button>
                  <Link to="/shop" className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground">View</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Code Crew Packages</h3>
          <Link to="/services" className="text-sm text-foreground/70 hover:text-foreground">Compare →</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <motion.div key={s.name} whileHover={{ y: -4 }} className="rounded-lg border glass p-5">
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold">{s.name}</div>
                <span className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">{s.tag}</span>
              </div>
              <div className="mt-2 text-3xl font-extrabold">${s.price}<span className="text-sm font-normal text-foreground/60">/project</span></div>
              <ul className="mt-3 text-sm text-foreground/70 space-y-1">
                {s.features.map((f) => <li key={f}>• {f}</li>)}
              </ul>
              <div className="mt-4 flex gap-2">
                <Link to="/checkout" className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">Buy Now</Link>
                <a href={`https://wa.me/919999999999?text=${encodeURIComponent(`I want the ${s.name} package`)}`} target="_blank" rel="noreferrer" className="rounded-md border border-primary/40 px-4 py-2 text-sm hover:bg-primary/10">Discuss on WhatsApp</a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          <div className="rounded-lg border glass p-6">
            <div className="text-3xl font-extrabold text-primary">{stats.clients}+</div>
            <div className="text-sm text-foreground/70">Happy Clients</div>
          </div>
          <div className="rounded-lg border glass p-6">
            <div className="text-3xl font-extrabold text-secondary">{stats.projects}+</div>
            <div className="text-sm text-foreground/70">Projects Delivered</div>
          </div>
          <div className="rounded-lg border glass p-6">
            <div className="text-3xl font-extrabold">{stats.uptime}%</div>
            <div className="text-sm text-foreground/70">Uptime & Reliability</div>
          </div>
        </div>
      </section>
    </div>
  );
}
