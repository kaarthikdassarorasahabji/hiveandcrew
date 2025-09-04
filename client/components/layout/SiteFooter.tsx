import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="h-6 w-6 rounded-md border border-primary/30 bg-accent/40 glow-min" />
            <span className="font-semibold">Hive & Crew</span>
          </div>
          <p className="text-foreground/70 max-w-xs">
            Design Hive for clothing & art. Code Crew for websites & automation. Built by a team led by Kaarthik Dass Arora.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-3">Explore</h4>
            <ul className="space-y-2 text-foreground/70">
              <li><Link to="/shop" className="hover:text-foreground">Shop</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-foreground/70">
              <li><a href="#" className="hover:text-foreground">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms</a></li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Talk to us</h4>
          <div className="space-y-2">
            <a
              href="https://wa.me/919999999999?text=Hi%20Hive%20%26%20Crew%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-secondary/40 px-3 py-2 hover:bg-secondary/10"
            >
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span>Discuss on WhatsApp</span>
            </a>
            <div className="text-foreground/60">© {new Date().getFullYear()} Hive & Crew</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
