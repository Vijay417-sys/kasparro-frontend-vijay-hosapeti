import { Card } from "@/components/primitives/Card";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="mb-6 text-6xl font-bold text-gray-900">
          About Kasparro
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-gray-600">
          Building the future of AI-first SEO
        </p>
      </div>

      <section className="mb-16">
        <h2 className="mb-6 text-4xl font-bold text-gray-900">Mission</h2>
        <div className="space-y-4">
          <p className="text-lg leading-relaxed text-gray-700">
            Kasparro exists to help businesses understand and optimize for
            AI-powered search engines. As search evolves from keyword matching
            to semantic understanding, we provide the tools and insights needed
            to stay ahead.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Our platform combines deep technical analysis with AI-specific
            evaluation criteria, giving you a comprehensive view of how search
            engines—both traditional and AI-powered—perceive your content.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-4xl font-bold text-gray-900">
          Product Philosophy
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="h-full border-2 transition-all hover:shadow-lg">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 text-2xl">
              📈
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Data-Driven Insights
            </h3>
            <p className="leading-relaxed text-gray-600">
              Every recommendation is backed by data and includes estimated
              impact scores. No guesswork—just actionable insights.
            </p>
          </Card>
          <Card className="h-full border-2 transition-all hover:shadow-lg">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 text-2xl">
              🔄
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Comprehensive Coverage
            </h3>
            <p className="leading-relaxed text-gray-600">
              Seven specialized modules ensure no aspect of SEO is overlooked.
              From technical foundations to brand signals.
            </p>
          </Card>
          <Card className="h-full border-2 transition-all hover:shadow-lg">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 text-2xl">
              🚀
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">
              Future-Forward
            </h3>
            <p className="leading-relaxed text-gray-600">
              Built for the era of AI search. We evaluate content the way AI
              systems do, not just traditional search engines.
            </p>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-4xl font-bold text-gray-900">Founder</h2>
        <Card className="border-2 bg-gradient-to-br from-gray-50 to-white p-8">
          <p className="text-lg leading-relaxed text-gray-700">
            Kasparro was founded by a team of SEO experts and AI researchers who
            recognized the need for specialized tools in the age of AI-powered
            search. With years of experience in both traditional SEO and machine
            learning, we&apos;re uniquely positioned to help businesses navigate
            this transition.
          </p>
        </Card>
      </section>
    </div>
  );
}
