"use client";

import { useState } from "react";
import Link from "next/link";

export default function BookingHelpPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Comment réserver un vol ?",
      answer:
        "1. Entrez votre destination et vos dates\n2. Comparez les vols disponibles\n3. Sélectionnez votre vol préféré\n4. Remplissez vos informations de voyage\n5. Choisissez votre mode de paiement\n6. Confirmez votre réservation",
    },
    {
      id: 2,
      question: "Puis-je modifier ma réservation ?",
      answer:
        "Oui, vous pouvez modifier votre réservation selon les conditions de la compagnie aérienne. Connectez-vous à votre compte, allez dans 'Mes voyages' et sélectionnez 'Modifier'. Des frais peuvent s'appliquer.",
    },
    {
      id: 3,
      question: "Comment annuler un vol ?",
      answer:
        "Pour annuler votre vol :\n1. Connectez-vous à votre compte\n2. Allez dans 'Mes voyages'\n3. Sélectionnez le vol à annuler\n4. Cliquez sur 'Annuler'\n5. Suivez les instructions\n\nLes conditions d'annulation dépendent du tarif choisi.",
    },
    {
      id: 4,
      question: "Que faire en cas de retard ou d'annulation ?",
      answer:
        "En cas de retard ou d'annulation :\n- La compagnie aérienne vous informera directement\n- Suivez votre vol en temps réel dans votre espace client\n- Contactez notre service client pour assistance\n- Vous pourriez avoir droit à une compensation selon la réglementation",
    },
    {
      id: 5,
      question: "Comment obtenir ma carte d'embarquement ?",
      answer:
        "Vous pouvez obtenir votre carte d'embarquement de plusieurs façons :\n- En ligne 24h avant le départ sur le site de la compagnie\n- Via l'application mobile de la compagnie\n- Aux bornes d'enregistrement à l'aéroport\n- Au comptoir d'enregistrement",
    },
    {
      id: 6,
      question: "Puis-je choisir mon siège ?",
      answer:
        "La sélection de siège dépend de votre tarif et de la compagnie aérienne. Certains tarifs incluent la sélection gratuite, d'autres facturent des frais supplémentaires. Vous pouvez généralement choisir votre siège lors de la réservation ou ultérieurement.",
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-emerald-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-12">
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
              <span className="text-white">Réservations</span>
            </div>
          </nav>

          {/* Titre de la page */}
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">📅</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Réservations</h1>
            <p className="text-xl text-white/80">
              Réserver, modifier, annuler un vol
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
                      className="w-5 h-5 text-green-600"
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
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Besoin d&apos;aide avec votre réservation ?
          </h3>
          <p className="text-gray-600 mb-6">
            Notre équipe réservation vous accompagne dans toutes vos démarches
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:booking@cryptofly.com"
              className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors font-semibold"
            >
              Support réservation
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
