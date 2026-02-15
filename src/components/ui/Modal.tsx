import { CloseIcon } from "../../icons/CloseIcon";
import { Button } from "./button";

interface InputProps {
  placeholder?: string;
  onChange?: () => void;
}

interface ModalProps {
    open: boolean;
    onClose: () => void;
}

export const Input = ({ onChange, placeholder }: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      type="text"
      onChange={onChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  );
};


export const Modal = ({open, onClose}: ModalProps) => {
    if(!open) return null;
    return <div >
         <div className="fixed inset-0 z-50 flex items-center justify-center">

            <div className="absolute inset-0 bg-black/50 opacity-50" onClick={onClose}></div>
            <div className="flex flex-col space-y-3 relative bg-white rounded-xl shadow-xl p-6 w-96">
                <div className="text-gray-400 ml-80 cursor-pointer" onClick={onClose} >
                    <CloseIcon />
                </div>
                <Input placeholder={"Title"} />
                <Input placeholder={"Link"}/>
                <Button variant="primary" size="md" text="Submit" onClick={onClose}/>
            </div>
            </div>
            

    </div>
}