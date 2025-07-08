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
  Database,
  Network,
  Mic,
  FileText,
  MessageSquare,
} from "lucide-react"
import { ProjectImageFallback } from "@/components/project-image-fallback"
import Link from "next/link"

export default function WhatsDownPage() {
  const githublink = "https://github.com/ArloHS/Whatsdown";
  const technologies = [
    "Java",
    "JavaFX",
    "UDP/TCP Networking",
    "RSA Encryption",
    "H2 Database",
    "HikariCP",
    "Multithreading",
    "RBUDP Protocol",
    "Real-time Audio",
    "Peer-to-Peer",
    "Client-Server Architecture",
    "Voice Processing",
    "File Transfer",
    "Database Management",
    "GUI Development",
    "Network Security",
  ]

  const features = [
    {
      icon: <MessageSquare className="h-6 w-6 text-blue-600" />,
      title: "Multi-Modal Messaging",
      description: "Global chat, private channels, group messaging, and whisper support with @username syntax",
    },
    {
      icon: <Mic className="h-6 w-6 text-green-600" />,
      title: "Real-Time Voice Communication",
      description: "One-on-one and group voice calls via UDP with low-latency audio streaming and mixing",
    },
    {
      icon: <FileText className="h-6 w-6 text-purple-600" />,
      title: "Voice Notes & File Transfer",
      description: "Database-stored voice notes and secure file sharing using custom RBUDP protocol",
    },
    {
      icon: <Shield className="h-6 w-6 text-red-600" />,
      title: "RSA Encryption Security",
      description: "Public-key cryptography for secure file transfers without shared secrets",
    },
    {
      icon: <Network className="h-6 w-6 text-orange-600" />,
      title: "Hybrid Architecture",
      description: "TCP for reliable control messages, UDP for real-time media with peer-to-peer connections",
    },
    {
      icon: <Database className="h-6 w-6 text-teal-600" />,
      title: "Persistent Storage",
      description: "H2 database with HikariCP connection pooling for user data, messages, and voice notes",
    },
  ]

  const experiments = [
    {
      title: "Concurrent Client Stress Test",
      result: "66 simultaneous connections",
      description: "Exceeded initial 50-client target before thread exhaustion",
    },
    {
      title: "Voice Call Latency Analysis",
      result: "0.54s average latency",
      description: "Well below 2-second threshold with 0.05s standard deviation",
    },
    {
      title: "RBUDP Throughput Optimization",
      result: "10.97 MB/s peak transfer",
      description: "Optimal configuration: 8192-byte packets, 4000-packet batches",
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
            <h1 className="text-3xl md:text-4xl font-bold">WhatsDown</h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-700 dark:text-slate-300">
            Integrated Secure VoIP and File Transfer System
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
              <span>Group Project (4 Members)</span>
            </div>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-4xl mx-auto">
            A comprehensive desktop communication platform combining real-time messaging, voice calling, voice notes,
            and encrypted file sharing in a unified Java application with hybrid client-server and peer-to-peer
            architecture.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
          <ProjectImageFallback
            src="/images/CS411.png"
            alt="WhatsDown Communication Platform Interface"
            fill
            className="object-cover"
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
                WhatsDown represents the culmination of a comprehensive communication platform development project,
                integrating multiple previously developed modules into a single, unified desktop application. This
                sophisticated system demonstrates advanced software engineering principles through its hybrid
                architecture that strategically combines centralized coordination with decentralized media exchange.
              </p>
              <p className="leading-relaxed mb-4">
                The platform employs a client-server model for control logic and user management while leveraging direct
                peer-to-peer connections for latency-sensitive operations like voice calls and file transfers. This
                architectural decision ensures optimal performance for real-time communication while maintaining
                reliable coordination through the central server.
              </p>
              <p className="leading-relaxed">
                Built entirely in Java with JavaFX for the user interface, WhatsDown showcases expertise in network
                programming, database management, cryptography, multithreading, and GUI development. The system handles
                concurrent users, maintains data persistence, and provides secure communication channels with
                comprehensive error handling and graceful degradation under adverse network conditions.
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
                <h3 className="text-xl font-semibold mb-4">Hybrid Network Architecture</h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>TCP Control Layer:</strong> Reliable messaging, user authentication, session management,
                      and database operations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>UDP Media Layer:</strong> Real-time voice streaming and custom RBUDP file transfer
                      protocol
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>Peer-to-Peer Connections:</strong> Direct client communication for latency-sensitive
                      operations
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Security & Reliability</h3>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>RSA Encryption:</strong> Public-key cryptography for secure file transfers without shared
                      secrets
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>RBUDP Protocol:</strong> Custom reliable UDP with retransmission, integrity verification,
                      and progress tracking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>Graceful Degradation:</strong> Robust error handling and automatic cleanup for
                      disconnections
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
                <li>
                  • <strong>Server.java:</strong> Main server with TCP connection handling and H2 database integration
                </li>
                <li>
                  • <strong>Client.java:</strong> Network communication manager for TCP/UDP connections
                </li>
                <li>
                  • <strong>Chat.java:</strong> JavaFX main interface with dynamic UI components
                </li>
                <li>
                  • <strong>AudioRecorder.java:</strong> Real-time microphone capture with multithreading
                </li>
                <li>
                  • <strong>FileUtils.java:</strong> RSA encryption/decryption and file packet management
                </li>
                <li>
                  • <strong>DataBaseManager.java:</strong> HikariCP connection pooling and BLOB storage
                </li>
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
                <li>
                  • <strong>Multithreading:</strong> Separate threads for audio capture, GUI updates, and network I/O
                </li>
                <li>
                  • <strong>Connection Pooling:</strong> HikariCP for efficient database connection management
                </li>
                <li>
                  • <strong>Real-time Feedback:</strong> Progress bars, status indicators, and live UI updates
                </li>
                <li>
                  • <strong>Audio Mixing:</strong> Multiple voice stream combination for group calls
                </li>
                <li>
                  • <strong>Packet Optimization:</strong> Configurable chunk sizes for optimal transfer rates
                </li>
                <li>
                  • <strong>Thread Safety:</strong> Platform.runLater() for safe JavaFX UI updates
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Experimental Results */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Performance Analysis & Testing</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Comprehensive testing was conducted to validate system performance, scalability, and reliability under
              various conditions.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {experiments.map((experiment, index) => (
                <div key={index} className="border rounded-lg p-4 bg-slate-50 dark:bg-slate-900">
                  <h4 className="font-semibold mb-2">{experiment.title}</h4>
                  <div className="text-2xl font-bold text-teal-600 mb-2">{experiment.result}</div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{experiment.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <h4 className="font-semibold mb-2">Key Findings:</h4>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <li>• System exceeded initial scalability targets, handling 66 concurrent connections</li>
                <li>• Voice call latency remained well within acceptable thresholds for real-time communication</li>
                <li>• RBUDP protocol achieved optimal performance with larger packet and batch sizes</li>
                <li>• Robust error handling maintained system stability under stress conditions</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Technical Challenges */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Technical Challenges & Solutions</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-6">
                <h3 className="text-lg font-semibold mb-2">UDP Packet Loss in Unstable Networks</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  <strong>Challenge:</strong> File transfers became unreliable on high-latency networks due to dropped
                  UDP fragments.
                  <br />
                  <strong>Solution:</strong> Implemented custom RBUDP protocol with intelligent retransmission logic and
                  packet acknowledgment systems.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6">
                <h3 className="text-lg font-semibold mb-2">RSA Key Serialization Edge Cases</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  <strong>Challenge:</strong> Occasional RSA key deserialization failures due to encoding mismatches.
                  <br />
                  <strong>Solution:</strong> Standardized key format and implemented comprehensive error handling on
                  both client and server sides.
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-lg font-semibold mb-2">GUI Threading Conflicts</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  <strong>Challenge:</strong> JavaFX interface freezing due to UI updates from non-GUI threads.
                  <br />
                  <strong>Solution:</strong> Consistent use of Platform.runLater() for all background thread UI updates,
                  ensuring thread safety.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-lg font-semibold mb-2">Concurrent Resource Management</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  <strong>Challenge:</strong> Managing simultaneous voice calls and file transfers with proper resource
                  allocation.
                  <br />
                  <strong>Solution:</strong> Introduced synchronized flags and backend callbacks to prevent resource
                  conflicts and ensure consistent user feedback.
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
                  <li>• Successfully integrated multiple communication modalities in a single platform</li>
                  <li>• Demonstrated advanced understanding of network programming and protocol design</li>
                  <li>• Implemented production-quality security measures with RSA encryption</li>
                  <li>• Achieved excellent performance metrics exceeding initial specifications</li>
                  <li>• Created a scalable, maintainable codebase with proper separation of concerns</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Skills Developed</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li>• Advanced Java programming with multithreading and concurrency</li>
                  <li>• Network protocol design and implementation (TCP/UDP)</li>
                  <li>• Database design and optimization with connection pooling</li>
                  <li>• Cryptographic implementation and security best practices</li>
                  <li>• GUI development with JavaFX and responsive design principles</li>
                  <li>• Performance testing and system optimization techniques</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
