"use client";

import React, { useEffect } from "react";
import { BrandSelector } from "@/components/features/dashboard/BrandSelector";
import { SnapshotCard } from "@/components/features/dashboard/SnapshotCard";
import { useAppStore } from "@/lib/state/store";
import { getAllBrands } from "@/lib/mocks/loader";

export default function DashboardPage() {
  const currentAudit = useAppStore((state) => state.currentAudit);
  const setSelectedBrand = useAppStore((state) => state.setSelectedBrand);
  const brands = getAllBrands();

  // Auto-select first brand on mount if available
  useEffect(() => {
    if (brands.length > 0 && !currentAudit) {
      setSelectedBrand(brands[0].id);
    }
  }, [brands, currentAudit, setSelectedBrand]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="mb-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-4xl font-extrabold text-transparent">
            Dashboard
          </h1>
          <p className="text-lg font-medium text-slate-700">
            Overview of your brand&apos;s AI-SEO performance
          </p>
        </div>

        <div className="mb-8">
          <BrandSelector />
        </div>

        {currentAudit ? (
          <div>
            <div className="mb-8 rounded-2xl border-2 border-indigo-200/50 bg-gradient-to-br from-indigo-50/50 via-purple-50/50 to-pink-50/50 p-6 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl">
              <h2 className="mb-2 text-2xl font-bold text-gray-900">
                {currentAudit.brandName}
              </h2>
              <p className="text-base font-medium text-slate-600">
                Last audited: {formatDate(currentAudit.lastAudited)}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <SnapshotCard
                title="AI Visibility Score"
                value={currentAudit.overallScores.aiVisibility}
              />
              <SnapshotCard
                title="Trust/E-E-A-T Score"
                value={currentAudit.overallScores.trustEeat}
              />
              <SnapshotCard
                title="Non-Branded Coverage"
                value={currentAudit.overallScores.nonBrandedCoverage}
              />
              <SnapshotCard
                title="Last Audited"
                value={formatDate(currentAudit.lastAudited)}
              />
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border-2 border-dashed border-indigo-300 bg-gradient-to-br from-indigo-50/30 to-purple-50/30 p-12 text-center backdrop-blur-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-purple-100">
              <span className="text-3xl">📊</span>
            </div>
            <p className="text-lg font-semibold text-slate-700">
              Select a brand to view audit snapshot data.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
