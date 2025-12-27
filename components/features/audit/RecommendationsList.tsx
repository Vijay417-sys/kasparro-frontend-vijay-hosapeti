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

  const getPriorityGradient = (priority: Recommendation["priority"]) => {
    switch (priority) {
      case "high":
        return "from-red-50 to-rose-50 border-red-200";
      case "medium":
        return "from-orange-50 to-amber-50 border-orange-200";
      case "low":
        return "from-blue-50 to-cyan-50 border-blue-200";
      default:
        return "from-gray-50 to-gray-50 border-gray-200";
    }
  };

  return (
    <Card className="border-2 border-green-200 bg-green-50/30">
      <CardHeader>
        <CardTitle className="text-2xl">Recommendations</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              className={`rounded-xl border-2 bg-gradient-to-br ${getPriorityGradient(rec.priority)} p-6 shadow-sm transition-shadow hover:shadow-md`}
            >
              <div className="mb-4 flex items-center gap-3">
                <h3 className="text-xl font-bold text-gray-900">{rec.title}</h3>
                <Badge variant={getPriorityVariant(rec.priority)}>
                  {rec.priority}
                </Badge>
              </div>
              <p className="mb-4 text-base leading-relaxed text-gray-700">
                {rec.description}
              </p>
              {rec.actionItems.length > 0 && (
                <div className="mb-4">
                  <h4 className="mb-3 text-sm font-bold text-gray-800">
                    Action Items:
                  </h4>
                  <ul className="ml-4 space-y-2">
                    {rec.actionItems.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm leading-relaxed text-gray-700"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {rec.estimatedImpact && (
                <div className="rounded-lg bg-white/60 p-3">
                  <p className="text-sm font-semibold text-gray-800">
                    Estimated Impact:{" "}
                    <span className="font-normal text-gray-700">
                      {rec.estimatedImpact}
                    </span>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
