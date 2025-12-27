export const dynamic = "force-dynamic";

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
      <div className="mb-16 text-center">
        <h1 className="mb-6 text-6xl font-bold text-gray-900">
          Platform Overview
        </h1>
        <p className="mx-auto max-w-3xl text-xl text-gray-600">
          Understanding how Kasparro transforms website data into actionable
          AI-SEO insights
        </p>
      </div>

      {/* Pipeline Diagram */}
      <section className="mb-20">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
          Platform Architecture
        </h2>
        <div className="grid gap-8 md:grid-cols-4">
          <Card className="group h-full border-2 transition-all hover:border-indigo-300 hover:shadow-xl">
            <CardHeader>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-2xl shadow-lg">
                📥
              </div>
              <CardTitle className="text-xl">Input Assembler</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-gray-600">
                Collects and structures website data: content, metadata,
                technical signals, backlinks, and brand mentions. Prepares raw
                data for analysis.
              </p>
            </CardContent>
          </Card>

          <Card className="group h-full border-2 transition-all hover:border-indigo-300 hover:shadow-xl">
            <CardHeader>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-2xl shadow-lg">
                📦
              </div>
              <CardTitle className="text-xl">Context Pack</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-gray-600">
                Enriches input data with industry context, competitor
                benchmarks, and AI search engine requirements. Provides
                framework for evaluation.
              </p>
            </CardContent>
          </Card>

          <Card className="group h-full border-2 transition-all hover:border-indigo-300 hover:shadow-xl">
            <CardHeader>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-2xl shadow-lg">
                ⚙️
              </div>
              <CardTitle className="text-xl">Modules</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-gray-600">
                Seven specialized audit modules analyze different aspects:
                Content Quality, E-E-A-T, Technical SEO, AI Readability, Link
                Profile, User Intent, and Brand Signals.
              </p>
            </CardContent>
          </Card>

          <Card className="group h-full border-2 transition-all hover:border-indigo-300 hover:shadow-xl">
            <CardHeader>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-2xl shadow-lg">
                📊
              </div>
              <CardTitle className="text-xl">Outputs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed text-gray-600">
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
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
          Sample Output
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-2 border-orange-200 bg-orange-50/30">
            <CardHeader>
              <CardTitle className="text-xl">Sample Issue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-bold text-gray-700">
                    Severity:{" "}
                  </span>
                  <span className="rounded-md bg-orange-100 px-2 py-1 text-sm font-semibold text-orange-800">
                    {sampleIssue.severity}
                  </span>
                </div>
                <p className="text-base leading-relaxed text-gray-700">
                  {sampleIssue.message}
                </p>
                {sampleIssue.affectedPages && (
                  <div>
                    <span className="text-sm font-bold text-gray-700">
                      Affected Pages:{" "}
                    </span>
                    <span className="text-sm font-semibold text-gray-600">
                      {sampleIssue.affectedPages}
                    </span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 bg-green-50/30">
            <CardHeader>
              <CardTitle className="text-xl">Sample Recommendation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-bold text-gray-700">
                    Priority:{" "}
                  </span>
                  <span className="rounded-md bg-red-100 px-2 py-1 text-sm font-semibold text-red-800">
                    {sampleRecommendation.priority}
                  </span>
                </div>
                <p className="text-lg font-bold text-gray-900">
                  {sampleRecommendation.title}
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  {sampleRecommendation.description}
                </p>
                {sampleRecommendation.estimatedImpact && (
                  <div className="rounded-lg bg-white/60 p-3">
                    <span className="text-sm font-bold text-gray-800">
                      Impact:{" "}
                    </span>
                    <span className="text-sm text-gray-700">
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
