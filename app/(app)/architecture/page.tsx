import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/primitives/Card";
import { exampleAudit } from "@/lib/mocks/loader";
import { Badge } from "@/components/primitives/Badge";

export default function ArchitecturePage() {
  const modules = exampleAudit.modules;
  const sampleModule = modules[0];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="mb-4 text-5xl font-bold text-gray-900">
          Platform Architecture
        </h1>
        <p className="text-xl leading-relaxed text-gray-600">
          Understanding how Kasparro transforms website data into actionable
          AI-SEO insights through a modular pipeline architecture.
        </p>
      </div>

      {/* Architecture Overview */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">
          System Architecture
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="group h-full border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 transition-all hover:border-blue-300 hover:shadow-xl">
            <CardHeader>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-3xl shadow-lg">
                📥
              </div>
              <CardTitle className="text-xl">Input Assembler</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-base font-medium text-gray-700">
                Collects and structures raw website data from multiple sources:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-blue-600">•</span>
                  <span>Website content and structure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-blue-600">•</span>
                  <span>Metadata and technical signals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-blue-600">•</span>
                  <span>Backlink profiles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-blue-600">•</span>
                  <span>Brand mentions and citations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-blue-600">•</span>
                  <span>Social signals</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group h-full border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 transition-all hover:border-purple-300 hover:shadow-xl">
            <CardHeader>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-3xl shadow-lg">
                📦
              </div>
              <CardTitle className="text-xl">Context Pack</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-base font-medium text-gray-700">
                Enriches input data with contextual information:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-purple-600">•</span>
                  <span>Industry benchmarks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-purple-600">•</span>
                  <span>Competitor analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-purple-600">•</span>
                  <span>AI search engine requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-purple-600">•</span>
                  <span>Best practice frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-purple-600">•</span>
                  <span>Historical trends</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="group h-full border-2 border-indigo-200 bg-gradient-to-br from-indigo-50 to-blue-50 transition-all hover:border-indigo-300 hover:shadow-xl">
            <CardHeader>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-3xl shadow-lg">
                ⚙️
              </div>
              <CardTitle className="text-xl">Audit Modules</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-base font-medium text-gray-700">
                Seven specialized audit modules:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {modules.map((module) => (
                  <li key={module.id} className="flex items-center gap-2">
                    <span className="mt-1 text-indigo-600">•</span>
                    <span>{module.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="group h-full border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 transition-all hover:border-green-300 hover:shadow-xl">
            <CardHeader>
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-3xl shadow-lg">
                📊
              </div>
              <CardTitle className="text-xl">Output Surfaces</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-base font-medium text-gray-700">
                Generates comprehensive audit results:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-600">•</span>
                  <span>Module scores (0-100)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-600">•</span>
                  <span>Key insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-600">•</span>
                  <span>Issues with severity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-600">•</span>
                  <span>Prioritized recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-green-600">•</span>
                  <span>Estimated impact scores</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Data Flow Visualization */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">Data Flow</h2>
        <div className="rounded-3xl border-2 border-gray-200 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-12 shadow-2xl">
          <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
            <div className="flex-1 text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-4xl shadow-lg">
                📥
              </div>
              <div className="mb-4 text-3xl font-bold text-gray-900">
                Input Assembler
              </div>
              <p className="text-base leading-relaxed text-gray-700">
                Raw website data collection
              </p>
            </div>
            <div className="text-5xl font-bold text-indigo-400">→</div>
            <div className="flex-1 text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-4xl shadow-lg">
                📦
              </div>
              <div className="mb-4 text-3xl font-bold text-gray-900">
                Context Pack
              </div>
              <p className="text-base leading-relaxed text-gray-700">
                Data enrichment with context
              </p>
            </div>
            <div className="text-5xl font-bold text-indigo-400">→</div>
            <div className="flex-1 text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-4xl shadow-lg">
                ⚙️
              </div>
              <div className="mb-4 text-3xl font-bold text-gray-900">
                Modules
              </div>
              <p className="text-base leading-relaxed text-gray-700">
                7 specialized analysis modules
              </p>
            </div>
            <div className="text-5xl font-bold text-indigo-400">→</div>
            <div className="flex-1 text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-4xl shadow-lg">
                📊
              </div>
              <div className="mb-4 text-3xl font-bold text-gray-900">
                Outputs
              </div>
              <p className="text-base leading-relaxed text-gray-700">
                Actionable insights & recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Module Output */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">
          Example Module Output
        </h2>
        <p className="mb-6 text-lg text-gray-600">
          Here&apos;s what a module analysis produces (from actual audit data):
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-2 border-indigo-200 bg-indigo-50/30">
            <CardHeader>
              <div className="mb-4 flex items-center justify-between">
                <CardTitle className="text-xl">{sampleModule.name}</CardTitle>
                <Badge
                  variant={
                    sampleModule.score.color === "green"
                      ? "success"
                      : sampleModule.score.color === "orange"
                        ? "warning"
                        : "error"
                  }
                >
                  Score: {sampleModule.score.value}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-gray-600">
                {sampleModule.description}
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="mb-2 text-sm font-bold text-gray-800">
                    Insights ({sampleModule.insights.length}):
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {sampleModule.insights.slice(0, 2).map((insight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1 text-green-600">✓</span>
                        <span>{insight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-bold text-gray-800">
                    Issues ({sampleModule.issues.length}):
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {sampleModule.issues.slice(0, 2).map((issue) => (
                      <li key={issue.id} className="flex items-start gap-2">
                        <span className="mt-1 text-orange-600">⚠</span>
                        <span>{issue.message}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-bold text-gray-800">
                    Recommendations ({sampleModule.recommendations.length}):
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {sampleModule.recommendations.slice(0, 2).map((rec) => (
                      <li key={rec.id} className="flex items-start gap-2">
                        <span className="mt-1 text-blue-600">→</span>
                        <span>{rec.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl">All 7 Modules</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {modules.map((module) => (
                  <div
                    key={module.id}
                    className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-3"
                  >
                    <span className="font-medium text-gray-900">
                      {module.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                          module.score.color === "green"
                            ? "bg-green-100 text-green-800"
                            : module.score.color === "orange"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {module.score.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* System Thinking Explanation */}
      <section>
        <h2 className="mb-8 text-3xl font-bold text-gray-900">
          System Understanding
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-2 border-blue-200 bg-blue-50/30">
            <CardHeader>
              <CardTitle className="text-xl">
                How Input Assembler Works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 leading-relaxed text-gray-700">
                The Input Assembler crawls and structures website data into a
                unified format. It extracts content, metadata, technical signals
                (like Core Web Vitals), backlink data, and brand mentions from
                various sources.
              </p>
              <p className="leading-relaxed text-gray-700">
                This raw data is then normalized and prepared for the Context
                Pack layer, which adds industry context and benchmarks.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 bg-purple-50/30">
            <CardHeader>
              <CardTitle className="text-xl">
                How Modules Process Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 leading-relaxed text-gray-700">
                Each of the 7 modules receives enriched data from the Context
                Pack and applies specialized analysis algorithms. For example,
                the Content Quality module evaluates depth, accuracy, and
                comprehensiveness.
              </p>
              <p className="leading-relaxed text-gray-700">
                Modules output structured results: scores, insights, issues, and
                recommendations that feed into the Output Surfaces.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
