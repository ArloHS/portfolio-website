import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, Calendar, Cog, Code, Brain } from "lucide-react"
import { ProjectImageFallback } from "@/components/project-image-fallback"
import Link from "next/link"

export default function AlanCompilerPage() {
  const githublink = "https://github.com/ArloHS/C_Compiler_ALAN";
  const technologies = [
    "C",
    "Compiler Design",
    "Lexical Analysis",
    "Syntax Analysis",
    "Semantic Analysis",
    "Code Generation",
    "JVM",
    "Jasmin Assembly",
    "Recursive-Descent Parsing",
    "Symbol Tables",
    "Data Structures",
    "Algorithms",
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
            <Code className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">ALAN Compiler Project</h1>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-700 dark:text-slate-300">
            Implementation of a Compiler for the ALAN Language
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
              <span>2022</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              <span>Individual Project</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12 relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden">
          <ProjectImageFallback
            src="/images/CS244P1.png"
            alt="ALAN Compiler Architecture"
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

        {/* Project Overview */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Cog className="mr-3 h-6 w-6 text-teal-600" />
              Project Overview
            </h2>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-4">
                This project involved the design and implementation of a compiler for ALAN, a simple LL(1) language,
                targeting the Java Virtual Machine (JVM). The compiler encompasses all major phases of compilation,
                including lexical analysis, syntax analysis, semantic analysis, and code generation.
              </p>
              <p className="leading-relaxed mb-4">
                The goal was to gain a deep understanding of compiler construction principles, including language
                specification, parsing techniques, symbol table management, type checking, and code generation for a
                virtual machine.
              </p>
              <p className="leading-relaxed">
                The project emphasized the application of theoretical concepts to practical implementation, resulting in
                a functional compiler capable of translating ALAN source code into executable JVM bytecode.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Code className="mr-3 h-5 w-5 text-blue-600" />
                Lexical Analysis
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>• Scans the source code and identifies tokens</li>
                <li>• Handles comments and whitespace</li>
                <li>• Reports lexical errors, such as illegal characters and unterminated strings</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Code className="mr-3 h-5 w-5 text-green-600" />
                Syntax Analysis
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>• Parses the token stream and builds a parse tree</li>
                <li>• Implements a recursive-descent parsing algorithm</li>
                <li>• Reports syntax errors, such as missing semicolons and mismatched parentheses</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Brain className="mr-3 h-5 w-5 text-purple-600" />
                Semantic Analysis
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>• Constructs a symbol table to store information about identifiers</li>
                <li>• Performs type checking to ensure that expressions are type-correct</li>
                <li>• Reports semantic errors, such as undeclared variables and type mismatches</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Cog className="mr-3 h-5 w-5 text-red-600" />
                Code Generation
              </h3>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li>• Translates the parse tree into JVM bytecode</li>
                <li>• Uses the Jasmin assembler to generate class files</li>
                <li>• Implements code generation for variables, expressions, statements, and functions</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Methodology */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Methodology & Implementation</h2>
            <div className="space-y-6">
              <p className="text-slate-600 dark:text-slate-400">
                The compiler was implemented in C, following a structured programming approach. Each phase of
                compilation was implemented as a separate module, with well-defined interfaces and clear
                responsibilities.
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                The project adhered to strict coding standards, including proper commenting, consistent indentation, and
                limited line length. The code was thoroughly tested using a comprehensive test suite.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="bg-gradient-to-r from-teal-50 to-slate-50 dark:from-teal-950 dark:to-slate-950">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Conclusion</h2>
            <p className="text-slate-600 dark:text-slate-400">
              This project provided a valuable learning experience in compiler construction, language design, and
              virtual machine architecture. The resulting compiler demonstrates a solid understanding of the principles
              and techniques involved in translating a high-level language into executable code.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
