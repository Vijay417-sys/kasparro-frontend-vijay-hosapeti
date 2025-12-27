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
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Dashboard</h1>

      <BrandSelector />

      {currentAudit ? (
        <div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {currentAudit.brandName}
            </h2>
            <p className="text-sm text-gray-600">
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
        <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
          <p className="text-gray-600">
            Select a brand to view audit snapshot data.
          </p>
        </div>
      )}
    </div>
  );
}
