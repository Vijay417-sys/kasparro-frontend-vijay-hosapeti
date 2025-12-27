"use client";

import React from "react";
import { useAppStore } from "@/lib/state/store";
import { getAllBrands } from "@/lib/mocks/loader";

export function BrandSelector() {
  const brands = getAllBrands();
  const selectedBrandId = useAppStore((state) => state.selectedBrandId);
  const setSelectedBrand = useAppStore((state) => state.setSelectedBrand);

  return (
    <div className="mb-6">
      <label
        htmlFor="brand-select"
        className="mb-2 block text-sm font-semibold text-slate-700"
      >
        Select Brand
      </label>
      <select
        id="brand-select"
        value={selectedBrandId || ""}
        onChange={(e) => {
          if (e.target.value) {
            setSelectedBrand(e.target.value);
          }
        }}
        className="block w-full rounded-lg border-2 border-indigo-200 bg-white/80 px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-sm transition-all hover:border-indigo-300 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <option value="">-- Select a brand --</option>
        {brands.map((brand) => (
          <option key={brand.id} value={brand.id}>
            {brand.name} ({brand.domain})
          </option>
        ))}
      </select>
    </div>
  );
}
