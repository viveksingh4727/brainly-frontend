import { ShareIcon } from "../../icons/ShareIcon"


interface CardProps {
    title: string,
    link: string,
    type: "twitter"|"youtube"

}

export const Card = ({title, link, type}: CardProps) => {

    return <div>
        <div className="max-w-96 bg-white rounded-xl border-gray-200 shadow-sm hover:shadow-lg p-5">
            <div className=" flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="text-gray-500 p-2 ">
                        <ShareIcon  size="md"/>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
                </div>

                <div className="text-gray-500 pr-2"> 
                    <a href={link}>
                        View
                    </a>
                </div>
            </div>
            <div className="flex items-center">            
                {type === "youtube" && <iframe className="w-full h-64 rounded-lg" src={link}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                {type === "twitter" && <blockquote className="twitter-tweet w-full h-64 rounded-lg">
                <a href={link}></a> 
                </blockquote>}
            </div>
        </div>
       
    </div>

}