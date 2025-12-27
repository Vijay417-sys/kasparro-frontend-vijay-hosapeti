import React from "react";
import { render, screen } from "@testing-library/react";
import { AuditModuleView } from "@/components/features/audit/AuditModuleView";
import { exampleAudit } from "@/lib/mocks/loader";

describe("AuditModuleView", () => {
  it("should render loading skeleton when isLoading is true", () => {
    render(<AuditModuleView module={null} isLoading={true} />);

    const skeletons = screen.getAllByRole("generic");
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it("should render empty state when module is null and not loading", () => {
    render(<AuditModuleView module={null} isLoading={false} />);

    expect(screen.getByText("No module selected.")).toBeInTheDocument();
  });

  it("should render module data correctly", () => {
    const auditModule = exampleAudit.modules[0];

    render(<AuditModuleView module={auditModule} isLoading={false} />);

    // Check module name appears in score component
    expect(screen.getByText(auditModule.name)).toBeInTheDocument();

    // Check score value
    expect(
      screen.getByText(auditModule.score.value.toString())
    ).toBeInTheDocument();

    // Check insights
    auditModule.insights.forEach((insight) => {
      expect(screen.getByText(insight)).toBeInTheDocument();
    });

    // Check issues
    auditModule.issues.forEach((issue) => {
      expect(screen.getByText(issue.message)).toBeInTheDocument();
      const severityElements = screen.getAllByText(issue.severity);
      expect(severityElements.length).toBeGreaterThan(0);
    });

    // Check recommendations
    auditModule.recommendations.forEach((rec) => {
      expect(screen.getByText(rec.title)).toBeInTheDocument();
      expect(screen.getByText(rec.description)).toBeInTheDocument();
      const priorityElements = screen.getAllByText(rec.priority);
      expect(priorityElements.length).toBeGreaterThan(0);
    });
  });

  it("should render all sections when module has data", () => {
    const auditModule = exampleAudit.modules[0];

    render(<AuditModuleView module={auditModule} isLoading={false} />);

    expect(screen.getByText("Key Insights")).toBeInTheDocument();
    expect(screen.getByText("Issues & Flags")).toBeInTheDocument();
    expect(screen.getByText("Recommendations")).toBeInTheDocument();
  });

  it("should not render issues section when module has no issues", () => {
    const moduleWithoutIssues = {
      ...exampleAudit.modules[0],
      issues: [],
    };

    render(<AuditModuleView module={moduleWithoutIssues} isLoading={false} />);

    expect(screen.queryByText("Issues & Flags")).not.toBeInTheDocument();
  });

  it("should not render recommendations section when module has no recommendations", () => {
    const moduleWithoutRecs = {
      ...exampleAudit.modules[0],
      recommendations: [],
    };

    render(<AuditModuleView module={moduleWithoutRecs} isLoading={false} />);

    expect(screen.queryByText("Recommendations")).not.toBeInTheDocument();
  });
});
