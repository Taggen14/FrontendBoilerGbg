import { Link } from "react-router-dom";
import { LoginForm } from "@/components/LoginForm";

export const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <main className="flex flex-col items-center justify-center flex-1 w-full px-4">
        <div className="max-w-md p-8 bg-white rounded shadow">
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-2xl font-semibold">Login</h1>
          </div>
          <LoginForm />
        </div>
        <p className="mt-4 text-sm">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600">
            Register
          </Link>
        </p>
      </main>
    </div>
  );
};
