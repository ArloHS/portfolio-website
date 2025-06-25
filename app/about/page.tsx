import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Code,
  Database,
  Brain,
  Target,
  Coffee,
  BookOpen,
  GraduationCap,
  Award,
  Phone,
  Mail,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
          Get to know the person behind the data science projects and academic achievements.
        </p>

        {/* Personal Photo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-2xl border-8 border-gradient-to-r from-teal-600 to-blue-700 p-2 bg-gradient-to-r from-teal-600 to-blue-700">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-900">
                <Image
                  src="/images/pic_of_me.jpg"
                  alt="Arlo Steyn - Data Science Student"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-teal-600 to-blue-700 rounded-full flex items-center justify-center border-3 border-white dark:border-slate-900 shadow-xl">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Personal Story */}
        <section>
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <BookOpen className="mr-3 h-8 w-8 text-teal-600" />
                My Journey
              </h2>
              <div className="space-y-4 text-slate-700 dark:text-slate-300">
                <p>
                  As a dedicated 4th-year data science student with a strong background in computer science, I bring a
                  unique blend of advanced mathematical rigor, statistical modeling expertise, and programming
                  proficiency. My degree has provided me with a deep understanding of core mathematical concepts such as
                  linear algebra, calculus, probability, and optimization, alongside advanced statistical methods like
                  hypothesis testing, predictive modeling, and stochastic processes.
                </p>
                <p>
                  This solid foundation equips me to solve complex, highly technical challenges at the intersection of
                  data science and computer science. What started as curiosity about how data could tell stories has
                  evolved into a comprehensive skill set spanning machine learning, deep learning, natural language
                  processing, and software engineering.
                </p>
                <p>
                  Beyond academics, I am committed to continuous growth and improvement. I embrace challenges with
                  enthusiasm and am dedicated to refining both my technical skills and my ability to communicate complex
                  findings effectively. This perspective shapes how I approach every project – with rigor, empathy, and
                  a commitment to accuracy.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Qualifications Section */}
        <section>
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <GraduationCap className="mr-3 h-8 w-8 text-teal-600" />
                Education & Qualifications
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-teal-600 pl-6">
                  <div className="flex items-start space-x-3 mb-3">
                    <GraduationCap className="h-6 w-6 text-teal-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold">Bachelor of Data Science (BDatSci)</h3>
                      <p className="text-teal-600 dark:text-teal-400 font-medium">Stellenbosch University</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        February 2021 - December 2025 (4th Year)
                      </p>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                        Focal Area: Computer Science
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Comprehensive program covering mathematical foundations, statistical modeling, machine learning, and
                    computer science principles. Currently excelling in advanced courses including machine learning,
                    functional programming, and data science.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-6">
                  <div className="flex items-start space-x-3 mb-3">
                    <Award className="h-6 w-6 text-green-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold">Matric Certificate (IEB)</h3>
                      <p className="text-green-600 dark:text-green-400 font-medium">Midstream College</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">2020</p>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                        6 Distinctions • 84% Average
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Outstanding academic performance across diverse subjects: English, Afrikaans, Mathematics, Life
                    Orientation, Information Technology, Tourism, and Business Studies. Demonstrated excellence in both
                    technical and other subjects.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <div className="flex items-start space-x-3 mb-3">
                    <BookOpen className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold">Full-Stack Engineer Certification</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">The Code Academy</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Completed 2023</p>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mt-1">
                        Professional Certification
                      </p>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400">
                    Comprehensive training covering Web Development Foundations, Building Interactive Websites,
                    Front-End Development, Back-End Development, and Full-Stack Development. Gained practical experience
                    in modern web technologies and development practices.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Information */}
        <section>
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Mail className="mr-3 h-8 w-8 text-teal-600" />
                Contact Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-teal-600" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-slate-600 dark:text-slate-400">+27 71 286 8232</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-teal-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:arlo.steyn@gmail.com"
                      className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      arlo.steyn@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Code className="h-5 w-5 text-teal-600" />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a
                      href="https://github.com/ArloHS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      github.com/ArloHS
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Database className="h-5 w-5 text-teal-600" />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a
                      href="https://www.linkedin.com/in/arlo-steyn-0a42b92a6/?originalSubdomain=za"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                    >
                      Arlo Steyn
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CV Download Section */}
        <section>
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-green-200 dark:border-green-800">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold">Download My CV</h2>
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
                While this website contains far more comprehensive information about my projects, experience, and
                technical capabilities, here's my traditional CV for your convenience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/cv.pdf"
                  download="Arlo_Steyn_CV.pdf"
                  className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download CV (PDF)
                </a>
                <p className="text-sm text-slate-500 dark:text-slate-400">Last updated: January 2025</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* What Drives Me */}
        <section>
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Target className="mr-3 h-8 w-8 text-teal-600" />
                What Drives Me
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Problem Solving</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    I thrive on tackling complex challenges that require both analytical thinking and creative
                    solutions. Whether it's optimizing a machine learning model or designing a compiler, I love the
                    process of breaking down complex problems into manageable components.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Continuous Learning</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    The field of data science evolves rapidly, and I'm committed to staying at the forefront. From
                    exploring new deep learning architectures to understanding the latest statistical methods, I view
                    learning as a lifelong journey.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Impact Through Data</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    I believe data science has the power to drive meaningful change. Whether it's improving healthcare
                    outcomes through predictive modeling or making AI more accessible through fine-tuned language
                    models, I'm motivated by projects that make a difference.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Bridging Theory & Practice</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    My academic background provides a strong theoretical foundation, but I'm equally passionate about
                    practical implementation. I enjoy translating complex mathematical concepts into working solutions
                    that solve real-world problems.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technical Philosophy */}
        <section>
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Brain className="mr-3 h-8 w-8 text-teal-600" />
                My Technical Philosophy
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-teal-600 pl-6">
                  <h3 className="text-xl font-semibold mb-2">Rigor First</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Every model, every analysis, every line of code should be grounded in solid mathematical and
                    statistical principles. I believe in understanding the 'why' behind every technique I use.
                  </p>
                </div>
                <div className="border-l-4 border-teal-600 pl-6">
                  <h3 className="text-xl font-semibold mb-2">Reproducibility Matters</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Good data science is reproducible data science. I prioritize clean code, proper documentation, and
                    version control to ensure my work can be understood, verified, and built upon.
                  </p>
                </div>
                <div className="border-l-4 border-teal-600 pl-6">
                  <h3 className="text-xl font-semibold mb-2">Ethics in AI</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    With great power comes great responsibility. I'm committed to developing AI systems that are fair,
                    transparent, and beneficial to society, always considering the broader implications of my work.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Hobbies & Interests */}
        <section>
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Coffee className="mr-3 h-8 w-8 text-teal-600" />
                Beyond the Code
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-teal-100 dark:bg-teal-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Learning & Reading</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Always exploring the latest research papers, technical blogs, and books on data science, machine
                    learning, and computer science.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-teal-100 dark:bg-teal-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Code className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Sports & Exercise</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Maintaining physical fitness through various sports and general exercise, understanding the
                    importance of a healthy work-life balance.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-teal-100 dark:bg-teal-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Database className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Gaming</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Enjoying strategic and problem-solving games that often parallel the analytical thinking required in
                    data science and programming.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Looking Forward */}
        <section>
          <Card className="bg-gradient-to-r from-teal-50 to-slate-50 dark:from-teal-950 dark:to-slate-950">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Looking Forward</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
                As I approach the completion of my degree, I'm excited about the opportunities to apply my skills in
                real-world settings, contribute to meaningful projects, and continue growing as a data scientist and
                software engineer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/projects">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                    View My Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/university">
                  <Button size="lg" variant="outline">
                    Academic Journey
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
