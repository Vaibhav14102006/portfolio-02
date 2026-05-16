import clsx from "clsx"
import { TechLogo } from "./TechLogo"
import { Text } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import type { Variants } from "motion"
import { MotionUl, MotionLi } from "../utils/lazy-ui"

const techToolkit = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", slug: "python" },
      { name: "C++", slug: "cplusplus" },
      { name: "JavaScript", slug: "javascript" },
      { name: "Java", slug: "openjdk" },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css3" },
    ],
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express.js", slug: "express" },
      { name: "REST APIs", slug: "postman" },
      { name: "API Integration", slug: "insomnia" },
    ],
  },
  {
    category: "Machine Learning",
    items: [
      { name: "Decision Trees", slug: "scikitlearn" },
      { name: "Random Forest", slug: "scikitlearn" },
      { name: "XGBoost", slug: "scikitlearn" },
      { name: "LightGBM", slug: "scikitlearn" },
      { name: "SVM", slug: "scikitlearn" },
      { name: "Predictive Analytics", slug: "googleanalytics" },
      { name: "Time Series", slug: "influxdb" },
    ],
  },
  {
    category: "Deep Learning",
    items: [
      { name: "CNN", slug: "pytorch" },
      { name: "RNN/LSTM", slug: "pytorch" },
      { name: "Transformers", slug: "huggingface" },
      { name: "YOLOv8", slug: "opencv" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "Keras", slug: "keras" },
    ],
  },
  {
    category: "Databases & Tools",
    items: [
      { name: "MySQL", slug: "mysql" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "Firebase", slug: "firebase" },
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
      { name: "Postman", slug: "postman" },
      { name: "VS Code", slug: "visualstudiocode" },
      { name: "Vercel", slug: "vercel" },
    ],
  },
]

const aiDomains = [
  "Computer Vision",
  "Natural Language Processing",
  "Speech Recognition",
  "Audio Processing",
  "Video Analysis",
  "Real-Time AI Systems",
  "Automation Systems",
]

const softSkills = [
  "Communication",
  "Leadership",
  "Problem Solving",
  "Critical Thinking",
  "Team Collaboration",
  "Adaptability",
  "Time Management",
]

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
    },
  },
}

const element = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
}

export const ServicesSectionV2: React.FC = ({ className = "" }: { className?: string }) => {
  return (
    <section id="technologies" className={clsx("inside-container flex flex-col gap-20 py-24", className)}>
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <AnimatedH2>
          Technical <br />
          <span className="text-slate-500">Toolkit</span>
        </AnimatedH2>
        <Text className="max-w-md text-slate-600">
          A comprehensive suite of tools and technologies I use to build intelligent systems and scalable applications.
        </Text>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr]">
        {/* Left Side: Categories */}
        <div className="flex flex-col gap-12">
          {techToolkit.map((cat) => (
            <div key={cat.category} className="flex flex-col gap-6">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                {cat.category}
              </h3>
              <MotionUl
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              >
                {cat.items.map((item) => (
                  <MotionLi key={item.name} variants={element}>
                    <div className="group flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 p-3 shadow-lg transition-all hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black/50 transition-colors group-hover:bg-black">
                        <TechLogo name={item.name} slug={item.slug} size={24} />
                      </div>
                      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">{item.name}</span>
                    </div>
                  </MotionLi>
                ))}
              </MotionUl>
            </div>
          ))}
        </div>

        {/* Right Side: AI Domains & Soft Skills */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
              AI Domains
            </h3>
            <div className="flex flex-col gap-3">
              {aiDomains.map((domain) => (
                <div key={domain} className="flex items-center gap-3 rounded-2xl bg-slate-900 p-4 text-white shadow-lg">
                  <div className="h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
                  <span className="text-sm font-medium">{domain}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 shadow-sm transition-colors hover:bg-slate-50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto overflow-hidden rounded-3xl bg-indigo-600 p-8 text-white shadow-2xl">
             <h4 className="mb-2 text-xl font-bold">Research Focused</h4>
             <p className="text-sm leading-relaxed text-indigo-100 opacity-90">
               Continuously exploring emerging technologies in Machine Learning, Generative AI, and Automation to build the next generation of intelligent systems.
             </p>
          </div>
        </div>
      </div>
    </section>
  )
}
