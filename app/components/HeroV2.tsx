import { HeroScrollClick } from "./HeroScrollClick"
import { ActivityDot } from "./ui/ActivityDot"
import { AnimatedElement } from "./ui/AnimatedElement"
import { CallToActionButton } from "./ui/CallToActionButton"
import Image from "next/image"
import vaibhavImage from "@/app/images/vaibhav.png"

export const HeroV2 = () => {
  return (
    <section className="mx-auto max-w-6xl pt-25 sm:pt-28 md:pt-32">
      <div className="inside relative flex [flex:1.5_0_0px] px-5.5 pb-12 md:px-11 md:pb-24">
        <div className="flex max-w-lg flex-col gap-8 md:min-w-sm">
          <AnimatedElement
            element="span"
            delay={0.6}
            className="z-2 inline-flex items-center gap-2 self-start rounded-full border border-gray-100 bg-white px-3 py-2 text-xs font-medium shadow-lg"
          >
            <ActivityDot />
            Gwalior, MP
          </AnimatedElement>

          <h1 className="xs:text-5xl relative z-5 text-4xl leading-[1] font-medium tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            <AnimatedElement element="span" offsetPx={20} fadeDirection="left" className="inline-block">
              VAIBHAV
            </AnimatedElement>{" "}
            <br />
            <AnimatedElement element="span" offsetPx={40} delay={0.2} fadeDirection="top" className="inline-block"></AnimatedElement>
            <AnimatedElement element="span" delay={0.4} offsetPx={20} fadeDirection="left" className="inline-block text-slate-700">
              Portfolio
            </AnimatedElement>
          </h1>

          <AnimatedElement element="p" delay={0.6} className="max-w-xs text-sm leading-snug tracking-tight text-slate-700 md:max-w-sm md:pr-4 md:text-base">
            <strong className="font-semibold text-slate-900">Machine Learning Researcher & Full Stack Developer.</strong> Building AI-powered automation systems and scalable applications. Exploring the intersection of intelligent systems, modern design, and human intent.
          </AnimatedElement>

          <CallToActionButton />
        </div>
        <div className="hidden lg:flex [flex:1_0_0px] items-center justify-center">
          <AnimatedElement element="div" delay={0.8} className="relative h-[450px] w-[350px] rotate-3 overflow-hidden rounded-[40px] border-[12px] border-white bg-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)]">
            <Image
              src={vaibhavImage}
              alt="VAIBHAV"
              fill
              className="object-cover grayscale contrast-[1.2] brightness-[1.05]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </AnimatedElement>
        </div>
        <HeroScrollClick />

        {/* subtle background ellipse */}
        <div className="pointer-events-none absolute inset-y-0 left-1/3 -z-1 hidden w-full bg-radial from-indigo-100 via-transparent to-transparent blur-3xl md:block" />
      </div>
    </section>
  )
}
