import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/primitives/Card";

export default function ArchitecturePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">
        Platform Architecture
      </h1>

      <section className="mb-12">
        <p className="mb-6 text-lg text-gray-600">
          Kasparro&apos;s platform is built on a modular architecture that
          processes website data through specialized analysis modules to produce
          actionable SEO insights.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Input Assembler</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm text-gray-600">
                Collects and structures raw website data from multiple sources:
              </p>
              <ul className="ml-4 list-disc space-y-1 text-sm text-gray-600">
                <li>Website content and structure</li>
                <li>Metadata and technical signals</li>
                <li>Backlink profiles</li>
                <li>Brand mentions and citations</li>
                <li>Social signals</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Context Pack</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm text-gray-600">
                Enriches input data with contextual information:
              </p>
              <ul className="ml-4 list-disc space-y-1 text-sm text-gray-600">
                <li>Industry benchmarks</li>
                <li>Competitor analysis</li>
                <li>AI search engine requirements</li>
                <li>Best practice frameworks</li>
                <li>Historical trends</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modules</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm text-gray-600">
                Seven specialized audit modules:
              </p>
              <ul className="ml-4 list-disc space-y-1 text-sm text-gray-600">
                <li>Content Quality</li>
                <li>E-E-A-T Signals</li>
                <li>Technical SEO</li>
                <li>AI Readability</li>
                <li>Link Profile</li>
                <li>User Intent Alignment</li>
                <li>Brand Signals</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Outputs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm text-gray-600">
                Generates comprehensive audit results:
              </p>
              <ul className="ml-4 list-disc space-y-1 text-sm text-gray-600">
                <li>Module scores (0-100)</li>
                <li>Key insights</li>
                <li>Issues with severity</li>
                <li>Prioritized recommendations</li>
                <li>Estimated impact scores</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Data Flow</h2>
        <div className="rounded-lg border border-gray-200 bg-white p-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex-1 text-center">
              <div className="mb-2 text-xl font-bold text-gray-900">
                Input Assembler
              </div>
              <p className="text-sm text-gray-600">Raw website data</p>
            </div>
            <div className="text-2xl text-gray-400">→</div>
            <div className="flex-1 text-center">
              <div className="mb-2 text-xl font-bold text-gray-900">
                Context Pack
              </div>
              <p className="text-sm text-gray-600">Enriched data</p>
            </div>
            <div className="text-2xl text-gray-400">→</div>
            <div className="flex-1 text-center">
              <div className="mb-2 text-xl font-bold text-gray-900">
                Modules
              </div>
              <p className="text-sm text-gray-600">Analysis</p>
            </div>
            <div className="text-2xl text-gray-400">→</div>
            <div className="flex-1 text-center">
              <div className="mb-2 text-xl font-bold text-gray-900">
                Outputs
              </div>
              <p className="text-sm text-gray-600">Actionable insights</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
