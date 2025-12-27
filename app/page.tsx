import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative flex flex-1 items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="w-full">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <div className="hero-bg rounded-3xl bg-clip-padding p-12 backdrop-blur-sm">
              <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
                Kasparro — AI-first SEO & Brand Intelligence
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-slate-700">
                A demo product surface showing how AI-SEO pipelines map to
                outputs — try the Audit demo below.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/app/audit"
                  className="rounded-lg bg-slate-900 px-6 py-3 text-center text-lg font-semibold text-white shadow-lg transition-all hover:bg-slate-800 hover:shadow-xl active:scale-95"
                >
                  Run AI-SEO Audit
                </Link>
                <Link
                  href="/platform"
                  className="rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-center text-lg font-semibold text-gray-900 shadow-sm transition-all hover:border-gray-400 hover:shadow-md active:scale-95"
                >
                  Platform
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
