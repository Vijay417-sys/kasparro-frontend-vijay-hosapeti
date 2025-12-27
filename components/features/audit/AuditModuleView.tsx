import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/primitives/Card";
import { Badge } from "@/components/primitives/Badge";
import { ModuleScore } from "./ModuleScore";
import { RecommendationsList } from "./RecommendationsList";
import { Skeleton } from "@/components/primitives/Skeleton";
import type { Module } from "@/lib/schema/types";

interface AuditModuleViewProps {
  module: Module | null;
  isLoading?: boolean;
}

export function AuditModuleView({
  module,
  isLoading = false,
}: AuditModuleViewProps) {
  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-48 w-full" />
      </div>
    );
  }

  if (!module) {
    return (
      <Card className="border-2 border-dashed">
        <CardContent className="py-16 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
            <span className="text-3xl">📋</span>
          </div>
          <p className="text-lg font-medium text-gray-600">
            No module selected.
          </p>
        </CardContent>
      </Card>
    );
  }

  const getSeverityVariant = (
    severity: "critical" | "high" | "medium" | "low"
  ): "error" | "warning" | "info" => {
    switch (severity) {
      case "critical":
      case "high":
        return "error";
      case "medium":
        return "warning";
      case "low":
        return "info";
      default:
        return "info";
    }
  };

  return (
    <div className="space-y-8">
      <ModuleScore score={module.score} moduleName={module.name} />

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-2xl">Key Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {module.insights.map((insight, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                  ✓
                </span>
                <span className="text-base leading-relaxed text-gray-700">
                  {insight}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {module.issues.length > 0 && (
        <Card className="border-2 border-orange-200 bg-orange-50/30">
          <CardHeader>
            <CardTitle className="text-2xl">Issues & Flags</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {module.issues.map((issue) => (
                <div
                  key={issue.id}
                  className="rounded-xl border-2 border-gray-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <Badge variant={getSeverityVariant(issue.severity)}>
                      {issue.severity}
                    </Badge>
                    {issue.category && (
                      <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                        {issue.category}
                      </span>
                    )}
                  </div>
                  <p className="mb-2 text-base font-medium text-gray-900">
                    {issue.message}
                  </p>
                  {issue.affectedPages !== undefined && (
                    <p className="text-sm text-gray-600">
                      Affected pages:{" "}
                      <span className="font-semibold">
                        {issue.affectedPages}
                      </span>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {module.recommendations.length > 0 && (
        <RecommendationsList recommendations={module.recommendations} />
      )}
    </div>
  );
}
