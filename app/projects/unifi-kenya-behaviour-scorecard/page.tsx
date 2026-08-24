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
  Layers,
  Target,
  TrendingUp,
  Users,
} from "lucide-react"
import { ProjectImageFallback } from "@/components/project-image-fallback"
import Link from "next/link"

export default function KenyaScorecardPage() {
  const technologies = [
    "Python",
    "LightGBM",
    "Bayesian Optimisation",
    "Recursive Feature Elimination",
    "Feature Engineering",
    "Score Calibration",
    "Credit Risk Modelling",
    "GCP",
    "BigQuery",
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
              Unifi Kenya Credit Behavioural Scorecard
            </h1>
          </div>
          <h2 className="text-lg md:text-xl font-medium mb-6 text-slate-700 dark:text-slate-300">
            A rebuilt, calibrated and productionised behavioural scorecard driving credit
            limit decisions across the Kenyan book
          </h2>
          <div className="flex items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Deployed May 2026</span>
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
            src="/images/unifi_kenya.jpg"
            alt="Unifi Kenya credit behavioural scorecard"
            fill
            className="object-cover"
          />
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technologies & Tools</h2>
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

        {/* Executive Summary */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Target className="mr-3 h-6 w-6 text-teal-600" />
              Project Overview
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                Unifi Kenya&apos;s existing behavioural scorecard, live since March 2025, had
                begun to show performance decay against a rapidly shifting portfolio. This
                project rebuilt it end-to-end on more recent data, delivering a materially
                stronger model that now directly determines the credit limits and loan amounts
                offered to behaviour clients across the Kenyan book.
              </p>
              <p className="leading-relaxed mb-4">
                The scorecard estimates the probability that an active behaviour client — one
                taking a subsequent loan — will reach three or more contractual delinquencies
                within six months. It was developed on twenty-four months of customer history,
                with a dedicated recent hold-out sample used throughout to test robustness
                against current portfolio dynamics.
              </p>
              <p className="leading-relaxed">
                Development ran across roughly six weeks, covering base model, feature
                engineering, challenger model, business documentation, limit framework, three
                technical review sessions, Credit Committee approval, and full productionisation.
                The model was deployed in May 2026 and, in the months since, has delivered the
                lowest 2@3 the Kenyan book has ever recorded.
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
                Modelling Approach
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>
                  • LightGBM selected as the core algorithm for its handling of mixed feature
                  types and non-linear interactions
                </li>
                <li>
                  • Recursive Feature Elimination applied iteratively — removing the least
                  important 5% of variables each pass — to reduce a broad candidate set into a
                  compact, high-performing subset
                </li>
                <li>
                  • Bayesian Optimisation used to tune LightGBM hyperparameters against the
                  recent hold-out sample
                </li>
                <li>• Score scaling fixed at 10:1 odds at 660, with 30 points doubling the odds</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Layers className="mr-3 h-5 w-5 text-blue-600" />
                Feature Engineering
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>
                  • Started from a broad candidate set of behavioural signals drawn from
                  customer history
                </li>
                <li>
                  • Designed and iterated on new engineered features informed by domain
                  understanding of the Kenyan portfolio
                </li>
                <li>
                  • Each new feature tested for both individual predictive contribution and
                  stability across time windows
                </li>
                <li>
                  • Engineered features delivered clear lift in the final model while keeping
                  ranking stable on recent data
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <ClipboardCheck className="mr-3 h-5 w-5 text-purple-600" />
                Technical Review Sessions
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>
                  • Three formal technical review sessions convened with the Head of Data,
                  Credit, and Data Science functions
                </li>
                <li>
                  • Reviews interrogated the base model, engineered feature set, calibration,
                  and challenger comparisons in depth
                </li>
                <li>
                  • Provided a governance touchpoint for feature validity, cutoff choice, and
                  alignment with the proposed limit framework
                </li>
                <li>
                  • Iterative feedback from each session shaped the final model before Credit
                  Committee sign-off
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <BarChart3 className="mr-3 h-5 w-5 text-green-600" />
                Validation & Calibration
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>
                  • Dual-sample design: development sample plus a recent hold-out to stress-test
                  the model against current portfolio dynamics
                </li>
                <li>
                  • AUC lifted from 0.62 (previous production model) to 0.67 on the recent
                  hold-out, with clean risk ranking across all score bands
                </li>
                <li>
                  • Calibration fitted directly on the recent hold-out — predicted probabilities
                  aligned closely with observed outcomes across every score band
                </li>
                <li>
                  • Confirms the model both ranks and quantifies risk correctly, enabling direct
                  use in limit calculations and expected-loss reporting
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Headline Metric */}
        <Card className="mb-12 bg-gradient-to-r from-teal-50 to-slate-50 dark:from-teal-950 dark:to-slate-950">
          <CardContent className="p-8 text-center">
            <p className="text-sm uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
              AUC on recent hold-out
            </p>
            <div className="text-6xl font-bold text-teal-600 mb-3">0.62 → 0.67</div>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A material lift in risk separation on recent data, achieved alongside a
              well-fitted calibration curve — the model is both a better ranker and a better
              probability estimator than the previous production version.
            </p>
          </CardContent>
        </Card>

        {/* Project Timeline */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Calendar className="mr-3 h-6 w-6 text-teal-600" />
              Project Timeline
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Roughly six weeks end-to-end, from first base model through to a fully
              productionised system integrated into Unifi Kenya&apos;s credit decisioning flow.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Phase 1: Modelling
                </h4>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                  Base model & experimentation
                </p>
                <ul className="text-xs text-blue-600 dark:text-blue-400 space-y-1">
                  <li>• Base LightGBM model</li>
                  <li>• Feature engineering iterations</li>
                  <li>• Challenger model comparison</li>
                  <li>• RFE and Bayesian hyperparameter tuning</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Phase 2: Review & Approval
                </h4>
                <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                  Governance and sign-off
                </p>
                <ul className="text-xs text-green-600 dark:text-green-400 space-y-1">
                  <li>• Business document and proposal</li>
                  <li>• Three technical review sessions</li>
                  <li>• Limit framework definition</li>
                  <li>• Credit Committee approval</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                  Phase 3: Deployment
                </h4>
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
                  Productionisation — May 2026
                </p>
                <ul className="text-xs text-purple-600 dark:text-purple-400 space-y-1">
                  <li>• Production deployment</li>
                  <li>• Credit change tracker integration</li>
                  <li>• Model performance expectations set</li>
                  <li>• Model health monitoring configured</li>
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
              The scorecard translates behavioural repayment history into an actionable risk
              score used directly in client decisioning. Sharper risk separation on recent data
              — backed by a well-fitted calibration curve — supports more precise credit limits
              and gave the Credit Committee a transparent, evidence-based foundation for approval.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                  Approved by the Credit Committee
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                  Fully productionised and live in the credit decisioning flow
                </li>
              </ul>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                  Directly determines loan limits and amounts offered to clients
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                  Delivered the lowest 2@3 the Kenyan book has ever recorded
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