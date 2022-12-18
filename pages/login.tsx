import { useState } from "react"
import { useRouter } from "next/router";

function Eye(props: any) {
  const { className, onClick } = props;
  return (
    <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>

  )
}

function EyeOff(props: any) {
  const { className, onClick } = props;
  return (
    <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
    </svg>
  )
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const Router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data = {
      email,
      password
    }
  }

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <div className="flex min-h-screen flex-col justify-center py-12 sm:px-6 lg:px-8 px-4 bg-primary">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
          <p className="mb-4">Please fill in your unique admin login details below</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="mb-7">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="mb-1">
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold text-[#525C76]"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  {passwordVisibility && (
                    <Eye
                      onClick={togglePasswordVisibility}
                      className="absolute cursor-pointer text-slate-500 h-6 w-6 right-1 top-[7px] flex items-center"
                    />
                  )}
                  {!passwordVisibility && (
                    <EyeOff
                      onClick={togglePasswordVisibility}
                      className="absolute cursor-pointer text-slate-500 h-6 w-6 right-1 top-[7px] flex items-center"
                    />
                  )}
                  <input
                    id="password"
                    name="password"
                    type={passwordVisibility ? "text" : "password"}
                    autoComplete="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="text-sm">
                  <a href="#" className="font-medium text-gray-400 hover:text-gray-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => Router.push("/home")}
                className="flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:text-white/80 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
