import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 text-center">
      <FileQuestion className="h-24 w-24 text-slate-400 mb-6" />
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-md">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/">
          <Button size="lg">Return Home</Button>
        </Link>
        <Link href="/projects">
          <Button variant="outline" size="lg">
            View Projects
          </Button>
        </Link>
      </div>
    </div>
  )
}
