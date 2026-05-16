import React from "react"
import { AnimatedElement } from "@/app/components/ui/AnimatedElement"
import { RecruiterContact } from "@/app/components/RecruiterContact"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "VAIBHAV - Education",
  description: "Academic background and educational journey of VAIBHAV.",
}

const EducationPage = () => {
  const education = [
    {
      degree: "B.Tech CSE (AI/ML)",
      institution: "Amity University",
      period: "2024–2028",
      stats: "CGPA: 9.17",
      description: "Focus: AI/ML, DSA, ML/DL coursework, DBMS, system design, coding competitions",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Central Academy School",
      period: "2023–2024",
      stats: "Science Stream",
      description: "Focus: Math, Physics, Computer Science; started programming (Python, C++)",
    },
    {
      degree: "Secondary Education",
      institution: "Central Academy School",
      period: "2021–2022",
      stats: "Class 10th",
      description: "Strong foundation in Math & Science; participated in inter-school competitions",
    },
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
              Education
            </AnimatedElement>
          </h1>
          <AnimatedElement
            element="p"
            delay={0.6}
            className="max-w-xs text-center text-sm leading-tight tracking-tight text-slate-700 md:max-w-sm md:pr-4 md:text-base"
          >
            Pursuing Excellence in AI & Machine Learning.
          </AnimatedElement>
        </div>

        <div className="mt-20 inside-container-small">
          <div className="flex flex-col gap-16">
            {education.map((edu, idx) => (
              <AnimatedElement
                key={idx}
                element="div"
                delay={idx * 0.1}
                className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 border-b border-slate-100 pb-12 last:border-none"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold uppercase tracking-widest text-slate-400">{edu.period}</span>
                  <span className="text-lg font-bold text-slate-900">{edu.stats}</span>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">{edu.degree}</h2>
                    <h3 className="text-lg font-medium text-slate-500">{edu.institution}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{edu.description}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
      <RecruiterContact />
    </main>
  )
}

export default EducationPage
