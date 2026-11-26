import { ReactNode, useEffect } from "react";
import TopHeader from "@/components/TopHeader";
import ServiceMenu from "@/components/ServiceMenu";
import Footer from "@/components/Footer";

export default function EditorialShell({ title, children }: { title: string; children: ReactNode }) {
  useEffect(() => {
    document.title = `${title} | Reblues`;
    window.scrollTo(0, 0);
    return () => { document.title = "Reblues"; };
  }, [title]);

  return <div className="min-h-screen bg-white font-body text-neutral-950 antialiased">
    <TopHeader />
    <ServiceMenu />
    {children}
    <Footer />
  </div>;
}
