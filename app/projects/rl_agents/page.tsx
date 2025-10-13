import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, Calendar, Target, Cog, Brain, BarChart3, Shield, Zap, Database, Code2 } from "lucide-react"
import { ProjectImageFallback } from "@/components/project-image-fallback"
import Link from "next/link"

export default function StochasticMDPRLPage() {
  const githublink = "https://github.com/ArloHS/2-Model-Free-RL-Agents-in-2-Stochastic-Environments"; // Assumed link; replace if needed
  const technologies = [
    "Python",
    "NumPy",
    "Random",
    "Q-Learning",
    "SARSA",
    "Epsilon-Greedy Exploration",
    "Stochastic MDPs",
    "Grid Search Hyperparameter Tuning",
    "Tabular Methods",
    "Temporal Difference Learning",
    "Off-Policy Learning",
    "On-Policy Learning",
    "Markov Decision Processes",
    "Exploration-Exploitation Trade-off",
    "Q-Table Management",
    "Custom Environment Design",
  ]

  const teamMembers = [
    { name: "Arlo Steyn", role: "Solo Developer" },
  ]

  const algorithmSpecs = [
    { label: "Primary Algorithm", value: "Q-Learning (Off-Policy TD Control)" },
    { label: "Comparison Algorithm", value: "SARSA (On-Policy TD Control)" },
    { label: "Exploration Strategy", value: "Epsilon-Greedy with Decay" },
    { label: "State Representation", value: "Discrete (Grid Positions + Battery for EMS)" },
    { label: "Action Spaces", value: "4 (TI: Movements) / 3 (EMS: Move/Work/Recharge)" },
    { label: "Stochasticity", value: "10% Slip/Drain Probability" },
    { label: "Hyperparameters", value: "Alpha, Gamma, Epsilon, Decay" },
    { label: "Environments", value: "Treasure Island (7x7 Grid MDP), Energy Management Simulator (7x7 Grid with Battery MDP)" },
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
            <h1 className="text-3xl md:text-4xl font-bold">Mastering Stochastic MDPs</h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-700 dark:text-slate-300">
            Model-Free Reinforcement Learning: Q-Learning vs SARSA in Custom Stochastic Environments
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
              <span>October 2025</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              <span>1-Person Project</span>
            </div>
            <div className="flex items-center">
              <Database className="h-4 w-4 mr-2" />
              <span>Custom Stochastic MDPs</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
          <ProjectImageFallback src="/images/RL_2.png" alt="Stochastic MDP RL Project" fill className="object-cover" />
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
            <div className="grid md:grid-cols-1 gap-4">
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
                This project explores model-free reinforcement learning algorithms, specifically Q-Learning (off-policy TD control) and SARSA (on-policy TD control), in custom stochastic Markov Decision Process (MDP) environments. The agents learn optimal policies through trial-and-error interactions, balancing exploration and exploitation via epsilon-greedy strategies in uncertain, stochastic settings.
              </p>
              <p className="leading-relaxed mb-4">
                Two distinct stochastic MDPs were designed: Treasure Island, a 7x7 grid-based navigation environment with stochastic slips (10% chance of random movement), traps (-10 reward), goal (+10), and step penalties (-1); and Energy Management Simulator, a more complex 7x7 grid MDP incorporating battery levels (0-100), actions like move/work/recharge, stochastic energy drains (10%), and rewards/penalties for productivity, recharging, and idling.
              </p>
              <p className="leading-relaxed">
                The core focus is evaluating how these model-free RL algorithms adapt to stochastic transitions, delayed rewards, and high-dimensional state spaces (position + battery in EMS), measuring performance via cumulative rewards, convergence rates, steps per episode, success frequencies, and policy visualizations in these challenging stochastic MDPs.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Algorithm Architecture */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Cog className="mr-3 h-6 w-6 text-blue-600" />
              RL Algorithm Architecture
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Algorithm Specifications</h3>
                <div className="space-y-3">
                  {algorithmSpecs.map((spec, index) => (
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
                      Temporal Difference Learning
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Bootstraps value estimates using Q-table updates, handling stochastic MDPs without full environment models.
                    </p>
                  </div>
                  <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-yellow-600" />
                      Epsilon-Greedy Policy
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Balances exploration (random actions with probability epsilon) and exploitation (greedy Q-value selection) in stochastic environments.
                    </p>
                  </div>
                  <div className="p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                    <h4 className="font-medium mb-2 flex items-center">
                      <Code2 className="h-4 w-4 mr-2 text-green-600" />
                      Q-Table Indexing
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Flattens multi-dimensional states (e.g., grid x,y + battery) into indices for efficient tabular storage in discrete MDPs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Environment Design & Ethics */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Database className="mr-3 h-5 w-5 text-teal-600" />
                Treasure Island Environment
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Stochastic MDP Design</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    7x7 grid stochastic MDP with states as agent positions, actions as movements (up/down/left/right), 10% slip probability introducing uncertainty.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Reward Structure</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• +10 for reaching treasure goal</li>
                    <li>• -10 for water traps (terminal failure)</li>
                    <li>• -1 per step to encourage efficiency</li>
                    <li>• Tests safe path learning in stochastic transitions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Shield className="mr-3 h-5 w-5 text-red-600" />
                Energy Management Simulator
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Complex Stochastic MDP</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• 7x7 grid with battery levels (0-100) as part of state</li>
                    <li>• Actions: Move (stochastic drain), Work (high rewards if charged), Recharge</li>
                    <li>• 10% extra random energy drain for stochasticity</li>
                    <li>• Penalties for idling; rewards scaled by battery</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Challenges</h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Balances energy consumption and productivity</li>
                    <li>• Higher dimensionality tests scalability in stochastic MDPs</li>
                    <li>• Delayed rewards encourage long-term planning</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Implementation Process */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Implementation Methodology</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Abstract Agent Design</h3>
                <div className="space-y-3">
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Modular Q-Learning & SARSA</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Abstract classes for Q-table initialization, epsilon-greedy action selection, and TD update rules, ensuring reproducibility across stochastic MDPs.
                    </p>
                  </div>
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Hyperparameter Tuning</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Grid search over alpha (learning rate), gamma (discount factor), epsilon decay for optimal convergence in both environments.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Training Configuration</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-medium">Episodes</span>
                    <span className="text-slate-600 dark:text-slate-400">Variable (up to thousands)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-medium">Update Rule</span>
                    <span className="text-slate-600 dark:text-slate-400">TD Error with Bootstrap</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-medium">Epsilon Decay</span>
                    <span className="text-slate-600 dark:text-slate-400">Per-Step (0.995 default)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-medium">State Flattening</span>
                    <span className="text-slate-600 dark:text-slate-400">Multi-Dim to Integer</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-medium">Training Time</span>
                    <span className="text-slate-600 dark:text-slate-400">Environment-Dependent</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Algorithm Comparison */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Algorithm Comparison & Results</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border-2 border-blue-200 dark:border-blue-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-800 dark:text-blue-200">Q-Learning: Off-Policy</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Update Rule</span>
                    <span className="text-blue-600">Max Next Q-Value</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Strength in MDPs</span>
                    <span className="text-blue-600">Optimality in Stochastic</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Environment Fit</span>
                    <span className="text-blue-600">Both TI & EMS</span>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Characteristics</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Learns optimal policy ignoring exploration</li>
                    <li>• Robust to stochastic transitions in MDPs</li>
                    <li>• Potential overestimation in noisy environments</li>
                    <li>• Faster convergence in Treasure Island</li>
                  </ul>
                </div>
              </div>

              <div className="p-6 border-2 border-green-200 dark:border-green-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-800 dark:text-green-200">SARSA: On-Policy</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Update Rule</span>
                    <span className="text-green-600">Actual Next Action Q</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Strength in MDPs</span>
                    <span className="text-green-600">Safety in Risky Stochastic</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Environment Fit</span>
                    <span className="text-green-600">Energy Management Focus</span>
                  </div>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                  <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Characteristics</h4>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• Accounts for exploration risks in policies</li>
                    <li>• More conservative in high-risk stochastic MDPs</li>
                    <li>• Real-time adaptation to environment changes</li>
                    <li>• Slower but safer in Energy Simulator</li>
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
                Environment Implementation
              </h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• Stochastic transitions in MDPs</li>
                <li>• Custom reward functions for balance</li>
                <li>• Terminal states for episode resets</li>
                <li>• Visualization of learned policies</li>
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
                <li>• Epsilon decay for exploration shift</li>
                <li>• Grid search for hyperparams</li>
                <li>• Abstract classes for reusability</li>
                <li>• Logging for convergence analysis</li>
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
                <li>• Cumulative rewards per episode</li>
                <li>• Steps to convergence</li>
                <li>• Success rates in stochastic MDPs</li>
                <li>• Policy visualization plots</li>
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
                <h3 className="text-lg font-semibold mb-4">Environment Impact</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                    <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">Treasure Island Insights</h4>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300">
                      Q-Learning showed faster convergence to optimal paths despite stochastic slips, while SARSA was more cautious around traps in this navigation-focused stochastic MDP.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                    <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Energy Simulator Insights</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      SARSA excelled in balancing battery and productivity due to on-policy safety, handling stochastic drains better in this resource-constrained MDP.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Algorithm Achievements</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Off vs On-Policy</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      Off-policy Q-Learning achieved higher optimality in simpler MDPs, while on-policy SARSA provided stability in complex stochastic environments.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Stochastic Adaptation</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Both algorithms demonstrated robustness to stochastic transitions, with epsilon-greedy ensuring thorough exploration-exploitation trade-off.
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
                  <li>• Implemented model-free RL in custom stochastic MDPs</li>
                  <li>• Compared off-policy and on-policy methods effectively</li>
                  <li>• Demonstrated adaptation to uncertainty and delayed rewards</li>
                  <li>• Visualized policies in navigation and resource MDPs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Future Enhancements</h3>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li>• Scale to larger grid MDPs or continuous states</li>
                  <li>• Incorporate deep RL for function approximation</li>
                  <li>• Add multi-agent dynamics in stochastic environments</li>
                  <li>• Develop real-world robotic applications</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}