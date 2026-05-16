export const DOMAIN_URL = "http://localhost:3000"

export const SITE_CONFIG = {
  title: "VAIBHAV - Machine Learning & Full-Stack Developer Portfolio",
  description: "Portfolio of VAIBHAV, a Machine Learning Researcher, Automation Engineer, and Full-Stack Developer building AI-powered automation systems and scalable full-stack applications.",
  url: DOMAIN_URL,
  siteName: "VAIBHAV",
  keywords: ["VAIBHAV", "Machine Learning", "Automation Engineer", "Full-Stack Developer", "Gwalior"],
  ogImage: "/assets/bg-home-poster-optimized.webp",
  logo: "/serbyte-logo.png",
} as const

export const SITE_NAP = {
  name: "VAIBHAV",
  googleBusinessType: "LocalBusiness" as const,
  contact: "VAIBHAV",
  contactTitle: "Developer",
  email: "vaibhavsinghrajawat483@gmail.com",
  phone: "+917509702917",
  formattedPhone: "7509702917",
  addressLink: "https://www.google.com/maps/search/?api=1&query=gwalior+india",
  street: "",
  city: "Gwalior",
  state: "Madhya Pradesh",
  zipCode: "",
  openingHours: [{ days: "Mon - Sat", hours: "8am - 6pm" }] as const,
  googleReviewLink: "",
  profiles: {
    facebook: "",
    linkedIn: "https://www.linkedin.com/in/vaibhav-singh-rajawat-b92420341",
    yelp: "",
    pinterest: "",
    gbp: "",
    github: "https://github.com/Vaibhav14102006",
    x: "",
  } as const,
  logo: "/serbyte-logo.png",
  favicon: "/favicon.ico",
  images: ["/serbyte-logo.png", "/assets/bg-home-poster-optimized.webp"],
} as const

export const SITE_SLUGS = {
  home: "/",
  projects: "/projects",
  achievements: "/achievements",
  experience: "/experience",
  education: "/education",
  interests: "/interests",
  contact: "/#contact",
  about: "/#about",
  projectLinks: {
    // iao: "/projects/iron-and-oak", // removed: no longer linking to internal case study
    // automedics: "/projects/automedics", // removed: no longer linking to internal case study
    // bespoke: "/projects/bespoke", // removed
  },
} as const

export const externalLinks = {
  vetsChoice: "https://vetschoiceinsurance.com/",
  zeroIconSprite: "https://github.com/react-zero-ui/icon-sprite",
  zeroCore: "https://github.com/react-zero-ui/core",
  entitled: "https://be-entitled.com/",
} as const

const flattenSlugs = (obj: Record<string, string | Record<string, string>>): string[] => {
  return Object.values(obj).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
}

export const ALL_PAGES: string[] = Object.values(SITE_SLUGS).flatMap((value) => (typeof value === "string" ? [value] : flattenSlugs(value)))
