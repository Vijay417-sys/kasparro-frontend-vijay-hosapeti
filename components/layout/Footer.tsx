import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-slate-600">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <span>© {new Date().getFullYear()} Kasparro (Demo)</span>
          <div className="flex gap-4">
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/platform" className="hover:underline">
              Platform
            </a>
            <a href="/app/dashboard" className="hover:underline">
              Dashboard
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
