import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  Database,
  GitBranch,
  Globe,
  Layers,
  Shield,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react"
import { ProjectImageFallback } from "@/components/project-image-fallback"
import Link from "next/link"

export default function FeatureStoreScoringEngineRefactorPage() {
  const technologies = [
    "Python",
    "Dataform",
    "BigQuery",
    "GCP",
    "Bitbucket",
    "Google Artifact Registry",
    "LightGBM",
    "joblib",
    "pytest",
    "Feature Store",
    "MLOps",
    "Version Control",
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
            <Workflow className="h-8 w-8 text-teal-600 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">
              Feature Store &amp; Scoring Engine Refactor
            </h1>
          </div>
          <h2 className="text-lg md:text-xl font-medium mb-6 text-slate-700 dark:text-slate-300">
            A ground-up rebuild of the feature and model infrastructure powering
            Unifi&apos;s credit decisioning across four African markets
          </h2>
          <div className="flex items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>2026 · Ongoing</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              <span>Unifi Africa · ML Engineering</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
          <ProjectImageFallback
            src="/images/unifi_modelgarden.jpg"
            alt="Feature store and scoring engine architecture"
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
              <Workflow className="mr-3 h-6 w-6 text-teal-600" />
              Project Overview
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                As credit models scaled across five country portfolios, the underlying
                feature and model infrastructure needed a full rebuild. The legacy feature
                store — cryptically named, duplicated across models, and difficult to reuse
                — was consolidated into a new GCP-native feature store, and model assets
                were centralised behind a single production scoring contract.
              </p>
              <p className="leading-relaxed mb-4">
                The new feature store, ModelGarden, is built in Dataform with a
                self-documenting naming convention across seven domains (Account
                Management, Demographics, Bureau, Affordability, Ubongo peer signals,
                Engineered, and Contact Centre). Each feature is defined once, versioned
                in code, and reused across countries and models.
              </p>
              <p className="leading-relaxed">
                The scoring engine sits behind a strict get / validate / transform /
                apply contract, with model artefacts serialised to Google Artifact
                Registry and country-specific implementations living in a shared
                Bitbucket repo. The same contract now powers behavioural scorecards in
                Kenya, Uganda, and South Africa, and has been extended to a new
                collections scorecard workstream.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Areas — 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Database className="mr-3 h-5 w-5 text-teal-600" />
                Feature Store Rebuild
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>
                  • Rebuilt the organisation&apos;s GCP feature store from the ground up
                  in Dataform, structured across six domain-owned .sqlx files plus a new
                  Contact Centre module
                </li>
                <li>
                  • Migrated features from the legacy CLIENT_SCORE_FEATURES table into
                  the new ModelGarden schema, resolving duplicates and consolidating
                  overlapping definitions
                </li>
                <li>
                  • Ran feature-level parity checks against legacy, identifying and
                  debugging value mismatches feature by feature
                </li>
                <li>
                  • Externalised feature specifications to versioned{" "}
                  <code className="text-sm bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                    feature_spec.json
                  </code>{" "}
                  files so every downstream model has a single source of truth
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <GitBranch className="mr-3 h-5 w-5 text-blue-600" />
                Scoring Engine Contract
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>
                  • Designed and rolled out a strict get / validate / transform / apply
                  contract consumed by the production scoring engine
                </li>
                <li>
                  • Structured a shared Bitbucket repo with per-country, per-model folders
                  (<code className="text-sm bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                    bhv-scorecard/ke/
                  </code>
                  ,{" "}
                  <code className="text-sm bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                    bhv-scorecard/za/
                  </code>
                  ,{" "}
                  <code className="text-sm bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                    bhv-scorecard/ug/
                  </code>
                  )
                </li>
                <li>
                  • Built an artifact registry helper as a transport layer to Google
                  Artifact Registry, serialising model bundles with joblib
                </li>
                <li>
                  • Every scoring output emits versioned metadata (MODEL_VERSION,
                  REPORT_CYCLE) so scored rows are fully traceable back to code
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Shield className="mr-3 h-5 w-5 text-purple-600" />
                Testing &amp; Validation
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>
                  • Built comprehensive pytest suites — static invariants, dtype and
                  range checks, transform / apply contracts, band assignment, and
                  BigQuery integration smoke tests
                </li>
                <li>
                  • Adversarial test coverage for edge cases: missing columns, corrupted
                  dtypes, out-of-range values, cycle-boundary conditions
                </li>
                <li>
                  • Data scientists can develop and test end-to-end locally before
                  anything touches production
                </li>
                <li>
                  • Feature-store validators enforce expected missingness thresholds per
                  feature rather than a single global rule
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Globe className="mr-3 h-5 w-5 text-green-600" />
                Multi-Country Footprint
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>
                  • Same contract now powers behavioural scorecards in Kenya, Uganda, and
                  South Africa, with Zambia integration in progress
                </li>
                <li>
                  • Extended into an entirely new domain — collections scorecards —
                  through a variant of the same contract, proving the framework
                  generalises beyond behavioural
                </li>
                <li>
                  • Country-specific quirks (schema paths, thresholds, feature
                  availability) handled through configuration, not code duplication
                </li>
                <li>
                  • ZA BHV v6 pipeline productionised through the new contract now scores
                  hundreds of thousands of rows per cycle across banded outputs
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Naming Convention Showcase */}
        <Card className="mb-12 bg-gradient-to-r from-teal-50 to-slate-50 dark:from-teal-950 dark:to-slate-950">
          <CardContent className="p-8">
            <div className="text-center">
              <p className="text-sm uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                Standardised Feature Naming
              </p>
              <h3 className="text-2xl font-bold mb-6 flex items-center justify-center">
                <Layers className="mr-3 h-6 w-6 text-teal-600" />
                One convention, every feature, every country
              </h3>
              <div className="inline-flex items-baseline gap-1 md:gap-2 font-mono text-2xl md:text-4xl font-bold mb-8 flex-wrap justify-center">
                <span className="text-teal-600">BUR</span>
                <span className="text-slate-400">_</span>
                <span className="text-blue-600">SCORE</span>
                <span className="text-slate-400">_</span>
                <span className="text-purple-600">MIN</span>
                <span className="text-slate-400">_</span>
                <span className="text-orange-600">12M</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-sm mb-6">
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg">
                  <div className="text-teal-600 font-bold mb-1">DOMAIN</div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Data source — Bureau, Account Mgmt, Demographics, Ubongo, etc.
                  </p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg">
                  <div className="text-blue-600 font-bold mb-1">SUBJECT</div>
                  <p className="text-slate-600 dark:text-slate-400">
                    What is being measured
                  </p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg">
                  <div className="text-purple-600 font-bold mb-1">AGGREGATION</div>
                  <p className="text-slate-600 dark:text-slate-400">
                    MAX, MIN, TOT, AVG, CNT, RAT, CONSEC, MS
                  </p>
                </div>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-lg">
                  <div className="text-orange-600 font-bold mb-1">TIME WINDOW</div>
                  <p className="text-slate-600 dark:text-slate-400">
                    CUR, 12M, 18M, 24M, 60D
                  </p>
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Replaces legacy cryptic names ({" "}
                <code className="text-sm bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">
                  BE021
                </code>
                ,{" "}
                <code className="text-sm bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded">
                  AR101_A
                </code>
                ) with a self-documenting convention any modeller — new or existing — can
                read at a glance across every country portfolio.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Project Timeline / Phases */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Calendar className="mr-3 h-6 w-6 text-teal-600" />
              Delivery Phases
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              A phased rollout that let production keep running on legacy assets while
              each layer of the new infrastructure was built, tested, and swapped in.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Phase 1: Feature Store
                </h4>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                  Rebuild &amp; migrate
                </p>
                <ul className="text-xs text-blue-600 dark:text-blue-400 space-y-1">
                  <li>• New Dataform-native feature store</li>
                  <li>• Domain / subject / aggregation / time-window convention</li>
                  <li>• Legacy CSF migration and parity checks</li>
                  <li>• Feature dictionary and modeller reference</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Phase 2: Scoring Engine
                </h4>
                <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                  Contract &amp; repo
                </p>
                <ul className="text-xs text-green-600 dark:text-green-400 space-y-1">
                  <li>• Shared Bitbucket repo, per-country folder layout</li>
                  <li>• get / validate / transform / apply contract</li>
                  <li>• Google Artifact Registry integration</li>
                  <li>• Pytest suites and local-dev workflow</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                  Phase 3: Rollout
                </h4>
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">
                  Multi-country &amp; new domains
                </p>
                <ul className="text-xs text-purple-600 dark:text-purple-400 space-y-1">
                  <li>• ZA BHV v6 productionised through new contract</li>
                  <li>• Kenya and Uganda BHV rebuilds ported</li>
                  <li>• Extended to collections scorecard workstream</li>
                  <li>• Ongoing feature and country onboarding</li>
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
              Impact
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
              The refactor turned model development from a bespoke, per-model exercise
              into a repeatable engineering pattern. Data scientists develop and test
              locally, features are defined once and reused across countries, and the
              path from experimentation to production runs through a controlled,
              versioned, reproducible pipeline.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                  Feature reuse across country portfolios, removing duplication between
                  dev and production
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                  Every model artefact versioned, traceable, and reproducible from
                  Bitbucket to Artifact Registry to scoring output
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                  Faster onboarding for new modellers thanks to a self-documenting naming
                  convention
                </li>
              </ul>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                  Unified scoring contract powering BHV scorecards in Kenya, Uganda, and
                  South Africa
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                  Framework proved general enough to extend cleanly to a new collections
                  scorecard workstream
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />
                  Test-driven local dev workflow catches regressions before they reach
                  the scoring engine
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