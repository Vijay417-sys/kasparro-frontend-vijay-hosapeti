import Link from "next/link";
import { Button } from "@/components/primitives/Button";
import { Card } from "@/components/primitives/Card";
import { exampleAudit } from "@/lib/mocks/loader";

export default function HomePage() {
  const modules = exampleAudit.modules;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          AI-SEO Audit Platform
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
          Comprehensive SEO auditing powered by AI. Get actionable insights to
          improve your search visibility, trust signals, and content quality.
        </p>
        <Link href="/app/audit">
          <Button size="lg">Run AI-SEO Audit</Button>
        </Link>
      </section>

      {/* Why AI-SEO vs Traditional SEO */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">
          Why AI-SEO vs Traditional SEO
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <h3 className="mb-2 text-lg font-semibold">AI Understanding</h3>
            <p className="text-gray-600">
              Analyzes content the way AI search engines do, not just keyword
              density. Understands context, intent, and semantic meaning.
            </p>
          </Card>
          <Card>
            <h3 className="mb-2 text-lg font-semibold">
              Comprehensive Modules
            </h3>
            <p className="text-gray-600">
              Seven specialized audit modules covering content quality, E-E-A-T
              signals, technical SEO, AI readability, and more.
            </p>
          </Card>
          <Card>
            <h3 className="mb-2 text-lg font-semibold">Actionable Insights</h3>
            <p className="text-gray-600">
              Get specific, prioritized recommendations with estimated impact
              scores. No generic advice—just actionable next steps.
            </p>
          </Card>
        </div>
      </section>

      {/* Core Modules Overview */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">
          Core Audit Modules
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <Card key={module.id}>
              <h3 className="mb-2 text-lg font-semibold">{module.name}</h3>
              <p className="text-sm text-gray-600">{module.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Pipeline Visualization */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold text-gray-900">How It Works</h2>
        <div className="rounded-lg border border-gray-200 bg-white p-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex-1 text-center">
              <div className="mb-2 text-2xl font-bold text-gray-900">Input</div>
              <p className="text-sm text-gray-600">
                Website content, structure, and signals
              </p>
            </div>
            <div className="text-2xl text-gray-400">→</div>
            <div className="flex-1 text-center">
              <div className="mb-2 text-2xl font-bold text-gray-900">
                Modules
              </div>
              <p className="text-sm text-gray-600">
                7 specialized audit modules analyze your content
              </p>
            </div>
            <div className="text-2xl text-gray-400">→</div>
            <div className="flex-1 text-center">
              <div className="mb-2 text-2xl font-bold text-gray-900">
                Output
              </div>
              <p className="text-sm text-gray-600">
                Scores, insights, issues, and recommendations
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
