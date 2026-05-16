"use client"
import React from "react"
import { StaticImageData } from "next/image"
import { Card } from "@/app/components/ProjectCard/Card"
import neurowatchPreview from "@/app/images/neurowatch.png"
import visionPreview from "@/app/images/vision.png"
import octoberPreview from "@/app/images/october.png"
import marvPreview from "@/app/images/marv.png"
import campusPreview from "@/app/images/campus memory.png"
import careerPreview from "@/app/images/carrerforge.png"
import satyaPreview from "@/app/images/satyapatra.png"
import { Link } from "@/app/utils/Link"
import { MotionUl, MotionLi } from "@/app/utils/lazy-ui"
import type { Variants } from "motion"

type StaticProject = {
  id: string
  src: StaticImageData
  alt: string
  color: string
  type: string
  text: string
  href: string
  dataText: string
  ariaLabel: string
  isExternal: boolean
}

export const STATIC_PROJECTS: StaticProject[] = [
  {
    id: "neurowatch",
    src: neurowatchPreview,
    alt: "neurowatch - Preview",
    color: "#3B06D1",
    type: "AI Healthcare",
    text: "View Project",
    href: "#",
    dataText: "View Project",
    ariaLabel: "View neurowatch Project",
    isExternal: true,
  },
  {
    id: "vision",
    src: visionPreview,
    alt: "vision ai Preview",
    color: "#024EFC",
    type: "Computer Vision",
    text: "View Project",
    href: "#",
    dataText: "View Project",
    ariaLabel: "View vision ai Project",
    isExternal: true,
  },
  {
    id: "october",
    src: octoberPreview,
    alt: "october ai Preview",
    color: "#000000",
    type: "Machine Learning",
    text: "View Project",
    href: "#",
    dataText: "View Project",
    ariaLabel: "View october ai Project",
    isExternal: true,
  },
  {
    id: "marv",
    src: marvPreview,
    alt: "marv neo Preview",
    color: "#13739C",
    type: "AI Automation",
    text: "View Project",
    href: "#",
    dataText: "View Project",
    ariaLabel: "View marv neo Project",
    isExternal: true,
  },
  {
    id: "campus",
    src: campusPreview,
    alt: "campus memory Preview",
    color: "#4F46E5",
    type: "Web Application",
    text: "View Project",
    href: "#",
    dataText: "View Project",
    ariaLabel: "View campus memory Project",
    isExternal: true,
  },
  {
    id: "career",
    src: careerPreview,
    alt: "careerforge Preview",
    color: "#10B981",
    type: "Full-Stack Dev",
    text: "View Project",
    href: "#",
    dataText: "View Project",
    ariaLabel: "View careerforge Project",
    isExternal: true,
  },
  {
    id: "satya",
    src: satyaPreview,
    alt: "satyapatra Preview",
    color: "#F59E0B",
    type: "Blockchain/AI",
    text: "View Project",
    href: "#",
    dataText: "View Project",
    ariaLabel: "View satyapatra Project",
    isExternal: true,
  },
]

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -300,
    y: -300,
    rotate: -15,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

export const ProjectsStatic: React.FC = () => {
  return (
    <section className="border-t border-slate-200 py-12">
      <div className="inside-container-small">
        <MotionUl
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-4 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {STATIC_PROJECTS.map((project) => {
            const ProjectWrapper = project.isExternal ? "a" : Link
            const wrapperProps = project.isExternal
              ? {
                  href: project.href,
                  target: "_blank",
                  rel: "noopener",
                  "data-text": project.dataText,
                  "aria-label": project.ariaLabel,
                }
              : {
                  href: project.href,
                  "data-text": project.dataText,
                  "aria-label": project.ariaLabel,
                  prefetch: true,
                }

            return (
              <MotionLi key={project.id} variants={cardVariants} className="h-full w-full">
                <ProjectWrapper {...wrapperProps} className="block h-full w-full">
                  <Card src={project.src} alt={project.alt} color={project.color} type={project.type} reveal={false} text={project.text} />
                </ProjectWrapper>
              </MotionLi>
            )
          })}
        </MotionUl>
      </div>
    </section>
  )
}
