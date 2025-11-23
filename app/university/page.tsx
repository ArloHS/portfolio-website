"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, BookOpen, Code, Calculator, BarChart3, Brain, Database, Award } from "lucide-react"
import { cn } from "@/lib/utils"

type Course = {
  title: string
  description: string
  categories?: ("math" | "cs" | "stats" | "ds" | "research" | "ml")[]
}

type YearData = {
  year: string
  status: string
  totalCourses: number
  courses: Course[]
}

const getCourseIcon = (categories: string[]) => {
  // Priority order for icon selection
  if (categories.includes("research")) return <Brain className="h-4 w-4" />
  if (categories.includes("ml")) return <Brain className="h-4 w-4" />
  if (categories.includes("ds")) return <Database className="h-4 w-4" />
  if (categories.includes("cs")) return <Code className="h-4 w-4" />
  if (categories.includes("stats")) return <BarChart3 className="h-4 w-4" />
  if (categories.includes("math")) return <Calculator className="h-4 w-4" />
  return <BookOpen className="h-4 w-4" />
}

const getCourseCategory = (title: string): Course["categories"] => {
  if (title.toLowerCase().includes("mathematics") || title.toLowerCase().includes("actuarial")) return ["math"]
  if (title.toLowerCase().includes("computer science") || title.toLowerCase().includes("algorithms")) return ["cs"]
  if (title.toLowerCase().includes("statistics") || title.toLowerCase().includes("statistical")) return ["stats"]
  if (title.toLowerCase().includes("data science") || title.toLowerCase().includes("machine learning")) return ["ds"]
  if (title.toLowerCase().includes("research") || title.toLowerCase().includes("honours")) return ["research"]
  return ["cs"]
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
    default:
      return "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-200"
  }
}

