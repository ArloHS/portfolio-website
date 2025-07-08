import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Users,
  Clock,
  BarChart,
  FileText,
  Shield,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TimeTrackingPage() {
  const githublink = "https://github.com/ArloHS/Time_Tracking_App";
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "Django",
    "PostgreSQL",
    "Microsoft Azure",
  ]

  const features = [
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "User Management",
      description: "Managers onboard employees and assign projects",
    },
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      title: "Time Tracking",
      description: "Employees log time with duration and project details",
    },
    {
      icon: <FileText className="h-6 w-6 text-purple-600" />,
      title: "Project Management",
      description: "Managers create and manage projects",
    },
    {
      icon: <Shield className="h-6 w-6 text-red-600" />,
      title: "Approval Workflow",
      description: "Managers sign off on past time entries",
    },
    {
      icon: <BarChart className="h-6 w-6 text-orange-600" />,
      title: "Statistics Dashboard",
      description: "View personal and team time statistics",
    },
    {
      icon: <Zap className="h-6 w-6 text-teal-600" />,
      title: "Notifications",
      description: "Alerts for pending tasks and approvals",
    },
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
            <Clock className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Time-Tracking System</h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-700 dark:text-slate-300">
            Streamlined Project Time Management
          </h2>
          {githublink && (
            <div className="mb-6 flex justify-center">
              <Button asChild variant="outline">
                <a href={githublink} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </Button>
            </div>
          )}
          <div className="flex items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              <span>Group Project</span>
            </div>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto">
            A web-based platform to enhance project time logging, approval workflows, and real-time insights, improving productivity and accountability.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
          <Image
            src="/images/CS344P.jpg"
            alt="Time-Tracking System Interface"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technologies & Tools</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Project Overview */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
              In today's fast-paced corporate landscape, efficient time management is critical for organisational success. Traditional manual time tracking methods often lead to errors, delays, and reduced productivity. This platform addresses these challenges by offering a modern, user-friendly solution tailored to your company's needs.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our motivation is to streamline time logging, improve data accuracy, enhance project visibility, and foster accountability. By integrating this system, we aim to optimise project management, boost productivity, and support successful outcomes in a dynamic business environment.
            </p>
          </CardContent>
        </Card>

        {/* System Requirements */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">System Requirements</h2>
            <h3 className="text-xl font-semibold mb-4">Core Requirements</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li>User authentication via email and password for managers and employees.</li>
              <li>Managers create employee accounts with temporary passwords (expiring if unused).</li>
              <li>Managers view, sign off, or edit time entry descriptions/projects (past entries only).</li>
              <li>Managers assign employees to projects and create/delete custom projects.</li>
              <li>Employees log time entries up to 1 week ahead with duration, description, and project.</li>
              <li>Employees view time entries by selectable date ranges.</li>
              <li>Notifications for incomplete time sheets (employees) and pending approvals (managers).</li>
              <li>Employees see only assigned and default projects (e.g., lunch, company events).</li>
            </ul>
            <h3 className="text-xl font-semibold mt-6 mb-4">Optional Requirements</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li>Email/SMS notifications for pending tasks.</li>
              <li>Real-time task timer.</li>
              <li>"Mood" attribute for time entries.</li>
            </ul>
          </CardContent>
        </Card>

        {/* System Design */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">System Design</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
              The system features two roles: <strong>Employees</strong> and <strong>Managers</strong>, authenticated via email and password.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
              <strong>Managers</strong> can:
              <ul className="list-disc pl-6">
                <li>Onboard employees with temporary passwords</li>
                <li>Create projects and assign employees</li>
                <li>Define project sub-categories</li>
                <li>Sign off on past time entries, locking them</li>
                <li>View detailed cross-project statistics</li>
              </ul>
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
              <strong>Employees</strong> can:
              <ul className="list-disc pl-6">
                <li>Log time entries with project, sub-category, and duration</li>
                <li>Select date ranges for viewing entries</li>
                <li>View personal stats compared to team members</li>
              </ul>
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Dashboards provide real-time insights, ensuring efficient time management and project oversight.
            </p>
          </CardContent>
        </Card>

        {/* Technology Specifications */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Technology Specifications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Front End</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li><strong>HTML:</strong> Structures web content and layout</li>
                  <li><strong>CSS:</strong> Styles elements for visual appeal</li>
                  <li><strong>JavaScript:</strong> Adds interactivity and dynamic features</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Back End</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li><strong>Python (Django):</strong> Manages logic, auth, and database</li>
                  <li><strong>PostgreSQL:</strong> Relational database on Azure</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Core Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">Core Features & Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Deployment Environment */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Deployment Environment</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Hosted on the web with a PostgreSQL database on a Microsoft Azure Flexible Server (32GB), ensuring scalability and security.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}