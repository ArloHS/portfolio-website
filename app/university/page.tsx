"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, BookOpen, Code, Calculator, BarChart3, Brain, Database, Award, GraduationCap, Cog } from "lucide-react"
import { cn } from "@/lib/utils"

type Course = {
  title: string
  description: string
  credits?: number
  categories?: ("math" | "cs" | "stats" | "ds" | "research" | "ml" | "eng" | "management")[]
}

type YearData = {
  year: string
  status: "completed" | "current" | "upcoming"
  totalCourses: number
  courses: Course[]
}

type DegreeData = {
  id: string
  name: string
  shortName: string
  subtitle: string
  institution: string
  period: string
  description: string
  status: "completed" | "in-progress"
  years: YearData[]
}

const getCourseIcon = (categories: string[]) => {
  if (categories.includes("research")) return <Brain className="h-4 w-4" />
  if (categories.includes("ml")) return <Brain className="h-4 w-4" />
  if (categories.includes("ds")) return <Database className="h-4 w-4" />
  if (categories.includes("cs")) return <Code className="h-4 w-4" />
  if (categories.includes("stats")) return <BarChart3 className="h-4 w-4" />
  if (categories.includes("math")) return <Calculator className="h-4 w-4" />
  if (categories.includes("eng")) return <Cog className="h-4 w-4" />
  if (categories.includes("management")) return <BookOpen className="h-4 w-4" />
  return <BookOpen className="h-4 w-4" />
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case "math":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    case "cs":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    case "stats":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
    case "ds":
      return "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200"
    case "research":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
    case "ml":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    case "eng":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200"
    case "management":
      return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
    default:
      return "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200"
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-500"
    case "current":
      return "bg-blue-500"
    case "upcoming":
      return "bg-slate-400"
    default:
      return "bg-slate-400"
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case "completed":
      return "Completed"
    case "current":
      return "In Progress"
    case "upcoming":
      return "Upcoming"
    default:
      return "Unknown"
  }
}

