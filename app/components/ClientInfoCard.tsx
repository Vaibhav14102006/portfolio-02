import { StaticImageData } from "next/image"

export const ClientInfoCard: React.FC<{
  img: StaticImageData | string
  name: string
  title: string
}> = ({ name, title }) => {
  return (
    <div className="flex items-center justify-center gap-3">
      {/* Avatar */}
      <div className="h-9 w-9 overflow-hidden rounded-full border border-slate-200 bg-slate-100 flex items-center justify-center">
        <span className="text-[10px] font-bold text-slate-400">{name.charAt(0)}</span>
      </div>

      {/* Name & Role */}
      <div className="flex flex-col items-start">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-slate-500">{title}</p>
      </div>
    </div>
  )
}
