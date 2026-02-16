import { useRef } from "react"
import axios from "axios";

import { Button } from "../components/ui/button"
import { Input } from "../components/ui/Input"
import { BACKEND_URL } from "../config";


export const Signup = () => {

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const signupHandler = async () => {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        await axios.post(BACKEND_URL + "api/v1/signup", {
            username, 
            password,
        })
        alert("You're signedup")
    }
    return (
        <div className="min-h-screen w-full bg-linear-to-br from-purple-100 via-gray-100 to-purple-200 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 space-y-6 transition-all duration-300 hover:shadow-2xl">

                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold text-gray-800">Create an account </h1>
                    <p className="text-gray-500 text-sm"> Signup to get started</p>
                </div>

                <div className="space-y-4">
                    <Input inputRef={usernameRef} placeholder="Username"/>
                    <Input inputRef={passwordRef} placeholder="Password"/>
                </div>
                <div className="flex justify-center">
                    <Button variant="primary" text="Signup" size="md" fullWidth={true} onClick={signupHandler}/>
                </div>
            </div>

        </div>
    )
}