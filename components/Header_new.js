"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";
import LoginSuccessModal from "./LoginSuccessModal";
import config from "@/config";

const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // setIsOpen(false) when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  // Afficher la modal de succès UNIQUEMENT lors d'une nouvelle connexion Google
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const hasAuthParams = urlParams.has("code") || urlParams.has("state");
    const justLoggedIn = sessionStorage.getItem("justLoggedIn") === "true";

    if (session && (hasAuthParams || justLoggedIn)) {
      setShowSuccessModal(true);
      sessionStorage.removeItem("justLoggedIn");
      if (hasAuthParams) {
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
      }
    }
  }, [session]);

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const handleGoogleSignIn = async () => {
    try {
      sessionStorage.setItem("justLoggedIn", "true");
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      console.error("Erreur lors de la connexion Google:", error);
      sessionStorage.removeItem("justLoggedIn");
      toast.error("Erreur lors de la connexion", {
        duration: 4000,
        style: {
          background: "#ef4444",
          color: "white",
          borderRadius: "12px",
        },
      });
    }
  };

  return (
    <header className="absolute top-0 w-full z-50 bg-transparent">
      <nav className="flex items-center justify-between px-24 py-4 mx-auto max-w-7xl">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            title={`${config.appName} homepage`}
          >
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
          <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-out"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Contenu du menu - Style Ulysse */}
              <div className="h-full flex flex-col bg-white">
                {/* Header du menu avec connexion/profil */}
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">Hello, traveler.</h2>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>

                  {session ? (
                    /* Utilisateur connecté */
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                        <Image
                          src={session.user.image}
                          alt={session.user.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white">
                          {session.user.name}
                        </div>
                        <div className="text-white/80 text-sm">
                          {session.user.email}
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Boutons de connexion */
                    <div className="space-y-3">
                      <button
                        onClick={handleGoogleSignIn}
                        className="w-full bg-white text-gray-800 rounded-xl py-3 px-4 font-medium flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                        Continue with Google
                      </button>
                      <div className="text-center">
                        <span className="text-white/80 text-sm">or</span>
                      </div>
                      <button className="w-full bg-transparent border border-white/30 text-white rounded-xl py-3 px-4 font-medium hover:bg-white/10 transition-colors">
                        Log in
                      </button>
                    </div>
                  )}

                  {!session && (
                    <div className="mt-4 text-center">
                      <span className="text-white/80 text-sm">
                        No account yet?{" "}
                      </span>
                      <button className="text-white font-medium underline hover:no-underline">
                        Create an account
                      </button>
                    </div>
                  )}
                </div>

                {/* Section Voyages */}
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Voyages
                  </h3>
                  <div className="space-y-3">
                    <button className="w-full bg-gray-50 hover:bg-gray-100 rounded-xl p-4 flex items-center gap-4 transition-colors group">
                      <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center group-hover:bg-violet-200 transition-colors">
                        <svg
                          className="w-6 h-6 text-violet-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-medium text-gray-800">
                          Réserver un vol
                        </div>
                        <div className="text-sm text-gray-500">
                          Trouvez les meilleurs prix
                        </div>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-gray-600"
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
                    </button>

                    <button className="w-full bg-gray-50 hover:bg-gray-100 rounded-xl p-4 flex items-center gap-4 transition-colors group">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-medium text-gray-800">
                          Mes voyages
                        </div>
                        <div className="text-sm text-gray-500">
                          Gérez vos réservations
                        </div>
                      </div>
                      <svg
                        className="w-5 h-5 text-gray-400 group-hover:text-gray-600"
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
                    </button>
                  </div>
                </div>

                {/* Section Nos services */}
                <div className="p-6 flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Nos services
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 flex flex-col items-center gap-2 transition-colors group">
                      <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                        <svg
                          className="w-5 h-5 text-yellow-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-800">
                        Crypto News
                      </span>
                    </button>

                    <button className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 flex flex-col items-center gap-2 transition-colors group">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-800">
                        Portefeuille
                      </span>
                    </button>

                    <button className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 flex flex-col items-center gap-2 transition-colors group">
                      <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                        <svg
                          className="w-5 h-5 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-800">
                        Parrainage
                      </span>
                    </button>

                    <Link
                      href="/help"
                      className="bg-gray-50 hover:bg-gray-100 rounded-xl p-4 flex flex-col items-center gap-2 transition-colors group"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors">
                        <svg
                          className="w-5 h-5 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-800">
                        Aide
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Sélecteur de langue en bas */}
                <div className="p-6 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Langue</span>
                    <button className="flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-violet-600 transition-colors">
                      Français
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
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Bouton de déconnexion si connecté */}
                {session && (
                  <div className="p-6 border-t border-gray-100">
                    <button
                      onClick={() => {
                        toast.success("Déconnexion réussie ! À bientôt ✈️", {
                          duration: 3000,
                          style: {
                            background:
                              "linear-gradient(135deg, #6b73ff 0%, #000dff 100%)",
                            color: "white",
                            borderRadius: "12px",
                          },
                        });
                        signOut({ callbackUrl: "/" });
                      }}
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl py-3 font-medium transition-colors"
                    >
                      Se déconnecter
                    </button>
                  </div>
                )}
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
