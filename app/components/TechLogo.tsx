"use client"
import React from "react"
import { Icon } from "./Icon"
import clsx from "clsx"

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
      <img
        src={`https://cdn.simpleicons.org/${slug}/ffffff`}
        alt={name}
        width={size}
        height={size}
        className={className}
        loading="lazy"
        onError={() => setError(true)}
      />
    )
  }

  // Fallback to local Icon component or a box icon (white)
  return <Icon name="boxes" width={size} height={size} className={clsx("text-white", className)} />
}
