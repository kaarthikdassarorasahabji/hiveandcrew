import { Link } from "react-router-dom";

const posts = [
  { slug: "hive-and-crew", title: "Hive & Crew — The Story, the System, the Standard", excerpt: "A deep dive into the vision, craft, and engineering philosophy behind Hive & Crew.", date: "2025-02-01" },
  { slug: "launch", title: "Hive & Crew Launch", excerpt: "Introducing our dual-brand platform for design and code.", date: "2025-01-10" },
  { slug: "gsap-intro", title: "Crafting the GSAP Intro", excerpt: "Behind the 'store opening' animation.", date: "2025-01-18" },
  { slug: "ecommerce-stack", title: "Our E‑commerce Stack", excerpt: "From UI to payments.", date: "2025-01-24" },
];

export default function Blog() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold">Blog</h1>
      <p className="text-foreground/70">Updates, behind‑the‑scenes, and tips.</p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {posts.map((p) => (
          <Link key={p.slug} to={`/blog/${p.slug}`} className="rounded-lg border glass p-5 hover:border-primary/40 transition block card-neon">
            <div className="text-xs text-foreground/60">{new Date(p.date).toLocaleDateString()}</div>
            <div className="mt-1 text-lg font-semibold">{p.title}</div>
            <div className="text-sm text-foreground/70">{p.excerpt}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
