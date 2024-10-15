import React from "react"

export default function HeaderItem({ name, Icon }: { name: string, Icon: React.ComponentType }) {
  return (
    <>
      <div className="text-white flex items-center
        gap-3 text-[18px] font-semibold cursor-pointer mt-3 md:mt-0">
        <Icon />
        <h2 className="underline-animation">{name}</h2>
      </div>
    </>
  )
}
