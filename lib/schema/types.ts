/**
 * Core type definitions for Kasparro audit data structures.
 * All components must import types from here, not define ad-hoc shapes.
 */

export interface Brand {
  id: string;
  name: string;
  domain: string;
  lastAudited: string; // ISO 8601 date string
}

export interface Score {
  value: number; // 0-100
  label: string;
  color: "red" | "orange" | "green";
}

export interface Issue {
  id: string;
  severity: "critical" | "high" | "medium" | "low";
  message: string;
  affectedPages?: number;
  category?: string;
}

export interface Recommendation {
  id: string;
  priority: "high" | "medium" | "low";
  title: string;
  description: string;
  actionItems: string[];
  estimatedImpact?: string;
}

export interface Module {
  id: string;
  name: string;
  description: string;
  score: Score;
  insights: string[];
  issues: Issue[];
  recommendations: Recommendation[];
}

export interface Audit {
  brandId: string;
  brandName: string;
  domain: string;
  lastAudited: string;
  modules: Module[];
  overallScores: {
    aiVisibility: number; // 0-100
    trustEeat: number; // 0-100
    nonBrandedCoverage: number; // 0-100
  };
}

export interface BrandList {
  brands: Brand[];
}