const universityData: YearData[] = [
  {
    year: "1st Year",
    status: "completed",
    totalCourses: 8,
    courses: [
      {
        title: "Actuarial Science 112",
        description:
          "Covers essential topics in financial mathematics, including interest calculations, annuities, loan repayments, and securities. Focuses on mastering calculations, understanding proofs, and applying concepts to practical financial problems.",
        categories: ["math"],
      },
      {
        title: "Computer Science 113",
        description:
          "Explores basic computer programming with a focus on solving problems analytically and programmatically, covering imperative programming constructs such as variables, loops, and recursion. Includes static data structures, modular programming, and an introduction to object-oriented programming concepts like abstraction and encapsulation.",
        categories: ["cs"],
      },
      {
        title: "Mathematics 114",
        description:
          "Focuses on foundational calculus concepts, including limits, derivatives, and basic integration, with an emphasis on symbolic calculations and optimization. Introduces proof writing, problem-solving, and counterexamples to enhance critical thinking and mathematical understanding.",
        categories: ["math"],
      },
      {
        title: "Probability Theory and Statistics 114",
        description:
          "Covers combinatorics, probability, and stochastic variables, focusing on techniques for counting, probability calculations, and analyzing stochastic phenomena. Topics include conditional probability, discrete and continuous random variables, and applications to scientific and statistical problems.",
        categories: ["stats"],
      },
      {
        title: "Data Science 141",
        description:
          "Covers core data science concepts such as the data cycle, CRISP data mining process, and exploratory data analysis in R. Includes data cleaning, summarization, ethical considerations, and presenting actionable insights effectively.",
        categories: ["ds"],
      },
      {
        title: "Computer Science 144",
        description:
          "Explores problem-solving using object-oriented programming with a focus on inheritance, polymorphism, and reusable design patterns. Covers searching, sorting, algorithm complexity, dynamic data structures, and introduces regular expressions and finite automata.",
        categories: ["cs"],
      },
      {
        title: "Mathematics 144",
        description:
          "Focuses on advanced calculus topics like integration techniques, differential equations, and applications such as areas, volumes, and polar coordinates. Includes linear algebra concepts such as matrix operations, systems of equations, and vector algebra for solving geometric problems.",
        categories: ["math"],
      },
      {
        title: "Mathematics 154",
        description:
          "Covers foundational topics such as sets, relations, functions, and propositional logic, with an emphasis on mathematical proofs and combinatorics. Explores practical applications in computer science, including equivalence and order relations, recursion, and counting principles.",
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
        description:
          "Focuses on network optimization, covering topics like graph theory, minimum spanning trees, shortest and longest paths, maximum flow, and network accessibility. Emphasizes modeling, solving optimization problems, and understanding the distinction between optimal and non-optimal solutions.",
        categories: ["math"],
      },
      {
        title: "Computer Science 214",
        description:
          "Focuses on classical data structures and algorithms in an object-oriented environment, covering topics like sorting, searching, graphs, and strings. Emphasizes algorithm implementation, analysis, and performance.",
        categories: ["cs"],
      },
      {
        title: "Mathematics 214",
        description:
          "Divided into Advanced Calculus and Linear Algebra, this module covers vector functions, multivariable calculus, integration techniques, Green's Theorem, abstract vector spaces, linear maps, and eigenvalues. Provides foundational knowledge essential for advanced studies in sciences, engineering, and applied fields.",
        categories: ["math"],
      },
      {
        title: "Mathematical Statistics 214",
        description:
          "Focuses on data analysis, statistical distributions, and estimation techniques. Topics include exploratory and descriptive statistics, computation of expected values, variances, and moment-generating functions, transformations of random variables, and applications of the central limit theorem. Emphasizes hypothesis testing and confidence intervals. Suitable for building foundational skills in probability and statistics.",
        categories: ["stats"],
      },
      {
        title: "Computer Science 244",
        description:
          "Focuses on low-level programming and system fundamentals. The course begins with ANSI C programming, emphasizing dynamic memory management, standard libraries, and Linux system calls. It transitions into assembly language, exploring how to write, debug, and integrate assembly with C while working directly with Intel architecture. The course delves into computer architecture, covering CPUs, arithmetic logic units (ALUs), registers, memory, and instruction set architectures (ISAs). Compilers are a significant component, including topics such as parsing, finite state automata, symbol tables, and generating code for the Java Virtual Machine (JVM). In addition to programming, the course examines mathematical foundations like Boolean algebra, digital logic, and computer arithmetic, linking them to practical applications in digital design. By the end, it provides a comprehensive understanding of how systems function from the hardware to the software level.",
        categories: ["cs"],
      },
      {
        title: "Mathematics 244",
        description:
          "Focuses on two main areas: Analysis and Linear Algebra. The Analysis section explores advanced calculus topics such as improper integrals, Gamma and Beta functions, sequences, series, Taylor series, and differential equations. Linear Algebra delves into abstract vector spaces, linear maps, eigenvalues, eigenvectors, and matrix representations. Both sections are given equal emphasis, providing a deep understanding of theoretical concepts and their applications.",
        categories: ["math"],
      },
      {
        title: "Mathematical Statistics 245",
        description:
          "Focuses on standard probability distributions, their properties, and methods like the method of moments and maximum likelihood estimation. It introduces Bayesian inference through prior and posterior distributions, exploring conjugate priors for normal and other common distributions, as well as noninformative priors and Bayes estimators. Key topics include hypothesis testing using the Neyman-Pearson lemma, likelihood ratio tests, and theorems on maxima, minima, and ordered statistics. Applications and theoretical principles are balanced throughout.",
        categories: ["stats"],
      },
      {
        title: "Mathematical Statistics 246",
        description:
          "This module explores linear statistical models and their applications. It covers the characteristics and theoretical basis of models, focusing on their stochastic nature and use of matrix algebra. The p-variate normal distribution is highlighted for its relevance in modeling real-world phenomena and its theoretical significance. The course emphasizes model specification, parameter estimation, sums of squares, hypothesis testing, and constructing confidence intervals to apply statistical principles effectively in decision-making.",
        categories: ["stats"],
      },
      {
        title: "Data Science 241",
        description:
          "This module focuses on foundational programming skills in Python for data science applications. It includes topics such as descriptive statistics, regression, and classification modeling in Python. Additionally, it introduces vector calculus, optimization techniques like gradient descent, constrained optimization, and second-order methods. The concept of backpropagation is covered, along with discussions on data ethics. The module emphasizes practical problem-solving and theoretical understanding, preparing for applied work in data science.",
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
        description:
          "Covers probability and statistical theory, focusing on random variables, joint distributions, expected values, and limit theory. It explores estimation methods (moments, maximum likelihood, Bayesian inference) and hypothesis testing (Neyman-Pearson lemma, likelihood ratio tests). Derived distributions (chi-square, t, F) and advanced Bayesian decision theory, including computational techniques, are integral. Practical applications include order statistics, Q-Q plots, and the Delta method.",
        categories: ["stats"],
      },
      {
        title: "Computer Science 314",
        description:
          "This module focuses on the principles of concurrent systems and process management in operating systems. Key topics include parallel computer architecture, programming models, performance analysis, and shared and distributed memory programming. It also covers process creation, scheduling, and synchronization in operating systems, emphasizing both theoretical concepts and practical applications.",
        categories: ["cs"],
      },
      {
        title: "Computer Science 315",
        description:
          "This module introduces fundamental machine learning concepts and techniques, emphasizing Python programming with libraries like NumPy and Matplotlib. Core topics include feature extraction, dimensionality reduction, logistic regression, Gaussian mixtures, and hidden Markov models. Key paradigms in parameter estimation, such as maximum likelihood, maximum posterior, and expectation-maximization, are explored. Practical applications of machine learning methods are integrated with theoretical insights, focusing on implementing models, interpreting results, and understanding overfitting, generative and discriminative models, and model selection.",
        categories: ["cs", "ml", "ds"],
      },
      {
        title: "Data Science 316",
        description:
          "This module focuses on supervised and unsupervised machine learning techniques with an emphasis on statistical learning theory. Key topics include model theory, comparison of statistical modeling tools, and empirical evaluation of model performance. Practical skills in Python and R are developed to implement models, solve data-driven problems, and interpret results effectively. The module emphasizes critical analysis of data solutions and clear communication of findings.",
        categories: ["ds", "ml", "stats"],
      },
      {
        title: "Computer Science 343",
        description:
          "Introduces relational databases, including mapping relational models to object models. It focuses on implementing database applications in web contexts, covering web services, server-side scalability, virtualization, and cloud computing. The course emphasizes the integration of database design and web development for scalable, cloud-based solutions.",
        categories: ["cs"],
      },
      {
        title: "Computer Science 344",
        description:
          "Explores program design principles, focusing on creating scalable and reusable frameworks. Key topics include program specifications, testability of designs, and the practical application of these principles through the development of a medium-sized software system. The course emphasizes real-world relevance by integrating industry partnerships, enabling students to engage in collaborative software engineering projects.",
        categories: ["cs"],
      },
      {
        title: "Computer Science 345",
        description:
          "Is about automata theory, formal languages, computability, and complexity. The course explores regular languages, context-free languages, and grammars. It also covers Turing machines, the P vs NP problem, and NP completeness. The focus is on understanding the fundamental concepts of algorithms, the limits of computability, and the formal descriptions of automata and computability properties.",
        categories: ["cs"],
      },
      {
        title: "Data Science 346",
        description:
          "Data Science 346 covers Natural Language Processing (NLP), web scraping, cloud computing, and deep learning, focusing on practical and advanced applications. It starts with NLP, emphasizing key techniques such as text preprocessing, tokenization, named entity recognition (NER), and sentiment analysis. It also addresses web scraping for gathering data from the web and introduces cloud computing concepts for scalable data processing. The deep learning section includes topics on neural networks, with a focus on feedforward neural networks (FNN), recurrent neural networks (RNN), long short-term memory (LSTM) networks, and convolutional neural networks (CNN), applying them to NLP tasks and other domains.",
        categories: ["ds", "ml", "cs"],
      },
    ],
  },
  {
    year: "4th Year",
    status: "completed",
    totalCourses: 7,
    courses: [
      {
        title: "Honours Project: Data Science Research Assignment 441",
        description:
          'This project develops an autonomous self-healing machine learning pipeline for retail time series data, addressing challenges like data quality and real-time analytics. Using Dunnhumby\'s "The Complete Journey" dataset, it employs a heterogeneous ensemble of models (Random Forest, XGBoost, LSTM) to forecast demand. The pipeline integrates anomaly detection (statistical tests, LSTM autoencoders, adversarial testing), explainable AI (SHAP, LIME), and autonomous remediation via retraining and synthetic data generation. Managed by MLflow, Airflow, and Azure DevOps, it handles model decay through continuous training, meta-learning, and Bayesian optimization, ensuring minimal human intervention and robust performance.',
        categories: ["research", "ml", "ds"],
      },
      {
        title: "Introduction to Statistical Learning 441",
        description:
          "This module explores statistical learning theory, blending traditional statistical methods like regression and discriminant analysis with modern techniques such as boosted trees, neural networks, recommender systems, and support vector machines. It emphasizes both theoretical foundations and practical applications, covering supervised learning, regularization, classification metrics, multi-label classification, boosting (e.g., AdaBoost, XGBoost), and probabilistic graphical models. Students tackle high-dimensional data challenges, including the curse of dimensionality, and learn to interpret black-box models. Practical coding assignments in R or Python reinforce concepts, with a focus on real-world data analysis and model implementation.",
        categories: ["stats", "ml"],
      },
      {
        title: "Functional Programming 495",
        description:
          "This course covers core concepts of functional programming, using Haskell. Key topics include pure functions, immutability, and higher-order functions for concise and modular code. The course explores Haskell's type system, lazy evaluation for optimization, and advanced abstractions like monads for handling side effects, along with algebraic data types and type classes for reusable code. By the end, the focus is on writing efficient, maintainable software using functional programming principles in Haskell.",
        categories: ["cs"],
      },
      {
        title: "Machine Learning 441",
        description:
          "This module covers key machine learning technologies, focusing on data engineering. Topics include similarity-based learning, error-based learning, kernel-based learning, reinforcement learning, unsupervised learning, ensemble learning, online learning, and probabilistic learning. The course emphasizes constructing classifier and prediction models, with applications in data mining.",
        categories: ["ml", "ds", "cs"],
      },
      {
        title: "Advanced Algorithms 412",
        description:
          "This module delves into advanced algorithm design and analysis, building on foundational data structures and algorithms. It covers topics such as Fast Fourier Transforms, stringology, B-Trees, and persistent data types, with a focus on graph algorithms and formal reasoning about time and space complexity. We explored algorithm design techniques, including randomized and parallel algorithms, and implement efficient software libraries in Java and C. Practical assignments emphasize coding from scratch, software engineering principles, and preparing for technical interviews, complemented by theoretical discussions and self-study of computational models.",
        categories: ["cs"],
      },
      {
        title: "Computer Science 411",
        description:
          "This module provides an in-depth exploration of computer networks, focusing on the Internet's architecture, protocols, and resource allocation. Key topics include socket APIs, network performance, error detection, reliable transmission, and multiaccess networks like Ethernet and 802.11. It covers switching, IP protocols, subnets, CIDR, routing (RIP, OSPF, BGPv4), and transport protocols (UDP, TCP). Advanced concepts such as software-defined networks (SDNs), congestion control, and application-layer protocols (e.g., HTTP, SMTP) are included. Practical group projects on chat, RBUDP, VoIP, and file sharing reinforce theoretical concepts with hands-on implementation.",
        categories: ["cs"],
      },
      {
        title: "Machine Learning and AI 472",
        description: "This module introduced me to the core ideas behind Cognitive Robotics and intelligent autonomous agents. I learned how logic-based agents work, how to represent knowledge using First-Order Logic, and how to write simple programs in Prolog and ProbLog. The course covered automated planning, Bayesian and Decision networks, Dynamic Bayesian Networks, and how to perform filtering for state estimation. I also studied Boolean/Arithmetic circuits, Markov Decision Processes, and key Reinforcement Learning algorithms like value iteration, policy iteration, and gradient-based methods. Overall, the module gave me a foundational understanding of how agents reason, plan, act, and learn under uncertainty.",
        categories: ["ml", "ds", "cs"],
      },
    ],
  },
]

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

