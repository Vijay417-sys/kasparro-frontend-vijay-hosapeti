import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header area="app" />
      <main className="flex-1 bg-gray-50">{children}</main>
      <Footer />
    </div>
  );
}
