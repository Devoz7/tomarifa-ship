"use client";

import { useState } from "react";
import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [showDepartureList, setShowDepartureList] = useState(false);
  const [showArrivalList, setShowArrivalList] = useState(false);
  const [showCryptoList, setShowCryptoList] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("bitcoin");
  const [tripType, setTripType] = useState("round-trip");

  // États pour le calendrier
  const [showCalendar, setShowCalendar] = useState(false);
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectingReturn, setSelectingReturn] = useState(false);

  const airports = [
    { code: "CDG", city: "Paris", country: "France" },
    { code: "LHR", city: "Londres", country: "Royaume-Uni" },
    { code: "JFK", city: "New York", country: "États-Unis" },
    { code: "LAX", city: "Los Angeles", country: "États-Unis" },
    { code: "NRT", city: "Tokyo", country: "Japon" },
    { code: "HKG", city: "Hong Kong", country: "Hong Kong" },
    { code: "SIN", city: "Singapour", country: "Singapour" },
    { code: "DXB", city: "Dubaï", country: "Émirats Arabes Unis" },
    { code: "SYD", city: "Sydney", country: "Australie" },
    { code: "GRU", city: "São Paulo", country: "Brésil" },
    { code: "YYZ", city: "Toronto", country: "Canada" },
    { code: "FRA", city: "Francfort", country: "Allemagne" },
    { code: "AMS", city: "Amsterdam", country: "Pays-Bas" },
    { code: "MAD", city: "Madrid", country: "Espagne" },
    { code: "FCO", city: "Rome", country: "Italie" },
    { code: "ZUR", city: "Zurich", country: "Suisse" },
    { code: "VIE", city: "Vienne", country: "Autriche" },
    { code: "CPH", city: "Copenhague", country: "Danemark" },
    { code: "ARN", city: "Stockholm", country: "Suède" },
    { code: "OSL", city: "Oslo", country: "Norvège" },
    { code: "HEL", city: "Helsinki", country: "Finlande" },
    { code: "WAW", city: "Varsovie", country: "Pologne" },
    { code: "PRG", city: "Prague", country: "République tchèque" },
    { code: "BUD", city: "Budapest", country: "Hongrie" },
    { code: "ATH", city: "Athènes", country: "Grèce" },
    { code: "IST", city: "Istanbul", country: "Turquie" },
    { code: "CAI", city: "Le Caire", country: "Égypte" },
    { code: "JNB", city: "Johannesburg", country: "Afrique du Sud" },
    { code: "BKK", city: "Bangkok", country: "Thaïlande" },
    { code: "KUL", city: "Kuala Lumpur", country: "Malaisie" },
    { code: "CGK", city: "Jakarta", country: "Indonésie" },
    { code: "MNL", city: "Manille", country: "Philippines" },
    { code: "ICN", city: "Séoul", country: "Corée du Sud" },
    { code: "PEK", city: "Pékin", country: "Chine" },
    { code: "PVG", city: "Shanghai", country: "Chine" },
    { code: "DEL", city: "New Delhi", country: "Inde" },
    { code: "BOM", city: "Mumbai", country: "Inde" },
    { code: "MEL", city: "Melbourne", country: "Australie" },
    { code: "AKL", city: "Auckland", country: "Nouvelle-Zélande" },
    { code: "SCL", city: "Santiago", country: "Chili" },
    { code: "LIM", city: "Lima", country: "Pérou" },
    { code: "BOG", city: "Bogotá", country: "Colombie" },
    { code: "CCS", city: "Caracas", country: "Venezuela" },
    { code: "EZE", city: "Buenos Aires", country: "Argentine" },
    { code: "MVD", city: "Montevideo", country: "Uruguay" },
  ];

  const cryptoPayments = [
    { id: "bitcoin", name: "Bitcoin", symbol: "₿", discount: "5" },
    { id: "ethereum", name: "Ethereum", symbol: "Ξ", discount: "3" },
    { id: "cardano", name: "Cardano", symbol: "₳", discount: "4" },
    { id: "solana", name: "Solana", symbol: "◎", discount: "6" },
  ];

  // Fonctions pour le calendrier
  const formatDate = (date) => {
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "short",
    });
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const endDate = new Date(lastDay);
    endDate.setDate(endDate.getDate() + (6 - lastDay.getDay()));

    for (
      let day = new Date(startDate);
      day <= endDate;
      day.setDate(day.getDate() + 1)
    ) {
      days.push(new Date(day));
    }

    return days;
  };

  const handleDateSelect = (date) => {
    if (tripType === "one-way") {
      setDepartureDate(date);
      setShowCalendar(false);
    } else {
      if (!departureDate || selectingReturn) {
        if (selectingReturn) {
          setReturnDate(date);
          setSelectingReturn(false);
          setShowCalendar(false);
        } else {
          setDepartureDate(date);
          setSelectingReturn(true);
        }
      } else {
        if (date >= departureDate) {
          setReturnDate(date);
          setSelectingReturn(false);
          setShowCalendar(false);
        }
      }
    }
  };

  const isDateSelected = (date) => {
    if (!departureDate) return false;
    if (tripType === "one-way") {
      return date.toDateString() === departureDate.toDateString();
    }
    const isDeparture = date.toDateString() === departureDate.toDateString();
    const isReturn =
      returnDate && date.toDateString() === returnDate.toDateString();
    return isDeparture || isReturn;
  };

  const isDateInRange = (date) => {
    if (tripType === "one-way" || !departureDate || !returnDate) return false;
    return date > departureDate && date < returnDate;
  };

  const isDateDisabled = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (date < today) return true;

    if (tripType === "round-trip" && departureDate && selectingReturn) {
      return date <= departureDate;
    }

    return false;
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <ParticlesBackground />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              CryptoFly
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Comparez et réservez vos vols en payant avec Bitcoin, Ethereum et
            autres cryptomonnaies. Les meilleurs tarifs, les paiements les plus
            sécurisés.
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-gray-600 font-medium">Recherche de vol</span>
          </div>

          {/* Type de voyage */}
          <div className="flex gap-4 mb-6">
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                tripType === "round-trip"
                  ? "bg-violet-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => {
                setTripType("round-trip");
                setReturnDate(null);
                setSelectingReturn(false);
              }}
            >
              Aller-retour
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                tripType === "one-way"
                  ? "bg-violet-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => {
                setTripType("one-way");
                setReturnDate(null);
                setSelectingReturn(false);
              }}
            >
              Aller simple
            </button>
            <button
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                tripType === "multi-city"
                  ? "bg-violet-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => setTripType("multi-city")}
            >
              Multi-villes
            </button>
          </div>

          {/* Formulaire principal horizontal */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            {/* Départ */}
            <div className="relative">
              <label className="block text-gray-600 text-sm font-medium mb-2">
                D&apos;où?
              </label>
              <div
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-violet-400 transition-all h-16 flex items-center"
                onClick={() => setShowDepartureList(!showDepartureList)}
              >
                <div className="flex-1">
                  <div className="text-gray-800 font-medium text-lg leading-tight">
                    {departure || "Ville ou aéroport"}
                  </div>
                </div>
                <span className="text-violet-600 ml-2">⇄</span>
              </div>
              {showDepartureList && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg mt-1 max-h-64 overflow-y-auto z-50 shadow-xl">
                  {airports.map((airport) => (
                    <div
                      key={airport.code}
                      className="p-3 hover:bg-violet-50 cursor-pointer border-b border-gray-100 last:border-0"
                      onClick={() => {
                        setDeparture(`${airport.city} (${airport.code})`);
                        setShowDepartureList(false);
                      }}
                    >
                      <div className="text-gray-800 font-medium">
                        {airport.city} ({airport.code})
                      </div>
                      <div className="text-gray-500 text-sm">
                        {airport.country}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Arrivée */}
            <div className="relative">
              <label className="block text-gray-600 text-sm font-medium mb-2">
                Où?
              </label>
              <div
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-violet-400 transition-all h-16 flex items-center"
                onClick={() => setShowArrivalList(!showArrivalList)}
              >
                <div className="flex-1">
                  <div className="text-gray-800 font-medium text-lg leading-tight">
                    {arrival || "Ville ou aéroport"}
                  </div>
                </div>
                <span className="text-violet-600 ml-2">✈</span>
              </div>
              {showArrivalList && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg mt-1 max-h-64 overflow-y-auto z-50 shadow-xl">
                  {airports.map((airport) => (
                    <div
                      key={airport.code}
                      className="p-3 hover:bg-violet-50 cursor-pointer border-b border-gray-100 last:border-0"
                      onClick={() => {
                        setArrival(`${airport.city} (${airport.code})`);
                        setShowArrivalList(false);
                      }}
                    >
                      <div className="text-gray-800 font-medium">
                        {airport.city} ({airport.code})
                      </div>
                      <div className="text-gray-500 text-sm">
                        {airport.country}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Dates */}
            <div className="relative">
              <label className="block text-gray-600 text-sm font-medium mb-2">
                Dates
              </label>
              <div
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-violet-400 transition-all h-16 flex items-center"
                onClick={() => setShowCalendar(!showCalendar)}
              >
                <div className="flex-1">
                  <div className="text-gray-800 font-medium text-lg leading-tight">
                    {departureDate ? formatDate(departureDate) : "Départ"}
                    {tripType === "round-trip" && (
                      <span className="text-gray-500 mx-2">
                        - {returnDate ? formatDate(returnDate) : "Retour"}
                      </span>
                    )}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {tripType === "round-trip"
                      ? "Aller-retour"
                      : "Aller simple"}
                  </div>
                </div>
                <span className="text-violet-600 ml-2">📅</span>
              </div>
            </div>

            {/* Passagers & Crypto */}
            <div className="relative">
              <label className="block text-gray-600 text-sm font-medium mb-2">
                Paiement crypto
              </label>
              <div
                className="bg-gray-50 border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-violet-400 transition-all h-16 flex items-center"
                onClick={() => setShowCryptoList(!showCryptoList)}
              >
                <div className="flex-1">
                  <div className="text-gray-800 font-medium text-lg leading-tight flex items-center gap-2">
                    <span>
                      {
                        cryptoPayments.find((c) => c.id === paymentMethod)
                          ?.symbol
                      }
                    </span>
                    <span>
                      {cryptoPayments.find((c) => c.id === paymentMethod)?.name}
                    </span>
                  </div>
                  <div className="text-green-600 text-sm font-medium">
                    -
                    {
                      cryptoPayments.find((c) => c.id === paymentMethod)
                        ?.discount
                    }
                    % de réduction
                  </div>
                </div>
                <span className="text-violet-600 ml-2">▼</span>
              </div>
              {showCryptoList && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg mt-1 z-50 shadow-xl">
                  {cryptoPayments.map((crypto) => (
                    <div
                      key={crypto.id}
                      className="p-3 hover:bg-violet-50 cursor-pointer border-b border-gray-100 last:border-0"
                      onClick={() => {
                        setPaymentMethod(crypto.id);
                        setShowCryptoList(false);
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{crypto.symbol}</span>
                        <span className="text-gray-800 font-medium">
                          {crypto.name}
                        </span>
                      </div>
                      <div className="text-green-600 text-sm">
                        -{crypto.discount}% de réduction
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bouton de recherche */}
            <div>
              <button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold py-4 px-8 rounded-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl h-16">
                Rechercher
              </button>
            </div>
          </div>

          {/* Options supplémentaires */}
          <div className="flex gap-6 mt-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-violet-600"
                defaultChecked
              />
              <span className="text-gray-600">Bagage inclus</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 text-violet-600"
                defaultChecked
              />
              <span className="text-gray-600">Vol direct</span>
            </label>
          </div>
        </div>

        {/* Calendrier Modal */}
        {showCalendar && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Sélectionnez vos dates</h3>
                <button
                  onClick={() => setShowCalendar(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold px-2"
                >
                  ×
                </button>
              </div>

              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={() => {
                    const newMonth = new Date(currentMonth);
                    newMonth.setMonth(newMonth.getMonth() - 1);
                    setCurrentMonth(newMonth);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  ←
                </button>

                <div className="flex gap-8">
                  <div className="text-center">
                    <h3 className="font-semibold text-lg">
                      {currentMonth.toLocaleDateString("fr-FR", {
                        month: "long",
                        year: "numeric",
                      })}
                    </h3>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-lg">
                      {new Date(
                        currentMonth.getFullYear(),
                        currentMonth.getMonth() + 1
                      ).toLocaleDateString("fr-FR", {
                        month: "long",
                        year: "numeric",
                      })}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const newMonth = new Date(currentMonth);
                    newMonth.setMonth(newMonth.getMonth() + 1);
                    setCurrentMonth(newMonth);
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  →
                </button>
              </div>

              <div className="grid grid-cols-2 gap-8">
                {/* Premier mois */}
                <div>
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {["dim", "lun", "mar", "mer", "jeu", "ven", "sam"].map(
                      (day) => (
                        <div
                          key={day}
                          className="text-center text-sm font-medium text-gray-500 p-2"
                        >
                          {day}
                        </div>
                      )
                    )}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {getDaysInMonth(currentMonth).map((date, index) => {
                      const isCurrentMonth =
                        date.getMonth() === currentMonth.getMonth();
                      const isSelected = isDateSelected(date);
                      const isInRange = isDateInRange(date);
                      const isDisabled = isDateDisabled(date);

                      return (
                        <button
                          key={index}
                          onClick={() => !isDisabled && handleDateSelect(date)}
                          disabled={isDisabled}
                          className={`
                            p-2 text-sm rounded-lg transition-all
                            ${!isCurrentMonth ? "text-gray-300" : ""}
                            ${
                              isDisabled
                                ? "text-gray-300 cursor-not-allowed"
                                : "hover:bg-violet-100"
                            }
                            ${isSelected ? "bg-violet-600 text-white" : ""}
                            ${isInRange && !isSelected ? "bg-violet-100" : ""}
                          `}
                        >
                          {date.getDate()}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Deuxième mois */}
                <div>
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {["dim", "lun", "mar", "mer", "jeu", "ven", "sam"].map(
                      (day) => (
                        <div
                          key={day}
                          className="text-center text-sm font-medium text-gray-500 p-2"
                        >
                          {day}
                        </div>
                      )
                    )}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {getDaysInMonth(
                      new Date(
                        currentMonth.getFullYear(),
                        currentMonth.getMonth() + 1
                      )
                    ).map((date, index) => {
                      const isCurrentMonth =
                        date.getMonth() === (currentMonth.getMonth() + 1) % 12;
                      const isSelected = isDateSelected(date);
                      const isInRange = isDateInRange(date);
                      const isDisabled = isDateDisabled(date);

                      return (
                        <button
                          key={index}
                          onClick={() => !isDisabled && handleDateSelect(date)}
                          disabled={isDisabled}
                          className={`
                            p-2 text-sm rounded-lg transition-all
                            ${!isCurrentMonth ? "text-gray-300" : ""}
                            ${
                              isDisabled
                                ? "text-gray-300 cursor-not-allowed"
                                : "hover:bg-violet-100"
                            }
                            ${isSelected ? "bg-violet-600 text-white" : ""}
                            ${isInRange && !isSelected ? "bg-violet-100" : ""}
                          `}
                        >
                          {date.getDate()}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-6 p-3 bg-gray-50 rounded-lg text-sm text-gray-600">
                {tripType === "round-trip"
                  ? selectingReturn
                    ? "Sélectionnez votre date de retour"
                    : "Sélectionnez votre date de départ, puis votre date de retour"
                  : "Sélectionnez votre date de départ"}
              </div>
            </div>
          </div>
        )}

        {/* Section statistiques */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-8 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-gray-300 text-sm">Vols réservés</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                {paymentMethod === "bitcoin" &&
                  `${(2.5 + Math.random() * 0.5).toFixed(1)} BTC`}
                {paymentMethod === "ethereum" &&
                  `${(45 + Math.random() * 10).toFixed(0)} ETH`}
                {paymentMethod === "cardano" &&
                  `${(12500 + Math.random() * 2500).toFixed(0)} ADA`}
                {paymentMethod === "solana" &&
                  `${(875 + Math.random() * 125).toFixed(0)} SOL`}
              </div>
              <div className="text-gray-300 text-sm">Économisés ce mois</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">
                {paymentMethod === "bitcoin" &&
                  `${(Math.random() * 0.01 + 0.006).toFixed(4)} BTC`}
                {paymentMethod === "ethereum" &&
                  `${(Math.random() * 0.3 + 0.1).toFixed(3)} ETH`}
                {paymentMethod === "cardano" &&
                  `${Math.floor(Math.random() * 1000 + 500)} ADA`}
                {paymentMethod === "solana" &&
                  `${Math.floor(Math.random() * 50 + 20)} SOL`}
              </div>
              <div className="text-gray-300 text-sm">Prix moyen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
