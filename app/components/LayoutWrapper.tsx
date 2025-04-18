"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isPublicCV = pathname?.startsWith("/public-cv");

  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a23]">
      {!isPublicCV && <Navbar />}
      <main className="w-full">{children}</main>
      {!isPublicCV && <Footer />}
    </div>
  );
}
