"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function FlightsPage() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");
  const [sortBy, setSortBy] = useState("price");
  const searchParams = useSearchParams();

  // Paramètres de recherche depuis l'URL
  const searchData = useMemo(
    () => ({
      from: searchParams.get("from"),
      to: searchParams.get("to"),
      departDate: searchParams.get("departDate"),
      returnDate: searchParams.get("returnDate"),
      adults: searchParams.get("adults") || 1,
    }),
    [searchParams]
  );

  const searchFlights = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/flights/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(searchData),
      });

      const data = await response.json();
      if (data.success) {
        setFlights(data.flights);
      }
    } catch (error) {
      console.error("Erreur recherche:", error);
    } finally {
      setLoading(false);
    }
  }, [searchData]);

  useEffect(() => {
    if (searchData.from && searchData.to && searchData.departDate) {
      searchFlights();
    }
  }, [searchData.from, searchData.to, searchData.departDate, searchFlights]);

  const sortedFlights = flights.sort((a, b) => {
    switch (sortBy) {
      case "price":
        return a.price - b.price;
      case "duration":
        return (a.duration || 999) - (b.duration || 999);
      case "stops":
        return a.stops - b.stops;
      default:
        return 0;
    }
  });

  const getCryptoPrice = (flight) => {
    if (!flight.cryptoPrices || !flight.cryptoPrices[selectedCrypto]) {
      return { amount: "...", symbol: "BTC" };
    }
    return flight.cryptoPrices[selectedCrypto];
  };

  // Fonction pour tracker les clics d'affiliation (IMPORTANT pour les revenus)
  const handleBookingClick = (flight) => {
    // Analytics pour tracking des conversions
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "flight_booking_click", {
        provider: flight.provider,
        price: flight.price,
        crypto: selectedCrypto,
        affiliate: flight.affiliate,
      });
    }

    // Ouvrir dans un nouvel onglet pour garder l'utilisateur sur ton site
    window.open(flight.bookingUrl, "_blank");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-cyan-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">
            Recherche des meilleurs prix en crypto...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-cyan-100">
      {/* Header avec résumé de recherche */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-indigo-600 hover:text-indigo-700">
                ← Nouvelle recherche
              </Link>
              <div className="text-gray-600">
                {searchData.from} → {searchData.to} • {searchData.departDate}
                {searchData.returnDate && ` → ${searchData.returnDate}`}
              </div>
            </div>
            <div className="text-sm text-gray-500">
              {flights.length} vols trouvés
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar avec filtres */}
          <div className="w-64 space-y-6">
            {/* Sélecteur crypto */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-4">
                💰 Paiement crypto
              </h3>
              <select
                value={selectedCrypto}
                onChange={(e) => setSelectedCrypto(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="bitcoin">Bitcoin (BTC)</option>
                <option value="ethereum">Ethereum (ETH)</option>
                <option value="tether">Tether (USDT)</option>
                <option value="binancecoin">BNB</option>
                <option value="cardano">Cardano (ADA)</option>
                <option value="solana">Solana (SOL)</option>
              </select>
            </div>

            {/* Tri */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-4">📊 Trier par</h3>
              <div className="space-y-2">
                {[
                  { value: "price", label: "Prix (croissant)" },
                  { value: "duration", label: "Durée" },
                  { value: "stops", label: "Escales" },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="sort"
                      value={option.value}
                      checked={sortBy === option.value}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="text-indigo-600"
                    />
                    <span className="text-sm text-gray-700">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Pub espace */}
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl p-6 text-center">
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="font-semibold text-gray-800 mb-2">Publicité</h4>
              <p className="text-xs text-gray-600 mb-3">
                Espace réservé pour pubs crypto/voyage
              </p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors">
                En savoir plus
              </button>
            </div>
          </div>

          {/* Liste des vols */}
          <div className="flex-1 space-y-4">
            {sortedFlights.length === 0 ? (
              <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                <div className="text-4xl mb-4">✈️</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Aucun vol trouvé
                </h3>
                <p className="text-gray-600">
                  Essayez de modifier vos critères de recherche
                </p>
              </div>
            ) : (
              sortedFlights.map((flight) => {
                const cryptoPrice = getCryptoPrice(flight);
                return (
                  <div
                    key={flight.id}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      {/* Info vol */}
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="font-semibold text-gray-800">
                            {flight.airline || flight.provider}
                          </div>
                          <div className="text-sm text-gray-500">
                            {flight.stops === 0
                              ? "Direct"
                              : `${flight.stops} escale(s)`}
                          </div>
                          {flight.duration && (
                            <div className="text-sm text-gray-500">
                              {flight.duration}h
                            </div>
                          )}
                        </div>

                        <div className="flex items-center gap-6 text-sm text-gray-600">
                          <div>{searchData.from}</div>
                          <div className="flex items-center gap-2">
                            <div className="h-px bg-gray-300 w-8"></div>
                            <div>✈️</div>
                            <div className="h-px bg-gray-300 w-8"></div>
                          </div>
                          <div>{searchData.to}</div>
                        </div>
                      </div>

                      {/* Prix */}
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-800 mb-1">
                          {cryptoPrice.amount} {cryptoPrice.symbol}
                        </div>
                        <div className="text-sm text-gray-500 mb-3">
                          {flight.price}€
                        </div>

                        <button
                          onClick={() => handleBookingClick(flight)}
                          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                        >
                          Réserver
                        </button>

                        {flight.affiliate && (
                          <div className="text-xs text-green-600 mt-1">
                            ✓ Commission partenaire
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            )}

            {/* Call-to-action pour plus de résultats */}
            {sortedFlights.length > 0 && (
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white text-center">
                <h3 className="text-xl font-bold mb-2">
                  Pas trouvé le vol parfait ?
                </h3>
                <p className="mb-4 text-indigo-100">
                  Créez une alerte prix et recevez une notification quand le
                  prix baisse
                </p>
                <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Créer une alerte prix (Bientôt disponible)
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
