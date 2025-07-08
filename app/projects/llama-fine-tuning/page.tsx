import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, Calendar, Target, Cog, Brain, BarChart3, Shield, Zap, Database, Code2 } from "lucide-react"
import { ProjectImageFallback } from "@/components/project-image-fallback"
import Link from "next/link"

export default function LlamaFineTuningPage() {
  const githublink = "https://github.com/AndrevdM02/DataScience346_Project";
  const technologies = [
    "Python",
    "LLaMA-3.2-3B",
    "LoRA",
    "UnSloth",
    "BeautifulSoup4",
    "Kaggle GPU",
    "4-bit Quantization",
    "Byte-Pair Encoding",
    "Gradient Accumulation",
    "Cross Validated",
    "Natural Language Processing",
    "Fine-tuning",
    "Transformer Architecture",
    "Web Scraping",
    "Data Wrangling",
  ]

  const teamMembers = [
    { name: "Arlo Steyn", role: "Team Member" },
    { name: "Andre van der Merwe", role: "Team Member" },
    { name: "Stephan Delport", role: "Team Member" },
  ]

  const modelSpecs = [
    { label: "Model Size", value: "3 billion parameters" },
    { label: "Architecture", value: "Transformer (Decoder-only)" },
    { label: "Attention Heads", value: "32 heads per layer" },
    { label: "Hidden Size", value: "4096 hidden units" },
    { label: "Layers", value: "32 transformer layers" },
    { label: "FFN Dimension", value: "11,008 units" },
    { label: "Positional Encoding", value: "Rotary (RoPE)" },
    { label: "Attention Head Dim", value: "128 dimensions" },
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
            <Brain className="h-8 w-8 text-purple-600 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Taming the LLaMA</h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-700 dark:text-slate-300">
            Fine-Tuning a 3B Parameter Model for AI and Machine Learning Q&A
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
              <span>October 2024</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              <span>3-Person Team</span>
            </div>
            <div className="flex items-center">
              <Database className="h-4 w-4 mr-2" />
              <span>39,668 Q&A Pairs</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
          <ProjectImageFallback src="/images/DS346.jpg" alt="LLaMA Fine-Tuning Project" fill className="object-cover" />
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

        {/* Team */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Users className="mr-3 h-6 w-6 text-purple-600" />
              Project Team
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Executive Summary */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Target className="mr-3 h-6 w-6 text-purple-600" />
              Project Overview
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                This project successfully fine-tuned Meta's LLaMA-3.2-3B model on a comprehensive dataset of 39,668
                question-and-answer pairs scraped from Cross Validated, Stack Exchange's premier platform for
                statistics, machine learning, and data science discussions.
              </p>
              <p className="leading-relaxed mb-4">
                Using advanced techniques including LoRA (Low-Rank Adaptation) for efficient parameter updates and
                UnSloth optimization for enhanced performance, we created two distinct models: one trained on the full
                dataset for one epoch, and another trained on 10,000 high-quality samples for three epochs.
              </p>
              <p className="leading-relaxed">
                The project demonstrates the effectiveness of domain-specific fine-tuning in creating specialized AI
                assistants capable of providing accurate, contextually relevant responses to complex technical queries
                in artificial intelligence, machine learning, and data science.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Model Architecture */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Cog className="mr-3 h-6 w-6 text-blue-600" />
              LLaMA-3.2-3B Architecture
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Model Specifications</h3>
                <div className="space-y-3">
                  {modelSpecs.map((spec, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg"
                    >
                      <span className="font-medium text-slate-700 dark:text-slate-300">{spec.label}</span>
                      <span className="text-slate-600 dark:text-slate-400">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Brain className="h-4 w-4 mr-2 text-purple-600" />
                      Multi-Head Self-Attention
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Enables the model to focus on different parts of input sequences simultaneously, capturing complex
                      relationships across long contexts.
                    </p>
                  </div>
                  <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-yellow-600" />
                      Autoregressive Generation
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Generates text one token at a time, using previously generated tokens to predict the next,
                      ensuring coherent responses.
                    </p>
                  </div>
                  <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Code2 className="h-4 w-4 mr-2 text-green-600" />
                      Rotary Positional Encoding
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Advanced positional encoding that maintains relative position information across different
                      sequence lengths.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Collection & Ethics */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Database className="mr-3 h-5 w-5 text-teal-600" />
                Data Collection Process
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Cross Validated Platform</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    Scraped from Stack Exchange's specialized Q&A platform for statistics, ML, and data science.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Technical Implementation</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Python with BeautifulSoup4 for web scraping</li>
                    <li>• Exponential backoff to respect rate limits</li>
                    <li>• Batch processing in 5,000 observation chunks</li>
                    <li>• JSON storage for structured data management</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Shield className="mr-3 h-5 w-5 text-red-600" />
                Ethical Considerations
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Privacy Protection</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Excluded all personal information</li>
                    <li>• Scraped only text bodies of Q&A pairs</li>
                    <li>• Removed code blocks to focus on text generation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Legal Compliance</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Respected Stack Exchange terms of service</li>
                    <li>• Implemented proper throttling mechanisms</li>
                    <li>• Targeted scraping of relevant content only</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fine-Tuning Process */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Fine-Tuning Methodology</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">LoRA Technique</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Low-Rank Adaptation</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Freezes most pre-trained parameters and updates only a small subset, drastically reducing
                      computational requirements while maintaining high accuracy.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">UnSloth Optimization</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Advanced optimization framework providing 2x faster training, 70% less memory usage, and automated
                      hyperparameter tuning.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Training Configuration</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-medium">Learning Rate</span>
                    <span className="text-slate-600 dark:text-slate-400">2e-4</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-medium">Batch Size</span>
                    <span className="text-slate-600 dark:text-slate-400">4 per GPU</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-medium">Gradient Accumulation</span>
                    <span className="text-slate-600 dark:text-slate-400">4 steps</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-medium">Quantization</span>
                    <span className="text-slate-600 dark:text-slate-400">4-bit</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-medium">Training Time</span>
                    <span className="text-slate-600 dark:text-slate-400">~12 hours each</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Model Comparison */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Model Comparison & Results</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border-2 border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-200">Model 1: Breadth Focus</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Dataset Size</span>
                    <span className="text-blue-600">39,668 Q&A pairs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Training Epochs</span>
                    <span className="text-blue-600">1 epoch</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Approach</span>
                    <span className="text-blue-600">Full dataset coverage</span>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Characteristics</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Broader topic coverage</li>
                    <li>• Good general knowledge</li>
                    <li>• Suitable for diverse queries</li>
                    <li>• Less detailed explanations</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 border-2 border-green-200 dark:border-green-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-800 dark:text-green-200">Model 2: Depth Focus</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Dataset Size</span>
                    <span className="text-green-600">10,000 Q&A pairs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Training Epochs</span>
                    <span className="text-green-600">3 epochs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Approach</span>
                    <span className="text-green-600">High-quality subset</span>
                  </div>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                  <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Characteristics</h4>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Deeper conceptual understanding</li>
                    <li>• More detailed explanations</li>
                    <li>• Higher quality responses</li>
                    <li>• Preferred for complex queries</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Innovations */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Code2 className="mr-3 h-5 w-5 text-purple-600" />
                Data Processing
              </h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• HTML tag filtering and text extraction</li>
                <li>• Unicode to ASCII character encoding</li>
                <li>• Structured JSON formatting for LLaMA</li>
                <li>• Removal of code blocks and personal info</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Zap className="mr-3 h-5 w-5 text-yellow-600" />
                Optimization Techniques
              </h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• 4-bit quantization for memory efficiency</li>
                <li>• Byte-Pair Encoding tokenization</li>
                <li>• Layer-freezing and gradient checkpointing</li>
                <li>• Dynamic hyperparameter tuning</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <BarChart3 className="mr-3 h-5 w-5 text-teal-600" />
                Performance Metrics
              </h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• Contextual relevance evaluation</li>
                <li>• Response accuracy assessment</li>
                <li>• Complexity handling comparison</li>
                <li>• Domain-specific knowledge testing</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Key Findings */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Key Findings & Insights</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Training Strategy Impact</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                    <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Data vs. Epochs Trade-off</h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      More training epochs on high-quality data produced deeper conceptual understanding than
                      single-epoch training on larger datasets.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Quality over Quantity</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      Model 2's focused approach on 10,000 high-voted Q&A pairs resulted in more detailed and accurate
                      responses for complex technical queries.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Technical Achievements</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Resource Efficiency</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Successfully fine-tuned 3B parameter models using free Kaggle GPU resources through advanced
                      optimization techniques.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Domain Specialization</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Created specialized AI assistants capable of providing accurate, context-aware responses to
                      complex AI, ML, and data science questions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="bg-gradient-to-r from-purple-50 to-slate-50 dark:from-purple-950 dark:to-slate-950">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Project Impact & Future Directions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Achievements</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li>• Successfully fine-tuned large language models on domain-specific data</li>
                  <li>• Demonstrated effective use of LoRA and UnSloth optimization</li>
                  <li>• Created locally deployable AI assistants for technical Q&A</li>
                  <li>• Established ethical web scraping and data processing pipeline</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Future Enhancements</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li>• Expand to larger model architectures (7B, 13B parameters)</li>
                  <li>• Implement retrieval-augmented generation (RAG)</li>
                  <li>• Add multi-modal capabilities for code and mathematical expressions</li>
                  <li>• Develop comprehensive evaluation benchmarks</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