// Bachelor's Degree Data
const bachelorData: DegreeData = {
  id: "bachelors",
  name: "Bachelor of Data Science (BDatSci)",
  shortName: "Bachelor's",
  subtitle: "Focal Area: Computer Science",
  institution: "Stellenbosch University",
  period: "February 2021 - December 2024",
  description: "Completed a comprehensive foundation in data science, computer science, mathematics, and statistics.",
  status: "completed",
  years: [
    {
      year: "1st Year",
      status: "completed",
      totalCourses: 8,
      courses: [
        {
          title: "Actuarial Science 112",
          description: "Covers essential topics in financial mathematics, including interest calculations, annuities, loan repayments, and securities. Focuses on mastering calculations, understanding proofs, and applying concepts to practical financial problems.",
          categories: ["math"],
        },
        {
          title: "Computer Science 113",
          description: "Explores basic computer programming with a focus on solving problems analytically and programmatically, covering imperative programming constructs such as variables, loops, and recursion. Includes static data structures, modular programming, and an introduction to object-oriented programming concepts like abstraction and encapsulation.",
          categories: ["cs"],
        },
        {
          title: "Mathematics 114",
          description: "Focuses on foundational calculus concepts, including limits, derivatives, and basic integration, with an emphasis on symbolic calculations and optimization. Introduces proof writing, problem-solving, and counterexamples to enhance critical thinking and mathematical understanding.",
          categories: ["math"],
        },
        {
          title: "Probability Theory and Statistics 114",
          description: "Covers combinatorics, probability, and stochastic variables, focusing on techniques for counting, probability calculations, and analyzing stochastic phenomena. Topics include conditional probability, discrete and continuous random variables, and applications to scientific and statistical problems.",
          categories: ["stats"],
        },
        {
          title: "Data Science 141",
          description: "Covers core data science concepts such as the data cycle, CRISP data mining process, and exploratory data analysis in R. Includes data cleaning, summarization, ethical considerations, and presenting actionable insights effectively.",
          categories: ["ds"],
        },
        {
          title: "Computer Science 144",
          description: "Explores problem-solving using object-oriented programming with a focus on inheritance, polymorphism, and reusable design patterns. Covers searching, sorting, algorithm complexity, dynamic data structures, and introduces regular expressions and finite automata.",
          categories: ["cs"],
        },
        {
          title: "Mathematics 144",
          description: "Focuses on advanced calculus topics like integration techniques, differential equations, and applications such as areas, volumes, and polar coordinates. Includes linear algebra concepts such as matrix operations, systems of equations, and vector algebra for solving geometric problems.",
          categories: ["math"],
        },
        {
          title: "Mathematics 154",
          description: "Covers foundational topics such as sets, relations, functions, and propositional logic, with an emphasis on mathematical proofs and combinatorics. Explores practical applications in computer science, including equivalence and order relations, recursion, and counting principles.",
          categories: ["math"],
        },
      ],
    },
    {
      year: "2nd Year",
      status: "completed",
      totalCourses: 9,
      courses: [
        {
          title: "Operations Research 214",
          description: "Focuses on network optimization, covering topics like graph theory, minimum spanning trees, shortest and longest paths, maximum flow, and network accessibility. Emphasizes modeling, solving optimization problems, and understanding the distinction between optimal and non-optimal solutions.",
          categories: ["math"],
        },
        {
          title: "Computer Science 214",
          description: "Focuses on classical data structures and algorithms in an object-oriented environment, covering topics like sorting, searching, graphs, and strings. Emphasizes algorithm implementation, analysis, and performance.",
          categories: ["cs"],
        },
        {
          title: "Mathematics 214",
          description: "Divided into Advanced Calculus and Linear Algebra, this module covers vector functions, multivariable calculus, integration techniques, Green's Theorem, abstract vector spaces, linear maps, and eigenvalues. Provides foundational knowledge essential for advanced studies in sciences, engineering, and applied fields.",
          categories: ["math"],
        },
        {
          title: "Mathematical Statistics 214",
          description: "Focuses on data analysis, statistical distributions, and estimation techniques. Topics include exploratory and descriptive statistics, computation of expected values, variances, and moment-generating functions, transformations of random variables, and applications of the central limit theorem. Emphasizes hypothesis testing and confidence intervals.",
          categories: ["stats"],
        },
        {
          title: "Computer Science 244",
          description: "Focuses on low-level programming and system fundamentals. Covers ANSI C programming, assembly language, computer architecture, and compilers. Examines mathematical foundations like Boolean algebra and digital logic, linking them to practical applications in digital design.",
          categories: ["cs"],
        },
        {
          title: "Mathematics 244",
          description: "Focuses on two main areas: Analysis and Linear Algebra. The Analysis section explores improper integrals, Gamma and Beta functions, sequences, series, Taylor series, and differential equations. Linear Algebra delves into abstract vector spaces, linear maps, eigenvalues, eigenvectors, and matrix representations.",
          categories: ["math"],
        },
        {
          title: "Mathematical Statistics 245",
          description: "Focuses on standard probability distributions, their properties, and methods like the method of moments and maximum likelihood estimation. Introduces Bayesian inference through prior and posterior distributions, exploring conjugate priors and noninformative priors.",
          categories: ["stats"],
        },
        {
          title: "Mathematical Statistics 246",
          description: "Explores linear statistical models and their applications. Covers characteristics and theoretical basis of models, focusing on their stochastic nature and use of matrix algebra. Emphasizes model specification, parameter estimation, sums of squares, hypothesis testing, and constructing confidence intervals.",
          categories: ["stats"],
        },
        {
          title: "Data Science 241",
          description: "Focuses on foundational programming skills in Python for data science applications. Includes descriptive statistics, regression, classification modeling, vector calculus, optimization techniques like gradient descent, and backpropagation. Also covers data ethics.",
          categories: ["ds"],
        },
      ],
    },
    {
      year: "3rd Year",
      status: "completed",
      totalCourses: 8,
      courses: [
        {
          title: "Mathematical Statistics 312",
          description: "Covers probability and statistical theory, focusing on random variables, joint distributions, expected values, and limit theory. Explores estimation methods and hypothesis testing including the Neyman-Pearson lemma and likelihood ratio tests.",
          categories: ["stats"],
        },
        {
          title: "Computer Science 314",
          description: "Focuses on the principles of concurrent systems and process management in operating systems. Topics include parallel computer architecture, programming models, performance analysis, and shared and distributed memory programming.",
          categories: ["cs"],
        },
        {
          title: "Computer Science 315",
          description: "Introduces fundamental machine learning concepts and techniques, emphasizing Python programming with NumPy and Matplotlib. Core topics include feature extraction, dimensionality reduction, logistic regression, Gaussian mixtures, and hidden Markov models.",
          categories: ["cs", "ml", "ds"],
        },
        {
          title: "Data Science 316",
          description: "Focuses on supervised and unsupervised machine learning techniques with emphasis on statistical learning theory. Develops practical skills in Python and R to implement models, solve data-driven problems, and interpret results effectively.",
          categories: ["ds", "ml", "stats"],
        },
        {
          title: "Computer Science 343",
          description: "Introduces relational databases, including mapping relational models to object models. Focuses on implementing database applications in web contexts, covering web services, server-side scalability, virtualization, and cloud computing.",
          categories: ["cs"],
        },
        {
          title: "Computer Science 344",
          description: "Explores program design principles, focusing on creating scalable and reusable frameworks. Key topics include program specifications, testability of designs, and practical application through development of a medium-sized software system.",
          categories: ["cs"],
        },
        {
          title: "Computer Science 345",
          description: "Covers automata theory, formal languages, computability, and complexity. Explores regular languages, context-free languages, Turing machines, the P vs NP problem, and NP completeness.",
          categories: ["cs"],
        },
        {
          title: "Data Science 346",
          description: "Covers Natural Language Processing (NLP), web scraping, cloud computing, and deep learning. Includes neural networks with focus on FNN, RNN, LSTM, and CNN, applying them to NLP tasks and other domains.",
          categories: ["ds", "ml", "cs"],
        },
      ],
    },
    {
      year: "4th Year (Honours)",
      status: "completed",
      totalCourses: 7,
      courses: [
        {
          title: "Honours Project: Data Science Research Assignment 441",
          description: 'Developed an autonomous self-healing machine learning pipeline for retail time series data using Dunnhumby\'s "The Complete Journey" dataset. Employs ensemble models (Random Forest, XGBoost, LSTM) with anomaly detection, explainable AI (SHAP, LIME), and autonomous remediation.',
          categories: ["research", "ml", "ds"],
        },
        {
          title: "Introduction to Statistical Learning 441",
          description: "Explores statistical learning theory, blending traditional methods like regression with modern techniques such as boosted trees, neural networks, recommender systems, and support vector machines. Emphasizes both theoretical foundations and practical applications.",
          categories: ["stats", "ml"],
        },
        {
          title: "Functional Programming 495",
          description: "Covers core concepts of functional programming using Haskell. Topics include pure functions, immutability, higher-order functions, lazy evaluation, monads, algebraic data types, and type classes for reusable code.",
          categories: ["cs"],
        },
        {
          title: "Machine Learning 441",
          description: "Covers key machine learning technologies focusing on data engineering. Topics include similarity-based, error-based, kernel-based, reinforcement, unsupervised, ensemble, online, and probabilistic learning.",
          categories: ["ml", "ds", "cs"],
        },
        {
          title: "Advanced Algorithms 412",
          description: "Delves into advanced algorithm design and analysis. Covers Fast Fourier Transforms, stringology, B-Trees, graph algorithms, randomized and parallel algorithms, and formal reasoning about time and space complexity.",
          categories: ["cs"],
        },
        {
          title: "Computer Science 411",
          description: "Provides in-depth exploration of computer networks, focusing on Internet architecture, protocols, and resource allocation. Covers socket APIs, error detection, reliable transmission, routing protocols, and software-defined networks.",
          categories: ["cs"],
        },
        {
          title: "Machine Learning and AI 472",
          description: "Introduces Cognitive Robotics and intelligent autonomous agents. Covers logic-based agents, First-Order Logic, Prolog, automated planning, Bayesian networks, Markov Decision Processes, and Reinforcement Learning algorithms.",
          categories: ["ml", "ds", "cs"],
        },
      ],
    },
  ],
}

