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
      <Card>
        <CardContent className="py-12 text-center">
          <p className="text-gray-600">No module selected.</p>
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
    <div className="space-y-6">
      <ModuleScore score={module.score} moduleName={module.name} />

      <Card>
        <CardHeader>
          <CardTitle>Key Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {module.insights.map((insight, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-1 text-green-600">•</span>
                <span className="text-sm text-gray-700">{insight}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {module.issues.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Issues & Flags</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {module.issues.map((issue) => (
                <div
                  key={issue.id}
                  className="rounded-md border border-gray-200 bg-gray-50 p-4"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant={getSeverityVariant(issue.severity)}>
                      {issue.severity}
                    </Badge>
                    {issue.category && (
                      <span className="text-xs text-gray-500">
                        {issue.category}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-700">{issue.message}</p>
                  {issue.affectedPages !== undefined && (
                    <p className="mt-1 text-xs text-gray-500">
                      Affected pages: {issue.affectedPages}
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
