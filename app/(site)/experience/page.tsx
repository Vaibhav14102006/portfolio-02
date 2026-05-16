import React from "react"
import { AnimatedElement } from "@/app/components/ui/AnimatedElement"
import { RecruiterContact } from "@/app/components/RecruiterContact"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "VAIBHAV - Experience",
  description: "Professional journey and technical roles of VAIBHAV.",
}

const ExperiencePage = () => {
  const experiences = [
    {
      role: "Machine Learning Engineer",
      company: "ML Research & Development",
      period: "Mar 2025 - Present",
      description: "Developed ML models (Random Forest, XGBoost), implemented DL (CNN/RNN/LSTM/Transformers), research in CV & predictive analytics, used PyTorch/TensorFlow/Keras, optimized production ML pipelines",
    },
    {
      role: "Automation Developer",
      company: "Personal & Client Projects",
      period: "2024 - Present",
      description: "Built offline AI assistants (SARAS & October AI), voice-enabled OS automation, GUI overlays, real-time voice interaction, advanced NLP integration",
    },
    {
      role: "Full-Stack Developer",
      company: "Personal Projects",
      period: "2023 - Present",
      description: "Built Investment Platform, CareerForgePro (AI career guidance), NeuroWatch (AI wellness), Satyapatra AI spam/phishing protection, REST APIs with Node.js/Express, deployed on Vercel/Firebase with CI/CD",
    },
  ]

  return (
    <main className="relative z-1">
      <div className="inside-container-large py-20">
        <div className="flex flex-col items-center gap-6 max-md:px-5.5">
          <h1 className="xs:text-5xl relative z-5 text-center text-4xl leading-[1] font-medium tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            <AnimatedElement element="span" offsetPx={20} fadeDirection="left" className="inline-block">
              Professional
            </AnimatedElement>{" "}
            <br />
            <AnimatedElement element="span" offsetPx={40} delay={0.2} fadeDirection="top" className="inline-block text-slate-500">
              Experience
            </AnimatedElement>
          </h1>
          <AnimatedElement
            element="p"
            delay={0.6}
            className="max-w-xs text-center text-sm leading-tight tracking-tight text-slate-700 md:max-w-sm md:pr-4 md:text-base"
          >
            Active Projects 10+, Hackathons 11+
          </AnimatedElement>
        </div>

        <div className="mt-20 inside-container-small">
          <div className="flex flex-col gap-12">
            {experiences.map((exp, idx) => (
              <AnimatedElement
                key={idx}
                element="div"
                delay={idx * 0.1}
                className="flex flex-col gap-4 border-l-2 border-slate-900 pl-8"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h2 className="text-2xl font-bold text-slate-900">{exp.role}</h2>
                  <span className="text-slate-500 font-medium">{exp.period}</span>
                </div>
                <h3 className="text-lg font-medium text-slate-700">{exp.company}</h3>
                <p className="text-slate-600 leading-relaxed max-w-2xl">{exp.description}</p>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </div>
      <RecruiterContact />
    </main>
  )
}

export default ExperiencePage
