import React from "react";
import { Header } from "./Header";

interface AppShellProps {
  children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header variant="app" />
      <main className="flex-1 bg-gray-50">{children}</main>
    </div>
  );
}
