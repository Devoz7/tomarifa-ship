"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/hooks/useTranslation";

const CryptoSelector = ({ onCryptoSelect, selectedCrypto = null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language];

  // Liste des cryptomonnaies disponibles
  const cryptocurrencies = [
    {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      icon: "₿",
      color: "text-orange-600",
    },
    {
      id: "solana",
      name: "Solana",
      symbol: "SOL",
      icon: "◎",
      color: "text-purple-600",
    },
    {
      id: "ethereum",
      name: "Ethereum",
      symbol: "ETH",
      icon: "Ξ",
      color: "text-blue-600",
    },
    {
      id: "usdc",
      name: "USD Coin",
      symbol: "USDC",
      icon: "$",
      color: "text-blue-500",
    },
    {
      id: "usdt",
      name: "Tether",
      symbol: "USDT",
      icon: "₮",
      color: "text-green-600",
    },
    {
      id: "xrp",
      name: "XRP",
      symbol: "XRP",
      icon: "◈",
      color: "text-gray-600",
    },
    {
      id: "bnb",
      name: "BNB",
      symbol: "BNB",
      icon: "⬢",
      color: "text-yellow-600",
    },
  ];

  // Cryptomonnaie par défaut (Bitcoin)
  const defaultCrypto = cryptocurrencies[0];
  const currentCrypto = selectedCrypto || defaultCrypto;

  // Fermer le dropdown quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCryptoClick = (crypto) => {
    onCryptoSelect(crypto);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-50 border border-gray-200 rounded-lg p-3 cursor-pointer hover:border-violet-400 transition-all h-12 flex items-center"
      >
        <div className="flex-1">
          <div className="text-gray-800 font-medium leading-tight flex items-center gap-2 text-sm">
            <span className={`${currentCrypto.color} font-bold`}>
              {currentCrypto.icon}
            </span>
            <span>{currentCrypto.name}</span>
          </div>
        </div>
        <svg
          className={`w-4 h-4 text-violet-600 ml-2 transition-transform ${
            isOpen ? "rotate-180" : ""
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
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-1/2 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden"
          style={{
            width: "280px",
            transform: "translateX(-50%)",
            zIndex: 9999,
          }}
        >
          {/* Header */}
          <div className="bg-violet-50 px-4 py-3 border-b border-violet-100">
            <div className="text-sm text-violet-700 font-medium">
              💳 {t.selectCrypto || "Sélectionnez votre cryptomonnaie"}
            </div>
          </div>

          {/* Liste des cryptomonnaies */}
          <div className="max-h-64 overflow-y-auto">
            {cryptocurrencies.map((crypto) => (
              <div
                key={crypto.id}
                onClick={() => handleCryptoClick(crypto)}
                className={`px-4 py-3 cursor-pointer transition-colors flex items-center gap-3 ${
                  currentCrypto.id === crypto.id
                    ? "bg-violet-50 border-l-4 border-violet-500"
                    : "hover:bg-gray-50"
                }`}
              >
                <span className={`${crypto.color} font-bold text-lg`}>
                  {crypto.icon}
                </span>
                <div className="flex-1">
                  <div className="font-medium text-gray-800">{crypto.name}</div>
                  <div className="text-sm text-gray-500">{crypto.symbol}</div>
                </div>
                {currentCrypto.id === crypto.id && (
                  <svg
                    className="w-5 h-5 text-violet-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 text-center">
            <div className="text-xs text-gray-500">
              💡 {t.cryptoInfo || "Payez avec votre crypto préférée"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CryptoSelector;
