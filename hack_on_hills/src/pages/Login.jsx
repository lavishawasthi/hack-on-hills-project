import React from "react";
import { Mail, Lock } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex w-full items-center justify-center min-h-screen bg-[#c9defa]">
      <div className="bg-gradient-to-b from-[#7bb4f2] to-[#97bdf5] p-10 rounded-3xl shadow-lg w-[350px] border border-[#3b78e7]">
        <h2 className="text-center text-white text-2xl font-semibold mb-8">
          Login
        </h2>

        <div className="space-y-6">
          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-white bg-transparent focus:outline-none text-white placeholder-white pb-2"
            />
            <Mail className="absolute right-2 top-1/2 -translate-y-1/2 text-white" size={20} />
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full border-b border-white bg-transparent focus:outline-none text-white placeholder-white pb-2"
            />
            <Lock className="absolute right-2 top-1/2 -translate-y-1/2 text-white" size={20} />
          </div>
        </div>

        {/* Login Button */}
        <button className="w-full bg-[#3b78e7] text-white font-medium py-2 mt-8 rounded-lg hover:bg-[#336ad1] transition">
          Login
        </button>

        {/* Signup Link */}
        <p className="text-center text-sm text-white mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-blue-800 font-semibold hover:underline">
            Sign Up!
          </a>
        </p>
      </div>
    </div>
  );
}
