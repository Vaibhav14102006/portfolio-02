"use client"
import React from "react"
import { Icon } from "./Icon"
import clsx from "clsx"
import Image from "next/image"

interface TechLogoProps {
  name: string
  slug?: string
  className?: string
  size?: number
}

export const TechLogo: React.FC<TechLogoProps> = ({ name, slug, className, size = 30 }) => {
  const [error, setError] = React.useState(false)

  // If a slug is provided and no error, use Simple Icons CDN (white icon)
  if (slug && !error) {
    return (
      <Image
        src={`https://cdn.simpleicons.org/${slug}/ffffff`}
        alt={name}
        width={size}
        height={size}
        className={className}
        onError={() => setError(true)}
        unoptimized // Icons are SVGs, no need for raster optimization
      />
    )
  }

  // Fallback to local Icon component or a box icon (white)
  return <Icon name="boxes" width={size} height={size} className={clsx("text-white", className)} />
}
