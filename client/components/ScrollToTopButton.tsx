import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      aria-label="Scroll to top"
      onClick={onClick}
      className={`fixed bottom-6 right-6 z-40 rounded-full border bg-background/80 backdrop-blur px-3 py-3 text-sm shadow transition ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      ↑
    </button>
  );
}
