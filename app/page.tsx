import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="relative flex flex-1 items-center">
        <div className="w-full">
          <div className="mx-auto max-w-5xl px-6 py-24">
            <div className="hero-bg rounded-2xl bg-clip-padding p-10 backdrop-blur-sm">
              <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
                Kasparro — AI-first SEO & Brand Intelligence
              </h1>
              <p className="mb-6 text-lg text-slate-700">
                A demo product surface showing how AI-SEO pipelines map to
                outputs — try the Audit demo below.
              </p>
              <div className="flex gap-3">
                <Link
                  href="/app/audit"
                  className="rounded bg-slate-900 px-4 py-2 text-white hover:opacity-95"
                >
                  Run AI-SEO Audit
                </Link>
                <Link href="/platform" className="rounded border px-4 py-2">
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
