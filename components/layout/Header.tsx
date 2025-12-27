"use client";
import React from "react";
import Link from "next/link";

export default function Header({
  area = "marketing",
}: {
  area?: "marketing" | "app" | string;
}) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900 transition-colors hover:text-gray-700"
        >
          Kasparro
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
          {area === "marketing" && (
            <>
              <Link href="/" className="transition-colors hover:text-gray-900">
                Home
              </Link>
              <Link
                href="/platform"
                className="transition-colors hover:text-gray-900"
              >
                Platform
              </Link>
              <Link
                href="/about"
                className="transition-colors hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="/app/audit"
                className="ml-2 rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow-md active:scale-95"
              >
                Run AI-SEO Audit
              </Link>
            </>
          )}
          {area === "app" && (
            <>
              <Link
                href="/app/dashboard"
                className="transition-colors hover:text-gray-900"
              >
                Dashboard
              </Link>
              <Link
                href="/app/audit"
                className="transition-colors hover:text-gray-900"
              >
                Audit
              </Link>
              <Link
                href="/app/architecture"
                className="transition-colors hover:text-gray-900"
              >
                Architecture
              </Link>
            </>
          )}
          {area !== "marketing" && area !== "app" && (
            <>
              <Link href="/" className="transition-colors hover:text-gray-900">
                Home
              </Link>
              <Link
                href="/platform"
                className="transition-colors hover:text-gray-900"
              >
                Platform
              </Link>
              <Link
                href="/about"
                className="transition-colors hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="/app/dashboard"
                className="ml-2 rounded-lg bg-slate-900 px-4 py-2 font-semibold text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow-md active:scale-95"
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
