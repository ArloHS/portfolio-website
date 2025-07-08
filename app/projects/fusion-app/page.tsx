import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Users,
  Calendar,
  Cog,
  Code,
  Brain,
  Shield,
  Zap,
  FileText,
  Search,
  MessageSquare,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function FusionPage() {
  const githublink = "https://github.com/ArloHS/Fusion_Collab_Note_Taking_App";
  const technologies = [
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "GraphQL",
    "PostgreSQL",
    "WebSocket",
    "Marked",
    "JWT",
    "Git",
    "npm",
    "Microsoft Azure",
  ]

  const features = [
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "User Management",
      description: "Register, login, edit profile, delete account with JWT authentication",
    },
    {
      icon: <FileText className="h-6 w-6 text-green-600" />,
      title: "Note Management",
      description: "Create, edit, delete, share notes with markdown support",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-purple-600" />,
      title: "Real-Time Collaboration",
      description: "Live editing and synchronization of shared notes via WebSocket",
    },
    {
      icon: <Search className="h-6 w-6 text-orange-600" />,
      title: "Search & Filter",
      description: "Search notes by title, filter by category, sort by last edited",
    },
    {
      icon: <Shield className="h-6 w-6 text-red-600" />,
      title: "Security",
      description: "Password hashing, JWT authentication, data validation",
    },
    {
      icon: <Users className="h-6 w-6 text-teal-600" />,
      title: "Collaboration Tools",
      description: "View collaborators, share notes, view/edit shared notes",
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
            <MessageSquare className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Fusion</h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-700 dark:text-slate-300">
            Collaborative Markdown Note-Taking Web Application
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
              <Calendar className="h-4 w-4 mr-2" />
              <span>May 2025</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              <span>Group Project (6 Members)</span>
            </div>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto">
            A web application that allows users to create, edit, share, and collaborate on notes in real-time, enhancing the cooperative experience with markdown support and real-time synchronization.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
          <Image
            src="/images/CS343P2.png"
            alt="Fusion Collaborative Note-Taking Interface"
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
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Cog className="mr-3 h-6 w-6 text-teal-600" />
              Project Overview
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                Fusion is a collaborative markdown note-taking web application designed to facilitate real-time cooperation on notes and documentation. It provides a platform for users to create, edit, share, and collaborate on notes with markdown support, catering to academic groups, research teams, and any collaborative environments.
              </p>
              <p className="leading-relaxed mb-4">
                The application leverages a modern technology stack including React.js for the frontend, Node.js with Express and GraphQL for the backend, PostgreSQL for data storage, and WebSocket for real-time collaboration features.
              </p>
              <p className="leading-relaxed">
                With a focus on user experience and security, Fusion incorporates JWT authentication, password hashing, and real-time updates to ensure a seamless and secure collaborative environment.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Architecture & Design */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Brain className="mr-3 h-6 w-6 text-purple-600" />
              System Architecture & Design
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>Frontend:</strong> React.js with Tailwind CSS for UI, WebSocket for real-time collaboration
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>Backend:</strong> Node.js with Express and GraphQL for API management
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>Database:</strong> PostgreSQL for data storage and management
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>Markdown Rendering:</strong> Marked for parsing and compiling markdown content
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Security & Real-Time Features</h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>Authentication:</strong> JWT tokens for secure user sessions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>Data Security:</strong> Password hashing and GraphQL validation to prevent SQL injections
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>Real-Time Collaboration:</strong> WebSocket for live updates and synchronization
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
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

        {/* Technical Implementation */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Code className="mr-3 h-5 w-5 text-blue-600" />
                Core Components
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>• <strong>Frontend Components:</strong> Reusable React components for UI elements</li>
                <li>• <strong>API Endpoints:</strong> GraphQL queries and mutations for data operations</li>
                <li>• <strong>WebSocket Implementation:</strong> Real-time collaboration features</li>
                <li>• <strong>Database Models:</strong> PostgreSQL schemas for users, notes, categories, shared notes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Zap className="mr-3 h-5 w-5 text-green-600" />
                Performance Features
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>• <strong>Real-Time Updates:</strong> Instant synchronization of note changes</li>
                <li>• <strong>Efficient Data Fetching:</strong> GraphQL for optimized data retrieval</li>
                <li>• <strong>Responsive Design:</strong> Tailwind CSS for adaptive UI</li>
                <li>• <strong>Secure Authentication:</strong> JWT for session management</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Technical Challenges */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Technical Challenges & Solutions</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-lg font-semibold mb-2">Real-Time Synchronization</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  <strong>Challenge:</strong> Ensuring consistent state across multiple clients editing the same note simultaneously.
                  <br />
                  <strong>Solution:</strong> Implemented WebSocket with proper conflict resolution strategies.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-lg font-semibold mb-2">Markdown Rendering</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  <strong>Challenge:</strong> Efficiently rendering markdown in real-time without performance issues.
                  <br />
                  <strong>Solution:</strong> Utilized the Marked library with optimized rendering techniques.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold mb-2">Authentication and Authorization</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  <strong>Challenge:</strong> Securing API endpoints and managing user sessions.
                  <br />
                  <strong>Solution:</strong> Implemented JWT authentication and proper access controls.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impact & Learning Outcomes */}
        <Card className="bg-gradient-to-r from-teal-50 to-slate-50 dark:from-teal-950 dark:to-slate-950">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Project Impact & Learning Outcomes</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Technical Achievements</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li>• Developed a full-stack web application with real-time features</li>
                  <li>• Implemented secure authentication and authorization mechanisms</li>
                  <li>• Integrated markdown rendering for rich text editing</li>
                  <li>• Managed relational database with PostgreSQL</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Skills Developed</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li>• Proficiency in React.js and frontend development</li>
                  <li>• Backend development with Node.js and Express/GraphQL</li>
                  <li>• Real-time web applications using WebSocket</li>
                  <li>• Database design and management with PostgreSQL</li>
                  <li>• Version control and collaboration with Git</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}