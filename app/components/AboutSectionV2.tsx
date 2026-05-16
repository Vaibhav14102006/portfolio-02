import clsx from "clsx"
import profilePhoto from "../images/vaibhavabout.png"
import { Typography } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { ImageReveal } from "./ImageReveal"
import { MotionDiv } from "../utils/lazy-ui"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section id="about" className={clsx("border-y border-gray-200 bg-white", className)}>
      <div className="inside-container relative z-2">
        {/* HEADLINE */}
        <AnimatedH2>
          <span className="text-slate-500">About</span>
          <br />
          VAIBHAV
        </AnimatedH2>
        <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
          {/* ---------------- left column ---------------- */}

          <div className="flex [flex:1_0_0px] flex-col gap-6">
            {/* portrait + overlay icons */}
            <ImageReveal src={profilePhoto} alt="VAIBHAV" className="custom-shadow aspect-[4/4.5]" />

            {/* name + role */}
            <MotionDiv
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <h2 className="mb-1 text-base font-medium leading-snug tracking-tight text-slate-900 md:text-lg">
                VAIBHAV
              </h2>
              <p className="text-sm text-gray-500">Machine Learning Researcher & Full-Stack Developer</p>
            </MotionDiv>
          </div>
          {/* ---------------- right column ---------------- */}
          <Typography as="article" size="lg" className="[flex:1.5_0_0px] space-y-8 text-slate-500">
            <p>
              <strong className="font-semibold text-slate-900">Hey, I am a Machine Learning Researcher and B.Tech CSE student</strong> building AI-powered automation systems and scalable full-stack applications.
            </p>

            <p>
              <strong className="font-semibold text-slate-900">I specialize in transforming ideas into real-world solutions</strong> through machine learning and intelligent systems, with strong experience in developing impactful projects across healthcare, automation, and data-driven applications.
            </p>
            <p>
              <strong className="font-semibold text-slate-900">My work focuses on building intelligent systems that create real-world impact.</strong> I have demonstrated the ability to design, develop, and deploy AI-driven solutions across multiple domains, with consistent performance in competitive and research environments.
            </p>
          </Typography>
        </div>
      </div>
    </section>
  )
}
