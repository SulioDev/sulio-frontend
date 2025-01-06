import React from "react";
import { Mail, Facebook, Instagram } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex flex-col items-center">
      {/* Top Image */}
      <div className="absolute top-0 right-0 w-full sm:w-2/3 md:w-1/2">
        <img
          src="/images/FinalCallToAction1.gif"
          alt="Decorative top"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Bottom Image */}
      <div className="absolute bottom-0 left-0 w-full sm:w-2/3 md:w-1/2">
        <img
          src="/images/FinalCallToAction2.gif"
          alt="Decorative bottom"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col justify-center items-center pt-28 md:pt-16 px-4 md:px-8 lg:px-16">
        {/* Hero Card */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-6 lg:p-8 text-white text-center mb-8 shadow-xl w-full">
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">
            The all-in-one solution for artists to elevate their business with AI
          </h1>
          <p className="text-gray-300 mb-8 lg:text-lg">
            Sulio AI Chatbot Assistant helps artists automate client interactions, manage sales, and enhance their engagement—giving you more time to create. Seamlessly integrate AI into your workflow and experience the freedom to focus on what matters most: your art.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 transition-colors text-black font-semibold px-8 py-3 rounded-full mb-4">
            Try for Free
          </button>
          <p className="text-sm text-gray-400">
            Start your free 30-day trial today!
          </p>
        </div>

        {/* Mobile Footer */}
        <footer className="flex flex-col items-center gap-6 w-full md:hidden">
          {/* Navigation Links */}
          <nav className="px-4 flex justify-center items-center text-sm text-center text-gray-600 font-bold gap-4 md:text-md">
          <a href="#" className="hover:text-black transition-colors">
                Contact Us
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Terms and Conditions
              </a>
          </nav>
          <div className="px-5 flex justify-center items-center w-full">
            <svg
              className="h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-60 -52 120 104"
            >
              <polygon
                points="50,0 25,43.3 -25,43.3 -50,0 -25,-43.3 25,-43.3"
                fill="#b49494"
              />
            </svg>
            <hr className="w-full h-[0.1rem] bg-[#b49494]"></hr>
            <svg
              className="h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-60 -52 120 104"
            >
              <polygon
                points="50,0 25,43.3 -25,43.3 -50,0 -25,-43.3 25,-43.3"
                fill="#b49494"
              />
            </svg>
          </div>
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <span className="font-semibold">Sulio Art</span>
            <span className="text-gray-600">Artist AI Chatbot</span>
          </div>
          {/* Social Links */}
          <div className="flex gap-8">
            <a href="#" className="hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Facebook className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </a>
            <a href="#" className="hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-gray-600 hover:text-gray-900" />
            </a>
          </div>
          {/* Copyright */}
          <div className="mb-20 text-xs text-gray-500 px-12 text-center -tracking-tighter">
            <p>
              © 2024 All Right Reserved. Sulio Art Trademarks, product names, logos and other marks and designs are trademarks of
            </p>
            <p>
              Sulio Art Co., Ltd or its subsidiaries and may be used without permission.
            </p>
            <p className="mt-2">service@sulio-art.com</p>
          </div>
        </footer>

        {/* Desktop Footer */}
        <footer className="flex-col items-center gap-6 w-full hidden md:flex">
          <div className="flex gap-6 justify-center items-center w-full">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3">
              <span className="font-semibold">Sulio Art</span>
              <span className="text-gray-600">Artist AI Chatbot</span>
            </div>
            {/* Social Links */}
            <div className="flex gap-8">
              <a href="#" className="hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6 text-gray-600 hover:text-gray-900" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <Facebook className="w-6 h-6 text-gray-600 hover:text-gray-900" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-gray-600 hover:text-gray-900" />
              </a>
            </div>
            {/* Navigation Links */}
            <nav className="flex items-center justify-center text-sm text-gray-600 font-bold gap-4 md:text-md">
              <a href="#" className="hover:text-black transition-colors">
                Contact Us
              </a>
              &#9679;
              <a href="#" className="hover:text-black transition-colors">
                Privacy Policy
              </a>
              &#9679;
              <a href="#" className="hover:text-black transition-colors">
                Terms and Conditions
              </a>
            </nav>
          </div>
          <div className="flex justify-center items-center w-full">
            <svg
              className="h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-60 -52 120 104"
            >
              <polygon
                points="50,0 25,43.3 -25,43.3 -50,0 -25,-43.3 25,-43.3"
                fill="#b49494"
              />
            </svg>
            <hr className="w-full h-[0.1rem] bg-[#b49494]"></hr>
          </div>
          {/* Copyright */}
          <div className="text-xs text-gray-500 text-center px-4">
            <p>
              © 2024 All Right Reserved. Sulio Art Trademarks, product names, logos and other marks and designs are trademarks of
            </p>
            <p>
              Sulio Art Co., Ltd or its subsidiaries and may be used without permission.
            </p>
            <p className="mt-2">service@sulio-art.com</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
