import Link from "next/link";
import { Button } from "@/components/primitives/Button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/primitives/Card";
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
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
          Why AI-SEO vs Traditional SEO
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 text-3xl">🤖</div>
              <CardTitle>AI-First Understanding</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Optimized for how AI search engines (ChatGPT, Gemini,
                Perplexity) understand and rank content, not just traditional
                keyword matching.
              </p>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 text-3xl">🎯</div>
              <CardTitle>Intent-Based Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Analyzes user intent and semantic relationships, ensuring your
                content answers questions AI search engines prioritize.
              </p>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-lg">
            <CardHeader>
              <div className="mb-2 text-3xl">📊</div>
              <CardTitle>Trust & E-E-A-T Signals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Evaluates Experience, Expertise, Authoritativeness, and
                Trustworthiness signals that AI search engines value.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Core Modules Overview */}
      <section className="mb-24">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
          Core Modules Overview
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <Card key={module.id} className="transition-all hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    {module.score.value}/100
                  </span>
                  <span className="text-3xl">
                    {module.id === "content-quality" && "📝"}
                    {module.id === "eeat" && "⭐"}
                    {module.id === "technical-seo" && "⚙️"}
                    {module.id === "ai-readability" && "🤖"}
                    {module.id === "link-profile" && "🔗"}
                    {module.id === "user-intent" && "🎯"}
                    {module.id === "brand-signals" && "🏷️"}
                  </span>
                </div>
                <CardTitle className="text-xl">
                  {module.name
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  {module.insights[0] || "No insights available"}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pipeline Visualization */}
      <section className="mb-24">
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
          How Kasparro Works
        </h2>
        <div className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-5xl">📥</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Input</h3>
              <p className="text-gray-600">
                Website URLs, content, metadata, and brand context
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-5xl">🔍</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Analysis</h3>
              <p className="text-gray-600">
                7 AI-powered modules evaluate your SEO health
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-5xl">📊</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Output</h3>
              <p className="text-gray-600">
                Actionable insights, scores, and recommendations
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
