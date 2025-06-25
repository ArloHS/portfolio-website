import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, Users, Target, TrendingUp, Shield, Globe } from "lucide-react"
import { ProjectImageFallback } from "@/components/project-image-fallback"
import Link from "next/link"

export default function LungCancerPredictionPage() {
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
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
              Featured Project
            </Badge>
            <Badge variant="outline">Healthcare ML</Badge>
            <Badge variant="outline">Data Science</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
            Lung Cancer Risk Prediction: A Data-Driven Approach
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Developed an advanced machine learning system to classify lung cancer risk levels, providing accessible
            healthcare screening for underprivileged regions. Achieved 96% accuracy while minimizing critical false
            negatives that could impact patient outcomes.
          </p>

          <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8">
            <ProjectImageFallback
              src="/images/DS316.jpg"
              alt="Lung Cancer Risk Prediction Dashboard"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm opacity-90">Healthcare Machine Learning • Risk Classification • Early Detection</p>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">96%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Model Accuracy</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">1,000</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Patient Records</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Critical False Negatives</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">26</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Clinical Features</div>
            </CardContent>
          </Card>
        </div>

        {/* Project Overview */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-red-500" />
              Healthcare Impact & Motivation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              This project addresses a critical healthcare challenge in underprivileged regions, particularly in
              countries like South Africa where access to medical resources is limited. With lung cancer being a leading
              cause of cancer deaths globally, early detection is crucial for improving survival rates from 4-28%
              (late-stage) to 55% (early-stage).
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              Our solution provides a cost-effective, accessible screening tool that requires only a simple
              questionnaire, enabling healthcare workers in remote areas to identify high-risk patients who need
              immediate medical attention. This bridges the gap between limited healthcare infrastructure and
              life-saving early detection.
            </p>
            <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border-l-4 border-red-500">
              <p className="text-red-800 dark:text-red-200 font-medium">
                <strong>Critical Mission:</strong> In regions with high pollution and smoking rates, this model can be
                the difference between life and death, providing guidance when traditional medical screening is
                inaccessible or unaffordable.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Technical Architecture */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-6 w-6 text-blue-500" />
              Technical Methodology & Innovation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Data Analysis & Preprocessing</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>
                    • <strong>Comprehensive EDA:</strong> Analyzed 1,000 patient records with 26 clinical features
                  </li>
                  <li>
                    • <strong>Feature Engineering:</strong> Identified optimal predictive features through correlation
                    analysis
                  </li>
                  <li>
                    • <strong>Data Quality:</strong> Handled categorical variables and ensured balanced class
                    distribution
                  </li>
                  <li>
                    • <strong>Cross-Validation:</strong> Implemented K-fold validation (K=5,10,20,50) for robust
                    evaluation
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Advanced Model Development</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>
                    • <strong>Regularization Techniques:</strong> Lasso, Ridge, and Elastic Net optimization
                  </li>
                  <li>
                    • <strong>Hyperparameter Tuning:</strong> GridSearchCV for optimal regularization parameters
                  </li>
                  <li>
                    • <strong>Ensemble Methods:</strong> Random Forest with Gini and Entropy criteria
                  </li>
                  <li>
                    • <strong>Performance Optimization:</strong> Focused on minimizing life-critical false negatives
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Model Comparison */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-green-500" />
              Model Performance & Improvements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th className="border border-slate-300 dark:border-slate-600 p-3 text-left">Model</th>
                    <th className="border border-slate-300 dark:border-slate-600 p-3 text-center">Accuracy</th>
                    <th className="border border-slate-300 dark:border-slate-600 p-3 text-center">Precision</th>
                    <th className="border border-slate-300 dark:border-slate-600 p-3 text-center">Recall</th>
                    <th className="border border-slate-300 dark:border-slate-600 p-3 text-center">F1-Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Baseline Logistic Regression</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3 text-center">90.3%</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3 text-center">0.923</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3 text-center">0.922</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3 text-center">0.922</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-green-900/20">
                    <td className="border border-slate-300 dark:border-slate-600 p-3 font-semibold">
                      Ridge Regression (Final Model)
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3 text-center font-semibold text-green-600">
                      96.0%
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3 text-center font-semibold text-green-600">
                      0.962
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3 text-center font-semibold text-green-600">
                      0.961
                    </td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3 text-center font-semibold text-green-600">
                      0.961
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-600 p-3">Random Forest (Entropy)</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3 text-center">97.5%</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3 text-center">0.974</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3 text-center">0.974</td>
                    <td className="border border-slate-300 dark:border-slate-600 p-3 text-center">0.974</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-blue-800 dark:text-blue-200">
                <strong>Model Selection Rationale:</strong> While Random Forest achieved higher accuracy, Ridge
                Regression was selected as the final model due to zero critical false negatives (predicting low risk
                when actually high risk), making it safer for healthcare applications where missing a high-risk patient
                could be fatal.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Critical Healthcare Metrics */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-purple-500" />
              Critical Healthcare Predictions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-red-800 dark:text-red-200 mb-3">
                  Most Critical: False Negatives
                </h3>
                <p className="text-red-700 dark:text-red-300 mb-2">Predicting LOW risk when actually HIGH risk</p>
                <div className="text-3xl font-bold text-red-600">0 cases</div>
                <p className="text-sm text-red-600 mt-2">
                  Zero missed high-risk patients - no lives at risk from delayed treatment
                </p>
              </div>
              <div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
                <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-200 mb-3">
                  Secondary Concern: False Positives
                </h3>
                <p className="text-orange-700 dark:text-orange-300 mb-2">Predicting HIGH risk when actually LOW risk</p>
                <div className="text-3xl font-bold text-orange-600">0 cases</div>
                <p className="text-sm text-orange-600 mt-2">
                  Minimal unnecessary stress and medical costs for patients
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technologies Used */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Technologies & Methodologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[
                "Python",
                "Scikit-learn",
                "Pandas",
                "NumPy",
                "Matplotlib",
                "Seaborn",
                "Logistic Regression",
                "Ridge Regularization",
                "Lasso Regularization",
                "Elastic Net",
                "Random Forest",
                "GridSearchCV",
                "K-Fold Cross-Validation",
                "Feature Engineering",
                "EDA",
                "Statistical Analysis",
                "Healthcare ML",
                "Risk Classification",
                "Medical Diagnostics",
                "Hyperparameter Tuning",
              ].map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-slate-100 dark:bg-slate-800">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Real-World Impact */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-teal-500" />
              Real-World Applications & Impact
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Accessible Screening</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Simple questionnaire-based screening accessible in remote areas without advanced medical equipment
                </p>
              </div>
              <div className="text-center p-4">
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Early Detection</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Identifies high-risk patients early when treatment is most effective, improving survival rates
                </p>
              </div>
              <div className="text-center p-4">
                <Shield className="h-12 w-12 text-green-500 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Cost-Effective</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Reduces healthcare costs by focusing resources on high-risk patients who need immediate attention
                </p>
              </div>
            </div>

            <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-teal-800 dark:text-teal-200 mb-3">
                Implementation in South Africa
              </h3>
              <p className="text-teal-700 dark:text-teal-300">
                Particularly valuable in South Africa where high pollution levels, dense smoking populations, and
                limited healthcare access create perfect conditions for this screening tool. The model can run on basic
                computing devices, making it deployable in rural clinics and community health centers.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Technical Challenges & Solutions */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Technical Challenges & Innovative Solutions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Challenge: Baseline Model Limitations
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-2">
                  Original approach used minimal preprocessing, random feature selection, and basic logistic regression
                  without regularization.
                </p>
                <p className="text-blue-700 dark:text-blue-300 font-medium">
                  Solution: Implemented comprehensive EDA, systematic feature selection, and advanced regularization
                  techniques with hyperparameter optimization.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                  Challenge: Critical False Negative Minimization
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-2">
                  In healthcare, missing a high-risk patient (false negative) can be fatal, requiring specialized model
                  evaluation.
                </p>
                <p className="text-green-700 dark:text-green-300 font-medium">
                  Solution: Developed custom evaluation metrics prioritizing false negative reduction while maintaining
                  overall accuracy and precision.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
                  Challenge: Model Generalization & Overfitting
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-2">
                  Ensuring the model performs well on unseen data while avoiding overfitting to the training set.
                </p>
                <p className="text-purple-700 dark:text-purple-300 font-medium">
                  Solution: Implemented multiple cross-validation strategies, regularization techniques, and
                  bias-variance trade-off optimization.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learning Outcomes */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Key Learning Outcomes & Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Technical Skills Developed</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• Advanced regularization techniques and hyperparameter optimization</li>
                  <li>• Healthcare-specific model evaluation and risk assessment</li>
                  <li>• Comprehensive data preprocessing and feature engineering</li>
                  <li>• Cross-validation strategies for robust model validation</li>
                  <li>• Ensemble method comparison and selection criteria</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Domain Expertise Gained</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• Healthcare ML ethics and critical decision-making</li>
                  <li>• Understanding of lung cancer risk factors and early detection</li>
                  <li>• Healthcare accessibility challenges in developing regions</li>
                  <li>• Cost-benefit analysis in medical screening applications</li>
                  <li>• Real-world deployment considerations for healthcare AI</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Collaboration */}
        <Card>
          <CardHeader>
            <CardTitle>Project Collaboration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                This project was developed in collaboration with <strong>Andre van der Merwe</strong> as part of Data
                Science 316 at Stellenbosch University. The collaborative approach allowed for comprehensive model
                development, rigorous testing, and thorough documentation of methodologies and results.
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                <span>📅 Completed: April 2024</span>
                <span>🏫 Stellenbosch University</span>
                <span>👥 Team Project</span>
                <span>📊 Data Science 316</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
