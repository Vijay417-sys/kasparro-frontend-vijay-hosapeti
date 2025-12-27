export const dynamic = "force-dynamic";

import "./globals.css";
import React from "react";

export const metadata = {
  title: "Kasparro",
  description: "Kasparro - AI SEO & Brand Intelligence (Demo)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Use a top-level flex column so footer sits below content
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <div className="flex min-h-screen flex-col">
          {/* If you are using route groups, App Router will render the right layout under children.
              This RootLayout just guarantees the sticky footer behavior */}
          {children}
        </div>
      </body>
    </html>
  );
}
