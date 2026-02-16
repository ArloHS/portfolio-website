import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MapPin, Calendar, Clock, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getSortedWorkExperiences, formatDateRange, calculateDuration, getWorkProjects } from "@/lib/data"

export default function WorkPage() {
  const workExperiences = getSortedWorkExperiences()

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
