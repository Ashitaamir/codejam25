"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function FlagoNavbar() {
  const pathname = usePathname();
  
  const navItems = [
    { name: "Home", link: "/home" },
    { name: "About", link: "/about" },
    { name: "Contact Us", link: "/contact_us" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Check if a link is active
  const isActive = (link: string) => {
    return pathname === link;
  };

  return (
    <div className="relative w-full bg-white">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-center py-4 px-6">
        {/* Gradient Border Wrapper */}
        <div 
          className="rounded-full p-[2px] w-full"
          style={{
            background: 'linear-gradient(to right, #60a5fa, #34d399)',
            maxWidth: '95%',
            minWidth: '1200px',
          }}
        >
          <div className="
            relative w-full
            flex items-center justify-between
            bg-white rounded-full
            px-12 py-4
          ">
          {/* Left Section - Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              {/* Geometric Icon/Crystal */}
              <div className="relative w-8 h-8">
                <div className="
                  absolute inset-0
                  bg-gradient-to-br from-purple-400 via-pink-400 to-sky-400
                  rounded-lg
                  transform rotate-45
                  opacity-80
                "></div>
                <div className="
                  absolute inset-0
                  bg-gradient-to-tr from-sky-400 via-pink-400 to-purple-400
                  rounded-lg
                  transform -rotate-45
                  opacity-60
                "></div>
              </div>
              
              {/* Logo Text */}
              <div className="flex flex-col">
                <span className="text-base font-bold text-gray-900 leading-tight">Flago</span>
              </div>
            </div>
            
            {/* Vertical Separator */}
            <div className="h-6 w-px bg-gray-300"></div>
          </div>

          {/* Center Section - Navigation Links */}
          <div className="flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item, idx) => {
              const active = isActive(item.link);
              return (
                <Link
                  key={`nav-link-${idx}`}
                  href={item.link}
                  className="
                    relative
                    text-sm font-medium text-gray-900
                    hover:text-gray-700
                    transition-colors
                    whitespace-nowrap
                    px-3 py-1.5
                  "
                >
                  {/* Active Indicator - Diamond Shape */}
                  {active && (
                    <div className="
                      absolute inset-0
                      bg-gradient-to-br from-purple-200/60 via-pink-200/60 to-purple-200/60
                      rounded-md
                      transform rotate-45
                      -z-10
                    "></div>
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Section - Get Started Button */}
          <div className="flex items-center">
            <Link
              href="/form"
              className="
                inline-flex items-center gap-2
                px-5 py-2.5
                rounded-lg
                bg-black hover:bg-gray-800
                text-white
                text-sm font-medium
                transition-colors
              "
            >
              Get Started
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </Link>
          </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center justify-between px-4 py-4 bg-white border-b border-gray-200">
        <div className="flex items-center space-x-3">
          {/* Mobile Logo */}
          <div className="relative w-6 h-6">
            <div className="
              absolute inset-0
              bg-gradient-to-br from-purple-400 via-pink-400 to-sky-400
              rounded-lg
              transform rotate-45
              opacity-80
            "></div>
          </div>
          <span className="text-lg font-bold text-gray-900">Flago</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-gray-900"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-900 font-medium py-2"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/form"
                className="
                  inline-flex items-center justify-center gap-2
                  w-full
                  px-5 py-2.5
                  rounded-lg
                  bg-black
                  text-white
                  text-sm font-medium
                "
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
