import type { ReactElement } from "react"


interface SideBarProps {
    text: string,
    icon: ReactElement
}

export const SideBarItem = ({text, icon}: SideBarProps) => {
    return <div className="flex mt-2 gap-3 px-6 py-2 items-center text-gray-700 hover:bg-gray-100 cursor-pointer transition duration-200 rounded-lg">
        <div >{icon} </div>
        <span className="font-medium">{text} </span>
        
    </div>
}