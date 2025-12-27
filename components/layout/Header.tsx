import React from "react";
import Link from "next/link";
import { Button } from "@/components/primitives/Button";

interface HeaderProps {
  variant?: "marketing" | "app";
}

export function Header({ variant = "marketing" }: HeaderProps) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold text-gray-900">
          Kasparro
        </Link>
        <nav className="flex items-center gap-4">
          {variant === "marketing" && (
            <>
              <Link
                href="/platform"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Platform
              </Link>
              <Link
                href="/about"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                About
              </Link>
              <Link href="/app/audit">
                <Button size="sm">Run AI-SEO Audit</Button>
              </Link>
            </>
          )}
          {variant === "app" && (
            <>
              <Link
                href="/app/dashboard"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Dashboard
              </Link>
              <Link
                href="/app/audit"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Audit
              </Link>
              <Link
                href="/app/architecture"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Architecture
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
