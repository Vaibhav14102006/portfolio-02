"use client"
import { AnimatedCard, HeroOffset } from "./ProjectCard/AnimatedCard"
import neurowatchPreview from "@/app/images/neurowatch.png"
import visionPreview from "@/app/images/vision.png"
import octoberPreview from "@/app/images/october.png"
import marvPreview from "@/app/images/marv.png"
import clsx from "clsx"
import { useOffset } from "../hooks/useOffset"
import { useIsMobile } from "../hooks/useMediaQuery"
import { useRef, useEffect } from "react"
import { useScroll, useSpring } from "motion/react"
import { useUI } from "@react-zero-ui/core"

const ids = ["automedics", "react-zero-ui", "iron-and-oak", "bespoke"]

export function ProjectsGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const rawOffsets = useOffset(ids)
  const isMobile = useIsMobile()
  const isSmallScreen = useIsMobile(576)
  const responsiveScale = isMobile ? 0.34 : 0.8
  const [, setReveal] = useUI<"true" | "false">("reveal", "false")

  const { scrollYProgress } = useScroll({
    offset: isMobile ? ["start start", "10% start"] : ["start start", "15% start"],
  })
  const stiffness = isMobile ? 120 : 220
  const damping = isMobile ? 50 : 90

  const progress = useSpring(scrollYProgress, { stiffness, damping })

  const OFFSET_TUNING: Record<string, Partial<HeroOffset>> = {
    "react-zero-ui": { rot: 9, s: responsiveScale, dx: isMobile ? -220 : -30, dy: isMobile ? -120 : -40 },
    "iron-and-oak": { rot: -5, s: responsiveScale, dx: isMobile ? -230 : -60, dy: isMobile ? -130 : -40 },
    automedics: { rot: 5, s: responsiveScale, dx: isMobile ? -225 : -45, dy: isMobile ? -130 : -25 },
    bespoke: { rot: 12, s: responsiveScale, dx: isMobile ? -230 : -50, dy: isMobile ? -110 : -10 },
  }

  const offsets = Object.fromEntries(
    ids.map((id) => {
      const base = rawOffsets[id]
      const t = OFFSET_TUNING[id]
      return [
        id,
        {
          x: (base?.x ?? 0) + (t.dx ?? 0),
          y: (base?.y ?? 0) + (t.dy ?? 0),
          rot: t.rot ?? 0,
          s: t.s ?? 1,
        },
      ]
    })
  )

  const triggerProgress = isMobile ? (isSmallScreen ? 0.15 : 0.2) : 0.5
  useEffect(() => {
    const unsubscribe = progress.on("change", (latest) => {
      if (latest >= triggerProgress) {
        setReveal("true") // Reveal ON
      } else {
        setReveal("false") // Reveal OFF
      }
    })

    return unsubscribe
  }, [progress, setReveal, triggerProgress])
  return (
    <section id="projects-grid" className={clsx("relative scroll-mt-36", className)} ref={ref}>
      <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
        <AnimatedCard
          key={"neurowatch"}
          src={neurowatchPreview}
          alt={"neurowatch - Preview"}
          offset={offsets["react-zero-ui"]}
          gridId="react-zero-ui"
          color="#3B06D1"
          type="AI Healthcare"
          progress={progress}
          href="#"
          dataText="View Project"
        />
        <AnimatedCard
          key="vision ai"
          src={visionPreview}
          alt={"vision ai Preview"}
          offset={offsets["bespoke"]}
          gridId="bespoke"
          color="#024EFC"
          type="Computer Vision"
          progress={progress}
          href="#"
          dataText="View Project"
        />

        <AnimatedCard
          key="october ai"
          src={octoberPreview}
          alt={"october ai Preview"}
          offset={offsets["automedics"]}
          gridId="automedics"
          color="#DA961A"
          type="Machine Learning"
          progress={progress}
          href="#"
          dataText="View Project"
        />
        <AnimatedCard
          key={"marv neo"}
          src={marvPreview}
          alt={"marv neo Preview"}
          offset={offsets["iron-and-oak"]}
          gridId="iron-and-oak"
          color="#13739C"
          type="AI Automation"
          progress={progress}
          href="#"
          dataText="View Project"
        />
      </div>
    </section>
  )
}
