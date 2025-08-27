"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/hooks/useTranslation";
import Link from "next/link";

export default function HelpPage() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openFaq, setOpenFaq] = useState(null);
  const { data: session } = useSession();
  const { language } = useLanguage();
  const t = translations[language];

  const categories = [
    {
      id: "general",
      label: language === "fr" ? "Questions générales" : "General questions",
      icon: "❓",
    },
    {
      id: "booking",
      label: language === "fr" ? "Réservation" : "Booking",
      icon: "✈️",
    },
    {
      id: "crypto",
      label: language === "fr" ? "Paiement crypto" : "Crypto payment",
      icon: "₿",
    },
    {
      id: "account",
      label: language === "fr" ? "Mon compte" : "My account",
      icon: "👤",
    },
  ];

  const faqData = {
    general: [
      {
        question:
          language === "fr"
            ? "Qu'est-ce que CryptoFly ?"
            : "What is CryptoFly?",
        answer:
          language === "fr"
            ? "CryptoFly est une plateforme de réservation de vols qui vous permet de payer avec vos cryptomonnaies préférées. Nous offrons les meilleurs prix du marché avec un service client de qualité."
            : "CryptoFly is a flight booking platform that allows you to pay with your favorite cryptocurrencies. We offer the best market prices with quality customer service.",
      },
      {
        question:
          language === "fr"
            ? "Comment fonctionne la réservation ?"
            : "How does booking work?",
        answer:
          language === "fr"
            ? "1. Recherchez votre vol avec nos filtres\n2. Sélectionnez votre cryptomonnaie\n3. Confirmez votre réservation\n4. Recevez votre billet par email"
            : "1. Search for your flight with our filters\n2. Select your cryptocurrency\n3. Confirm your booking\n4. Receive your ticket by email",
      },
      {
        question:
          language === "fr"
            ? "Vos prix sont-ils compétitifs ?"
            : "Are your prices competitive?",
        answer:
          language === "fr"
            ? "Oui ! Nous négocions directement avec les compagnies aériennes pour vous proposer les meilleurs tarifs. De plus, payer en crypto peut vous faire économiser sur les frais de change."
            : "Yes! We negotiate directly with airlines to offer you the best rates. Plus, paying in crypto can save you on exchange fees.",
      },
    ],
    booking: [
      {
        question:
          language === "fr"
            ? "Puis-je modifier ma réservation ?"
            : "Can I modify my booking?",
        answer:
          language === "fr"
            ? "Oui, vous pouvez modifier votre réservation selon les conditions de la compagnie aérienne. Des frais peuvent s'appliquer. Contactez notre service client pour plus d'informations."
            : "Yes, you can modify your booking according to airline conditions. Fees may apply. Contact our customer service for more information.",
      },
      {
        question:
          language === "fr"
            ? "Comment annuler un vol ?"
            : "How to cancel a flight?",
        answer:
          language === "fr"
            ? 'Connectez-vous à votre compte, allez dans "Mes voyages" et sélectionnez le vol à annuler. Les conditions d\'annulation dépendent du tarif choisi.'
            : 'Log into your account, go to "My trips" and select the flight to cancel. Cancellation conditions depend on the chosen fare.',
      },
      {
        question:
          language === "fr"
            ? "Que faire en cas de retard ?"
            : "What to do in case of delay?",
        answer:
          language === "fr"
            ? "En cas de retard, la compagnie aérienne vous informera directement. Vous pouvez aussi suivre votre vol en temps réel dans votre espace client CryptoFly."
            : "In case of delay, the airline will inform you directly. You can also track your flight in real-time in your CryptoFly customer area.",
      },
    ],
    crypto: [
      {
        question:
          language === "fr"
            ? "Quelles cryptos acceptez-vous ?"
            : "Which cryptos do you accept?",
        answer:
          language === "fr"
            ? "Nous acceptons Bitcoin (BTC), Ethereum (ETH), Solana (SOL), USDC, USDT, XRP et BNB. D'autres cryptomonnaies seront ajoutées prochainement."
            : "We accept Bitcoin (BTC), Ethereum (ETH), Solana (SOL), USDC, USDT, XRP and BNB. More cryptocurrencies will be added soon.",
      },
      {
        question:
          language === "fr"
            ? "Le paiement crypto est-il sécurisé ?"
            : "Is crypto payment secure?",
        answer:
          language === "fr"
            ? "Absolument ! Nous utilisons des protocoles de sécurité de niveau bancaire et des portefeuilles multi-signatures pour protéger vos transactions."
            : "Absolutely! We use bank-level security protocols and multi-signature wallets to protect your transactions.",
      },
      {
        question:
          language === "fr"
            ? "Combien de temps prend la confirmation ?"
            : "How long does confirmation take?",
        answer:
          language === "fr"
            ? "La confirmation dépend de la blockchain utilisée. Bitcoin: 10-60 min, Ethereum: 2-15 min, Solana: quelques secondes. Votre billet est émis dès confirmation."
            : "Confirmation depends on the blockchain used. Bitcoin: 10-60 min, Ethereum: 2-15 min, Solana: a few seconds. Your ticket is issued upon confirmation.",
      },
    ],
    account: [
      {
        question:
          language === "fr"
            ? "Comment créer un compte ?"
            : "How to create an account?",
        answer:
          language === "fr"
            ? 'Cliquez sur le menu hamburger et sélectionnez "Continuer avec Google" ou "Créer un compte". Vous pouvez aussi vous inscrire lors de votre première réservation.'
            : 'Click on the hamburger menu and select "Continue with Google" or "Create account". You can also sign up during your first booking.',
      },
      {
        question:
          language === "fr"
            ? "J'ai oublié mon mot de passe"
            : "I forgot my password",
        answer:
          language === "fr"
            ? 'Cliquez sur "Mot de passe oublié" sur la page de connexion. Vous recevrez un email avec les instructions pour réinitialiser votre mot de passe.'
            : 'Click on "Forgot password" on the login page. You will receive an email with instructions to reset your password.',
      },
      {
        question:
          language === "fr"
            ? "Comment supprimer mon compte ?"
            : "How to delete my account?",
        answer:
          language === "fr"
            ? "Contactez notre service client à support@cryptofly.com avec votre demande de suppression. Nous traiterons votre demande dans les 48h selon le RGPD."
            : "Contact our customer service at support@cryptofly.com with your deletion request. We will process your request within 48h according to GDPR.",
      },
    ],
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {language === "fr" ? "Centre d'aide" : "Help Center"}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === "fr"
                ? "Trouvez rapidement les réponses à vos questions ou contactez notre équipe support."
                : "Quickly find answers to your questions or contact our support team."}
            </p>
          </div>

          {/* Quick Contact */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-sm text-gray-600 mb-3">
                support@cryptofly.com
              </p>
              <p className="text-xs text-gray-500">
                {language === "fr" ? "Réponse sous 24h" : "Response within 24h"}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Chat Live</h3>
              <p className="text-sm text-gray-600 mb-3">
                {language === "fr"
                  ? "Assistance instantanée"
                  : "Instant assistance"}
              </p>
              <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition-colors">
                {language === "fr" ? "Démarrer le chat" : "Start chat"}
              </button>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border text-center">
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mx-auto mb-4">
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">
                {language === "fr" ? "Téléphone" : "Phone"}
              </h3>
              <p className="text-sm text-gray-600 mb-3">+33 1 23 45 67 89</p>
              <p className="text-xs text-gray-500">
                {language === "fr" ? "Lun-Ven 9h-18h" : "Mon-Fri 9am-6pm"}
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            {/* Categories */}
            <div className="flex overflow-x-auto bg-gray-50 border-b">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === category.id
                      ? "bg-white text-violet-600 border-b-2 border-violet-600"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <span>{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>

            {/* FAQ Content */}
            <div className="p-6">
              <div className="space-y-4">
                {faqData[activeCategory]?.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="font-medium text-gray-800">
                        {faq.question}
                      </h3>
                      <svg
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
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
                    {openFaq === index && (
                      <div className="px-6 pb-4">
                        <div className="text-gray-600 whitespace-pre-line">
                          {faq.answer}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm border">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {language === "fr"
                ? "Vous ne trouvez pas votre réponse ?"
                : "Can't find your answer?"}
            </h2>
            <p className="text-gray-600 mb-8">
              {language === "fr"
                ? "Notre équipe support est là pour vous aider. Envoyez-nous votre question et nous vous répondrons rapidement."
                : "Our support team is here to help. Send us your question and we'll get back to you quickly."}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === "fr" ? "Votre nom" : "Your name"}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder={
                    language === "fr" ? "Votre nom complet" : "Your full name"
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {language === "fr" ? "Votre message" : "Your message"}
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none"
                  placeholder={
                    language === "fr"
                      ? "Décrivez votre problème ou votre question..."
                      : "Describe your problem or question..."
                  }
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="bg-violet-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-violet-700 transition-colors">
                  {language === "fr" ? "Envoyer le message" : "Send message"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
