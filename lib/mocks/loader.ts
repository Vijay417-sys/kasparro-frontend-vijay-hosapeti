/**
 * Loads and exports typed mock data from JSON files.
 * All components should import from here, not directly from JSON.
 */

import type { Audit, Brand, BrandList } from "@/lib/schema/types";
import exampleBrandAudit from "@/audit-data/example-brand-audit.json";

// Type assertion - validation happens via validate-mocks script
export const exampleAudit: Audit = exampleBrandAudit as Audit;

/**
 * Get audit data for a brand by ID.
 * In a real app, this would fetch from an API.
 */
export function getAuditByBrandId(brandId: string): Audit | null {
  if (brandId === "example-brand-1") {
    return exampleAudit;
  }
  return null;
}

/**
 * Get all available brands.
 * In a real app, this would fetch from an API.
 */
export function getAllBrands(): Brand[] {
  // For now, derive brands from available audits
  return [
    {
      id: exampleAudit.brandId,
      name: exampleAudit.brandName,
      domain: exampleAudit.domain,
      lastAudited: exampleAudit.lastAudited,
    },
  ];
}

/**
 * Get brand list structure.
 */
export function getBrandList(): BrandList {
  return {
    brands: getAllBrands(),
  };
}

/**
 * Get module by ID from an audit.
 */
export function getModuleById(audit: Audit, moduleId: string) {
  return audit.modules.find((m) => m.id === moduleId) || null;
}
