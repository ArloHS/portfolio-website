import { ArrowLeft, CheckCircle2, Database, GitBranch, Layers, Workflow } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectImageFallback } from "@/components/project-image-fallback"

const technologies = ["ML Engineering", "GCP", "BigQuery", "Dataform", "Bitbucket", "Feature Store", "Model Deployment", "Version Control"]

const improvements = [
  "Redesigned and refactored the organisation's GCP feature store, standardising feature naming and removing redundant variables.",
  "Enabled feature reuse across country portfolios, reducing duplication and improving consistency between development and production.",
  "Centralised model assets and version-controlled pipelines in Bitbucket so models can be tested locally and deployed through a controlled process.",
  "Unified model inputs and outputs behind one consistent function for the production scoring engine.",
  "Improved the path from data scientist experimentation to production scoring while preserving traceability and reproducibility.",
]

export default function FeatureStoreScoringEngineRefactorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/projects">
          <Button variant="outline" size="sm"><ArrowLeft className="mr-2 h-4 w-4" />Back to Projects</Button>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex justify-center mb-4"><Workflow className="h-9 w-9 text-teal-600" /></div>
          <h1 className="text-3xl md:text-5xl font-bold text-balance">Feature Store &amp; Scoring Engine Refactor</h1>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">Unifi Africa · ML Engineering</Badge>
            <Badge variant="outline">2026</Badge>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mt-5 text-pretty">Modernising the data and model foundations behind Unifi&apos;s production credit decisioning engine.</p>
        </header>

        <div className="relative h-[280px] md:h-[420px] rounded-lg overflow-hidden mb-12">
          <ProjectImageFallback src="/images/unifi_modelgarden.jpg" alt="Feature store and scoring engine architecture" fill className="object-cover" />
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {technologies.map((technology) => <Badge key={technology} variant="secondary">{technology}</Badge>)}
        </div>

        <Card className="mb-8 border-t-4 border-t-teal-600">
          <CardContent className="p-7 md:p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center"><Database className="mr-3 h-6 w-6 text-teal-600" />The challenge</h2>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">As credit models expanded across five country portfolios, shared features and model assets needed a clearer operating structure. The goal was to make the feature store easier to maintain, make models reusable across markets, and give the production scoring engine one reliable interface for consuming versioned model outputs.</p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card><CardContent className="p-7"><h2 className="text-2xl font-bold mb-5 flex items-center"><Layers className="mr-3 h-6 w-6 text-teal-600" />What I changed</h2><ul className="space-y-4">{improvements.map((item) => <li key={item} className="flex gap-3 text-slate-600 dark:text-slate-400 leading-relaxed"><CheckCircle2 className="h-5 w-5 text-teal-600 shrink-0 mt-0.5" />{item}</li>)}</ul></CardContent></Card>
          <Card><CardContent className="p-7"><h2 className="text-2xl font-bold mb-5 flex items-center"><GitBranch className="mr-3 h-6 w-6 text-teal-600" />Engineering workflow</h2><p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-5">The refactor connected local data science development with production delivery. Data scientists could develop and test models locally, commit versioned assets to Bitbucket, and deploy through a shared scoring interface with consistent inputs and outputs.</p><div className="flex flex-wrap gap-2">{["Reusable features", "Versioned models", "Local testing", "Production scoring", "Cross-country consistency"].map((item) => <Badge key={item} variant="outline">{item}</Badge>)}</div></CardContent></Card>
        </div>

        <Card className="mb-8"><CardContent className="p-7 md:p-8"><h2 className="text-2xl font-bold mb-4">Impact</h2><p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">The resulting foundation made model development more repeatable and production integration more straightforward. By removing unnecessary duplication and centralising version-controlled model assets, the scoring engine could support country-specific models while retaining a consistent engineering pattern across the organisation.</p></CardContent></Card>

        <div className="text-center"><Link href="/work/unifi-africa"><Button variant="outline">View Unifi Africa role</Button></Link></div>
      </div>
    </div>
  )
}
