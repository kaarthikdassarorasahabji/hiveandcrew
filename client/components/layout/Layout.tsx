import { ReactNode } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import IntroOverlay from "@/components/IntroOverlay";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ScrollToTopOnRoute from "@/components/ScrollToTopOnRoute";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <IntroOverlay />
      <SiteHeader />
      <ScrollToTopOnRoute />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <ScrollToTopButton />
    </div>
  );
}
