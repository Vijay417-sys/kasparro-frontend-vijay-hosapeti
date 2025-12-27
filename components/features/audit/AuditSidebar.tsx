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
      className={`${isMobile ? "w-full" : "w-64"} flex-shrink-0 border-r border-indigo-200/50 bg-white/80 backdrop-blur-sm`}
      role="navigation"
      aria-label="Audit modules"
    >
      <div className="sticky top-0 max-h-screen overflow-y-auto p-4">
        <h2 className="mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-lg font-bold text-transparent">
          Modules
        </h2>
        <ul className="space-y-2" role="list">
          {modules.map((module) => {
            const isSelected = selectedModuleId === module.id;
            return (
              <li key={module.id}>
                <button
                  type="button"
                  onClick={() => handleModuleClick(module.id)}
                  onKeyDown={(e) => handleKeyDown(e, module.id)}
                  className={`w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                    isSelected
                      ? "bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-900 shadow-md"
                      : "text-slate-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 hover:text-indigo-900"
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-current={isSelected ? "page" : undefined}
                  aria-label={`Select ${module.name} module`}
                >
                  <div className="flex items-center justify-between">
                    <span className="flex-1 font-semibold">{module.name}</span>
                    <Badge
                      variant={
                        module.score.color === "green"
                          ? "success"
                          : module.score.color === "orange"
                            ? "warning"
                            : "error"
                      }
                      className="ml-2 font-bold"
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
