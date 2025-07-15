import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const SignInModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm px-4">
      <div className="relative bg-white rounded-lg shadow-lg px-6 py-8 w-full max-w-sm animate-fade-in-down">

        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-2xl font-semibold text-[#a67d4b]">Welcome Back</h2>
          <p className="text-gray-600 text-xs mt-1">
            Discover heritage stays like never before.
          </p>
        </div>

        {/* Tagline */}
        <div className="bg-[#fff8f0] text-xs text-[#8a6232] px-3 py-1.5 rounded-md mb-5 italic text-center">
          “Travel back in time — one stay at a time.”
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#a67d4b] bg-[#fefaf5]"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-[#a67d4b] bg-[#fefaf5]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#a67d4b] hover:bg-[#8a6232] text-white text-sm font-medium py-2 rounded-md transition"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-xs text-gray-400">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login */}
        <button className="w-full border border-gray-300 rounded-md py-2 text-sm hover:bg-gray-50 transition">
          Sign in with Google
        </button>

        {/* Footer */}
        <p className="text-center text-xs text-gray-600 mt-4">
          Don’t have an account?{" "}
          <span className="text-[#a67d4b] font-medium cursor-pointer hover:underline">
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignInModal;
