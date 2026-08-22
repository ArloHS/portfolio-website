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
const getWorkProjects = (_id: string) => [{ id: "model-health-dashboard", title: "Model Health Dashboard Owner", description: "Production model monitoring and health dashboard.", image: "/images/model-health-dashboard.jpg", technologies: ["Python", "MLOps"] }, { id: "collections-prioritization-model", title: "Collections Prioritization Model", description: "Machine learning model for collections prioritization.", image: "/images/collections-model.jpg", technologies: ["Python", "XGBoost"] }, { id: "organogram", title: "Organogram", description: "Interactive organizational chart visualization.", image: "/images/organogram.jpg", technologies: ["Python", "SQL"] }, { id: "scorecard-builder", title: "Scorecard Builder", description: "Automated credit scorecard development pipeline.", image: "/images/scorecard-builder.jpg", technologies: ["Python", "Scikit-learn"] }]
const formatDateRange = (start: string, end: string | null) => `${start} - ${end || "Present"}`
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
          <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
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
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
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

              <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
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

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {work.technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-sm">
                {tech}
              </Badge>
            ))}
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
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {work.companyDescription}
              </p>
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
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {work.jobDescription}
              </p>
            </div>
          </CardContent>
        </Card>

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
