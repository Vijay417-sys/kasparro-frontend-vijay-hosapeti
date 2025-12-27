import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/primitives/Card";
import { exampleAudit } from "@/lib/mocks/loader";

export default function PlatformPage() {
  const sampleModule = exampleAudit.modules[0];
  const sampleIssue = sampleModule.issues[0];
  const sampleRecommendation = sampleModule.recommendations[0];

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">
        Platform Overview
      </h1>

      {/* Pipeline Diagram */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">
          Platform Architecture
        </h2>
        <div className="grid gap-6 md:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Input Assembler</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Collects and structures website data: content, metadata,
                technical signals, backlinks, and brand mentions. Prepares raw
                data for analysis.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Context Pack</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Enriches input data with industry context, competitor
                benchmarks, and AI search engine requirements. Provides
                framework for evaluation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modules</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Seven specialized audit modules analyze different aspects:
                Content Quality, E-E-A-T, Technical SEO, AI Readability, Link
                Profile, User Intent, and Brand Signals.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Outputs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Generates scores, insights, issues, and prioritized
                recommendations. Provides actionable next steps with estimated
                impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Sample Data */}
      <section className="mb-16">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Sample Output</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Sample Issue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <span className="text-sm font-medium">Severity: </span>
                  <span className="text-sm text-gray-600">
                    {sampleIssue.severity}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{sampleIssue.message}</p>
                {sampleIssue.affectedPages && (
                  <div>
                    <span className="text-sm font-medium">
                      Affected Pages:{" "}
                    </span>
                    <span className="text-sm text-gray-600">
                      {sampleIssue.affectedPages}
                    </span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sample Recommendation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <span className="text-sm font-medium">Priority: </span>
                  <span className="text-sm text-gray-600">
                    {sampleRecommendation.priority}
                  </span>
                </div>
                <p className="text-sm font-medium">
                  {sampleRecommendation.title}
                </p>
                <p className="text-sm text-gray-600">
                  {sampleRecommendation.description}
                </p>
                {sampleRecommendation.estimatedImpact && (
                  <div>
                    <span className="text-sm font-medium">Impact: </span>
                    <span className="text-sm text-gray-600">
                      {sampleRecommendation.estimatedImpact}
                    </span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
