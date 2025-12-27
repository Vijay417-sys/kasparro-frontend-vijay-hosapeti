/**
 * Loads and exports typed mock data from JSON files.
 * All components should import from here, not directly from JSON.
 */

import type { Audit, Brand, BrandList } from "@/lib/schema/types";
import exampleBrandAudit from "@/audit-data/example-brand-audit.json";
import brand2Audit from "@/audit-data/brand-2-audit.json";
import brand3Audit from "@/audit-data/brand-3-audit.json";
import brand4Audit from "@/audit-data/brand-4-audit.json";
import brand5Audit from "@/audit-data/brand-5-audit.json";
import brand6Audit from "@/audit-data/brand-6-audit.json";
import brand7Audit from "@/audit-data/brand-7-audit.json";

// Type assertion - validation happens via validate-mocks script
export const exampleAudit: Audit = exampleBrandAudit as Audit;

// All available audits
const allAudits: Audit[] = [
  exampleBrandAudit as Audit,
  brand2Audit as Audit,
  brand3Audit as Audit,
  brand4Audit as Audit,
  brand5Audit as Audit,
  brand6Audit as Audit,
  brand7Audit as Audit,
];

/**
 * Get audit data for a brand by ID.
 * In a real app, this would fetch from an API.
 */
export function getAuditByBrandId(brandId: string): Audit | null {
  const audit = allAudits.find((a) => a.brandId === brandId);
  return audit || null;
}

/**
 * Get all available brands.
 * In a real app, this would fetch from an API.
 */
export function getAllBrands(): Brand[] {
  return allAudits.map((audit) => ({
    id: audit.brandId,
    name: audit.brandName,
    domain: audit.domain,
    lastAudited: audit.lastAudited,
  }));
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
