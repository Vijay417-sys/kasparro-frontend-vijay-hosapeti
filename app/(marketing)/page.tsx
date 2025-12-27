export const dynamic = "force-dynamic";
import Link from "next/link";
import { Button } from "@/components/primitives/Button";
import { Card } from "@/components/primitives/Card";
import { exampleAudit } from "@/lib/mocks/loader";

export default function HomePage() {
  const modules = exampleAudit.modules;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="mb-24 text-center">
        <div className="hero-bg rounded-3xl bg-clip-padding p-16 backdrop-blur-sm">
          <div className="mb-6 inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-800">
            AI-First SEO Platform
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent sm:text-7xl md:text-8xl">
            AI-SEO Audit Platform
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-2xl leading-relaxed text-gray-700">
            Comprehensive SEO auditing powered by AI. Get actionable insights to
            improve your search visibility, trust signals, and content quality.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/app/audit">
              <Button size="lg" className="w-full shadow-xl sm:w-auto">
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
      <section className="mb-24">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold text-gray-900">
            Why AI-SEO vs Traditional SEO
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Built for the era of AI-powered search engines
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="group h-full border-2 border-transparent transition-all hover:border-indigo-200 hover:shadow-xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 text-4xl transition-transform group-hover:scale-110">
              🧠
            </div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              AI Understanding
            </h3>
            <p className="leading-relaxed text-gray-600">
              Analyzes content the way AI search engines do, not just keyword
              density. Understands context, intent, and semantic meaning.
            </p>
          </Card>
          <Card className="group h-full border-2 border-transparent transition-all hover:border-indigo-200 hover:shadow-xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 text-4xl transition-transform group-hover:scale-110">
              🔍
            </div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Comprehensive Modules
            </h3>
            <p className="leading-relaxed text-gray-600">
              Seven specialized audit modules covering content quality, E-E-A-T
              signals, technical SEO, AI readability, and more.
            </p>
          </Card>
          <Card className="group h-full border-2 border-transparent transition-all hover:border-indigo-200 hover:shadow-xl">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 text-4xl transition-transform group-hover:scale-110">
              ⚡
            </div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
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
      <section className="mb-24">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold text-gray-900">
            Core Audit Modules
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Seven specialized modules analyze every aspect of your SEO
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <Card
              key={module.id}
              className="group h-full transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">
                  {module.name}
                </h3>
                <span
                  className={`rounded-full px-3 py-1.5 text-sm font-bold shadow-sm ${
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
              <p className="leading-relaxed text-gray-600">
                {module.description}
              </p>
            </Card>
          ))}
        </div>
      </section>

      {/* Pipeline Visualization */}
      <section className="mb-24">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            From input to actionable insights in three steps
          </p>
        </div>
        <div className="rounded-3xl border-2 border-gray-200 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-12 shadow-2xl">
          <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
            <div className="flex-1 text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-4xl shadow-lg">
                📥
              </div>
              <div className="mb-4 text-4xl font-bold text-gray-900">Input</div>
              <p className="text-lg leading-relaxed text-gray-700">
                Website content, structure, and signals
              </p>
            </div>
            <div className="text-5xl font-bold text-indigo-400">→</div>
            <div className="flex-1 text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-4xl shadow-lg">
                ⚙️
              </div>
              <div className="mb-4 text-4xl font-bold text-gray-900">
                Modules
              </div>
              <p className="text-lg leading-relaxed text-gray-700">
                7 specialized audit modules analyze your content
              </p>
            </div>
            <div className="text-5xl font-bold text-indigo-400">→</div>
            <div className="flex-1 text-center">
              <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-4xl shadow-lg">
                📊
              </div>
              <div className="mb-4 text-4xl font-bold text-gray-900">
                Output
              </div>
              <p className="text-lg leading-relaxed text-gray-700">
                Scores, insights, issues, and recommendations
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
