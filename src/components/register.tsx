import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ImageIcon } from "lucide-react";

export function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();

  function submitToDatabase(e: React.FormEvent) {
    e.preventDefault();

    if(repeatPassword !== password) return alert('passwords do not match')
    fetch("http://localhost:1337/users/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: fullName,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/login")
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="max-w-md p-8 bg-white rounded shadow">
          <div className="text-center">
            <ImageIcon className="w-12 h-12 mx-auto mb-4" />
            <h1 className="text-3xl font-bold">Create your account</h1>
            <p className="text-muted-foreground">
              Join our email marketing platform and start growing your business.
            </p>
          </div>
          <form
            className="w-full max-w-md mt-8 space-y-4"
            onSubmit={(e) => submitToDatabase(e)}
          >
            <div className="space-y-2">
              <Label htmlFor="full-name">Full Name</Label>
              <Input
                id="full-name"
                placeholder="Enter your full name"
                onChange={(e) => setFullName(e.target.value)}
              ></Input>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
            </div>
            <Button className="w-full mt-4" variant="default">
              Register
            </Button>
          </form>
          <p className="mt-4 text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Logga in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
