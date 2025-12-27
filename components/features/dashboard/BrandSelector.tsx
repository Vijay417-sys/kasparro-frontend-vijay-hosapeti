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
        className="mb-2 block text-sm font-medium text-gray-700"
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
        className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
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
