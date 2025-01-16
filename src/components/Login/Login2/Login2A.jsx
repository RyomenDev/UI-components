import { useState } from "react";
import {
  RiUser3Line,
  RiLock2Line,
  RiEyeOffLine,
  RiEyeLine,
} from "react-icons/ri";
import bgImage from "./login-bg.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background image */}
      <img
        src={bgImage}
        alt="login background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative bg-white/10 border-2 border-white mx-6 p-8 rounded-xl backdrop-blur-md sm:w-[400px] sm:p-12">
        <h1 className="text-center text-2xl font-medium text-white mb-8">
          Login
        </h1>

        <div className="space-y-6 mb-6">
          {/* Email input */}
          <div className="flex items-center border-b-2 border-white pb-2">
            <RiUser3Line className="text-white text-xl" />
            <div className="w-full relative">
              <input
                type="email"
                id="login-email"
                required
                placeholder=" "
                className="w-full bg-transparent text-white px-2 py-2 placeholder-transparent focus:outline-none"
              />
              <label
                htmlFor="login-email"
                className="absolute left-0 top-3 text-white font-medium transition-all peer-placeholder-shown:top-[13px] peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-0 peer-focus:text-sm"
              >
                Email
              </label>
            </div>
          </div>

          {/* Password input */}
          <div className="flex items-center border-b-2 border-white pb-2 relative">
            <RiLock2Line className="text-white text-xl" />
            <div className="w-full relative">
              <input
                type={showPassword ? "text" : "password"}
                id="login-pass"
                required
                placeholder=" "
                className="w-full bg-transparent text-white px-2 py-2 placeholder-transparent focus:outline-none"
              />
              <label
                htmlFor="login-pass"
                className="absolute left-0 top-3 text-white font-medium transition-all peer-placeholder-shown:top-[13px] peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-0 peer-focus:text-sm"
              >
                Password
              </label>
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-0 top-2 text-white text-xl focus:outline-none"
              >
                {showPassword ? <RiEyeLine /> : <RiEyeOffLine />}
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="login-check" className="w-4 h-4" />
            <label htmlFor="login-check" className="text-sm text-white">
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm text-white hover:underline">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200"
        >
          Login
        </button>

        <p className="text-center text-sm text-white mt-6">
          Don&apos;t have an account?{" "}
          <a href="#" className="font-medium hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
