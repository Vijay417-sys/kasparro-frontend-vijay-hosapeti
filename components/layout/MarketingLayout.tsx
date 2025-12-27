import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header variant="marketing" />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
