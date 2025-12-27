"use client";

import React from "react";
import { Badge } from "@/components/primitives/Badge";
import { useAppStore } from "@/lib/state/store";
import type { Module } from "@/lib/schema/types";

interface AuditSidebarProps {
  modules: Module[];
  isMobile?: boolean;
  onClose?: () => void;
}

export function AuditSidebar({
  modules,
  isMobile = false,
  onClose,
}: AuditSidebarProps) {
  const selectedModuleId = useAppStore((state) => state.selectedModuleId);
  const setSelectedModule = useAppStore((state) => state.setSelectedModule);

  const handleModuleClick = (moduleId: string) => {
    setSelectedModule(moduleId);
    if (isMobile && onClose) {
      onClose();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    moduleId: string
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleModuleClick(moduleId);
    }
  };

  return (
    <nav
      className={`${isMobile ? "w-full" : "w-64"} flex-shrink-0 border-r border-gray-200 bg-white`}
      role="navigation"
      aria-label="Audit modules"
    >
      <div className="sticky top-0 max-h-screen overflow-y-auto p-4">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Modules</h2>
        <ul className="space-y-2" role="list">
          {modules.map((module) => {
            const isSelected = selectedModuleId === module.id;
            return (
              <li key={module.id}>
                <button
                  type="button"
                  onClick={() => handleModuleClick(module.id)}
                  onKeyDown={(e) => handleKeyDown(e, module.id)}
                  className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${
                    isSelected
                      ? "bg-gray-100 font-medium text-gray-900"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-current={isSelected ? "page" : undefined}
                  aria-label={`Select ${module.name} module`}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex-1">{module.name}</span>
                    <Badge
                      variant={
                        module.score.color === "green"
                          ? "success"
                          : module.score.color === "orange"
                            ? "warning"
                            : "error"
                      }
                      className="ml-2"
                    >
                      {module.score.value}
                    </Badge>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
