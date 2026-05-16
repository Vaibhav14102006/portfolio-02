import React from "react"

interface ImageProps {
  className?: string
  alt: string
  src: string
  sizes?: string
}
export const ApproachTabsImage: React.FC<ImageProps> = ({ className, alt: _alt, src: _src, sizes: _sizes = "(max-width: 1028px) 100vw, 50vw" }) => {
  return <div className={"bg-slate-100 " + className} />
}