// Master's Degree Data
const mastersData: DegreeData = {
  id: "masters",
  name: "Master of Engineering (MEng)",
  shortName: "Master's",
  subtitle: "Focus Area: Data Science",
  institution: "Stellenbosch University",
  period: "February 2025 - December 2026",
  description: "Advanced postgraduate programme consisting of eight 15-credit modules, a 60-credit research assignment, and professional development in data science and engineering.",
  status: "in-progress",
  years: [
    {
      year: "Year 1",
      status: "current",
      totalCourses: 6,
      courses: [
        {
          title: "Data Science (Eng) 874",
          credits: 15,
          description: "Data science is the application of computational, statistical, and machine learning techniques to gain insight into real world problems. The main focus is on the data science project life cycle: obtain, scrub/wrangling, explore, model, and interpret. Students understand the process of constructing a data pipeline, from raw data to knowledge. Case studies from the engineering domain explore each of these steps.",
          categories: ["ds"],
        },
        {
          title: "Applied Machine Learning 874",
          credits: 15,
          description: "Students are exposed to a wide range of machine learning techniques and gain practical experience in implementing them. Topics include information-based learning, similarity-based learning, error-based learning, kernel-based learning, probabilistic learning, ensemble learning, and incremental learning. Students learn theoretical underpinnings and practical know-how to apply these techniques to real-world problems.",
          categories: ["ml", "ds"],
        },
        {
          title: "Optimisation (Eng) 874",
          credits: 15,
          description: "Master the art of building and solving optimisation models: Linear programming, assignment models, and integer programming models. Understand different classes of optimisation problems including multi-objective, many-objective, constrained, and dynamic optimisation problems. Implement advanced metaheuristic and hybrid metaheuristic optimisation paradigms and algorithms.",
          categories: ["math", "eng"],
        },
        {
          title: "Big Data Technologies (Eng) 874",
          credits: 15,
          description: "Focuses on tools and platforms for big data management and processing. Covers governance, administration and organization of large volumes of structured and unstructured data. Includes NoSQL, data warehousing, distributed systems, map-reduce, Spark, Hadoop, and data virtualization. Addresses data streams, data fusion, and social media/sensor data sources.",
          categories: ["ds", "eng"],
        },
        {
          title: "Data Analytics (Eng) 874",
          credits: 15,
          description: "Learn the data analytics life cycle and how to apply each phase to solve engineering data analytics problems. Topics include exploratory data analysis, machine learning approaches for mining knowledge, extracting hidden patterns, associations and correlations. Advanced approaches focus on visual analytics, image analytics, text analytics, and time series analytics.",
          categories: ["ds", "stats"],
        },
        {
          title: "Professional Communication 874",
          credits: 1,
          description: "Develops professional communication skills essential for engineers and data scientists in industry and research settings. Focuses on clear, effective technical writing and presentation of complex data-driven insights to diverse audiences.",
          categories: ["management"],
        },
      ],
    },
    {
      year: "Year 2",
      status: "upcoming",
      totalCourses: 4,
      courses: [
        {
          title: "Applied Deep Learning 874",
          credits: 15,
          description: "Covers the basics of deep learning starting with neural network fundamentals. Topics include multi-layer perceptrons, deep feedforward neural networks, convolutional neural networks, architectures (AlexNet, GoogLeNet, ResNet), transfer learning, augmentation, Siamese neural networks, image segmentation, interpretability, object detection, autoencoders, recurrent neural networks, text and audio classification.",
          categories: ["ml", "ds"],
        },
        {
          title: "Project Management 873",
          credits: 15,
          description: "Advanced topics in project management building on traditional project scheduling. Covers critical chain management, managing project risks through identification, assessment, and mitigating strategies. Includes resource/cost management, contingency planning, team selection, contract management, project leadership, procurement from tender through supplier selection, and differences between commercial and research projects.",
          categories: ["management"],
        },
        {
          title: "Numerical Methods TW876",
          credits: 15,
          description: "Focuses on matrix computations. Studies effective solution of linear systems involving both square and rectangular matrices (least-squares). Covers direct and iterative methods with emphasis on sparse matrices and matrices with structure. Includes numerical methods for eigenvalue problems. Model problems from partial differential equations, data analysis, and image processing.",
          categories: ["math", "cs"],
        },
        {
          title: "Project Economics and Finance 812",
          credits: 15,
          description: "Focuses on financing business opportunities through combinations of debt and equity based on future profitability. Covers construction loans, public-private partnerships, feasibility studies, techno-economic analysis, economic growth, value drivers, sustainability, Balanced Scorecard, EVA/MVA, ratio analysis, costing systems, and infrastructure development finance.",
          categories: ["management", "eng"],
        },
      ],
    },
    {
      year: "Research",
      status: "upcoming",
      totalCourses: 1,
      courses: [
        {
          title: "Data Science Research Project & Assignment 876",
          credits: 60,
          description: "Students apply and consolidate knowledge gained throughout the programme by solving a real-world data science project, providing solutions for each step of the data science project life cycle. The outcome is a research assignment describing all life cycle phases and research conducted to provide a solution to a specific data science problem. Projects are sourced from industry and academic partners.",
          categories: ["research", "ds", "ml"],
        },
      ],
    },
  ],
}

