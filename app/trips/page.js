"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/hooks/useTranslation";
import Link from "next/link";

export default function TripsPage() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const { data: session } = useSession();
  const { language } = useLanguage();
  const t = translations[language];

  const tabs = [
    { id: "upcoming", label: language === "fr" ? "À venir" : "Upcoming" },
    { id: "past", label: language === "fr" ? "Passés" : "Past" },
    { id: "cancelled", label: language === "fr" ? "Annulés" : "Cancelled" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-violet-600 rounded-xl flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 12L22 2L13 21L11 13L3 12Z" />
                </svg>
              </div>
              <span className="font-bold text-xl text-gray-800">CryptoFly</span>
            </Link>

            {session?.user && (
              <div className="flex items-center gap-4">
                <Link
                  href="/"
                  className="bg-violet-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium hover:bg-violet-700 transition-colors"
                >
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
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  {language === "fr" ? "Retour à l'accueil" : "Back to home"}
                </Link>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    {t.hello} {session.user.name?.split(" ")[0]}
                  </span>
                  <div className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-violet-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 12L22 2L13 21L11 13L3 12Z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            {language === "fr" ? "Mes voyages" : "My trips"}
          </h1>

          {/* Tabs */}
          <div className="flex gap-1 mb-8 bg-gray-100 p-1 rounded-lg w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-white text-violet-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Empty State */}
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {language === "fr" ? "Aucun voyage à venir" : "No upcoming trips"}
            </h3>

            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              {language === "fr"
                ? "Vous n'avez pas encore de voyage planifié. Réservez votre prochain vol et commencez votre aventure !"
                : "You don't have any trips planned yet. Book your next flight and start your adventure!"}
            </p>

            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-violet-700 transition-colors"
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
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              {language === "fr" ? "Réserver un vol" : "Book a flight"}
            </Link>
          </div>

          {/* Info Section */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 12L22 2L13 21L11 13L3 12Z" />
                </svg>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {language === "fr"
                    ? "Tous vos billets d'avion en une seule app."
                    : "All your flight tickets in one app."}
                </h3>

                <p className="text-gray-600 mb-6">
                  {language === "fr"
                    ? "Un service client à portée de poche."
                    : "Customer service at your fingertips."}
                </p>

                <p className="text-sm text-gray-500 mb-6">
                  {language === "fr"
                    ? "Notre support client intégré à notre équipe en France est noté 4.8/5, la meilleure note du secteur."
                    : "Our customer support integrated with our team in France is rated 4.8/5, the best rating in the industry."}
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium hover:bg-gray-800 transition-colors">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    App Store
                  </button>

                  <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium hover:bg-gray-800 transition-colors">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    Google Play
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
