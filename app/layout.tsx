import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kasparro - AI-SEO Audit Platform",
  description: "Comprehensive AI-SEO auditing and optimization platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
