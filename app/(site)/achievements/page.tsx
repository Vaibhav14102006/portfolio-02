import React from "react"
import { AnimatedElement } from "@/app/components/ui/AnimatedElement"
import { RecruiterContact } from "@/app/components/RecruiterContact"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "VAIBHAV - Achievements",
  description: "Recognitions, awards, and academic excellence of VAIBHAV.",
}

const AchievementsPage = () => {
  const achievements = [
    { title: "1st Prize – RISE 2026", year: "2026" },
    { title: "1st Prize – 4th International Conference on Environmental Sustainability & Technology (ICEST 2026)", year: "2026" },
    { title: "1st Prize – IEEE YESIST12 2026 (Prelims)", year: "2026" },
    { title: "Winner – HackVerse 2026", year: "2026" },
    { title: "1st Prize – Ideathon 2026", year: "2026" },
    { title: "1st Prize – Business Pitch 2026", year: "2026" },
    { title: "1st Prize – Anveshan 2025", year: "2025" },
    { title: "1st Prize – Smart Hackathon (Internal) 2025", year: "2025" },
    { title: "3rd Prize – Srijanotsav 2026", year: "2026" },
    { title: "Academic Excellence – CGPA: 9.17/10", year: "" },
    { title: "Qualified – India Innovates 2026 (Bharat Mandapam, New Delhi)", year: "2026" },
  ]

  return (
    <main className="relative z-1">
      <div className="inside-container-large py-20">
        <div className="flex flex-col items-center gap-6 max-md:px-5.5">
          <h1 className="xs:text-5xl relative z-5 text-center text-4xl leading-[1] font-medium tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            <AnimatedElement element="span" offsetPx={20} fadeDirection="left" className="inline-block">
              My
            </AnimatedElement>{" "}
            <br />
            <AnimatedElement element="span" offsetPx={40} delay={0.2} fadeDirection="top" className="inline-block text-slate-500">
              Achievements
            </AnimatedElement>
          </h1>
          <AnimatedElement
            element="p"
            delay={0.6}
            className="max-w-xs text-center text-sm leading-tight tracking-tight text-slate-700 md:max-w-sm md:pr-4 md:text-base"
          >
            Total Awards 11+, Competitions Won 6, Academic Excellence 9.17 CGPA, Hackathons 2+
          </AnimatedElement>
        </div>

        <div className="mt-20 inside-container-small">
          <div className="grid grid-cols-1 gap-6">
            {achievements.map((item, idx) => (
              <AnimatedElement
                key={idx}
                element="div"
                delay={idx * 0.05}
                className="flex items-center justify-between border-b border-slate-200 py-6"
              >
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-slate-900" />
                  <span className="text-lg font-medium text-slate-900">{item.title}</span>
                </div>
                <span className="text-slate-500">{item.year}</span>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
      <RecruiterContact />
    </main>
  )
}

export default AchievementsPage
