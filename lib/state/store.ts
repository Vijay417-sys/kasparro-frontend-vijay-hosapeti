/**
 * Zustand store for managing application state.
 * Manages selected brand and module for the audit interface.
 */

import { create } from "zustand";
import type { Audit, Module } from "@/lib/schema/types";
import { getAuditByBrandId, getModuleById } from "@/lib/mocks/loader";

interface AppState {
  selectedBrandId: string | null;
  selectedModuleId: string | null;
  currentAudit: Audit | null;
  currentModule: Module | null;

  // Actions
  setSelectedBrand: (brandId: string) => void;
  setSelectedModule: (moduleId: string) => void;
  clearSelection: () => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  selectedBrandId: null,
  selectedModuleId: null,
  currentAudit: null,
  currentModule: null,

  setSelectedBrand: (brandId: string) => {
    const audit = getAuditByBrandId(brandId);
    if (audit) {
      set({
        selectedBrandId: brandId,
        currentAudit: audit,
        selectedModuleId: audit.modules[0]?.id || null,
        currentModule: audit.modules[0] || null,
      });
    } else {
      set({
        selectedBrandId: brandId,
        currentAudit: null,
        selectedModuleId: null,
        currentModule: null,
      });
    }
  },

  setSelectedModule: (moduleId: string) => {
    const { currentAudit } = get();
    if (currentAudit) {
      const auditModule = getModuleById(currentAudit, moduleId);
      set({
        selectedModuleId: moduleId,
        currentModule: auditModule,
      });
    } else {
      set({
        selectedModuleId: moduleId,
        currentModule: null,
      });
    }
  },

  clearSelection: () => {
    set({
      selectedBrandId: null,
      selectedModuleId: null,
      currentAudit: null,
      currentModule: null,
    });
  },
}));