const allDegrees = [mastersData, bachelorData]

export default function UniversityPage() {
  const [activeDegree, setActiveDegree] = useState<string>("masters")
  const [openYears, setOpenYears] = useState<Record<string, boolean>>({})
  const bachelorRef = useRef<HTMLDivElement>(null)
  const masterRef = useRef<HTMLDivElement>(null)

  const currentDegree = allDegrees.find((d) => d.id === activeDegree) || mastersData

  const toggleYear = (year: string) => {
    setOpenYears((prev) => ({
      ...prev,
      [year]: !prev[year],
    }))
  }

  const scrollToDegree = (degreeId: string) => {
    setActiveDegree(degreeId)
    const ref = degreeId === "bachelors" ? bachelorRef : masterRef
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const totalCredits = currentDegree.years.reduce(
    (sum, year) => sum + year.courses.reduce((s, c) => s + (c.credits || 0), 0),
    0
  )
  const totalCourses = currentDegree.years.reduce((sum, year) => sum + year.totalCourses, 0)
  const completedCourses = currentDegree.years
    .filter((year) => year.status === "completed")
    .reduce((sum, year) => sum + year.totalCourses, 0)

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Degree Navigation */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-slate-100 dark:bg-slate-800 rounded-lg p-1 gap-1">
          {allDegrees.map((degree) => (
            <Button
              key={degree.id}
              variant={activeDegree === degree.id ? "default" : "ghost"}
              className={cn(
                "transition-all",
                activeDegree === degree.id
                  ? "bg-teal-600 hover:bg-teal-700 text-white"
                  : "hover:bg-slate-200 dark:hover:bg-slate-700"
              )}
              onClick={() => scrollToDegree(degree.id)}
            >
              <GraduationCap className="h-4 w-4 mr-2" />
              {degree.shortName}
              {degree.status === "in-progress" && (
                <Badge className="ml-2 bg-blue-500 text-white text-xs">Current</Badge>
              )}
            </Button>
          ))}
        </div>
      </div>

      {/* Master's Degree Section */}
      <div ref={masterRef} className="mb-16">
        <DegreeSection
          degree={mastersData}
          isActive={activeDegree === "masters"}
          openYears={openYears}
          toggleYear={toggleYear}
          totalCredits={mastersData.years.reduce(
            (sum, year) => sum + year.courses.reduce((s, c) => s + (c.credits || 0), 0),
            0
          )}
        />
      </div>

      {/* Divider */}
      <div className="max-w-5xl mx-auto mb-16">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-300 dark:border-slate-700"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white dark:bg-slate-950 px-4 text-sm text-slate-500 dark:text-slate-400">
              Previous Education
            </span>
          </div>
        </div>
      </div>

      {/* Bachelor's Degree Section */}
      <div ref={bachelorRef}>
        <DegreeSection
          degree={bachelorData}
          isActive={activeDegree === "bachelors"}
          openYears={openYears}
          toggleYear={toggleYear}
          totalCredits={0}
        />
      </div>
    </div>
  )
}

