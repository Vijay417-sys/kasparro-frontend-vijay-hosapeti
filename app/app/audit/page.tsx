("use client");

export const dynamic = "force-dynamic";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AuditSidebar } from "@/components/features/audit/AuditSidebar";
import { AuditModuleView } from "@/components/features/audit/AuditModuleView";
import { useAppStore } from "@/lib/state/store";
import { getAllBrands } from "@/lib/mocks/loader";
import { Icon } from "@/components/primitives/Icon";

export default function AuditPage() {
  const currentAudit = useAppStore((state) => state.currentAudit);
  const currentModule = useAppStore((state) => state.currentModule);
  const setSelectedBrand = useAppStore((state) => state.setSelectedBrand);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const brands = getAllBrands();

  // Ensure component is mounted (client-side only)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-select first brand on mount if available
  useEffect(() => {
    if (isMounted && brands.length > 0 && !currentAudit) {
      const firstBrand = brands[0];
      if (firstBrand) {
        setSelectedBrand(firstBrand.id);
      }
    }
  }, [isMounted, brands, currentAudit, setSelectedBrand]);

  // Show loading state during initial mount
  if (!isMounted) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-purple-100">
            <span className="text-3xl">📊</span>
          </div>
          <p className="text-lg font-semibold text-slate-700">
            Initializing...
          </p>
        </div>
      </div>
    );
  }

  // Show loading state if no audit data
  if (!currentAudit) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-purple-100">
            <span className="text-3xl">📊</span>
          </div>
          <p className="mb-2 text-lg font-semibold text-slate-700">
            Loading audit data...
          </p>
          <p className="text-sm text-slate-600">
            {brands.length === 0
              ? "No brands available"
              : `Found ${brands.length} brand(s)`}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-140px)] flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 lg:flex-row">
      {/* Mobile menu button */}
      <div className="flex items-center justify-between border-b border-indigo-200/50 bg-white/80 px-4 py-3 backdrop-blur-sm lg:hidden">
        <h1 className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-lg font-bold text-transparent">
          Audit Modules
        </h1>
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="rounded-md p-2 text-slate-600 transition-colors hover:bg-indigo-100 hover:text-indigo-700"
          aria-label="Toggle menu"
        >
          <Icon name={isMobileMenuOpen ? "x" : "menu"} size={24} />
        </button>
      </div>

      {/* Sidebar - hidden on mobile when menu is closed */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } lg:block lg:flex-shrink-0`}
      >
        <AuditSidebar
          modules={currentAudit.modules}
          isMobile={true}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-50/50 via-blue-50/50 to-purple-50/50 p-4 backdrop-blur-sm lg:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentModule?.id || "empty"}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.15 }}
          >
            <AuditModuleView module={currentModule} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
