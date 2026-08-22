import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Settings } from "lucide-react"
import Link from "next/link"

export default function WorkPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Work Experience</h1>

      <div className="max-w-3xl mx-auto">
        <Card className="text-center">
          <CardContent className="p-8 flex flex-col items-center">
            <Settings className="h-24 w-24 text-slate-400 animate-spin-slow mb-6" />
            <h2 className="text-2xl font-bold mb-4">Work Page Coming Soon!</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Exciting updates about my professional experience and projects will be available soon. Stay tuned!
            </p>
            <Link href="/">
              <Button>Return to Home</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
