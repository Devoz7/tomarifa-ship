"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import LoginSuccessModal from "./LoginSuccessModal";
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
  const { data: session } = useSession();
  const [hasShownSuccessToast, setHasShownSuccessToast] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  // Afficher la modal de succès quand l'utilisateur se connecte
  useEffect(() => {
    if (session && !hasShownSuccessToast) {
      // Affichage instantané
      setShowSuccessModal(true);
      setHasShownSuccessToast(true);
    }
  }, [session, hasShownSuccessToast]);

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

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

        {/* Menu modal overlay avec design professionnel */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
            <div 
              className="fixed top-0 right-0 h-full w-96 bg-gradient-to-br from-white via-gray-50 to-violet-50 shadow-2xl transform transition-transform duration-300 ease-out"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header du menu avec gradient */}
              <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-white"
                      >
                        <path
                          d="M3 12L22 2L13 21L11 13L3 12Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h2 className="text-xl font-bold text-white">CryptoFly</h2>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
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
                      className="text-white"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Contenu du menu */}
              <div className="p-6 flex flex-col h-full">
                {/* Section de connexion/utilisateur Google en haut */}
                <div className="mb-8">
                  {session ? (
                    // Utilisateur connecté
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-4 border-violet-200 shadow-lg">
                        <Image 
                          src={session.user.image} 
                          alt={session.user.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">Bonjour {session.user.name}!</h3>
                      <p className="text-sm text-gray-600 mb-4">{session.user.email}</p>
                      <button
                        onClick={() => {
                          toast.success("Déconnexion réussie ! À bientôt ✈️", {
                            duration: 3000,
                            style: {
                              background: 'linear-gradient(135deg, #6b73ff 0%, #000dff 100%)',
                              color: 'white',
                              borderRadius: '12px',
                            },
                          });
                          signOut({ callbackUrl: '/' });
                        }}
                        className="w-full bg-gradient-to-r from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 text-gray-700 border border-gray-300 hover:border-gray-400 rounded-xl py-3 font-medium transition-all duration-300"
                      >
                        Se déconnecter
                      </button>
                    </div>
                  ) : (
                    // Utilisateur non connecté
                    <div>
                      <div className="text-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Commencer votre voyage</h3>
                        <p className="text-sm text-gray-600">Connectez-vous pour accéder à vos réservations</p>
                      </div>
                      <button
                        onClick={() => {
                          signIn('google', { callbackUrl: '/' });
                        }}
                        className="w-full bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-white text-gray-700 border-2 border-violet-200 hover:border-violet-300 rounded-xl flex items-center justify-center gap-3 py-4 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" className="group-hover:scale-110 transition-transform">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Continuer avec Google
                      </button>
                    </div>
                  )}
                </div>
                
                {/* Navigation Links */}
                <div className="flex-1">
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-2">Navigation</div>
                    {links.map((link, index) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="group flex items-center gap-4 py-4 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-violet-50 hover:to-purple-50 hover:text-violet-700 rounded-xl transition-all duration-300 font-medium border border-transparent hover:border-violet-100"
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="w-10 h-10 bg-gradient-to-br from-violet-100 to-purple-100 group-hover:from-violet-200 group-hover:to-purple-200 rounded-lg flex items-center justify-center transition-all duration-300">
                          {index === 0 && (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-violet-600">
                              <path d="M9 11H7l3-8 3 8h-2l1 7-3-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                          {index === 1 && (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-violet-600">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                              <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                          )}
                          {index === 2 && (
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-violet-600">
                              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">{link.label}</div>
                          <div className="text-xs text-gray-500 group-hover:text-violet-600 transition-colors">
                            {index === 0 && "Comparez les prix"}
                            {index === 1 && "Paiements crypto"}
                            {index === 2 && "Aide et contact"}
                          </div>
                        </div>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-gray-400 group-hover:text-violet-500 transition-colors">
                          <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Footer du menu */}
                <div className="mt-8 pt-6 border-t border-violet-100">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full"></div>
                    <span>Powered by blockchain technology</span>
                    <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Modal de succès de connexion */}
      <LoginSuccessModal 
        isOpen={showSuccessModal}
        userName={session?.user?.name}
        onClose={handleCloseSuccessModal}
      />
    </header>
  );
};

export default Header;
