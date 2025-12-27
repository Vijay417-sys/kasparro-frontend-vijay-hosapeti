import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/primitives/Card";
import { Badge } from "@/components/primitives/Badge";

interface SnapshotCardProps {
  title: string;
  value: number | string;
  label?: string;
  variant?: "default" | "success" | "warning" | "error";
}

export function SnapshotCard({
  title,
  value,
  label,
  variant = "default",
}: SnapshotCardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "success";
    if (score >= 60) return "warning";
    return "error";
  };

  const badgeVariant =
    typeof value === "number" ? getScoreColor(value) : variant;

  const getGradientBg = (score: number) => {
    if (score >= 80) return "from-green-50 to-emerald-50";
    if (score >= 60) return "from-orange-50 to-amber-50";
    return "from-red-50 to-rose-50";
  };

  return (
    <Card
      className={`group h-full transition-all hover:shadow-xl ${
        typeof value === "number"
          ? `bg-gradient-to-br ${getGradientBg(value)} border-2`
          : ""
      }`}
    >
      <CardHeader>
        <CardTitle className="text-base font-semibold text-gray-700">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-3">
          <span className="text-4xl font-extrabold text-gray-900">{value}</span>
          {typeof value === "number" && (
            <Badge
              variant={badgeVariant as "success" | "warning" | "error"}
              className="text-xs font-bold"
            >
              {value}/100
            </Badge>
          )}
        </div>
        {label && (
          <p className="mt-3 text-sm font-medium text-gray-600">{label}</p>
        )}
      </CardContent>
    </Card>
  );
}
