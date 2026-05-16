"use client"
import { BeforeAfterSliderSkeleton } from "@/app/skeletons/BeforeAfterSliderSkeleton"

import dynamic from "next/dynamic"
import { HeaderText } from "@/app/ui/HeaderText"
import { StaticImageData } from "next/image"

const BeforeAfterSlider = dynamic(() => import("@/app/ui/BeforeAfterSlider").then((mod) => mod.BeforeAfterSlider), {
  ssr: false,
  loading: () => <BeforeAfterSliderSkeleton />,
})

interface BeforeAfterSectionProps {
  heroBefore: StaticImageData
  beforeAltText: string
  heroBeforeMobile: StaticImageData
  beforeMobileAltText: string
  iframe?: string
  heroAfter?: StaticImageData
  afterAltText: string
}

export const BeforeAfterSection: React.FC<BeforeAfterSectionProps> = ({
  heroBefore: _heroBefore,
  heroBeforeMobile: _heroBeforeMobile,
  iframe: _iframe,
  heroAfter: _heroAfter,
  beforeAltText: _beforeAltText,
  beforeMobileAltText: _beforeMobileAltText,
  afterAltText: _afterAltText,
}) => {
  return (
    <section className="relative border-y border-gray-200">
      <div className="inside-container-large flex flex-col gap-12 pt-12 lg:pt-16">
        <HeaderText
          title="Before and after."
          titleHighlight="See the difference."
          description="Use the slider to see the difference between the before and after."
        />
        <BeforeAfterSlider
          initialPosition={70}
          before={
            <>
              <div className="hidden h-full w-full rounded-xl bg-slate-100 lg:block" />
              <div className="block h-full w-full rounded-xl bg-slate-100 lg:hidden" />
            </>
          }
          after={
            <div className="h-full w-full rounded-xl bg-slate-200" />
          }
        />
      </div>
    </section>
  )
}
