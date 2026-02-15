import { BrainIcon } from "../../icons/BrainIcon"
import { TwitterIcon } from "../../icons/TwitterIcon"
import { YouTubeIcon } from "../../icons/YoutubeIcon"
import { SideBarItem } from "./SideBarItem"


export const SideBar = () => {
    return <div className="h-screen bg-white border-r border-gray-100 shadow-md w-72 flex flex-col">
        <div className="flex items-center gap-3 px-6 py-6 text-xl">
            <div className="text-purple-400"><BrainIcon/></div>
            <span className="text-gray-600">Brainly</span>
        </div>
        
        <div className="flex flex-col gap-2">
            <SideBarItem text="Twitter" icon={<TwitterIcon />} />
            <SideBarItem text="Youtube" icon={<YouTubeIcon />} />
        </div>

        </div>


}