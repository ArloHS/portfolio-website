import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Brain, Zap, Compass, Beaker, Layers, Rocket, CircuitBoard } from "lucide-react"
import { ProjectImageFallback } from "@/components/project-image-fallback"
import Link from "next/link"

export default function RLAgentsPage() {
  const githublink = "https://github.com/ArloHS/2-Model-Free-RL-Agents-in-2-Stochastic-Environments"

  const technologies = [
    "Python",
    "Reinforcement Learning",
    "Q-Learning",
    "SARSA",
    "Model-Free Agents",
    "Stochastic MDPs",
    "Reward Shaping",
    "Exploration–Exploitation Tradeoff",
    "Epsilon Decay",
    "Gridworld Simulation",
    "Agent-Based Modeling",
    "Dynamic Programming",
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
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary" className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
              Featured Project
            </Badge>
            <Badge variant="outline">Reinforcement Learning</Badge>
            <Badge variant="outline">Data Science</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent text-center">
            Model-Free RL Agents in Stochastic MDP Environments
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-center">
            Designed two autonomous agents trained via Q-Learning and SARSA to master dynamic, uncertain environments—
            learning optimal behavior purely from interaction, without prior models of the world.
          </p>

          {githublink && (
            <div className="mb-6 flex justify-center">
              <Button asChild variant="outline">
                <a href={githublink} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </a>
              </Button>
            </div>
          )}

          <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8">
            <ProjectImageFallback
              src="/images/RL_2.png"
              alt="Model-Free Reinforcement Learning Agents"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm opacity-90">
                Q-Learning • SARSA • Reward Shaping • Stochastic MDPs
              </p>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technologies & Concepts</h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-slate-100 dark:bg-slate-800 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Overview */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-indigo-500" />
              Project Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              This project explores the power of <strong>model-free reinforcement learning</strong> in environments where
              the transition dynamics are unknown and stochastic. Two independent agents—one using Q-Learning, the other
              SARSA—were trained to operate in a <strong>custom-built Gridworld</strong> containing obstacles, energy
              constraints, work stations, and recharge points.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              The environments simulate real-world challenges such as partial observability and energy trade-offs.
              Agents learn purely through <strong>trial-and-error</strong>, guided by a reward function that balances
              task completion, energy conservation, and exploration.
            </p>
          </CardContent>
        </Card>

        {/* Environment Design */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Compass className="h-6 w-6 text-blue-500" />
              Environment Design & Dynamics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              Each environment functions as a <strong>stochastic MDP</strong> where state transitions are not
              deterministic. The agent must plan under uncertainty while managing finite energy. Key features include:
            </p>
            <ul className="list-disc ml-6 text-slate-700 dark:text-slate-300 space-y-2">
              <li>Recharge and work zones with spatial and temporal dependencies</li>
              <li>Obstacles that introduce pathfinding and spatial planning challenges</li>
              <li>Battery decay mechanics requiring dynamic resource allocation</li>
              <li>Stochastic outcomes from certain moves and task rewards</li>
            </ul>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border-l-4 border-indigo-500">
              <p className="text-indigo-800 dark:text-indigo-200 font-medium">
                The environment acts as a rich testbed for emergent behavior — agents must learn cyclic work-recharge
                patterns, spatial awareness, and adaptive decision-making without supervision.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Algorithm Comparison */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Beaker className="h-6 w-6 text-green-500" />
              Algorithmic Approach & Comparison
            </CardTitle>
          </CardHeader>
          <CardContent>
            <table className="w-full border-collapse border border-slate-300 dark:border-slate-600">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="p-3 text-left">Aspect</th>
                  <th className="p-3 text-center">Q-Learning</th>
                  <th className="p-3 text-center">SARSA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">Update Rule</td>
                  <td className="p-3 text-center border">Off-policy (max future reward)</td>
                  <td className="p-3 text-center border">On-policy (follows current policy)</td>
                </tr>
                <tr>
                  <td className="p-3 border">Behavior</td>
                  <td className="p-3 text-center border">More aggressive exploration</td>
                  <td className="p-3 text-center border">Smoother, risk-averse behavior</td>
                </tr>
                <tr>
                  <td className="p-3 border">Convergence Stability</td>
                  <td className="p-3 text-center border">Faster but less consistent</td>
                  <td className="p-3 text-center border">Slower but more stable</td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Reward Design */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-yellow-500" />
              Reward Shaping & Emergent Behavior
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              Reward shaping was critical for learning stable and purposeful policies. Rewards were assigned for:
            </p>
            <ul className="list-disc ml-6 text-slate-700 dark:text-slate-300 space-y-2">
              <li>Performing work efficiently with sufficient energy levels</li>
              <li>Recharging before depletion (energy management awareness)</li>
              <li>Leaving work/recharge zones to encourage exploration</li>
              <li>Penalizing idleness, collisions, and low battery conditions</li>
            </ul>
            <p className="text-slate-700 dark:text-slate-300">
              Through iterative tuning, agents began to exhibit cyclic behaviors—working, recharging, and exploring in
              adaptive loops. This emergent structure mirrors real-world reinforcement principles where reward design
              directly sculpts intelligent action sequences.
            </p>
          </CardContent>
        </Card>

        {/* Technical Highlights */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-6 w-6 text-purple-500" />
              Technical Highlights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300">
              <li>• Implemented ε-greedy action selection with dynamic decay</li>
              <li>• Tuned learning rates and discount factors for convergence stability</li>
              <li>• Built full environment logic with spatial, temporal, and stochastic reward mechanics</li>
              <li>• Captured agent performance metrics and learning curves for comparison</li>
              <li>• Modular design for plugging in future RL algorithms (e.g., DQN, Actor-Critic)</li>
            </ul>
          </CardContent>
        </Card>

        {/* Key Learnings */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Rocket className="h-6 w-6 text-emerald-500" />
              Key Learnings & Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Reinforcement Learning Concepts</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• Deep understanding of model-free learning and temporal-difference updates</li>
                  <li>• Realized trade-offs between exploration and exploitation</li>
                  <li>• Observed convergence patterns across stochastic transitions</li>
                  <li>• Practical application of reward engineering for behavioral shaping</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Implementation Experience</h3>
                <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                  <li>• Built custom simulation loops and environment logic from scratch</li>
                  <li>• Compared off-policy and on-policy learning dynamics</li>
                  <li>• Developed visualizations for episode-level performance</li>
                  <li>• Achieved emergent agent patterns from simple rules and local feedback</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CircuitBoard className="h-6 w-6 text-sky-500" />
              Project Context
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                This case study was completed as an independent research-driven project exploring autonomous learning in
                stochastic systems. It demonstrates advanced understanding of reinforcement learning mechanics, reward
                design, and adaptive agent behaviors under uncertainty.
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                <span>📅 Completed: 2025</span>
                <span>🤖 Model-Free RL Research Project</span>
                <span>🎓 Independent Case Study</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
