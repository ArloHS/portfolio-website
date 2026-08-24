import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  BarChart3,
  Brain,
  Calendar,
  CheckCircle2,
  ClipboardCheck,
  Globe,
  PhoneCall,
  Target,
  TrendingUp,
  Users,
} from "lucide-react"
import { ProjectImageFallback } from "@/components/project-image-fallback"
import Link from "next/link"

export default function CollectionsPrioritizationModelPage() {
  const technologies = [
    "Python",
    "LightGBM",
    "BigQuery",
    "GCP",
    "Feature Engineering",
    "Probability Calibration",
    "Threshold Optimisation",
    "ModelGarden Pipeline",
    "Credit Risk Modelling",
    "MLOps",
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/projects">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Button>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Target className="h-8 w-8 text-teal-600 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Collections Prioritisation Models
            </h1>
          </div>
          <h2 className="text-lg md:text-xl font-medium mb-6 text-slate-700 dark:text-slate-300">
            Country-specific LightGBM models that rank debtors for the contact
            centre, paired with a full redesign of the collections queue mechanics
          </h2>
          <div className="flex items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Deployed August 2026</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              <span>Unifi Africa · Credit Risk / Data Science</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
          <ProjectImageFallback
            src="/images/unifi_collections.jpg"
            alt="Collections Prioritisation Models"
            fill
            className="object-cover"
          />
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technologies &amp; Tools</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-slate-100 dark:bg-slate-800 text-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Project Overview */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Target className="mr-3 h-6 w-6 text-teal-600" />
              Project Overview
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                Unifi&apos;s contact centre works delinquent clients across four African
                markets — South Africa, Zambia, Uganda, and Kenya. The previous
                prioritisation was driven by two static rules (proximity to a client&apos;s
                pay date and prior call attempts), giving every client in a recency
                bucket the same treatment. This project replaced that logic with a
                machine-learning-driven prioritisation and a redesigned queue.
              </p>
              <p className="leading-relaxed mb-4">
                A LightGBM model per country now scores every debtor daily with the
                probability that they will make a minimum qualifying payment given they
                are called. That probability drives a single unified queue in place of
                the old per-recency queues, giving the contact centre a live, dynamic
                ranking of who to call first — replacing static rules with a signal that
                updates as client behaviour changes.
              </p>
              <p className="leading-relaxed">
                The full project bundled the ranking models with a redesign of contact
                centre mechanics — day-based recency rotation, an R0 holdout for high
                natural-payment clients, and a phased R0 removal test. After three
                technical review sessions and formal business sign-off, all four
                country models and the new queue mechanics were retrained, deployed to
                production, and rolled out in August 2026.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Areas — 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Brain className="mr-3 h-5 w-5 text-teal-600" />
                Ranking Model Design
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>
                  • LightGBM classifier per country, retrained to a
                  single-model-per-country design ahead of production
                </li>
                <li>
                  • Target: probability the client makes a minimum qualifying payment
                  given being called
                </li>
                <li>
                  • Comparison of segmented (per-recency) vs unified (all-recency) model
                  designs at country level, selecting the best AUC and calibration in
                  each market
                </li>
                <li>
                  • Feature engineering across transactional, behavioural, demographic,
                  and recency-based signals
                </li>
                <li>
                  • Threshold optimisation to balance recovery gains against agent
                  capacity and cost
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <PhoneCall className="mr-3 h-5 w-5 text-blue-600" />
                Contact Centre Mechanics
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>
                  • Single unified queue: all recency segments collapsed into one
                  probability-ranked list per country
                </li>
                <li>
                  • Day-based recency rotation across the week, with R0Plus and R0 fixed
                  at the top of the queue to respect country-specific calling windows
                </li>
                <li>
                  • R0 holdout test: high-probability R0 clients pushed to the back of
                  the queue to measure natural payment behaviour without agent contact
                </li>
                <li>
                  • R0 removal test: consistent natural payers identified through the
                  holdout are progressively removed from the queue altogether
                </li>
                <li>
                  • Task management, targets, and agent workflow left untouched — only
                  ordering changes
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <ClipboardCheck className="mr-3 h-5 w-5 text-purple-600" />
                Governance &amp; Sign-Off
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>
                  • Full written business proposal covering ranking methodology and
                  contact centre mechanics, with per-country / per-recency benchmarks
                </li>
                <li>
                  • Three technical review sessions interrogating model design,
                  calibration, and mechanic changes
                </li>
                <li>
                  • Formal business sign-off across data, credit, and contact centre
                  operations before production rollout
                </li>
                <li>
                  • Test plans defined up-front for the R0 holdout and R0 removal
                  experiments, with success criteria agreed in advance
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <BarChart3 className="mr-3 h-5 w-5 text-green-600" />
                Validation &amp; Calibration
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>
                  • AUC lifted across every recency segment in every country versus
                  the previous production model
                </li>
                <li>
                  • Calibration measured with Weighted Expected Calibration Error
                  (WECE), tracking how closely predicted probabilities match observed
                  payment rates
                </li>
                <li>
                  • Zambia illustrative benchmark: WECE dropped from 22.24% (Poor) to
                  2.03% (Good) on R0, with directionally similar improvements across
                  R1, R2, and R3+
                </li>
                <li>
                  • Comparable calibration improvements observed across the other three
                  country deployments
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Headline Metric */}
        <Card className="mb-12 bg-gradient-to-r from-teal-50 to-slate-50 dark:from-teal-950 dark:to-slate-950">
          <CardContent className="p-8 text-center">
            <p className="text-sm uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
              AUC lift · Zambia recency-0 example
            </p>
            <div className="text-6xl font-bold text-teal-600 mb-3">0.63 → 0.91</div>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A step-change in discrimination on the largest recency segment
              (n=211,685), with meaningful AUC lifts and matching calibration
              improvements repeated across every country and every recency bucket.
            </p>
          </CardContent>
        </Card>

        {/* Delivery Phases */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Calendar className="mr-3 h-6 w-6 text-teal-600" />
              Delivery Phases
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              A staged programme from initial multi-country modelling through business
              approval to a full retrain and coordinated August 2026 deployment.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Phase 1: Modelling
                </h4>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                  Multi-country model design
                </p>
                <ul className="text-xs text-blue-600 dark:text-blue-400 space-y-1">
                  <li>• LightGBM classifiers per country</li>
                  <li>• Segmented vs unified design comparisons</li>
                  <li>• Feature engineering &amp; calibration</li>
                  <li>• AUC / WECE benchmarking against legacy</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Phase 2: Proposal &amp; Governance
                </h4>
                <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                  Reviews and sign-off
                </p>
                <ul className="text-xs text-green-600 dark:text-green-400 space-y-1">
                  <li>• Written business proposal (March 2026)</li>
                  <li>• Contact centre mechanic redesign</li>
                  <li>• Three technical review sessions</li>
                  <li>• Cross-functional business sign-off</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                  Phase 3: Retrain &amp; Deploy
                </h4>
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
                  Production rollout · August 2026
                </p>
                <ul className="text-xs text-purple-600 dark:text-purple-400 space-y-1">
                  <li>• Retrained to single-model-per-country design</li>
                  <li>• Deployed across SA, ZM, UG, KE</li>
                  <li>• Unified queue and rotation mechanics live</li>
                  <li>• R0 holdout &amp; removal experiments in progress</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Impact */}
        <Card className="mb-12 bg-gradient-to-r from-teal-50 to-slate-50 dark:from-teal-950 dark:to-slate-950">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <TrendingUp className="mr-3 h-6 w-6 text-teal-600" />
              Business Impact
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
              The new prioritisation replaces static rules with a live, dynamic ranking
              that reorders the contact centre queue every day. Paired with the queue
              redesign, it lets Unifi extract more value per call while giving frontline
              agents a cleaner, faster, more consistent workflow across all four
              markets.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                  Higher-quality collection contact — the right clients called first,
                  every day
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                  Well-calibrated probabilities make the score usable directly in
                  operations, not just for ranking
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                  Unified queue reduces agent context-switching between recency buckets
                </li>
              </ul>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                  Live across all four Unifi markets: South Africa, Zambia, Uganda,
                  Kenya
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                  Foundation for the R0 holdout and progressive-removal experiments now
                  running in production
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                  <Globe className="h-4 w-4 inline shrink-0 mt-1" />
                  <span>
                    Extends the ModelGarden contract to a new domain beyond
                    behavioural scorecards
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Back link */}
        <div className="text-center">
          <Link href="/work/unifi-africa">
            <Button variant="outline">View Unifi Africa role</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}