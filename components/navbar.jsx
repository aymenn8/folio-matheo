"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 font-archivo bg-black">
      <div className="container mx-auto">
        <div className="flex justify-between items-center md:hidden">
          <Link href="/" className="text-white text-2xl font-bold">
            MAT
          </Link>
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
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
            <Link
              href="/"
              className="text-white hover:opacity-70 transition-opacity text-2xl"
            >
              HOME
            </Link>
            <Link
              href="/projects"
              className="text-white hover:opacity-70 transition-opacity text-2xl"
            >
              PROJECTS
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link
              href="/photography"
              className="text-white hover:opacity-70 transition-opacity text-2xl"
            >
              PHOTOGRAPHY
            </Link>
            <Link
              href="/contact"
              className="text-white hover:opacity-70 transition-opacity text-2xl"
            >
              CONTACT
            </Link>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <Link
              href="/"
              className="block text-white hover:opacity-70 transition-opacity text-2xl py-2"
            >
              HOME
            </Link>
            <Link
              href="/projects"
              className="block text-white hover:opacity-70 transition-opacity text-2xl py-2"
            >
              PROJECTS
            </Link>
            <Link
              href="/photography"
              className="block text-white hover:opacity-70 transition-opacity text-2xl py-2"
            >
              PHOTOGRAPHY
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:opacity-70 transition-opacity text-2xl py-2"
            >
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
