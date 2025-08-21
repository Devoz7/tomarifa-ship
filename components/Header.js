"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ButtonSignin from "./ButtonSignin";
import config from "@/config";

const links = [
  {
    href: "/#comparaison",
    label: "Comparaison",
  },
  {
    href: "/#cryptos",
    label: "Cryptos",
  },
  {
    href: "/#support",
    label: "Support",
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
        <header className="absolute top-0 w-full z-50 bg-transparent">
      <nav className="flex items-center justify-between px-24 py-4 mx-auto max-w-7xl">
        {/* Logo à gauche */}
        <div className="flex-1">
          <Link
            className="flex items-center gap-2 shrink-0"
            href="/"
            title={`${config.appName} - Comparateur de vols crypto`}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-violet-400 rounded-lg flex items-center justify-center shadow-lg">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white transform rotate-12"
              >
                <path
                  d="M3 12L22 2L13 21L11 13L3 12Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 13L22 2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <span className="font-bold text-lg text-white drop-shadow-lg">
              CryptoFly
            </span>
          </Link>
        </div>

        {/* Menu hamburger à droite */}
        <div className="flex items-center gap-6">
          {/* Gift cards et My trips */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/gift-cards"
              className="text-white/90 hover:text-white transition-colors font-medium text-sm"
            >
              Gift cards
            </Link>
            <Link
              href="/my-trips"
              className="text-white/90 hover:text-white transition-colors font-medium text-sm"
            >
              My trips
            </Link>
          </div>
          
          {/* Menu hamburger */}
          <button
            type="button"
            className="p-2 text-white hover:bg-white/10 rounded-md transition-colors"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Ouvrir le menu</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Menu modal overlay comme Ulysse */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setIsOpen(false)}>
            <div 
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header du menu */}
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              {/* Contenu du menu */}
              <div className="p-6">
                <div className="space-y-4">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-violet-600 rounded-lg transition-colors font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t">
                  <ButtonSignin extraStyle="w-full bg-violet-600 hover:bg-violet-700 text-white border-0 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};export default Header;
