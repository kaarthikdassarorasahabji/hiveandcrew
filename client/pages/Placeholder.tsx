import { Link } from "react-router-dom";

export default function Placeholder({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">{title}</h1>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          {description || "This page is ready to be customized. Tell me what content and layout you want here and I will build it."}
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link to="/" className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Go Home</Link>
          <a href={`https://wa.me/919999999999?text=Hi%20Hive%20%26%20Crew%2C%20let%27s%20design%20the%20${encodeURIComponent(title)}%20page.`} target="_blank" rel="noreferrer" className="rounded-lg border border-primary/40 px-6 py-3 text-sm hover:bg-primary/10">Discuss on WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