export default function UniversityPage() {
  const [openYears, setOpenYears] = useState<Record<string, boolean>>({
    "1st Year": false,
    "2nd Year": false,
    "3rd Year": false,
    "4th Year": false, // Open current year by default
  })

  const toggleYear = (year: string) => {
    setOpenYears((prev) => ({
      ...prev,
      [year]: !prev[year],
    }))
  }

  const totalCourses = universityData.reduce((sum, year) => sum + year.totalCourses, 0)
  const completedCourses = universityData
    .filter((year) => year.status === "completed")
    .reduce((sum, year) => sum + year.totalCourses, 0)

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Award className="h-8 w-8 text-teal-600 mr-3" />
          <h1 className="text-4xl font-bold">Bachelor of Data Science (BDatSci)</h1>
        </div>
        <h2 className="text-2xl font-semibold mb-6 text-teal-600">Focal Area: Computer Science</h2>
        <p className="max-w-2xl mx-auto mb-8 text-slate-600 dark:text-slate-400">
          Completed at <strong>Stellenbosch University</strong>,
          this degree provided a comprehensive foundation in data science, computer science, mathematics, and statistics.
        </p>

        {/* Progress Overview */}
        <div className="max-w-md mx-auto mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Overall Progress</span>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              {completedCourses}/{totalCourses} courses
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
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center">
            <Calculator className="h-4 w-4 mr-2 text-blue-600" />
            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Mathematics</Badge>
          </div>
          <div className="flex items-center">
            <Code className="h-4 w-4 mr-2 text-green-600" />
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              Computer Science
            </Badge>
          </div>
          <div className="flex items-center">
            <BarChart3 className="h-4 w-4 mr-2 text-purple-600" />
            <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">Statistics</Badge>
          </div>
          <div className="flex items-center">
            <Database className="h-4 w-4 mr-2 text-teal-600" />
            <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">Data Science</Badge>
          </div>
          <div className="flex items-center">
            <Brain className="h-4 w-4 mr-2 text-red-600" />
            <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Machine Learning</Badge>
          </div>
          <div className="flex items-center">
            <Brain className="h-4 w-4 mr-2 text-orange-600" />
            <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">Research</Badge>
          </div>
        </div>
      </div>

      {/* Years Section */}
      <div className="max-w-5xl mx-auto space-y-6">
        {universityData.map((yearData) => (
          <Card key={yearData.year} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <button
              onClick={() => toggleYear(yearData.year)}
              className="w-full flex items-center justify-between p-6 text-left bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 hover:from-slate-100 hover:to-slate-200 dark:hover:from-slate-700 dark:hover:to-slate-600 transition-all"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(yearData.status)}`}></div>
                <div>
                  <h2 className="text-2xl font-bold">{yearData.year}</h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {getStatusText(yearData.status)} • {yearData.totalCourses} courses
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="hidden sm:inline-flex">
                  {yearData.totalCourses} courses
                </Badge>
                {openYears[yearData.year] ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
              </div>
            </button>

            <div
              className={cn(
                "transition-all duration-300 ease-in-out",
                openYears[yearData.year] ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden",
              )}
            >
              <CardContent className="p-6 pt-2">
                <div className="grid gap-6">
                  {yearData.courses.map((course, index) => (
                    <div
                      key={course.title}
                      className="group p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">{getCourseIcon(course.categories || ["cs"])}</div>
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                            {course.title}
                          </h3>
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
            <h3 className="text-2xl font-bold text-center mb-6">Degree Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-teal-600">{totalCourses}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Total Courses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">{completedCourses}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">
                  {universityData.find((y) => y.status === "current")?.totalCourses || 0}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">In Progress</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">4</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Years</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
