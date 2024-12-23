"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar({ isDarkMode = true }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navClasses = `fixed top-0 left-0 right-0 z-50 px-4 py-4 font-archivo ${
    isDarkMode ? "bg-black" : "bg-white"
  }`;

  const linkClasses = `hover:opacity-70 transition-opacity text-2xl ${
    isDarkMode ? "text-white" : "text-black"
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center md:hidden">
          <Link href="/" className={`${linkClasses} font-bold`}>
            MAT
          </Link>
          <button className={linkClasses} onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden md:flex justify-between items-center">
          <div className="flex space-x-8">
            <Link href="/" className={linkClasses}>
              HOME
            </Link>
            <Link href="/projects" className={linkClasses}>
              PROJECTS
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link href="/photography" className={linkClasses}>
              PHOTOGRAPHY
            </Link>
            <Link href="/contact" className={linkClasses}>
              CONTACT
            </Link>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <Link href="/" className={`block ${linkClasses} py-2`}>
              HOME
            </Link>
            <Link href="/projects" className={`block ${linkClasses} py-2`}>
              PROJECTS
            </Link>
            <Link href="/photography" className={`block ${linkClasses} py-2`}>
              PHOTOGRAPHY
            </Link>
            <Link href="/contact" className={`block ${linkClasses} py-2`}>
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
