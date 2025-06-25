import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, GraduationCap, Users, Calendar } from "lucide-react"

export default function SchoolPage() {
  const matricResults = [
    { subject: "Afrikaans First Additional Language", percentage: 87, level: 7, code: "N12AFRF" },
    { subject: "Business Studies", percentage: 83, level: 7, code: "N12BUSS" },
    { subject: "English Home Language", percentage: 81, level: 7, code: "N12ENGH" },
    { subject: "Information Technology", percentage: 88, level: 7, code: "N12INTE" },
    { subject: "Life Orientation", percentage: 85, level: 7, code: "N12LIFO" },
    { subject: "Mathematics", percentage: 78, level: 6, code: "N12MATH" },
    { subject: "Tourism", percentage: 88, level: 7, code: "N12TOUR" },
  ]

  const getLevelDescription = (level: number) => {
    switch (level) {
      case 7:
        return "Outstanding Achievement"
      case 6:
        return "Meritorious Achievement"
      case 5:
        return "Substantial Achievement"
      case 4:
        return "Adequate Achievement"
      case 3:
        return "Moderate Achievement"
      case 2:
        return "Elementary Achievement"
      case 1:
        return "Not Achieved"
      default:
        return ""
    }
  }

  const getLevelColor = (level: number) => {
    switch (level) {
      case 7:
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case 6:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case 5:
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">School Achievements</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          My foundational academic journey and achievements that set the stage for my data science career.
        </p>
      </section>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* School Overview */}
        <section>
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <GraduationCap className="mr-3 h-8 w-8 text-teal-600" />
                Educational Background
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-600 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Midstream College Primary School</h3>
                    <div className="flex items-center text-slate-600 dark:text-slate-400 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      2007 - 2015
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">
                      Built a strong foundation in core subjects while developing leadership skills and participating in
                      competitive sports.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-600 pl-6">
                    <h3 className="text-xl font-semibold mb-2">Midstream College High School</h3>
                    <div className="flex items-center text-slate-600 dark:text-slate-400 mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      2016 - 2020
                    </div>
                    <p className="text-slate-600 dark:text-slate-400">
                      Excelled academically while maintaining active participation in sports, culminating in outstanding
                      matric results.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Matric Results */}
        <section>
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold flex items-center">
                  <Trophy className="mr-3 h-8 w-8 text-teal-600" />
                  Matric IEB Results (2020)
                </h2>
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-lg px-4 py-2">
                  6 Distinctions
                </Badge>
              </div>

              <div className="mb-6 p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  <strong>Qualification:</strong> National Senior Certificate (IEB)
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  <strong>Achievement:</strong> Met minimum requirements for admission to study for a bachelor's degree
                  at a higher education institution
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                      <th className="text-left py-3 px-4 font-semibold">Subject</th>
                      <th className="text-center py-3 px-4 font-semibold">Code</th>
                      <th className="text-center py-3 px-4 font-semibold">Percentage</th>
                      <th className="text-center py-3 px-4 font-semibold">Level</th>
                      <th className="text-center py-3 px-4 font-semibold">Achievement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {matricResults.map((result, index) => (
                      <tr
                        key={index}
                        className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900"
                      >
                        <td className="py-3 px-4 font-medium">{result.subject}</td>
                        <td className="py-3 px-4 text-center text-sm text-slate-600 dark:text-slate-400">
                          {result.code}
                        </td>
                        <td className="py-3 px-4 text-center font-semibold text-lg">{result.percentage}%</td>
                        <td className="py-3 px-4 text-center">
                          <Badge className={`${getLevelColor(result.level)} font-bold`}>Level {result.level}</Badge>
                        </td>
                        <td className="py-3 px-4 text-center text-sm">{getLevelDescription(result.level)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-teal-50 dark:bg-teal-950 rounded-lg">
                <h4 className="font-semibold mb-2">Achievement Level Guide:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                  <div>
                    <strong>Level 7:</strong> 80-100% (Outstanding)
                  </div>
                  <div>
                    <strong>Level 6:</strong> 70-79% (Meritorious)
                  </div>
                  <div>
                    <strong>Level 5:</strong> 60-69% (Substantial)
                  </div>
                  <div>
                    <strong>Level 4:</strong> 50-59% (Adequate)
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Sports Achievements */}
        <section>
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Users className="mr-3 h-8 w-8 text-teal-600" />
                Sports Achievements
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-semibold mb-3">Primary School Sports</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Trophy className="h-5 w-5 mr-2 text-green-600" />
                        <span className="font-medium">1st Team Rugby</span>
                      </div>
                      <div className="flex items-center">
                        <Trophy className="h-5 w-5 mr-2 text-green-600" />
                        <span className="font-medium">1st Team Hockey</span>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mt-3">
                      Demonstrated leadership and teamwork skills while competing at the highest level in school sports.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold mb-3">High School Sports</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Trophy className="h-5 w-5 mr-2 text-blue-600" />
                        <span className="font-medium">1st Team Rugby</span>
                      </div>
                      <div className="flex items-center">
                        <Trophy className="h-5 w-5 mr-2 text-blue-600" />
                        <span className="font-medium">A Team Hockey</span>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 mt-3">
                      Continued excellence in sports while maintaining outstanding academic performance, showcasing time
                      management and dedication.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Highlights */}
        <section>
          <Card className="bg-gradient-to-r from-teal-50 to-slate-50 dark:from-teal-950 dark:to-slate-950">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Key Highlights</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">6 Distinctions</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Achieved outstanding results in 6 out of 7 subjects, demonstrating academic excellence across
                    diverse disciplines.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Sports Leadership</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Consistently selected for top-tier teams in both rugby and hockey throughout primary and high
                    school.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-teal-100 dark:bg-teal-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="h-8 w-8 text-teal-600" />
                  </div>
                  <h3 className="font-semibold mb-2">University Ready</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Exceeded requirements for bachelor's degree admission, setting a strong foundation for university
                    success.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
