import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/blog", label: "Blog" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all ${scrolled ? "bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-8 w-8 rounded-md border border-primary/30 grid place-items-center text-xs font-semibold text-primary">HC</div>
          <span className="text-lg font-semibold tracking-wide">
            <span className="text-primary">Hive</span>
            <span className="text-foreground/70"> & </span>
            <span className="text-secondary">Crew</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/cart"
            className="relative inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            <span>Cart</span>
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-secondary text-[10px] grid place-items-center text-secondary-foreground">0</span>
          </Link>
          <Link
            to={location.pathname.includes("services") ? "/services" : "/services"}
            className="hidden sm:inline-flex items-center rounded-md border border-primary/40 px-4 py-2 text-sm hover:bg-primary/10 text-foreground group"
          >
            <span className="group-hover:text-primary transition">Get Started</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
