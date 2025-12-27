import Link from "next/link";
import { Button } from "@/components/primitives/Button";
import { Card } from "@/components/primitives/Card";
import { exampleAudit } from "@/lib/mocks/loader";

export default function HomePage() {
  const modules = exampleAudit.modules;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="mb-20 text-center">
        <div className="hero-bg rounded-2xl bg-clip-padding p-12 backdrop-blur-sm">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
            AI-SEO Audit Platform
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-gray-700">
            Comprehensive SEO auditing powered by AI. Get actionable insights to
            improve your search visibility, trust signals, and content quality.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/app/audit">
              <Button size="lg" className="w-full sm:w-auto">
                Run AI-SEO Audit
              </Button>
            </Link>
            <Link href="/platform">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why AI-SEO vs Traditional SEO */}
      <section className="mb-20">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
          Why AI-SEO vs Traditional SEO
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="h-full">
            <div className="mb-4 text-3xl">🧠</div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              AI Understanding
            </h3>
            <p className="leading-relaxed text-gray-600">
              Analyzes content the way AI search engines do, not just keyword
              density. Understands context, intent, and semantic meaning.
            </p>
          </Card>
          <Card className="h-full">
            <div className="mb-4 text-3xl">🔍</div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Comprehensive Modules
            </h3>
            <p className="leading-relaxed text-gray-600">
              Seven specialized audit modules covering content quality, E-E-A-T
              signals, technical SEO, AI readability, and more.
            </p>
          </Card>
          <Card className="h-full">
            <div className="mb-4 text-3xl">⚡</div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Actionable Insights
            </h3>
            <p className="leading-relaxed text-gray-600">
              Get specific, prioritized recommendations with estimated impact
              scores. No generic advice—just actionable next steps.
            </p>
          </Card>
        </div>
      </section>

      {/* Core Modules Overview */}
      <section className="mb-20">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
          Core Audit Modules
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <Card key={module.id} className="h-full">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">
                  {module.name}
                </h3>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
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
              <p className="text-sm leading-relaxed text-gray-600">
                {module.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Pipeline Visualization */}
      <section className="mb-20">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
          How It Works
        </h2>
        <div className="rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white p-10 shadow-lg">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex-1 text-center">
              <div className="mb-4 inline-block rounded-full bg-blue-100 p-4">
                <span className="text-3xl">📥</span>
              </div>
              <div className="mb-3 text-3xl font-bold text-gray-900">Input</div>
              <p className="text-base leading-relaxed text-gray-600">
                Website content, structure, and signals
              </p>
            </div>
            <div className="text-4xl text-gray-400">→</div>
            <div className="flex-1 text-center">
              <div className="mb-4 inline-block rounded-full bg-purple-100 p-4">
                <span className="text-3xl">⚙️</span>
              </div>
              <div className="mb-3 text-3xl font-bold text-gray-900">
                Modules
              </div>
              <p className="text-base leading-relaxed text-gray-600">
                7 specialized audit modules analyze your content
              </p>
            </div>
            <div className="text-4xl text-gray-400">→</div>
            <div className="flex-1 text-center">
              <div className="mb-4 inline-block rounded-full bg-green-100 p-4">
                <span className="text-3xl">📊</span>
              </div>
              <div className="mb-3 text-3xl font-bold text-gray-900">
                Output
              </div>
              <p className="text-base leading-relaxed text-gray-600">
                Scores, insights, issues, and recommendations
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
