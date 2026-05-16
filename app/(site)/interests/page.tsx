import React from "react"
import { AnimatedElement } from "@/app/components/ui/AnimatedElement"
import { RecruiterContact } from "@/app/components/RecruiterContact"
import { Metadata } from "next"
import { Icon } from "@/app/components/Icon"

export const metadata: Metadata = {
  title: "VAIBHAV - Interests",
  description: "Research interests and technology exploration of VAIBHAV.",
}

const InterestsPage = () => {
  const interests = [
    { title: "Artificial Intelligence Research", desc: "Intelligent System Development & AI Agents", icon: "cube" },
    { title: "Deep Learning & Architectures", desc: "Multimodal AI Systems & Transformers", icon: "magic-wand" },
    { title: "Computer Vision", desc: "Human-Computer Interaction & Real-Time Analytics", icon: "planet" },
    { title: "Natural Language Processing", desc: "Speech Recognition & Conversational AI", icon: "world" },
    { title: "Automation Systems", desc: "AI-Powered Productivity Workflows", icon: "rocket" },
    { title: "Scalable AI Web Apps", desc: "Full-Stack Development & AI Integration", icon: "web" },
    { title: "Open Source & Innovation", desc: "Research Publications & Technical Innovation", icon: "plus" },
    { title: "Competitive Challenges", desc: "Hackathons & Technology-Based Problem Solving", icon: "boxes" },
    { title: "Emerging Technologies", desc: "Generative AI, ML, and Next-Gen Automation", icon: "planet" },
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
              Interests
            </AnimatedElement>
          </h1>
          <AnimatedElement
            element="p"
            delay={0.6}
            className="max-w-xs text-center text-sm leading-tight tracking-tight text-slate-700 md:max-w-sm md:pr-4 md:text-base"
          >
            Exploring the frontiers of AI, Deep Learning, and Intelligent Automation.
          </AnimatedElement>
        </div>

        <div className="mt-20 inside-container-small">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {interests.map((item, idx) => (
              <AnimatedElement
                key={idx}
                element="div"
                delay={idx * 0.05}
                className="flex gap-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-900 shadow-lg">
                  <Icon name={item.icon} width={24} height={24} className="invert" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-slate-500">{item.desc}</p>
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

export default InterestsPage
