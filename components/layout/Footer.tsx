import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50/50 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-slate-600 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900">Kasparro</span>
            <span>© {new Date().getFullYear()} (Demo)</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="/about"
              className="transition-colors hover:text-gray-900"
            >
              About
            </Link>
            <Link
              href="/platform"
              className="transition-colors hover:text-gray-900"
            >
              Platform
            </Link>
            <Link
              href="/app/dashboard"
              className="transition-colors hover:text-gray-900"
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
