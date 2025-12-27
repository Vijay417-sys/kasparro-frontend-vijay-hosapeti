"use client";
import React from "react";
import Link from "next/link";

export default function Header({
  area = "marketing",
}: {
  area?: "marketing" | "app" | string;
}) {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold">
          Kasparro
        </Link>

        <nav className="flex items-center gap-4 text-sm text-slate-700">
          {area === "marketing" && (
            <>
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/platform" className="hover:underline">
                Platform
              </Link>
              <Link href="/about" className="hover:underline">
                About
              </Link>
              <Link
                href="/app/audit"
                className="ml-4 rounded bg-slate-100 px-3 py-1 hover:bg-slate-200"
              >
                Run AI-SEO Audit
              </Link>
            </>
          )}
          {area === "app" && (
            <>
              <Link href="/app/dashboard" className="hover:underline">
                Dashboard
              </Link>
              <Link href="/app/audit" className="hover:underline">
                Audit
              </Link>
              <Link href="/app/architecture" className="hover:underline">
                Architecture
              </Link>
            </>
          )}
          {area !== "marketing" && area !== "app" && (
            <>
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/platform" className="hover:underline">
                Platform
              </Link>
              <Link href="/about" className="hover:underline">
                About
              </Link>
              <Link
                href="/app/dashboard"
                className="ml-4 rounded bg-slate-100 px-3 py-1 hover:bg-slate-200"
              >
                Open Dashboard
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
