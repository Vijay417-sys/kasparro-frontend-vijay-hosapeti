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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium text-gray-700">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-gray-900">{value}</span>
          {typeof value === "number" && (
            <Badge variant={badgeVariant as "success" | "warning" | "error"}>
              {value}/100
            </Badge>
          )}
        </div>
        {label && <p className="mt-2 text-sm text-gray-600">{label}</p>}
      </CardContent>
    </Card>
  );
}
