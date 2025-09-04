import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { formatCurrencyINR } from "@/lib/currency";

const packages = [
  { name: "Starter", price: 12999, features: ["1 page", "Responsive", "Deployed"], tag: "Popular" },
  { name: "Landing Page", price: 19999, features: ["High-convert", "Animations", "SEO"], tag: "Best" },
  { name: "E-commerce", price: 59999, features: ["Products", "Cart", "Payments"], tag: "Pro" },
  { name: "Premium", price: 99999, features: ["Custom UX", "Integrations", "A/B"], tag: "Elite" },
  { name: "Automation", price: 39999, features: ["Workflows", "APIs", "Bots"], tag: "Ops" },
  { name: "Maintenance", price: 2499, features: ["Updates", "Backups", "Monitoring"], tag: "Care" },
];

export default function Services() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold">Services</h1>
      <p className="text-foreground/70">Code Crew — websites, ecommerce, and automation.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {packages.map((s) => (
          <motion.div key={s.name} whileHover={{ y: -4 }} className="rounded-lg border glass p-5 card-neon">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">{s.name}</div>
              <span className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">{s.tag}</span>
            </div>
            <div className="mt-2 text-3xl font-extrabold">{formatCurrencyINR(s.price)}<span className="text-sm font-normal text-foreground/60">/project</span></div>
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
    </div>
  );
}
