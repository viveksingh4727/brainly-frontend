import { useRef, useState } from "react";
import { CloseIcon } from "../../icons/CloseIcon";
import { Button } from "./button";
import { Input } from "./Input";
import { BACKEND_URL } from "../../config";
import axios from "axios";

interface ModalProps {
    open: boolean;
    onClose: () => void;
}

enum ContentType {
    Youtube = "youtube",
    Twitter = "twitter"
}

export const Modal = ({open, onClose}: ModalProps) => {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [ type, setType ] = useState(ContentType.Youtube);

    const addContent = async () => {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(BACKEND_URL + "api/v1/content", {
            title,
            link,
            type,
        },{
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });

        onClose();
    }
    if(!open) return null;
    return (
    <div >
         <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50 opacity-50" onClick={onClose}></div>
            <div className="flex flex-col space-y-3 relative bg-white rounded-xl shadow-xl p-6 w-96">
                <div className="text-gray-400 flex justify-end cursor-pointer" onClick={onClose} >
                    <CloseIcon />
                </div>
                <Input inputRef={titleRef} placeholder={"Title"} />
                <Input inputRef={linkRef} placeholder={"Link"}/>
                <div className="flex gap-3 justify-center items-center">
                    <h3 className="font-light">Type:</h3>
                    <Button text="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} size="md" onClick={() => setType(ContentType.Youtube)}/>
                    <Button text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} size="md" onClick={() => setType(ContentType.Twitter)}/>
                </div>
                <Button variant="primary" size="md" text="Submit" onClick={addContent}/>
            </div>
            </div>
    </div>)
}