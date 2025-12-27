import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/primitives/Card";
import { Badge } from "@/components/primitives/Badge";
import type { Recommendation } from "@/lib/schema/types";

interface RecommendationsListProps {
  recommendations: Recommendation[];
}

export function RecommendationsList({
  recommendations,
}: RecommendationsListProps) {
  const getPriorityVariant = (
    priority: Recommendation["priority"]
  ): "error" | "warning" | "info" => {
    switch (priority) {
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
    <Card>
      <CardHeader>
        <CardTitle>Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              className="border-b border-gray-200 pb-6 last:border-0 last:pb-0"
            >
              <div className="mb-2 flex items-center gap-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {rec.title}
                </h3>
                <Badge variant={getPriorityVariant(rec.priority)}>
                  {rec.priority}
                </Badge>
              </div>
              <p className="mb-3 text-sm text-gray-600">{rec.description}</p>
              {rec.actionItems.length > 0 && (
                <div className="mb-2">
                  <h4 className="mb-2 text-sm font-medium text-gray-700">
                    Action Items:
                  </h4>
                  <ul className="ml-4 list-disc space-y-1 text-sm text-gray-600">
                    {rec.actionItems.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {rec.estimatedImpact && (
                <p className="mt-2 text-sm font-medium text-gray-700">
                  Estimated Impact:{" "}
                  <span className="font-normal text-gray-600">
                    {rec.estimatedImpact}
                  </span>
                </p>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
