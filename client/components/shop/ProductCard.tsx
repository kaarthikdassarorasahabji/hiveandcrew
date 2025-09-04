import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { formatCurrencyINR } from "@/lib/currency";

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="rounded-lg overflow-hidden border glass group card-neon">
      <div className="aspect-square bg-accent/30 grid place-items-center">
        <div className="text-3xl font-extrabold tracking-wider opacity-80">
          {product.title.split(" ")[0]}
        </div>
      </div>
      <div className="p-4">
        <div className="font-medium">{product.title}</div>
        <div className="text-sm text-foreground/70">{formatCurrencyINR(product.price)}</div>
        <div className="mt-3 flex gap-2">
          <button className="inline-flex items-center rounded-md border border-primary/40 px-3 py-1.5 text-xs hover:bg-primary/10">Add to Cart</button>
          <Link to={`/product/${product.id}`} className="inline-flex items-center rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground">View</Link>
        </div>
      </div>
    </motion.div>
  );
}