function DegreeSection({
  degree,
  isActive,
  openYears,
  toggleYear,
  totalCredits,
}: {
  degree: DegreeData
  isActive: boolean
  openYears: Record<string, boolean>
  toggleYear: (year: string) => void
  totalCredits: number
}) {
  const totalCourses = degree.years.reduce((sum, year) => sum + year.totalCourses, 0)
  const completedCourses = degree.years
    .filter((year) => year.status === "completed")
    .reduce((sum, year) => sum + year.totalCourses, 0)

  return (
    <>
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          {degree.status === "completed" ? (
            <Award className="h-8 w-8 text-teal-600 mr-3" />
          ) : (
            <GraduationCap className="h-8 w-8 text-teal-600 mr-3" />
          )}
          <h1 className="text-3xl md:text-4xl font-bold">{degree.name}</h1>
          {degree.status === "in-progress" && (
            <Badge className="ml-3 bg-blue-500 text-white">In Progress</Badge>
          )}
        </div>
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-teal-600">{degree.subtitle}</h2>
        <p className="max-w-2xl mx-auto mb-2 text-slate-600 dark:text-slate-400">
          <strong>{degree.institution}</strong> | {degree.period}
        </p>
        <p className="max-w-2xl mx-auto mb-8 text-slate-600 dark:text-slate-400">{degree.description}</p>

        {/* Progress Overview */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Progress</span>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {completedCourses}/{totalCourses} modules
              {totalCredits > 0 && ` (${totalCredits} credits total)`}
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700">
            <div
              className="bg-teal-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedCourses / totalCourses) * 100}%` }}
            ></div>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {Math.round((completedCourses / totalCourses) * 100)}% Complete
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <div className="flex items-center">
            <Calculator className="h-4 w-4 mr-1.5 text-blue-600" />
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs">Math</Badge>
          </div>
          <div className="flex items-center">
            <Code className="h-4 w-4 mr-1.5 text-green-600" />
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs">CS</Badge>
          </div>
          <div className="flex items-center">
            <BarChart3 className="h-4 w-4 mr-1.5 text-purple-600" />
            <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-xs">Stats</Badge>
          </div>
          <div className="flex items-center">
            <Database className="h-4 w-4 mr-1.5 text-teal-600" />
            <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200 text-xs">Data Science</Badge>
          </div>
          <div className="flex items-center">
            <Brain className="h-4 w-4 mr-1.5 text-red-600" />
            <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 text-xs">ML</Badge>
          </div>
          <div className="flex items-center">
            <Brain className="h-4 w-4 mr-1.5 text-orange-600" />
            <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 text-xs">Research</Badge>
          </div>
          <div className="flex items-center">
            <Cog className="h-4 w-4 mr-1.5 text-amber-600" />
            <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 text-xs">Engineering</Badge>
          </div>
          <div className="flex items-center">
            <BookOpen className="h-4 w-4 mr-1.5 text-indigo-600" />
            <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 text-xs">Management</Badge>
          </div>
        </div>
      </div>

      {/* Years Section */}
      <div className="max-w-5xl mx-auto space-y-6">
        {degree.years.map((yearData) => (
          <Card key={`${degree.id}-${yearData.year}`} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <button
              onClick={() => toggleYear(`${degree.id}-${yearData.year}`)}
              className="w-full flex items-center justify-between p-6 text-left bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 hover:from-slate-100 hover:to-slate-200 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(yearData.status)}`}></div>
                <div>
                  <h2 className="text-2xl font-bold">{yearData.year}</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {getStatusText(yearData.status)} | {yearData.totalCourses} module{yearData.totalCourses !== 1 ? "s" : ""}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="hidden sm:inline-flex">
                  {yearData.totalCourses} module{yearData.totalCourses !== 1 ? "s" : ""}
                </Badge>
                {openYears[`${degree.id}-${yearData.year}`] ? (
                  <ChevronUp className="h-6 w-6" />
                ) : (
                  <ChevronDown className="h-6 w-6" />
                )}
              </div>
            </button>

            <div
              className={cn(
                "transition-all duration-300 ease-in-out",
                openYears[`${degree.id}-${yearData.year}`]
                  ? "max-h-[5000px] opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              )}
            >
              <CardContent className="p-6 pt-2">
                <div className="grid gap-6">
                  {yearData.courses.map((course) => (
                    <div
                      key={course.title}
                      className="group p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">{getCourseIcon(course.categories || ["cs"])}</div>
                          <div>
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                              {course.title}
                            </h3>
                            {course.credits && (
                              <p className="text-sm text-slate-500 dark:text-slate-400">
                                {course.credits} credit{course.credits !== 1 ? "s" : ""}
                              </p>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {(course.categories || ["cs"]).map((category) => (
                            <Badge key={category} className={getCategoryColor(category)}>
                              {category.toUpperCase()}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{course.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="max-w-4xl mx-auto mt-12">
        <Card className="bg-gradient-to-r from-teal-50 to-slate-50 dark:from-teal-950 dark:to-slate-950">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-6">{degree.shortName} Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-teal-600">{totalCourses}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Total Modules</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">{completedCourses}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">
                  {degree.years.filter((y) => y.status === "current").reduce((sum, y) => sum + y.totalCourses, 0)}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">In Progress</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">
                  {totalCredits > 0 ? totalCredits : degree.years.length}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {totalCredits > 0 ? "Total Credits" : "Years"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
