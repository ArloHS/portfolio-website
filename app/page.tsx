import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Database, LineChart, ChevronRight, GraduationCap, Award, BookOpen, BarChart3, Brain, Cloud, Cog, Server, Zap, Calendar, Clock, MapPin, Briefcase } from "lucide-react"
import { getSortedWorkExperiences, formatDateRange, calculateDuration, getWorkProjects } from "@/lib/data"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Data Scientist & MLOps Engineer</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-slate-300">
            I use mathematics, programming, and machine learning to build practical solutions for complex problems.
          </p>
          <Link href="/projects">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              Explore My Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-slate-700 dark:text-slate-300">
            <p>
              I am a Data Scientist with a strong Computer Science foundation, skilled in working across the 
              intersection of mathematics, statistics, and programming. My background includes linear algebra, 
              calculus, probability, optimization, and advanced statistical methods such as hypothesis testing, 
              predictive modeling, and stochastic processes.
            </p>
            <p>
              I continuously refine both my technical and communication skills, 
              and I’m passionate about solving complex data challenges, whether developing machine learning models,
               fine-tuning language models, or building data-driven applications that turn raw information into actionable insights.
            </p>
            <p>
              If you'd like to learn more about my academic journey, practical experience, and personal projects,
              explore the sections below.
            </p>
          </div>
          <div className="text-center mt-8">
            <Link href="/about">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                More About Me <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <WorkExperienceSection />

      {/* Qualifications Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Qualifications & Education</h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-slate-600 dark:text-slate-400">
            My educational journey from high school excellence to advanced data science specialization.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            <QualificationCard
              icon={<GraduationCap className="h-8 w-8 text-teal-600" />}
              title="Master of Engineering (MEng)"
              institution="Stellenbosch University"
              period="February 2025 - December 2026"
              details="Focus Area: Data Science"
              description="Advanced postgraduate programme in data science covering machine learning, big data technologies, optimisation, and a 60-credit research assignment."
              current
            />

            <QualificationCard
              icon={<Award className="h-8 w-8 text-teal-600" />}
              title="Bachelor of Data Science (BDatSci)"
              institution="Stellenbosch University"
              period="February 2021 - December 2024"
              details="Focal Area: Computer Science"
              description="Comprehensive program covering mathematical foundations, statistical modeling, machine learning, and computer science principles."
            />

            <QualificationCard
              icon={<Award className="h-8 w-8 text-green-600" />}
              title="Matric Certificate (IEB)"
              institution="Midstream College"
              period="2020"
              details="6 Distinctions • 84% Average"
              description="Subjects: English, Afrikaans, Mathematics, Life Orientation, Information Technology, Tourism, Business Studies"
            />

            <QualificationCard
              icon={<BookOpen className="h-8 w-8 text-blue-600" />}
              title="Full-Stack Engineer Certification"
              institution="The Code Academy"
              period="Completed 2023"
              details="Professional Certification"
              description="Comprehensive training in Web Development Foundations, Interactive Websites, Front-End & Back-End Development, and Full-Stack Development"
            />
          </div>

          <div className="text-center mt-12">
            <Link href="/university">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 mr-4">
                View University Courses
              </Button>
            </Link>
            <Link href="/school">
              <Button size="lg" variant="outline">
                School Achievements
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Explore My Journeys */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Explore My Journeys</h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-slate-600 dark:text-slate-400">
            Check out my School, University and Work Experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/university" className="block">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <Database className="h-12 w-12 mb-4 text-teal-600" />
                  <h3 className="text-xl font-bold mb-2">My Degrees & Courses</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    View my Bachelor's and Master's degrees with all courses and modules.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/school" className="block">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <Code className="h-12 w-12 mb-4 text-teal-600" />
                  <h3 className="text-xl font-bold mb-2">School Achievements</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Explore my high school journey, including key achievements and skills developed.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/work" className="block">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <LineChart className="h-12 w-12 mb-4 text-teal-600" />
                  <h3 className="text-xl font-bold mb-2">Work Experience</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Check out my work experience, from internships to projects that sharpened my skills.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

             {/* Enhanced Skills Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              I apply programming, machine learning, and cloud tools to solve data challenges.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Skills Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {/* Core Programming & Data */}
              <SkillCard
                icon={<Code className="h-8 w-8 text-blue-600" />}
                title="Core Programming & Data Handling"
                gradient="from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900"
                skills={[
                  "Languages: Python, R, Java, C/C++, JavaScript, TypeScript, Bash",
                  "SQL for relational databases, data wrangling & preprocessing",
                  "Version Control (Git), command-line proficiency, Linux systems",
                ]}
              />

              {/* Data Analysis & Visualization */}
              <SkillCard
                icon={<BarChart3 className="h-8 w-8 text-green-600" />}
                title="Data Analysis & Visualization"
                gradient="from-green-50 to-green-100 dark:from-green-950 dark:to-green-900"
                skills={[
                  "Pandas, NumPy for data manipulation and analysis",
                  "Matplotlib, Seaborn, Plotly for visualizations & dashboards",
                  "Exploratory Data Analysis (EDA), feature engineering, statistical testing",
                ]}
              />

              {/* Machine Learning */}
              <SkillCard
                icon={<Brain className="h-8 w-8 text-purple-600" />}
                title="Machine Learning & AI"
                gradient="from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900"
                skills={[
                  "Frameworks: Scikit-learn, TensorFlow, PyTorch, Keras",
                  "Classical ML: Regression, Classification, Ensemble Methods (XGBoost, LightGBM)",
                  "Model evaluation, hyperparameter tuning, cross-validation strategies",
                ]}
              />

              {/* Deep Learning */}
              <SkillCard
                icon={<Zap className="h-8 w-8 text-yellow-600" />}
                title="Deep Learning & Neural Networks"
                gradient="from-yellow-50 to-yellow-100 dark:from-yellow-950 dark:to-yellow-900"
                skills={[
                  "Feedforward Neural Networks (FNN), CNN for image recognition",
                  "Recurrent Neural Networks (RNN, LSTM, GRU) for sequence modeling",
                  "Transformer models, attention mechanisms, fine-tuning LLMs",
                  "Model interpretability (SHAP, LIME), performance optimization",
                ]}
              />

              {/* MLOps & Engineering */}
              <SkillCard
                icon={<Cog className="h-8 w-8 text-orange-600" />}
                title="MLOps & Production Systems"
                gradient="from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900"
                skills={[
                  "MLflow for experiment tracking, model versioning & registry",
                  "Apache Airflow for pipeline orchestration and workflow management",
                  "Model monitoring, drift detection, automated retraining systems",
                  "CI/CD for ML, containerization (Docker), automated testing",
                ]}
              />

              {/* Cloud Computing & Infrastructure */}
              <SkillCard
                icon={<Cloud className="h-8 w-8 text-teal-600" />}
                title="Cloud Computing & Infrastructure"
                gradient="from-teal-50 to-teal-100 dark:from-teal-950 dark:to-teal-900"
                skills={[
                  "Azure DevOps for CI/CD pipelines and project management",
                  "PostgreSQL database hosting and management on Azure",
                  "Amazon Bedrock for large language model deployment",
                  "Cloud-native ML deployment, serverless computing, auto-scaling",
                ]}
              />

              {/* NLP & Language Models */}
              <SkillCard
                icon={<Database className="h-8 w-8 text-indigo-600" />}
                title="Natural Language Processing"
                gradient="from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900"
                skills={[
                  "LLMs (BERT, GPT, LLaMA), HuggingFace Transformers ecosystem",
                  "Fine-tuning with LoRA, UnSloth optimization techniques",
                  "Word2Vec, spaCy, Topic Modeling, Sentiment Analysis",
                  "Named Entity Recognition, sequence labeling, information extraction",
                ]}
              />

              {/* Advanced Analytics */}
              <SkillCard
                icon={<LineChart className="h-8 w-8 text-red-600" />}
                title="Advanced Analytics & Research"
                gradient="from-red-50 to-red-100 dark:from-red-950 dark:to-red-900"
                skills={[
                  "Unsupervised Learning: Clustering, Dimensionality Reduction (PCA, t-SNE, UMAP)",
                  "Time Series Forecasting, Anomaly Detection, Statistical Modeling",
                  "Bayesian Optimization, Meta-Learning, Ensemble Methods",
                  "Experiment design, A/B testing, causal inference",
                ]}
              />

              {/* Software Engineering */}
              <SkillCard
                icon={<Server className="h-8 w-8 text-slate-600" />}
                title="Software Engineering & Web Development"
                gradient="from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900"
                skills={[
                  "Full-stack development: React.js, Node.js, GraphQL, Next.js",
                  "Database design: PostgreSQL, MongoDB, SQL optimization",
                  "RESTful APIs, WebSocket real-time communication",
                  "Authentication systems (JWT), security best practices",
                ]}
              />
            </div>
          </div>
        </div>
      </section>


      {/* Featured Projects */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Featured Projects</h2>
          <p className="text-center max-w-2xl mx-auto mb-12 text-slate-600 dark:text-slate-400">
            My featured projects show my ability to work with data and build solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <ProjectCard
              title="Self-Healing ML Pipeline"
              description="Autonomous machine learning pipeline with anomaly detection and remediation for retail time series forecasting using ensemble models and MLOps tools."
              imageUrl="/images/DS471.jpg"
              projectId="honours-project"
            />
            <ProjectCard
              title="LLaMA Fine-Tuning"
              description="Fine-tuned LLaMA-3B model on 39,668 Q&A pairs for domain-specific question answering using LoRA and UnSloth optimization."
              imageUrl="/images/DS346.jpg"
              projectId="llama-fine-tuning"
            />

            <ProjectCard
              title="Fusion Collaborative App"
              description="Real-time collaborative markdown note-taking web application with React.js, GraphQL, and WebSocket integration."
              imageUrl="/images/CS343P2.png"
              projectId="fusion-app"
            />
          </div>

          <div className="text-center">
            <Link href="/projects">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                View More Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function QualificationCard({
  icon,
  title,
  institution,
  period,
  details,
  description,
  current,
}: {
  icon: React.ReactNode
  title: string
  institution: string
  period: string
  details: string
  description: string
  current?: boolean
}) {
  return (
    <Card className={`transition-all hover:shadow-md ${current ? "border-l-4 border-l-teal-600" : ""}`}>
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">{icon}</div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-bold">{title}</h3>
              {current && (
                <Badge className="bg-blue-500 text-white text-xs">Current</Badge>
              )}
            </div>
            <p className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-1">{institution}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{period}</p>
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">{details}</p>
            <p className="text-slate-600 dark:text-slate-400">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function SkillCard({
  icon,
  title,
  skills,
  gradient,
}: {
  icon: React.ReactNode
  title: string
  skills: string[]
  gradient: string
}) {
  return (
    <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 group">
      <CardContent className="p-6">
        <div className={`bg-gradient-to-br ${gradient} rounded-lg p-4 mb-4 group-hover:scale-105 transition-transform`}>
          <div className="flex items-center justify-center mb-3">{icon}</div>
          <h3 className="text-lg font-bold text-center">{title}</h3>
        </div>
        <ul className="space-y-3 text-slate-700 dark:text-slate-300">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-start">
              <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-sm leading-relaxed">{skill}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function WorkExperienceSection() {
  const workExperiences = getSortedWorkExperiences()

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Work Experience</h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-slate-600 dark:text-slate-400">
          Professional roles where I apply data science to solve real business problems.
        </p>

        <div className="max-w-4xl mx-auto space-y-6">
          {workExperiences.map((work) => {
            const projectCount = getWorkProjects(work.id).length
            return (
              <Link key={work.id} href={`/work/${work.id}`} className="block group">
                <Card className="transition-all hover:shadow-lg hover:-translate-y-1 overflow-hidden border-l-4 border-l-teal-600">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 relative rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-white">
                          <Image
                            src={work.logo}
                            alt={`${work.company} logo`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                          <div>
                            <h3 className="text-xl font-bold group-hover:text-teal-600 transition-colors">{work.company}</h3>
                            <p className="text-base font-semibold text-teal-600 dark:text-teal-400">{work.role}</p>
                          </div>
                          {!work.endDate && (
                            <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 self-start">
                              Current
                            </Badge>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-400 mb-3">
                          <span className="flex items-center"><Calendar className="h-3.5 w-3.5 mr-1" />{formatDateRange(work.startDate, work.endDate)}</span>
                          <span className="flex items-center"><Clock className="h-3.5 w-3.5 mr-1" />{calculateDuration(work.startDate, work.endDate)}</span>
                          <span className="flex items-center"><MapPin className="h-3.5 w-3.5 mr-1" />{work.location}</span>
                          {projectCount > 0 && (
                            <span className="flex items-center"><Briefcase className="h-3.5 w-3.5 mr-1" />{projectCount} project{projectCount !== 1 ? "s" : ""}</span>
                          )}
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">
                          {work.companyDescription.split(".").slice(0, 2).join(".") + "."}
                        </p>
                      </div>
                      <div className="hidden sm:flex items-center self-center">
                        <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-teal-600 transition-colors" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-10">
          <Link href="/work">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              View All Work Experience <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  title,
  description,
  imageUrl,
  projectId,
}: { title: string; description: string; imageUrl: string; projectId: string }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 relative">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">{description}</p>
        <Link href={`/projects/${projectId}`}>
          <Button variant="outline" size="sm">
            View Details <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
