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
        return "text-green-700";
      case "orange":
        return "text-orange-700";
      case "red":
        return "text-red-700";
      default:
        return "text-gray-700";
    }
  };

  const getScoreBgGradient = (color: Score["color"]) => {
    switch (color) {
      case "green":
        return "from-green-100 via-emerald-100 to-green-100";
      case "orange":
        return "from-orange-100 via-amber-100 to-orange-100";
      case "red":
        return "from-red-100 via-rose-100 to-red-100";
      default:
        return "from-gray-100 to-gray-100";
    }
  };

  const getRingColor = (color: Score["color"]) => {
    switch (color) {
      case "green":
        return "ring-green-300";
      case "orange":
        return "ring-orange-300";
      case "red":
        return "ring-red-300";
      default:
        return "ring-gray-300";
    }
  };

  return (
    <Card className="border-2 shadow-lg">
      <CardContent className="py-12">
        <div className="text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            {moduleName}
          </h2>
          <div
            className={`mx-auto mb-4 flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br ${getScoreBgGradient(score.color)} ring-4 ${getRingColor(score.color)} shadow-xl`}
          >
            <span
              className={`text-5xl font-extrabold ${getScoreColor(score.color)}`}
            >
              {score.value}
            </span>
          </div>
          <p className={`text-2xl font-bold ${getScoreColor(score.color)}`}>
            {score.label}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
