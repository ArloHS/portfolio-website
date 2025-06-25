import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { ProjectImageFallback } from "@/components/project-image-fallback"
import Link from "next/link"
import { notFound } from "next/navigation"

// Project type definition
type Project = {
  id: string
  title: string
  description: string
  image: string
  technologies?: string[]
  category: "featured" | "mlops" | "datascience" | "computerscience"
  additionalCategories?: ("mlops" | "datascience" | "computerscience")[]
}

// Project data
const projects: Project[] = [
  // Featured Projects
  {
    id: "honours-project",
    title: "Self-Healing Machine Learning Pipeline with Anomaly Detection",
    description:
      "Developed an autonomous self-healing machine learning pipeline for retail time series forecasting using Dunnhumby's 'The Complete Journey' dataset. The system employs a heterogeneous ensemble of models (Random Forest, XGBoost, LSTM) with integrated anomaly detection, explainable AI (SHAP, LIME), and autonomous remediation capabilities. Managed through MLflow, Airflow, and Azure DevOps, the pipeline handles model decay through continuous training, meta-learning, and Bayesian optimization, ensuring minimal human intervention and robust performance in real-world retail environments.",
    image: "/images/DS471.jpg",
    technologies: [
      "Python",
      "MLflow",
      "Apache Airflow",
      "Azure DevOps",
      "LSTM",
      "XGBoost",
      "Random Forest",
      "SHAP",
      "LIME",
      "Bayesian Optimization",
      "Time Series Forecasting",
      "Anomaly Detection",
      "AutoML",
      "CI/CD",
      "MLOps",
      "Explainable AI",
      "Model Drift Detection",
      "Synthetic Data Generation",
      "Meta-Learning",
      "Ensemble Methods",
    ],
    category: "featured",
    additionalCategories: ["mlops", "datascience"],
  },
  {
    id: "llama-fine-tuning",
    title: "Fine-Tuning LLaMA-3B for Domain-Specific Question Answering",
    description:
      "I fine-tuned the LLaMA-3B model, a 3-billion parameter large language model by Meta, on a custom dataset of 39,668 question-and-answer pairs scraped from the Cross Validated platform, focusing on data science, artificial intelligence, and machine learning topics. Using Python and BeautifulSoup4 for data scraping, I ensured ethical compliance by excluding code blocks and personal information. The dataset was cleaned, normalized, and structured into a format suitable for LLaMA fine-tuning. Fine-tuning was performed using the LoRA technique, which significantly reduced computational overhead by updating only a subset of the model parameters. UnSloth optimization was employed to streamline the process, leveraging techniques like layer-freezing, gradient checkpointing, and dynamic hyperparameter tuning. Two models were trained: one on the full dataset for a single epoch and another on a subset of 10,000 entries for three epochs. The latter provided deeper conceptual responses, demonstrating the trade-off between data size and training iterations. The project concludes with a benchmarking analysis of the models' performance, highlighting their ability to generate accurate, context-aware responses to technical queries.",
    image: "/images/DS346.jpg",
    technologies: [
      "Python",
      "LLaMA",
      "LoRA",
      "UnSloth",
      "BeautifulSoup4",
      "NLP",
      "Fine-tuning",
      "Data Scraping",
      "Machine Learning",
      "Large Language Models",
    ],
    category: "featured",
    additionalCategories: ["datascience"],
  },
  {
    id: "fusion-app",
    title: "Fusion: A Real-Time Collaborative Note-Taking Web Application",
    description:
      "Developed Fusion, a real-time collaborative markdown note-taking web application designed to facilitate seamless teamwork. Built using React.js for the frontend with Tailwind CSS for styling, and Node.js with Express and GraphQL for the backend, the application leverages PostgreSQL for robust data management and WebSocket for live collaboration. Key features include real-time editing, user management, markdown functionality, and note sharing, supported by secure JWT-based authentication and hashed password storage. The app employs design patterns like Model-View-Controller (MVC), Singleton, and Observer to ensure a scalable, maintainable architecture. Hosted on Microsoft Azure with PostgreSQL, Fusion is tailored for academic and professional teams seeking efficient, organized, and collaborative note management.",
    image: "/images/CS343P2.png",
    technologies: [
      "React.js",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
      "WebSocket",
      "Tailwind CSS",
      "JWT",
      "Microsoft Azure",
      "Express",
      "Authentication",
      "Real-time Collaboration",
      "Markdown",
      "Design Patterns",
    ],
    category: "featured",
    additionalCategories: ["computerscience"],
  },
  {
    id: "timekeeper",
    title: "Timekeeper: A Secure Time Tracking and Management Platform",
    description:
      "Built a comprehensive time tracking web application with distinct user and admin roles to streamline employee time management and reporting. Employees can log work hours with safeguards against future or invalid entries, while managers can monitor, update, and manage employee records, projects, and team performance metrics. Key features include real-time dashboards for tracking missing timesheets, visual insights through interactive charts (e.g., cumulative bar charts and project-specific stats), and robust authorization and encryption mechanisms to ensure data security. The platform is designed for seamless usability, with dynamic updates eliminating the need for page refreshes and a consistent, professional UI. This project demonstrates expertise in creating scalable, secure, and user-friendly solutions for workplace time management.",
    image: "/images/CS344P.jpg",
    technologies: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Chart.js",
      "Authentication",
      "Authorization",
      "Data Visualization",
      "User Experience Design",
      "Role-based Access Control",
      "Real-time Updates",
    ],
    category: "featured",
    additionalCategories: ["computerscience"],
  },
  {
    id: "alan-compiler",
    title: "Compiler for ALAN: An Educational LL(1) Language",
    description:
      "Designed and implemented a low-level compiler for ALAN, an educational LL(1) language, using C to demonstrate core concepts in compiler design and execution. The project encompassed all major phases of compilation, including lexical analysis (scanner), syntax analysis (parser), semantic analysis (symbol table and type checking), and JVM-targeted code generation. Leveraging the low-level capabilities of C, the compiler utilized manual memory management and pointer arithmetic to optimize data structures such as abstract syntax trees and symbol tables. Recursive-descent parsing techniques were employed for efficient and modular syntax processing, while errors such as unclosed comments and type mismatches were robustly handled. The final output generated Jasmin assembly code for seamless execution on the JVM. This project showcases expertise in low-level programming, compiler design, and efficient code generation for educational languages.",
    image: "/images/CS244P1.png",
    technologies: [
      "C",
      "Compiler Design",
      "JVM",
      "Jasmin Assembly",
      "Recursive-Descent Parsing",
      "Lexical Analysis",
      "Syntax Analysis",
      "Semantic Analysis",
      "Code Generation",
      "Memory Management",
      "Abstract Syntax Trees",
      "Symbol Tables",
    ],
    category: "featured",
    additionalCategories: ["computerscience"],
  },
  {
    id: "whatsdown",
    title: "WhatsDown: Integrated Secure VoIP and File Transfer System",
    description:
      "Developed a comprehensive desktop communication platform combining real-time messaging, voice calling, voice notes, and encrypted file sharing in a unified Java application. The system employs a hybrid architecture with TCP for reliable control messages and UDP for real-time media, featuring custom RBUDP protocol for secure file transfers with RSA encryption. Built with JavaFX for an intuitive interface, the platform supports up to 66 concurrent users with sub-second voice call latency and 10.97 MB/s file transfer rates. Key features include global and private messaging, group voice calls, database-stored voice notes, peer-to-peer connections, and graceful error handling. The project demonstrates advanced software engineering principles including multithreading, network programming, cryptography, and database management with H2 and HikariCP connection pooling.",
    image: "/images/CS411.png",
    technologies: [
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
    ],
    category: "featured",
    additionalCategories: ["computerscience"],
  },
  {
    id: "lung-cancer-prediction",
    title: "Lung Cancer Risk Prediction: A Data-Driven Healthcare Solution",
    description:
      "Developed an advanced machine learning system to classify lung cancer risk into low, medium, and high categories using a dataset of 1,000 patient records with 26 clinical features. Addressed critical healthcare challenges in underprivileged regions by creating an accessible screening tool requiring only a simple questionnaire. Improved upon a baseline logistic regression model by implementing comprehensive preprocessing, advanced regularization techniques (Lasso, Ridge, Elastic Net), and Random Forest classifiers with hyperparameter tuning. Achieved 96% accuracy with zero critical false negatives, ensuring no high-risk patients are missed. The final Ridge regression model demonstrates superior performance with 0.962 precision, 0.961 recall, and 0.961 F1-score. This cost-effective solution bridges healthcare gaps in regions with limited medical infrastructure, providing life-saving early detection capabilities for lung cancer screening in areas with high pollution and smoking rates.",
    image: "/images/DS316.jpg",
    technologies: [
      "Python",
      "Scikit-learn",
      "Logistic Regression",
      "Ridge Regularization",
      "Lasso Regularization",
      "Elastic Net",
      "Random Forest",
      "GridSearchCV",
      "K-Fold Cross-Validation",
      "Healthcare ML",
      "Feature Engineering",
      "EDA",
      "Statistical Analysis",
      "Risk Classification",
      "Medical Diagnostics",
      "Hyperparameter Tuning",
      "Cross-validation",
      "Outlier Detection",
      "Model Comparison",
    ],
    category: "featured",
    additionalCategories: ["datascience"],
  },

  // Data Science/Machine Learning Projects
  {
    id: "bean-classification",
    title: "Dry Bean Classification: A Data-Driven Approach to Machine Learning Optimization",
    description:
      "I developed a machine learning pipeline to classify dry bean types using a dataset of 13,611 samples and 22 features. The project involved identifying and addressing key data quality issues, including skewness, missing values, and class imbalances. I implemented robust preprocessing techniques such as imputation for missing data, SMOTE Tomek for balancing class distributions, and log and Yeo-Johnson transformations to correct skewness. The data was standardized to ensure consistent feature scaling, and backward subset selection was used to optimize feature sets for each model. Two classification models, K-Nearest Neighbors (KNN) and Decision Tree Classifier (DTC), were built and tuned. KNN was optimized for the number of neighbors (`k=5`), while the DTC model underwent cost-complexity pruning to improve generalization and reduce overfitting. Both models were evaluated using 5-fold cross-validation and performed exceptionally well, achieving accuracies of 98.76% for KNN and 98.49% for DTC. While KNN demonstrated slightly higher accuracy, DTC was preferred for its simplicity, stability, and computational efficiency. Additionally, I authored a comprehensive report detailing the methodology, data preprocessing, model development, and evaluation processes. The report emphasized the critical role of preprocessing in achieving reliable machine learning outcomes.",
    image: "/images/MLAss1.png",
    technologies: [
      "Python",
      "Scikit-learn",
      "KNN",
      "Decision Trees",
      "SMOTE",
      "Cross-validation",
      "Data Preprocessing",
      "Feature Selection",
      "Class Imbalance",
      "Model Evaluation",
      "Machine Learning Pipeline",
    ],
    category: "datascience",
  },
  {
    id: "neural-network-comparison",
    title: "Comparative Analysis of Neural Network Training Algorithms",
    description:
      "Conducted a comprehensive study comparing three neural network training algorithms: Stochastic Gradient Descent (SGD), Scaled Conjugate Gradient (SCG), and LeapFrog Optimization (LFO) across three classification tasks (Iris, Breast Cancer, CIFAR-10) and three function approximation tasks (Linear, Trigonometric, Complex). Built 18 feedforward neural network models using a single hidden layer, ReLU activation, L2 regularization, and early stopping, with datasets preprocessed through normalization and one-hot encoding. Bayesian optimization was employed to tune hyperparameters such as learning rates, momentum, and damping factors. Results showed SCG as the fastest for simpler classification tasks, while SGD excelled in function approximation and generalization to complex datasets. LFO demonstrated slower convergence but showed potential with relaxed early stopping. The findings, detailed in a formal technical report, provide insights into the suitability of each optimizer based on task complexity and resource constraints.",
    image: "/images/MLAss2.png",
    technologies: [
      "Neural Networks",
      "SGD",
      "SCG",
      "LFO",
      "Bayesian Optimization",
      "TensorFlow",
      "Classification",
      "Function Approximation",
      "Hyperparameter Tuning",
      "Early Stopping",
      "L2 Regularization",
    ],
    category: "datascience",
  },
  {
    id: "random-forest-hyperparameters",
    title: "Does Size Matter? Hyperparameter Tuning in Random Forests",
    description:
      "This project explored the impact of key hyperparameters—tree depth and the number of features per split—on Random Forest performance across five classification datasets of varying complexity, including Iris, Breast Cancer, and Fashion MNIST. Four experiments were conducted to investigate the effects of these parameters individually and in combination. Results revealed that optimal tree depth depends on dataset complexity, with shallow trees (depths 3-5) performing well on simple datasets and deeper trees (depths 10-20) required for complex ones. The number of features per split had a significant impact on complex datasets, striking a balance between underfitting and overfitting. Additionally, the interaction between tree depth and the number of trees in the forest showed diminishing performance returns beyond 100 trees. This study highlights the importance of carefully tuning hyperparameters to balance model complexity and computational efficiency. A formal report details the methodology, experiments, and findings.",
    image: "/images/MLAss3.png",
    technologies: [
      "Random Forests",
      "Hyperparameter Tuning",
      "Scikit-learn",
      "Python",
      "Data Visualization",
      "Classification",
      "Model Complexity",
      "Ensemble Methods",
      "Cross-validation",
      "Performance Analysis",
    ],
    category: "datascience",
  },
  {
    id: "customer-purchase-prediction",
    title: "Predicting Customer Purchases Using Advanced Classification Models",
    description:
      "This project developed a robust classification pipeline to predict whether a customer would make a purchase on an e-commerce platform based on various behavioral and advertising features. Data preprocessing included creating dummy variables, removing multicollinear and dependent variables, scaling features, and refining predictors to enhance model performance. The classification models employed included K-Nearest Neighbors (KNN), Random Forest, and Extreme Gradient Boosting (XGBoost), with each model optimized using metrics such as AUC-ROC, precision, recall, and F1-score. Key insights were derived through model refinement, such as determining the optimal hyperparameters for each model: k=172 for KNN, max depth of 10 for Random Forest, and tuned estimators for XGBoost. The final models achieved significant accuracy and predictive power, with the refined pipeline highlighting the critical impact of advertisements and customer features like subscription status and platform usage. This project underscores the value of data-driven approaches in optimizing e-commerce strategies, supported by thorough visualization, model evaluation, and actionable insights.",
    image: "/images/DS241.png",
    technologies: [
      "KNN",
      "Random Forest",
      "XGBoost",
      "Feature Engineering",
      "E-commerce Analytics",
      "Classification",
      "Hyperparameter Tuning",
      "Model Evaluation",
      "Data Preprocessing",
      "Business Intelligence",
    ],
    category: "datascience",
  },
  {
    id: "covid-vaccine-analysis",
    title: "Impact of the Covid-19 Vaccine on Death Rates in R",
    description:
      "Analyzed the effectiveness of the Covid-19 vaccine by comparing death rates in the United States, United Kingdom, and Japan before and after its introduction, using data from April 2020 to October 2021. Selected for their high vaccination rates (56%, 66%, and 63% fully vaccinated, respectively) and reliable data, these countries provided a robust basis for evaluation. Pre-vaccine data showed peak death rates in April 2020 (UK: 13.5, USA: 6.5, Japan: 0.1 per million) and January 2021 (UK: 18.3, USA: 9.5, Japan: 0.6 per million), influenced by the Delta variant and lockdown variations. Post-vaccine data, following widespread vaccination and lockdown easing by July 2021, revealed a September 2021 peak with significantly lower death rates in the UK (2.3 per million, ~70% reduction) and USA (6.3 per million, ~60% reduction), despite 38% unvaccinated populations. Japan's death rate slightly increased (0.42 per million, ~40% rise), likely due to a state of emergency and surging cases. The analysis, accounting for factors like lockdowns and population density, demonstrates the vaccine's effectiveness in reducing mortality, with higher vaccination rates correlating to lower death rates, though not granting full immunity.",
    image: "/images/DS141.jpg",
    technologies: [
      "R",
      "Statistical Analysis",
      "Data Visualization",
      "Public Health Analytics",
      "Time Series Analysis",
      "Comparative Analysis",
      "Epidemiology",
      "Data Interpretation",
      "Healthcare Statistics",
      "Policy Analysis",
    ],
    category: "datascience",
  },

  // Computer Science Projects
  {
    id: "advanced-algorithms-data-structures",
    title: "Advanced Algorithms for Data Structures and Sorting",
    description:
      "Developed a Java-based system to implement and analyze fundamental data structures and sorting algorithms, focusing on efficiency and robust software engineering practices. The project included four key components: (1) a circular, doubly-linked list with a single sentinel node, supporting null elements and object equality-based operations; (2) a hash table with separate chaining for collision resolution, dynamic resizing based on load factor, and a custom MAD (multiply, add, divide) compression function; (3) a priority queue built on an array-based min-heap, utilizing the adapter pattern for FIFO queue integration; and (4) an adaptive mergesort algorithm that delegates to insertion sort for small subarrays, with experimentally determined switchover thresholds. The system adhered to strict Java coding standards, including proper exception handling, iterator safety with modification counters, and comprehensive unit testing. An experimental analysis in LaTeX explored optimal sorting thresholds across various input types, providing insights into adaptive algorithm performance and practical data structure design.",
    image: "/images/CS412A1.jpg",
    technologies: [
      "Java",
      "Data Structures",
      "Algorithms",
      "Hash Tables",
      "Linked Lists",
      "Priority Queues",
      "Mergesort",
      "Heap Data Structure",
      "Algorithm Analysis",
      "Performance Optimization",
      "Unit Testing",
      "LaTeX",
    ],
    category: "computerscience",
  },
  {
    id: "competitive-coding-jam-1",
    title: "Competitive Algorithmic Problem Solving in a Coding Jam",
    description:
      "Developed a Java-based solution for three algorithmic challenges (Document Duplication, Political Convention, and Surnames First) as part of a competitive coding jam at Stellenbosch University, emphasizing efficient algorithm design and robust data structure selection. The Document Duplication solution implemented a fingerprint-matching algorithm to detect near-duplicate documents, using dynamic programming to handle section deletions and tolerance-based block comparisons within strict time and memory constraints. The Political Convention solution modeled party affiliations as an equivalence relation, employing a union-find data structure to efficiently process same-party and different-party operations while handling contradictions. The Surnames First solution optimized file renaming in a legacy system by calculating the minimum keystrokes needed for cursor movements and renames, leveraging greedy or dynamic programming approaches to navigate sorted file lists. All solutions adhered to stringent Java coding standards, processed input/output via standard streams, and operated within a 16MiB heap and tight time limits, showcasing proficiency in high-performance coding under competitive conditions.",
    image: "/images/CS412A2.jpg",
    technologies: [
      "Java",
      "Dynamic Programming",
      "Union-Find",
      "Greedy Algorithms",
      "Algorithm Design",
      "Data Structures",
      "Competitive Programming",
      "Performance Optimization",
      "Memory Management",
      "Time Complexity Analysis",
    ],
    category: "computerscience",
  },
  {
    id: "competitive-coding-jam-2",
    title: "Competitive Algorithmic Problem Solving in a Coding Jam 2",
    description:
      "Developed a Java-based solution for three algorithmic challenges (Word Chains, Term Unification, and Neighbourhood Watch) as part of a competitive coding jam at Stellenbosch University, focusing on efficient algorithm design and optimal data structure selection. The Word Chains solution constructed maximum-strength word chains with disjoint overlaps of at least two letters, using dynamic programming or graph-based approaches to maximize overlap lengths while adhering to strict constraints. The Term Unification solution implemented a unification algorithm for automated theorem proving, employing a recursive descent parser and substitution-based unification to produce minimal unifiers for terms, ensuring alphabetical ordering and handling recursive cases. The Neighbourhood Watch solution optimized the division of a rectangular grid into two non-overlapping areas with minimal perimeter, each containing exactly K houses, using combinatorial search or geometric optimization techniques. All solutions complied with rigorous Java coding standards, processed standard input/output streams, and operated within a 16MiB heap and tight time limits, demonstrating proficiency in high-performance coding under competitive conditions.",
    image: "/images/CS412A3.jpg",
    technologies: [
      "Java",
      "Graph Algorithms",
      "Dynamic Programming",
      "Recursive Descent Parsing",
      "Unification Algorithms",
      "Combinatorial Optimization",
      "Geometric Algorithms",
      "Competitive Programming",
      "Algorithm Design",
      "Performance Analysis",
    ],
    category: "computerscience",
  },
  {
    id: "lossless-compression-tool",
    title: "Lossless Compression Tool Using BWT, MTF, and Huffman Coding",
    description:
      "Developed a lossless compression library in C, named the Data Compression Algorithm (DCA), integrating Burrows-Wheeler Transform (BWT), Move-to-Front (MTF) encoding, and Huffman coding to efficiently compress and decompress plain text files into a custom .dca format. The BWT reorders text to cluster similar characters, MTF transforms these into small integers for local correlations, and Huffman coding applies variable-length codes to minimize file size. A command-line tool built on this library ensures practical usability. Evaluated against bzip2 and xz using the Calgary Corpus, DCA achieved compression ratios below 0.4, demonstrating effective file size reduction. While producing larger compressed files (e.g., ~15% larger than bzip2 for book1), DCA outperformed xz in compression speed (e.g., 0.20s vs. 0.30s for book1) and maintained negligible decompression times, comparable to competitors. Robust error handling and validation ensured reliable, lossless operation, highlighting DCA's utility as a balance, efficient compression tool for real-world text data.",
    image: "/images/CS412A4.jpg",
    technologies: [
      "C",
      "Burrows-Wheeler Transform",
      "Move-to-Front Encoding",
      "Huffman Coding",
      "Data Compression",
      "Algorithm Implementation",
      "Performance Analysis",
      "Command-line Tools",
      "File I/O",
      "Error Handling",
      "Benchmarking",
    ],
    category: "computerscience",
  },
  {
    id: "portfolio-website",
    title: "Professional Portfolio Website with Advanced Web Technologies",
    description:
      "Developed a comprehensive personal portfolio website using Next.js 15 with App Router architecture, showcasing advanced full-stack web development capabilities and modern design principles. The application features a fully responsive design system built with Tailwind CSS and shadcn/ui components, implementing sophisticated theming with seamless dark/light mode transitions and custom CSS variables for consistent branding. The site employs TypeScript throughout for enhanced type safety and developer experience, with comprehensive error handling and validation. Key technical features include dynamic project categorization with interactive filtering, real-time course progress tracking with expandable sections, and optimized image handling with fallback mechanisms. The website implements advanced SEO optimization techniques including meta tag management, structured data, and performance optimization achieving excellent Core Web Vitals scores. Accessibility compliance follows WCAG guidelines with semantic HTML, proper ARIA attributes, and keyboard navigation support. The architecture demonstrates modern React patterns including server and client components, custom hooks for state management, and efficient data fetching strategies. Hosted on Microsoft Azure with automated CI/CD deployment pipelines, the site features comprehensive project showcases, academic achievement tracking, and professional experience documentation. The codebase emphasizes maintainability with modular component architecture, consistent naming conventions, and comprehensive documentation, serving as both a professional showcase and a demonstration of contemporary web development best practices.",
    image: "/images/portfolio-proj.jpg",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "React Server Components",
      "App Router",
      "Microsoft Azure",
      "Responsive Design",
      "Dark Mode",
      "SEO Optimization",
      "Accessibility (WCAG)",
      "Performance Optimization",
      "CI/CD",
    ],
    category: "computerscience",
  },
  {
    id: "regex-engine-haskell",
    title: "Haskell-Based Extended Regular Expression Matching Engine",
    description:
      "Developed an extended regular expression matching engine in Haskell using derivatives of regular expressions, supporting full and partial matching with range operators (e.g., {n,m}). The engine efficiently computes regex derivatives, simplifies complex regex structures using defined rules to prevent exponential growth, and determines leftmost-longest match spans in strings. Key features include full matching through recursive nullability checks, regex simplification to optimize performance, and partial matching via location and span calculations. Additionally, authored a detailed report analyzing the impact of simplification rules on regex size and performance, exploring their role in mitigating computational overhead and improving computational efficiency. This project highlights the application of Haskell's functional programming paradigms and theoretical regex concepts in building a robust, extensible matching engine, complemented by a comprehensive technical analysis.",
    image: "/images/FPP1.png",
    technologies: [
      "Haskell",
      "Functional Programming",
      "Regular Expressions",
      "Algorithm Optimization",
      "Regex Derivatives",
      "Pattern Matching",
      "Performance Analysis",
      "Formal Languages",
      "Theoretical Computer Science",
    ],
    category: "computerscience",
  },
  {
    id: "enhanced-regex-engine",
    title: "Enhanced Regular Expression Engine with Advanced Features",
    description:
      "In this project, I extended the derivative-based regular expression engine, implemented in Haskell, into a fully-featured regex library. Key enhancements include a custom regex parser built with precedence handling, smart constructors for on-the-fly simplification, and support for additional quantifiers (? and +). The engine was further upgraded to handle symbolic derivatives, enabling efficient matching over large alphabets and character classes through predicates. Advanced features such as lookarounds, anchors, and Unicode support were integrated by redefining nullability and derivative functions. A detailed benchmarking report compared the engine's performance and feature set against established libraries like regex-tdfa, Java's regex matcher, and .NET. The project highlights the practical application of Haskell's functional paradigms in constructing a robust and extensible regex engine tailored for modern computational requirements.",
    image: "/images/FPP2.jpg",
    technologies: [
      "Haskell",
      "Regex Parsing",
      "Symbolic Derivatives",
      "Benchmarking",
      "Unicode",
      "Parser Combinators",
      "Lookarounds",
      "Character Classes",
      "Library Development",
      "Performance Optimization",
    ],
    category: "computerscience",
  },
  {
    id: "github-api-clone",
    title: "Custom GitHub API Clone Using Python and Flask",
    description:
      "Developed a custom RESTful API in Python using Flask, emulating key endpoints of the GitHub API by scraping data on demand from GitHub's website with BeautifulSoup. The API supports fetching user details (/users/{username}) and listing repositories (/users/{username}/repos), providing accurate responses with real-time data scraping while adhering to the original GitHub API's structure, response codes, and data types. Implemented efficient scraping strategies, including handling dynamic content challenges, such as emulating browser interactions with Selenium for inaccessible fields. The project demonstrates robust API design and data handling without relying on GitHub's paid API or third-party libraries like Octokit. It highlights skills in web scraping, Flask-based RESTful API development, and overcoming data retrieval challenges.",
    image: "/images/CS343P1.png",
    technologies: [
      "Python",
      "Flask",
      "RESTful API",
      "Web Scraping",
      "BeautifulSoup",
      "Selenium",
      "HTTP Status Codes",
      "JSON Response Formatting",
      "Dynamic Content Handling",
      "API Design",
    ],
    category: "computerscience",
  },
  {
    id: "intersection-nfa-analysis",
    title: "Exploring ∩-NFAs: A Randomized Approach to Automata Analysis",
    description:
      "Developed a Python-based system to generate and analyze ∩-NFAs (nondeterministic finite automata with intersection operations) and their transformation to DFAs (deterministic finite automata). The system uses pseudo-random bitstreams for generating initial states, final states, and transition matrices, ensuring unbiased and diverse automata generation. Parameters such as the number of states, alphabet size, and automata count can be user-defined or randomly assigned within a valid range. Key features include statistical analysis of automata behavior and identifying patterns in transition probabilities and acceptance conditions. Findings revealed predictable distributions in transition data, supporting the practical use of ∩-NFAs in theoretical and computational models. This project provides insights into automata design, randomness in computational models, and comparative performance of ∩-NFAs versus traditional NFAs.",
    image: "/images/CS345.png",
    technologies: [
      "Python",
      "Automata Theory",
      "Statistical Analysis",
      "Computational Models",
      "Finite State Machines",
      "Randomized Algorithms",
      "Theoretical Computer Science",
      "Transition Matrices",
      "State Machines",
    ],
    category: "computerscience",
  },
  {
    id: "othello-game-engine",
    title: "Parallelized Othello Game Engine with Minimax and MPI",
    description:
      "Developed a C-based Othello game engine capable of autonomous gameplay and strategic decision-making against other implementations. The project emphasized parallelism and optimization, leveraging the Minimax algorithm with alpha-beta pruning for evaluating game states. Using MPI (Message Passing Interface), the engine efficiently distributed computational tasks across multiple processors, enabling faster evaluation of potential moves. The game supported both player and engine-based gameplay, with robust network communication for multiplayer matches facilitated by custom socket-based protocols. This project highlighted advanced techniques in parallel processing, game theory, and network communication, culminating in a competitive, scalable Othello engine.",
    image: "/images/CS314.jpg",
    technologies: [
      "C",
      "MPI",
      "Parallel Computing",
      "Minimax Algorithm",
      "Game Theory",
      "Socket Programming",
      "Alpha-Beta Pruning",
      "Distributed Computing",
      "Game AI",
      "Network Communication",
      "Performance Optimization",
    ],
    category: "computerscience",
  },
  {
    id: "huffman-compression",
    title: "Huffman Compression in Intel x86 Assembly and C",
    description:
      "Developed a hybrid Huffman compression system using Intel x86 assembly and C to encode text files into a highly compressed format. The project utilized C for file I/O and frequency analysis, while Intel assembly was employed to optimize computationally intensive tasks, such as heap management and bit-level encoding. Key components include a custom heap implementation for frequency-based sorting of characters and Huffman tree construction. Using recursive algorithms, a lookup table was generated to encode characters into binary strings, achieving efficient compression. Parallelism and low-level optimization techniques enhanced performance, leveraging assembly for critical operations like managing the heap data structure and performing bit manipulations. This integration of high-level programming with low-level assembly demonstrates a robust understanding of memory management, data structures, and algorithmic optimization. The system outputs compressed files with accompanying metadata for decompression, showcasing the effective use of Huffman encoding principles in a hybrid programming environment.",
    image: "/images/CS244P1.png",
    technologies: [
      "C",
      "x86 Assembly",
      "Huffman Encoding",
      "Data Compression",
      "Low-level Optimization",
      "Heap Data Structure",
      "Bit Manipulation",
      "File I/O",
      "Binary Trees",
      "Memory Management",
      "Algorithmic Optimization",
    ],
    category: "computerscience",
  },
  {
    id: "genomic-sequence-analysis",
    title: "Efficient Detection of Repetitions in Genomic Sequences",
    description:
      "Developed a Java-based program to analyze genomic sequences, focusing on detecting and generating non-repetitive patterns in DNA strings over the alphabet {A, C, G, T}. The project comprised three modes: a repetition checker for input strings, a brute-force generator for non-repetitive sequences, and an optimized search for the longest repetition-free string within a time constraint. Advanced data structures and algorithms were implemented to handle the computational and memory-intensive nature of the problem. Recursive tree traversal with branch pruning ensured efficient generation and validation of sequences, while custom error handling and input validation ensured robustness. This project demonstrates expertise in computational biology, algorithm design, and optimization for large-scale data analysis.",
    image: "/images/CS214.png",
    technologies: [
      "Java",
      "Computational Biology",
      "Algorithm Design",
      "Recursive Algorithms",
      "DNA Analysis",
      "Pattern Recognition",
      "Tree Traversal",
      "Branch Pruning",
      "Optimization",
      "Bioinformatics",
      "String Processing",
    ],
    category: "computerscience",
  },
  {
    id: "flappy-bird-clone",
    title: "Flappy Bird Clone: FlyingBoi",
    description:
      "Developed a Python-based Flappy Bird-inspired game, 'FlyingBoi,' using the Pygame library, featuring a customizable sprite navigating through moving pillar obstacles. The game includes a main gameplay loop where players control a sprite (selectable from Bird, Spaceship, R2D2, or Stickman) with spacebar jumps to avoid top and bottom pillars, scored by time survived and pillars passed. A menu allows players to start the game or access a store for sprite selection, with animated sprite movements and background options. Key features include gravity-based physics, collision detection, random pillar gap generation, and sound effects for jumps, all running at 60 FPS within an 800x500 window. The game employs a modular design with separate functions for menu, store, and game states, using sprite and background images for visual appeal, and demonstrates efficient event handling and rendering for a smooth, engaging experience.",
    image: "/images/Flappy_Bird.png",
    technologies: [
      "Python",
      "Pygame",
      "Game Development",
      "Physics Simulation",
      "Collision Detection",
      "Event Handling",
      "Animation",
      "Sound Effects",
      "Game State Management",
      "Object-Oriented Programming",
    ],
    category: "computerscience",
  },
  {
    id: "space-attack-game",
    title: "Space Attack: A Retro Space Invaders Game",
    description:
      "Developed a Java-based retro-style Space Invaders game, 'Space Attack,' featuring dynamic difficulty progression, power-ups, and a high-score database. The game employs a GameChange algorithm to increase challenge by adjusting alien waves' speed, bullet velocity, and grid size (up to 7 rows and 10 columns) based on the wave count, ensuring engaging gameplay. Collision detection and alien shooting algorithms use random number generation for alien attacks and precise coordinate checks for bullet-player and bullet-alien interactions, managing lives and scores. Advanced features include power-ups (e.g., ClearWave, Speed, Immunity) activated every 30 seconds via the 'P' key, enhancing gameplay with temporary or permanent boosts. Background music (retro tracks like 'Danger Zone') and toggleable audio add thematic immersion. A database supports sorting high scores by score, name, or date, with robust input validation for player names (1-15 characters). ArrayLists handle dynamic alien spawning, and a timer tracks score and time. Testing confirmed reliable handling of normal, severe, and extreme data inputs, ensuring stability. The game delivers a polished, challenging experience with retro aesthetics and modern interactivity.",
    image: "/images/Space_Invaders.png",
    technologies: [
      "Java",
      "Game Development",
      "Database Management",
      "Collision Detection",
      "Dynamic Difficulty",
      "Power-up Systems",
      "Audio Integration",
      "High Score System",
      "Input Validation",
      "ArrayList Data Structures",
      "Timer Management",
      "Retro Game Design",
    ],
    category: "computerscience",
  },

  // Basic Computer Science Projects (added at the end)
  {
    id: "strategic-board-game",
    title: "Quarto Board Game with GUI and Power-ups",
    description:
      "Implemented a two-player strategic board game on a 4x4 grid where players (Blue and Green) compete to align four pieces in a row, column, or diagonal. The game features both text-based and graphical modes, with players managing external stacks of pieces and utilizing power-ups including Transporter, Bomb, and Shifter abilities. Built with Java using Swing for the GUI and StdDraw for graphics rendering, the game includes comprehensive move validation, turn management, and win condition detection. Players can place pieces from external stacks, move pieces between board positions with stacking rules, and strategically use limited power-ups to gain advantages. The implementation demonstrates object-oriented programming principles, game state management, and interactive user interface design.",
    image: "/images/CS113.png",
    technologies: ["Java", "Swing", "StdDraw", "Game Development", "Object-Oriented Programming", "GUI Design"],
    category: "computerscience",
  },
  {
    id: "dictionary-implementations",
    title: "Multi-Implementation Dictionary and Spellchecker Framework",
    description:
      "Developed a comprehensive dictionary framework with three distinct implementations: TrieDictionary using prefix trees, ResizingArrayDictionary with dynamic array management, and ArrayDictionary with fixed-size storage. Each implementation adheres to a common DictionaryInterface, providing word storage, lookup, and manipulation functionalities for spellchecking applications. The TrieDictionary offers efficient prefix-based operations using state nodes and edges, while the array-based implementations provide simpler storage with different memory management strategies. Features include file-based dictionary creation, word validation, addition and removal operations, and element counting. The modular design demonstrates various data structure approaches to the same problem, highlighting trade-offs between memory usage, lookup efficiency, and implementation complexity.",
    image: "/images/CS144.jpg",
    technologies: ["Java", "Data Structures", "Trie", "Arrays", "File I/O", "Interface Design", "Algorithms"],
    category: "computerscience",
  },
]

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  // Find related projects (same category, excluding current project)
  const relatedProjects = projects.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 3)

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/projects">
          <Button variant="outline" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Button>
        </Link>
      </div>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h1>

        <div className="mb-8 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
          <ProjectImageFallback
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {project.technologies && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <Card className="mb-12">
          <CardContent className="p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {project.description.split("\n").map((paragraph, idx) => (
                <p key={idx} className="mb-4 text-slate-700 dark:text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        {relatedProjects.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <Link href={`/projects/${relatedProject.id}`} key={relatedProject.id} className="block">
                  <Card className="h-full transition-all hover:shadow-md hover:-translate-y-1">
                    <div className="h-40 relative">
                      <ProjectImageFallback
                        src={relatedProject.image || "/placeholder.svg"}
                        alt={relatedProject.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold line-clamp-2">{relatedProject.title}</h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
