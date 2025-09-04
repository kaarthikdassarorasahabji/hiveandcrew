import { useMemo, useState } from "react";
import ProductCard, { Product } from "@/components/shop/ProductCard";

const data: Product[] = [
  { id: 1, title: "Neo Canvas Tee", price: 799, category: "Tees" },
  { id: 2, title: "Aurora Hoodie", price: 1499, category: "Hoodies" },
  { id: 3, title: "Flux Cap", price: 599, category: "Accessories" },
  { id: 4, title: "Mono Tote", price: 999, category: "Accessories" },
  { id: 5, title: "Circuit Overshirt", price: 1999, category: "Shirts" },
  { id: 6, title: "Pulse Socks", price: 599, category: "Accessories" },
  { id: 7, title: "Grid Scarf", price: 1299, category: "Accessories" },
  { id: 8, title: "Vector Joggers", price: 1799, category: "Pants" },
];

const categories = ["All", "Tees", "Hoodies", "Shirts", "Pants", "Accessories"] as const;

export default function Shop() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    return data.filter((p) =>
      (cat === "All" || p.category === cat) && p.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, cat]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold">Shop</h1>
          <p className="text-foreground/70">Design Hive — premium clothing & art.</p>
        </div>
        <div className="flex items-center gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="h-10 w-56 rounded-md border bg-background px-3 text-sm outline-none ring-0 focus:border-primary focus:outline-none"
          />
          <select
            value={cat}
            onChange={(e) => setCat(e.target.value as any)}
            className="h-10 rounded-md border bg-background px-3 text-sm focus:border-primary"
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
