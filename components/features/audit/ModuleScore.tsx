import React from "react";
import { Card, CardContent } from "@/components/primitives/Card";
import type { Score } from "@/lib/schema/types";

interface ModuleScoreProps {
  score: Score;
  moduleName: string;
}

export function ModuleScore({ score, moduleName }: ModuleScoreProps) {
  const getScoreColor = (color: Score["color"]) => {
    switch (color) {
      case "green":
        return "text-green-600";
      case "orange":
        return "text-orange-600";
      case "red":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getScoreBgColor = (color: Score["color"]) => {
    switch (color) {
      case "green":
        return "bg-green-100";
      case "orange":
        return "bg-orange-100";
      case "red":
        return "bg-red-100";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <Card>
      <CardContent className="py-8">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            {moduleName}
          </h2>
          <div
            className={`mx-auto mb-2 flex h-32 w-32 items-center justify-center rounded-full ${getScoreBgColor(score.color)}`}
          >
            <span
              className={`text-4xl font-bold ${getScoreColor(score.color)}`}
            >
              {score.value}
            </span>
          </div>
          <p className={`text-lg font-semibold ${getScoreColor(score.color)}`}>
            {score.label}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
