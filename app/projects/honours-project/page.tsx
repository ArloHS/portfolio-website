import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, Calendar, Award, Target, Cog, Brain, BarChart3, Shield } from "lucide-react"
import { ProjectImageFallback } from "@/components/project-image-fallback"
import Link from "next/link"

export default function HonoursProjectPage() {
  const githublink = "https://github.com/ArloHS/Self-Healing-Machine-Learning-Pipeline-with-Anomaly-Detection";
  const technologies = [
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
  ]

  const teamMembers = [
    { name: "Arlo Steyn", role: "Team Member" },
    { name: "Andre van der Merwe", role: "Team Member" },
    { name: "Stephan Delport", role: "Team Member" },
    { name: "Dr M Ngxande", role: "Project Supervisor" },
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
            <Award className="h-8 w-8 text-orange-600 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold">Honours Research Project</h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-700 dark:text-slate-300">
            Self-Healing Machine Learning Pipeline with Anomaly Detection and Autonomous Remediation
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
              <span>4-Person Team</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
          <ProjectImageFallback
            src="/images/DS471.jpg"
            alt="Self-Healing Machine Learning Pipeline"
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

        {/* Team */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Users className="mr-3 h-6 w-6 text-teal-600" />
              Project Team
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-semibold">
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
              <Target className="mr-3 h-6 w-6 text-teal-600" />
              Executive Summary
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                This honours research project addresses critical challenges in retail data management by developing a
                fully autonomous self-healing machine learning pipeline. The system is designed to handle time series
                forecasting in data-rich retail environments while minimizing human intervention and reducing downtime.
              </p>
              <p className="leading-relaxed mb-4">
                Using Dunnhumby's "The Complete Journey" dataset containing shopping behavior data from over 2,500
                households across two years, our pipeline employs a heterogeneous ensemble of machine learning models
                including Random Forest, XGBoost, and LSTM networks to forecast product demand with high accuracy.
              </p>
              <p className="leading-relaxed">
                The pipeline's self-healing capabilities are powered by multi-layer anomaly detection, explainable AI
                for failure diagnosis, and autonomous remediation strategies that enable the system to adapt to changing
                data patterns and maintain optimal performance without manual intervention.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Brain className="mr-3 h-5 w-5 text-blue-600" />
                Autonomous Self-Healing
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>• Multi-layer anomaly detection system</li>
                <li>• Automatic model retraining triggers</li>
                <li>• Synthetic data generation for edge cases</li>
                <li>• Fallback mechanisms for model failures</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Cog className="mr-3 h-5 w-5 text-green-600" />
                MLOps Integration
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>• MLflow for experiment tracking and model versioning</li>
                <li>• Apache Airflow for pipeline orchestration</li>
                <li>• Azure DevOps for CI/CD automation</li>
                <li>• Asynchronous inference and monitoring cycles</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <BarChart3 className="mr-3 h-5 w-5 text-purple-600" />
                Advanced Analytics
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>• SHAP and LIME for explainable AI</li>
                <li>• Bayesian optimization for hyperparameter tuning</li>
                <li>• Meta-learning for adaptive model training</li>
                <li>• Statistical drift detection methods</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Shield className="mr-3 h-5 w-5 text-red-600" />
                Robust Architecture
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>• Heterogeneous ensemble of ML models</li>
                <li>• LSTM autoencoders for anomaly detection</li>
                <li>• Adversarial sample testing (FGSM)</li>
                <li>• Rolling-origin cross-validation</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Technical Architecture */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Technical Architecture</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Pipeline Cycles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Inference Cycle</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Manages real-time workflows including data ingestion, preprocessing, model inference, and output
                      generation for continuous prediction delivery.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                      Monitoring & Remediation Cycle
                    </h4>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Continuously monitors model performance and data quality, triggering autonomous remediation
                      actions when anomalies are detected.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Anomaly Detection Layers</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg">
                    <h4 className="font-medium mb-2">Statistical Drift Tests</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Detect changes in data distribution using statistical tests with p-value threshold of 0.05.
                    </p>
                  </div>
                  <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg">
                    <h4 className="font-medium mb-2">LSTM Autoencoders</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Identify anomalies through reconstruction error analysis using 95th percentile thresholds.
                    </p>
                  </div>
                  <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg">
                    <h4 className="font-medium mb-2">Adversarial Testing</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Stress test models using FGSM-generated adversarial samples to identify vulnerabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Methodology */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Methodology & Implementation</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Data & Target Variable</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  The study utilizes Dunnhumby's "The Complete Journey" dataset, analyzing shopping behavior of 2,500+
                  households over two years. The target variable is weekly quantity sold per item, calculated by
                  grouping by week number and summing quantities.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-medium mb-2">Key Features</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Temporal indices (week numbers)</li>
                      <li>• Lag features from historical sales</li>
                      <li>• Promotional indicators</li>
                      <li>• Holiday indicators</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <h4 className="font-medium mb-2">Model Ensemble</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Random Forest for robust predictions</li>
                      <li>• XGBoost for gradient boosting</li>
                      <li>• LSTM networks for temporal patterns</li>
                      <li>• Ensemble averaging for final predictions</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Experimental Design</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Validation Strategy</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Rolling-origin cross-validation simulates real-world deployment by incrementally expanding
                      training sets while moving test sets forward in time.
                    </p>
                    <h4 className="font-medium mb-2">Performance Metrics</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Mean Squared Error (MSE) quantifies prediction accuracy, calculated from ensemble-averaged
                      predictions across all models.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Sliding Window Strategy</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      Uses the most recent n days of data for training, with window size treated as a tunable
                      hyperparameter to capture current trends.
                    </p>
                    <h4 className="font-medium mb-2">Stress Testing</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Intentional injection of weak models validates the complete MLOps loop from detection through
                      retraining and redeployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Project Timeline */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Project Timeline (2025)</h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Phase 1: Foundation</h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">Apr - May 2025</p>
                  <ul className="text-xs text-blue-600 dark:text-blue-400 space-y-1">
                    <li>• Literature review and methodology research</li>
                    <li>• Azure DevOps pipeline setup</li>
                    <li>• MLOps integration (MLflow, Airflow)</li>
                    <li>• Exploratory data analysis</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Phase 2: Development</h4>
                  <p className="text-sm text-green-700 dark:text-green-300 mb-2">Jun - Jul 2025</p>
                  <ul className="text-xs text-green-600 dark:text-green-400 space-y-1">
                    <li>• LSTM model training with AutoML</li>
                    <li>• XAI integration (SHAP, LIME)</li>
                    <li>• Anomaly injection testing</li>
                    <li>• Pipeline robustness validation</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Phase 3: Integration</h4>
                  <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">Aug - Nov 2025</p>
                  <ul className="text-xs text-purple-600 dark:text-purple-400 space-y-1">
                    <li>• Additional model development</li>
                    <li>• Heterogeneous ensemble integration</li>
                    <li>• Frontend interface development</li>
                    <li>• Final system validation</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impact & Future Work */}
        <Card className="bg-gradient-to-r from-teal-50 to-slate-50 dark:from-teal-950 dark:to-slate-950">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Impact & Future Enhancements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Business Impact</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li>• Reduced manual intervention in ML operations</li>
                  <li>• Improved forecast accuracy for demand planning</li>
                  <li>• Enhanced system reliability and uptime</li>
                  <li>• Scalable solution for retail analytics</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Future Enhancements</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li>• Reinforcement learning-based retraining triggers</li>
                  <li>• Isolation Forest anomaly detection models</li>
                  <li>• Real-time drift monitoring dashboard</li>
                  <li>• Extended multi-modal data integration</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
