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
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-lg text-gray-600">
          Overview of your brand&apos;s AI-SEO performance
        </p>
      </div>

      <div className="mb-8">
        <BrandSelector />
      </div>

      {currentAudit ? (
        <div>
          <div className="mb-8 rounded-xl border-2 border-gray-200 bg-gradient-to-r from-gray-50 to-white p-6">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">
              {currentAudit.brandName}
            </h2>
            <p className="text-base text-gray-600">
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
        <div className="rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
            <span className="text-3xl">📊</span>
          </div>
          <p className="text-lg font-medium text-gray-600">
            Select a brand to view audit snapshot data.
          </p>
        </div>
      )}
    </div>
  );
}
