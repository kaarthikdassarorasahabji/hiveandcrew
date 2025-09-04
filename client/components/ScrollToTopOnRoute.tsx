import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopOnRoute() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return; // let anchor links work
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}
