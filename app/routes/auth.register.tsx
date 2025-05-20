import { useState } from "react";
import { json, redirect, type LoaderFunctionArgs, type ActionFunctionArgs } from "@remix-run/node";
import { Form, Link, useActionData, useNavigation } from "@remix-run/react";
import { motion } from "framer-motion";
import { Brain, CheckCircle, Eye, EyeOff } from "lucide-react";
import { createUser, createUserSession, getUserId } from "~/utils/session.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const userId = await getUserId(request);
  if (userId) {
    return redirect("/dashboard");
  }
  return json({});
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  
  if (!name || !email || !password) {
    return json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }
  
  try {
    const user = await createUser(name, email, password);
    return createUserSession(user.id, "/dashboard");
  } catch (error: any) {
    if (error.message === "User already exists") {
      return json(
        { error: "A user with this email already exists" },
        { status: 400 }
      );
    }
    return json(
      { error: "An error occurred during registration" },
      { status: 500 }
    );
  }
}

export default function Register() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  
  const isSubmitting = navigation.state === "submitting";
  
  // Password strength checks
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
  
  const passwordStrength = [
    hasMinLength,
    hasUppercase,
    hasLowercase,
    hasNumber,
    hasSpecialChar,
  ].filter(Boolean).length;
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Link to="/" className="flex items-center">
            <Brain className="h-10 w-10 text-primary-500" />
          </Link>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <Link to="/auth/login" className="font-medium text-primary-600 hover:text-primary-500">
            sign in to your existing account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
        >
          <Form method="post">
            {actionData?.error && (
              <div className="mb-4 bg-error-50 border border-error-200 text-error-700 px-4 py-3 rounded-md">
                <p>{actionData.error}</p>
              </div>
            )}
            
            <div className="mb-6">
              <label htmlFor="name" className="label">
                Full name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="input"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="label">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="input"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="label">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              
              {/* Password strength indicator */}
              <div className="mt-2">
                <div className="flex space-x-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full ${
                        i < passwordStrength
                          ? i < 2
                            ? "bg-error-500"
                            : i < 4
                              ? "bg-warning-500"
                              : "bg-success-500"
                          : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
                
                <div className="space-y-1 text-sm">
                  <div className="flex items-center text-gray-500">
                    <CheckCircle 
                      className={`h-4 w-4 mr-2 ${hasMinLength ? "text-success-500" : "text-gray-300"}`} 
                    />
                    <span>At least 8 characters</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <CheckCircle 
                      className={`h-4 w-4 mr-2 ${hasUppercase ? "text-success-500" : "text-gray-300"}`} 
                    />
                    <span>Contains uppercase letter</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <CheckCircle 
                      className={`h-4 w-4 mr-2 ${hasLowercase ? "text-success-500" : "text-gray-300"}`} 
                    />
                    <span>Contains lowercase letter</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <CheckCircle 
                      className={`h-4 w-4 mr-2 ${hasNumber ? "text-success-500" : "text-gray-300"}`} 
                    />
                    <span>Contains number</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <CheckCircle 
                      className={`h-4 w-4 mr-2 ${hasSpecialChar ? "text-success-500" : "text-gray-300"}`} 
                    />
                    <span>Contains special character</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-primary-600 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  I agree to the{" "}
                  <Link to="/terms" className="text-primary-600 hover:text-primary-500">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-primary-600 hover:text-primary-500">
                    Privacy Policy
                  </Link>
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting || passwordStrength < 3}
                className={`btn btn-primary w-full text-center py-2 ${
                  (isSubmitting || passwordStrength < 3) ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Creating account..." : "Create account"}
              </button>
            </div>
          </Form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or sign up with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="btn btn-outline py-2 px-4 flex justify-center items-center w-full"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z" fill="#EA4335"/>
                  <path d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z" fill="#4285F4"/>
                  <path d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z" fill="#FBBC05"/>
                  <path d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z" fill="#34A853"/>
                </svg>
                Google
              </button>

              <button
                type="button"
                className="btn btn-outline py-2 px-4 flex justify-center items-center w-full"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                Twitter
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}