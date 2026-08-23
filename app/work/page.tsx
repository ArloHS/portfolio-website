import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Calendar, Clock, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
const workData = [{
  id: "artefact", company: "Artefact (prev AdvanceGuidance)", logo: "/images/artefact.png", role: "Senior Machine Learning Engineer", startDate: "2026-09", endDate: null, location: "South Africa",
  companyDescription: "Artefact is a global data and AI consulting firm. Following its acquisition of Cape Town-based AdvanceGuidance, Artefact South Africa helps organisations turn data and artificial intelligence into scalable business solutions.",
  technologies: ["Python", "SQL", "MLOps", "Machine Learning", "Generative AI", "Kubernetes", "CI/CD", "Azure Databricks", "Docker", "Model Deployment", "Model Monitoring"],
}, {
  id: "unifi-africa", company: "Unifi Africa", logo: "/images/unifi-logo.jpg", role: "Data Scientist", startDate: "2025-01", endDate: null, location: "South Africa",
  companyDescription: "Unifi Africa is a fintech lending business operating across five country portfolios, where data and credit risk modelling support responsible lending and collections decisions.",
  technologies: ["Python", "SQL", "LightGBM", "BigQuery", "Dataform", "GCP", "Data Studio", "Bitbucket", "MLOps", "Credit Risk Modelling"],
}]
const formatDateRange = (start: string, end: string | null) => `${new Date(start + "-01").toLocaleDateString("en-US", { month: "short", year: "numeric" })} - ${end ? new Date(end + "-01").toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "Present"}`
const calculateDuration = (start: string, end: string | null) => `${Math.max(1, Math.round(((end ? new Date(end + "-01") : new Date()).getTime() - new Date(start + "-01").getTime()) / (1000 * 60 * 60 * 24 * 30)))} mos`
const getWorkProjects = (id: string) => id === "unifi-africa" ? [{ id: "model-health-dashboard", title: "Model Health Dashboard Owner" }, { id: "collections-prioritization-model", title: "Collections Prioritization Model" }, { id: "organogram", title: "Organogram" }, { id: "scorecard-builder", title: "Scorecard Builder" }] : []

export default function WorkPage() {
  const sortedWorkExperiences = [...workData].sort((a, b) => String(b.startDate).localeCompare(String(a.startDate)))
  const workExperiences = sortedWorkExperiences

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Work Experience</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-pretty">
          My professional journey in data science and technology, building real-world solutions that drive business impact.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {workExperiences.map((work) => {
          const projectCount = getWorkProjects(work.id).length
          return (
            <Link key={work.id} href={`/work/${work.id}`} className="block group">
              <Card className="transition-all hover:shadow-lg hover:-translate-y-1 overflow-hidden border-l-4 border-l-teal-600">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Company Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 relative rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-white">
                        <Image
                          src={work.logo}
                          alt={`${work.company} logo`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                        <div>
                          <h2 className="text-2xl font-bold group-hover:text-teal-600 transition-colors">
                            {work.company}
                          </h2>
                          <p className="text-lg font-semibold text-teal-600 dark:text-teal-400">
                            {work.role}
                          </p>
                        </div>
                        {!work.endDate && (
                          <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 self-start">
                            Current
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-500 dark:text-slate-400">
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
                        {projectCount > 0 && (
                          <div className="flex items-center">
                            <Briefcase className="h-4 w-4 mr-1.5" />
                            <span>{projectCount} project{projectCount !== 1 ? "s" : ""}</span>
                          </div>
                        )}
                      </div>

                      <p className="text-slate-600 dark:text-slate-400 line-clamp-2 mb-4">
                        {work.companyDescription.split(".").slice(0, 2).join(".") + "."}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {work.technologies.slice(0, 6).map((tech, index) => (
                          <Badge key={index} variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {work.technologies.length > 6 && (
                          <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-xs">
                            +{work.technologies.length - 6} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex items-center self-center">
                      <ChevronRight className="h-6 w-6 text-slate-400 group-hover:text-teal-600 transition-colors" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
