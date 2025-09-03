"use client";

import { useState } from "react";
import Link from "next/link";

export default function CryptoPaymentHelpPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Quelles cryptomonnaies acceptez-vous ?",
      answer:
        "Nous acceptons Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Bitcoin Cash (BCH), Ripple (XRP), et plus de 50 autres cryptomonnaies populaires.",
    },
    {
      id: 2,
      question: "Comment payer avec des cryptomonnaies ?",
      answer:
        "1. Sélectionnez votre vol\n2. Choisissez 'Payer en crypto' au checkout\n3. Sélectionnez votre cryptomonnaie\n4. Envoyez le montant exact à l'adresse fournie\n5. Votre réservation est confirmée dès réception",
    },
    {
      id: 3,
      question: "Y a-t-il des frais supplémentaires ?",
      answer:
        "CryptoFly ne facture aucun frais supplémentaire pour les paiements crypto. Vous payez uniquement les frais de réseau blockchain standard.",
    },
    {
      id: 4,
      question: "Combien de temps prend la confirmation ?",
      answer:
        "La plupart des paiements sont confirmés en 10-30 minutes. Bitcoin peut prendre jusqu'à 1 heure, tandis qu'Ethereum et Litecoin sont généralement plus rapides.",
    },
    {
      id: 5,
      question: "Que se passe-t-il si j'envoie le mauvais montant ?",
      answer:
        "Si vous envoyez trop peu, vous pouvez compléter le paiement. Si vous envoyez trop, nous vous rembourserons automatiquement la différence dans les 24h.",
    },
    {
      id: 6,
      question: "Puis-je obtenir un remboursement en crypto ?",
      answer:
        "Oui ! Les remboursements sont traités dans la même cryptomonnaie que le paiement original, généralement sous 2-5 jours ouvrables.",
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-yellow-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-12">
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
              <span className="text-white">Paiement crypto</span>
            </div>
          </nav>

          {/* Titre de la page */}
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">₿</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Paiement crypto</h1>
            <p className="text-xl text-white/80">
              Toutes les réponses et astuces pour payer en crypto
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
                      className="w-5 h-5 text-orange-600"
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
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
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
            Problème avec votre paiement crypto ?
          </h3>
          <p className="text-gray-600 mb-6">
            Notre équipe technique spécialisée crypto vous aide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:crypto@cryptofly.com"
              className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition-colors font-semibold"
            >
              Support crypto
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
