"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ButtonSignin from "./ButtonSignin";
import config from "@/config";

const links = [
  {
    href: "/#pricing",
    label: "Pricing",
  },
  {
    href: "/#testimonials",
    label: "Reviews",
  },
  {
    href: "/#faq",
    label: "FAQ",
  },
];

const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  // setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <header className="bg-gradient-to-r from-green-50 via-blue-50 to-teal-50 border-b border-green-100/50 backdrop-blur-sm relative overflow-hidden">
      {/* Éléments décoratifs du header */}
      <div className="absolute top-2 left-10 w-6 h-6 bg-green-200 rounded-full mix-blend-multiply filter blur-sm opacity-60 animate-float"></div>
      <div className="absolute top-1 right-20 w-4 h-4 bg-blue-200 rounded-full mix-blend-multiply filter blur-sm opacity-60 animate-pulse"></div>
      <div className="absolute bottom-1 left-1/2 w-5 h-5 bg-teal-200 rounded-full mix-blend-multiply filter blur-sm opacity-60 animate-float"></div>
      
      <nav
        className="container flex items-center justify-between px-8 py-4 mx-auto relative z-10"
        aria-label="Global"
      >
        {/* Your logo/name on large screens */}
        <div className="flex lg:flex-1">
          <Link
            className="flex items-center gap-3 shrink-0 group"
            href="/"
            title={`${config.appName} hompage`}
          >
            <div className="relative">
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 32 32" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transform group-hover:scale-110 transition-transform duration-200"
              >
                <circle cx="16" cy="16" r="14" fill="url(#gradient)" stroke="url(#borderGradient)" strokeWidth="1"/>
                <path d="M8 12c2-1 4-1 6 0s3 2 5 1c1-1 2-3 4-2" stroke="#10B981" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <path d="M6 20c3-1 5 0 7-1s4-2 6-1c1 1 2 2 4 1" stroke="#10B981" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <path d="M10 8c2 1 3 0 5 1s3 1 4 0" stroke="#10B981" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                <circle cx="12" cy="10" r="1.5" fill="#EF4444" opacity="0.8"/>
                <circle cx="20" cy="14" r="1" fill="#F59E0B" opacity="0.8"/>
                <circle cx="14" cy="22" r="1.2" fill="#EF4444" opacity="0.7"/>
                <circle cx="24" cy="20" r="0.8" fill="#F59E0B" opacity="0.9"/>
                <circle cx="16" cy="16" r="14" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6"/>
                    <stop offset="30%" stopColor="#1E40AF"/>
                    <stop offset="70%" stopColor="#059669"/>
                    <stop offset="100%" stopColor="#0D9488"/>
                  </linearGradient>
                  <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981"/>
                    <stop offset="100%" stopColor="#3B82F6"/>
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full animate-pulse"></div>
            </div>
            <span className="font-extrabold text-xl bg-gradient-to-r from-green-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              {config.appName}
            </span>
          </Link>
        </div>
        {/* Burger button to open menu on mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-base-content"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Your links on large screens */}
        <div className="hidden lg:flex lg:justify-center lg:gap-12 lg:items-center">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group"
              title={link.label}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-teal-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* CTA on large screens */}
        <div className="hidden lg:flex lg:justify-end lg:flex-1">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 p-[1px] rounded-lg">
            <div className="bg-white rounded-lg">
              <ButtonSignin extraStyle="btn-primary bg-gradient-to-r from-green-600 to-teal-600 border-none text-white hover:from-green-700 hover:to-teal-700" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`relative z-50 ${isOpen ? "" : "hidden"}`}>
        <div
          className={`fixed inset-y-0 right-0 z-10 w-full px-8 py-4 overflow-y-auto bg-gradient-to-br from-green-50 via-blue-50 to-teal-50 backdrop-blur-md sm:max-w-sm sm:ring-1 sm:ring-green-200/50 transform origin-right transition ease-in-out duration-300`}
        >
          {/* Your logo/name on small screens */}
          <div className="flex items-center justify-between">
            <Link
              className="flex items-center gap-3 shrink-0 group"
              title={`${config.appName} hompage`}
              href="/"
            >
              <div className="relative">
                <svg 
                  width="32" 
                  height="32" 
                  viewBox="0 0 32 32" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform group-hover:scale-110 transition-transform duration-200"
                >
                  <circle cx="16" cy="16" r="14" fill="url(#gradient-mobile)" stroke="url(#borderGradient-mobile)" strokeWidth="1"/>
                  <path d="M8 12c2-1 4-1 6 0s3 2 5 1c1-1 2-3 4-2" stroke="#10B981" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M6 20c3-1 5 0 7-1s4-2 6-1c1 1 2 2 4 1" stroke="#10B981" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  <path d="M10 8c2 1 3 0 5 1s3 1 4 0" stroke="#10B981" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                  <circle cx="12" cy="10" r="1.5" fill="#EF4444" opacity="0.8"/>
                  <circle cx="20" cy="14" r="1" fill="#F59E0B" opacity="0.8"/>
                  <circle cx="14" cy="22" r="1.2" fill="#EF4444" opacity="0.7"/>
                  <circle cx="24" cy="20" r="0.8" fill="#F59E0B" opacity="0.9"/>
                  <circle cx="16" cy="16" r="14" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2"/>
                  <defs>
                    <linearGradient id="gradient-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6"/>
                      <stop offset="30%" stopColor="#1E40AF"/>
                      <stop offset="70%" stopColor="#059669"/>
                      <stop offset="100%" stopColor="#0D9488"/>
                    </linearGradient>
                    <linearGradient id="borderGradient-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10B981"/>
                      <stop offset="100%" stopColor="#3B82F6"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="font-extrabold text-xl bg-gradient-to-r from-green-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                {config.appName}
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Your links on small screens */}
          <div className="flow-root mt-6">
            <div className="py-4">
              <div className="flex flex-col gap-y-4 items-start">
                {links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group text-lg"
                    title={link.label}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-teal-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="divider bg-gradient-to-r from-green-200 to-teal-200 h-px"></div>
            {/* Your CTA on small screens */}
            <div className="flex flex-col">
              <div className="bg-gradient-to-r from-green-600 to-teal-600 p-[1px] rounded-lg w-full">
                <div className="bg-white rounded-lg">
                  <ButtonSignin extraStyle="btn-primary bg-gradient-to-r from-green-600 to-teal-600 border-none text-white hover:from-green-700 hover:to-teal-700 w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
