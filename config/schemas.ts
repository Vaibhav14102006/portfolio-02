import { ProjectData } from "@/app/data/project-data"
import { DOMAIN_URL, SITE_CONFIG, SITE_NAP, SITE_SLUGS, externalLinks } from "./siteConfig"
import type { Graph, ItemList } from "schema-dts"

interface ProjectItem {
  name: string
  url: string
  date: string
  description: string
  external?: string
  type?: "SoftwareSourceCode" | "SoftwareApplication" | "WebSite" | "WebApplication" | "CreativeWork"
}

const projectsData: ProjectItem[] = [
  {
    name: "React Zero-UI",
    url: externalLinks.zeroCore,
    date: "2025-06-01",
    description: "Zero Re-Render State Library",
    type: "SoftwareSourceCode",
  },
  {
    name: "AmiArchive",
    url: "https://amiarchive.vercel.app",
    date: "2025-03-11",
    description: "Study Materials Web App",
    type: "WebApplication",
  },
  {
    name: "AmiEvents",
    url: "https://amievents.vercel.app",
    date: "2024-12-02",
    description: "Event Management Web App",
    type: "WebApplication",
  },
  {
    name: "AmiOD",
    url: "https://amiod.vercel.app",
    date: "2024-06-15",
    description: "Amity OD Automation Web App",
    type: "WebApplication",
  },
  {
    name: "Entitled",
    url: externalLinks.entitled,
    date: "2024-02-10",
    description: "Event Management Web App",
    type: "WebApplication",
  },
]

const SITE = DOMAIN_URL.replace(/\/$/, "")

export function buildProjectGraphMinimal(slug: string, pd: ProjectData, type = "CreativeWork" as const): Graph {
  const id = `${SITE}${SITE_SLUGS.projects}/${slug}`
  const title = typeof pd.hero.title === "string" ? pd.hero.title : "Case Study"
  const description = typeof pd.hero.description === "string" ? pd.hero.description : undefined

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": id,
        url: id,
        name: title,
        ...(description ? { description } : {}),
        ...(pd.hero.link ? { sameAs: [pd.hero.link] } : {}),
        mainEntityOfPage: id,
        isPartOf: { "@id": `${SITE}${SITE_SLUGS.projects}#page` },
        author: { "@id": `${SITE}#vaibhav` },
        publisher: { "@id": `${SITE}#org` },
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE}${SITE_SLUGS.projects}` },
          { "@type": "ListItem", position: 3, name: title, item: id },
        ],
      },
    ],
  }
}

const itemList: ItemList = {
  "@type": "ItemList",
  "@id": `${SITE}${SITE_SLUGS.projects}#list`,
  itemListOrder: "Descending",
  numberOfItems: projectsData.length,
  itemListElement: projectsData.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: { "@id": p.url.startsWith("/") ? `${SITE}${p.url}` : p.url },
  })),
}

export const projectsGraph: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    itemList,
    {
      "@type": "CollectionPage",
      "@id": `${SITE}${SITE_SLUGS.projects}#page`,
      url: `${SITE}${SITE_SLUGS.projects}`,
      name: "Projects - VAIBHAV",
      isPartOf: { "@id": `${SITE}#website` },
      mainEntity: { "@id": `${SITE}${SITE_SLUGS.projects}#list` },
      mainEntityOfPage: `${SITE}${SITE_SLUGS.projects}`,
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE}${SITE_SLUGS.projects}` },
      ],
    },
  ],
}

export const homeGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE}#home`,
      url: SITE,
      name: SITE_CONFIG.title,
      isPartOf: { "@id": `${SITE}#website` },
      mainEntityOfPage: SITE,
      mainEntity: {
        "@type": "ItemList",
        name: "Featured projects",
        itemListElement: projectsData.slice(0, 4).map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: { "@id": p.url.startsWith("/") ? `${SITE}${p.url}` : p.url },
        })),
      },
      inLanguage: "en",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: SITE }],
    },
  ],
}

export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}#org`,
      name: "VAIBHAV",
      url: SITE,
      logo: { "@id": `${SITE}#logo` },
      sameAs: Object.values(SITE_NAP.profiles),
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "Hiring",
          email: `mailto:${SITE_NAP.email}`,
          areaServed: "US",
          availableLanguage: ["en"],
        },
      ],
    },
    {
      "@type": "Person",
      "@id": `${SITE}#vaibhav`,
      name: "VAIBHAV",
      url: SITE,
      jobTitle: "Machine Learning Researcher & Full-Stack Developer",
      worksFor: { "@id": `${SITE}#org` },
      sameAs: Object.values(SITE_NAP.profiles),
      email: SITE_NAP.email,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}#website`,
      url: SITE,
      name: "VAIBHAV - Developer Portfolio",
      publisher: { "@id": `${SITE}#org` },
      inLanguage: "en",
    },
    { "@type": "ImageObject", "@id": `${SITE}#logo`, url: `${SITE}/serbyte-logo.png` },
  ],
}
