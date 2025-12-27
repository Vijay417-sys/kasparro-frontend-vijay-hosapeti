"use client";
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header area="app" />
      <main className="w-full flex-1">{children}</main>
      <Footer />
    </div>
  );
}
