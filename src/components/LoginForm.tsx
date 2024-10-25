import React, { useState, useContext } from "react";
import Input from "@/components/ui/LoginInput";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Checkbox from "@/components/ui/LoginCheckbox";
import { FaGithub } from "react-icons/fa";
import axios from 'axios';
import { LockIcon, MailIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/context/context";

// fixa denna till en riktig fetch med fetch eller axios?
const handleGithubLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "http://localhost:1337/auth/github";
};

export const LoginForm = () => {
    const [rememberMe, setRememberMe] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { setIsloggedIn } = useContext(AuthContext) as { setIsloggedIn: (value: boolean) => void };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:1337/auth/login",
                {
                    email,
                    password,
                },
                {
                    withCredentials: true,
                }
            );
            console.log("Logged in successfully:", response.data);
            navigate("/");
            setIsloggedIn(true)
        }
        catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                console.log(error.response)
            } else {
                console.error("Login error:", error);
            }
        }
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
            <div>
                <label htmlFor="email" className="block text-sm font-medium">
                    Email
                </label>
                <div className="relative mt-1">
                    <Input
                        type="email"
                        id="email"
                        placeholder="m@example.com"
                        className="w-full pl-3 pr-10"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <MailIcon className="absolute right-2 top-2.5 h-4 w-4 text-red-500" />
                </div>
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium">
                    Password
                </label>
                <div className="relative mt-1">
                    <Input
                        type="password"
                        id="password"
                        placeholder="••••••••"
                        className="w-full pl-3 pr-10"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <LockIcon className="absolute right-2 top-2.5 h-4 w-4 text-red-500" />
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Checkbox
                        id="remember"
                        label="Remember me"
                        checked={rememberMe}
                        onCheckedChange={(checked) => setRememberMe(checked)}
                    />
                </div>
                <Link to="#" className="text-sm text-blue-600">
                    Forgot Password?
                </Link>
            </div>
            <Button type="submit" className="w-full mt-4 bg-black text-white">
                Login
            </Button>
            <Button
                className="w-full mt-4 bg-black text-white flex items-center justify-center gap-2"
                onClick={handleGithubLogin}
            >
                {" "}
                <FaGithub />
                Login with Github{" "}
            </Button>
        </form>
    );
};
