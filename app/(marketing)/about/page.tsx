import { Card } from "@/components/primitives/Card";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-bold text-gray-900">About Kasparro</h1>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Mission</h2>
        <p className="mb-4 text-lg text-gray-600">
          Kasparro exists to help businesses understand and optimize for
          AI-powered search engines. As search evolves from keyword matching to
          semantic understanding, we provide the tools and insights needed to
          stay ahead.
        </p>
        <p className="text-lg text-gray-600">
          Our platform combines deep technical analysis with AI-specific
          evaluation criteria, giving you a comprehensive view of how search
          engines—both traditional and AI-powered—perceive your content.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">
          Product Philosophy
        </h2>
        <div className="space-y-4">
          <Card>
            <h3 className="mb-2 text-lg font-semibold">Data-Driven Insights</h3>
            <p className="text-gray-600">
              Every recommendation is backed by data and includes estimated
              impact scores. No guesswork—just actionable insights.
            </p>
          </Card>
          <Card>
            <h3 className="mb-2 text-lg font-semibold">
              Comprehensive Coverage
            </h3>
            <p className="text-gray-600">
              Seven specialized modules ensure no aspect of SEO is overlooked.
              From technical foundations to brand signals.
            </p>
          </Card>
          <Card>
            <h3 className="mb-2 text-lg font-semibold">Future-Forward</h3>
            <p className="text-gray-600">
              Built for the era of AI search. We evaluate content the way AI
              systems do, not just traditional search engines.
            </p>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Founder</h2>
        <Card>
          <p className="text-gray-600">
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
