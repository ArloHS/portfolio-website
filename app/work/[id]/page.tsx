import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Clock,
  Building2,
  Briefcase,
  ChevronRight,
  ExternalLink,
} from "lucide-react"
import { ProjectImageFallback } from "@/components/project-image-fallback"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
const workExperiences = [{ id: "artefact", company: "Artefact (prev AdvanceGuidance)", logo: "/images/artefact.png", role: "Senior Machine Learning Engineer", startDate: "2026-09", endDate: null, location: "South Africa", companyDescription: "Artefact is a global data and AI consulting firm. Following its acquisition of Cape Town-based AdvanceGuidance, Artefact South Africa helps organisations turn data and artificial intelligence into scalable business solutions.", jobDescription: "As a Senior Machine Learning Engineer, I build production-grade machine learning systems with strong software engineering foundations, including reliable data pipelines, model deployment, MLOps, CI/CD, monitoring, and observability.", technologies: ["Python", "SQL", "MLOps", "Machine Learning", "Generative AI", "Kubernetes", "CI/CD", "Azure Databricks", "Docker", "Model Deployment", "Model Monitoring"] }, { id: "unifi-africa", company: "Unifi Africa", logo: "/images/unifi-logo.jpg", role: "Data Scientist", startDate: "2025-01", endDate: null, location: "South Africa", companyDescription: "Unifi Africa is a fintech company providing personal credit solutions across Africa through technology and data-driven lending.", jobDescription: "I apply machine learning and statistical modeling to improve collections, credit risk, and customer outcomes.", technologies: ["Python", "SQL", "Machine Learning"] }]
const getWorkById = (id: string) => workExperiences.find((work) => work.id === id)
const getWorkProjects = (_id: string) => []
const formatDateRange = (start: string, end: string | null) => `${start} - ${end || "Present"}`

const unifiHighlights = [
  "Developed and productionised end-to-end credit risk scorecards, including behavioural scoring models that determine client risk categories and scores.",
  "Developed and deployed collections prioritisation models across all five country portfolios, helping country teams focus calling activity on customers with the highest expected payment likelihood.",
  "Architected and refactored the organisation's GCP feature store, improving naming standards, feature reuse, and consistency across country portfolios.",
  "Established a centralised model repository with version-controlled pipelines integrated into the production scoring engine.",
  "Contributed to the development and productionisation of post-scorecard limit proposals, connecting model outputs to practical credit decisions.",
]

const unifiLeadership = [
  "Chair of the Tanzania Credit Committee, contributing to credit policy, risk decisions, and limit governance.",
  "Chair of the Tanzania Employer Risk Committee, supporting employer-level risk assessment and lending decisions.",
]

const unifiOperatingRhythm = [
  "Delivered Monday-morning data insights to the Zambia team, translating portfolio performance and risk signals into clear actions for the week ahead.",
  "Managed incoming data and credit-risk queries from country teams, investigating issues and providing timely, evidence-based answers.",
  "Worked across country portfolios to align analytical outputs with local operational context and business requirements.",
]

const unifiTools = ["Python", "SQL", "LightGBM", "BigQuery", "Dataform", "GCP", "Data Studio", "Bitbucket", "Feature Engineering", "Credit Risk Modelling", "Model Monitoring"]
const calculateDuration = (_start: string, _end: string | null) => "Current"

export function generateStaticParams() {
  return workExperiences.map((work) => ({ id: work.id }))
}

