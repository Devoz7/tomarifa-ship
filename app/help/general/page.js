"use client";

import { useState } from "react";
import Link from "next/link";

export default function GeneralHelpPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Qu'est-ce que CryptoFly ?",
      answer:
        "CryptoFly est une plateforme de réservation de vols qui vous permet de payer avec vos cryptomonnaies préférées. Nous offrons les meilleurs prix du marché avec un service client de qualité.",
    },
    {
      id: 2,
      question: "Comment fonctionne la réservation ?",
      answer:
        "1. Recherchez votre vol avec nos filtres\n2. Sélectionnez votre cryptomonnaie\n3. Confirmez votre réservation\n4. Recevez votre billet par email",
    },
    {
      id: 3,
      question: "Vos prix sont-ils compétitifs ?",
      answer:
        "Oui ! Nous négocions directement avec les compagnies aériennes pour vous proposer les meilleurs tarifs. De plus, payer en crypto peut vous faire économiser sur les frais de change.",
    },
    {
      id: 4,
      question: "Dans quels pays opérez-vous ?",
      answer:
        "CryptoFly opère dans plus de 190 pays à travers le monde. Nous travaillons avec plus de 500 compagnies aériennes pour vous offrir le maximum de destinations.",
    },
    {
      id: 5,
      question: "Comment contacter le service client ?",
      answer:
        "Vous pouvez nous contacter 24h/24 et 7j/7 via notre chat en direct, par email à support@cryptofly.com ou par téléphone au +33 1 23 45 67 89.",
    },
    {
      id: 6,
      question: "CryptoFly est-il sécurisé ?",
      answer:
        "Absolument ! Nous utilisons les dernières technologies de sécurité, y compris le cryptage SSL et l'authentification à deux facteurs. Vos données personnelles et vos cryptomonnaies sont protégées.",
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-cyan-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-white/80">
              <Link href="/help" className="hover:text-white transition-colors">
                Centre d&apos;aide
              </Link>
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
              <span className="text-white">Questions générales</span>
            </div>
          </nav>

          {/* Titre de la page */}
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">✈️</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Questions générales</h1>
            <p className="text-xl text-white/80">
              Questions générales sur le fonctionnement de CryptoFly
            </p>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Articles/FAQ */}
        <div className="space-y-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openFaq === faq.id ? (
                    <svg
                      className="w-5 h-5 text-indigo-600"
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
                  ) : (
                    <svg
                      className="w-5 h-5 text-gray-400"
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
                  )}
                </div>
              </button>

              {openFaq === faq.id && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-4 text-gray-600 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Section contact */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-white"
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
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Vous ne trouvez pas votre réponse ?
          </h3>
          <p className="text-gray-600 mb-6">
            Notre équipe support est là pour vous aider 24h/24 et 7j/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:support@cryptofly.com"
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors font-semibold"
            >
              Nous contacter
            </Link>
            <Link
              href="/help"
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-200 transition-colors font-semibold"
            >
              Retour au centre d&apos;aide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
