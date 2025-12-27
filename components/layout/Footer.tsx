import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Kasparro</h3>
            <p className="mt-2 text-sm text-gray-600">
              AI-SEO auditing and optimization platform.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Product</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/platform"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Platform
                </Link>
              </li>
              <li>
                <Link
                  href="/app/dashboard"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Company</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Resources</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  href="/app/architecture"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Architecture
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Kasparro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