export default async function WorkDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const work = getWorkById(id)

  if (!work) {
    notFound()
  }

  const workProjects = getWorkProjects(work.id)

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Button */}
      <div className="mb-8">
        <Link href="/work">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Work Experience
          </Button>
        </Link>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex flex-col items-center text-center gap-5 mb-6">
            {/* Company Logo */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-28 md:h-28 relative rounded-xl overflow-hidden border-2 border-slate-200 dark:border-slate-700 bg-white shadow-md">
                <Image
                  src={work.logo}
                  alt={`${work.company} logo`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Header Info */}
            <div className="flex-1 w-full flex flex-col items-center">
              <div className="flex items-center justify-center gap-3 mb-2 flex-wrap">
                <h1 className="text-3xl md:text-4xl font-bold">{work.company}</h1>
                {!work.endDate && (
                  <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
                    Current Position
                  </Badge>
                )}
              </div>
              <p className="text-xl md:text-2xl font-semibold text-teal-600 dark:text-teal-400 mb-4">
                {work.role}
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1.5" />
                  <span>{formatDateRange(work.startDate, work.endDate)}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1.5" />
                  <span>{calculateDuration(work.startDate, work.endDate)}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1.5" />
                  <span>{work.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Toolkit */}
          <div className="flex flex-col items-center gap-3 max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Technical Toolkit</p>
            <div className="flex flex-wrap justify-center gap-2">
              {(work.id === "unifi-africa" ? unifiTools : work.technologies).map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* About the Company */}
        <Card className="mb-8">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Building2 className="mr-3 h-6 w-6 text-teal-600" />
              About {work.company}
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {work.id === "unifi-africa"
                  ? "Unifi is a technology-led lending business that provides accessible personal credit across African markets. Its operating model combines digital products, local country teams, credit governance, and data-driven decision-making to manage portfolios responsibly at scale."
                  : work.companyDescription}
              </p>
              {work.id === "unifi-africa" && (
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Working across five country portfolios meant that the analytical work had to be both technically robust and operationally useful: models needed to perform in production, risk decisions needed clear governance, and insights needed to make sense in each local market.
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* My Role */}
        <Card className="mb-8">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Briefcase className="mr-3 h-6 w-6 text-teal-600" />
              My Role: {work.role}
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {work.id === "unifi-africa"
                  ? "As a Data Scientist and Full Stack Data Specialist in Credit Risk, I worked across the full lifecycle of analytical products: understanding business questions, engineering features, developing models, productionising scoring pipelines, monitoring outputs, and communicating decisions to stakeholders."
                  : work.jobDescription}
              </p>
              {work.id === "unifi-africa" && (
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  My role combined hands-on modelling with data engineering and decision support. I built behavioural scorecards and collections prioritisation models, refactored the GCP feature store, maintained version-controlled model pipelines, and helped turn model outputs into practical limits and country-level actions.
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {work.id === "unifi-africa" && (
          <>
            <Card className="mb-8 overflow-hidden border-t-4 border-t-teal-600">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">Credit Risk · Data Science · Full Stack Data Specialist</p>
                    <h2 className="text-2xl md:text-3xl font-bold mt-2">Turning portfolio data into credit decisions</h2>
                  </div>
                  <Badge variant="outline" className="self-start sm:self-center border-teal-600 text-teal-700 dark:text-teal-300">South Africa · 5 country portfolios</Badge>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  At Unifi, my work sits at the intersection of credit risk, machine learning, data engineering, and production systems. I take models from exploration through governance and deployment, then stay close to the country teams using their outputs.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-5">What I delivered</h2>
                  <ul className="space-y-4">
                    {unifiHighlights.map((item) => <li key={item} className="flex gap-3 text-slate-700 dark:text-slate-300 leading-relaxed"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-600" />{item}</li>)}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-5">Leadership & governance</h2>
                  <ul className="space-y-4">
                    {unifiLeadership.map((item) => <li key={item} className="flex gap-3 text-slate-700 dark:text-slate-300 leading-relaxed"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-600" />{item}</li>)}
                  </ul>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-6">I presented scorecards and limit proposals to Credit Committees, supporting business sign-off and informed risk decisions.</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-5">Country-facing data practice</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {unifiOperatingRhythm.map((item, index) => <div key={item} className="rounded-lg bg-slate-50 dark:bg-slate-900 p-5"><p className="text-2xl font-bold text-teal-600 mb-2">0{index + 1}</p><p className="text-slate-700 dark:text-slate-300 leading-relaxed">{item}</p></div>)}
                </div>
              </CardContent>
            </Card>

          </>
        )}

        {/* Projects Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <ExternalLink className="mr-3 h-6 w-6 text-teal-600" />
            Projects at {work.company}
          </h2>

          {workProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workProjects.map((project) => (
                <Link key={project.id} href={`/projects/${project.id}`} className="block group">
                  <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="h-48 relative">
                      <ProjectImageFallback
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-teal-600 transition-colors">
                        {project.title}
                      </h3>
                      {project.technologies && (
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {project.technologies.slice(0, 4).map((tech, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="bg-slate-100 dark:bg-slate-800 text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-xs">
                              +{project.technologies.length - 4} more
                            </Badge>
                          )}
                        </div>
                      )}
                      <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3">
                        {project.description.split(".").slice(0, 2).join(".") + "."}
                      </p>
                      <div className="mt-4 flex items-center text-sm text-teal-600 dark:text-teal-400 font-medium">
                        View Project Details
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <p className="text-slate-500 dark:text-slate-400">
                  No projects have been added for this role yet. Check back soon!
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
