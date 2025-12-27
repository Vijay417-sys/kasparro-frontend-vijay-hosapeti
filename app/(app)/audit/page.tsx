"use client";

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
  const brands = getAllBrands();

  // Auto-select first brand on mount if available
  useEffect(() => {
    if (brands.length > 0 && !currentAudit) {
      setSelectedBrand(brands[0].id);
    }
  }, [brands, currentAudit, setSelectedBrand]);

  if (!currentAudit) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
            <span className="text-3xl">📊</span>
          </div>
          <p className="text-lg font-medium text-gray-600">
            Loading audit data...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-140px)] flex-col lg:flex-row">
      {/* Mobile menu button */}
      <div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 lg:hidden">
        <h1 className="text-lg font-semibold text-gray-900">Audit Modules</h1>
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="rounded-md p-2 text-gray-600 hover:bg-gray-100"
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
      <div className="flex-1 overflow-y-auto bg-gray-50 p-4 lg:p-8">
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
