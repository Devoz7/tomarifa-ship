"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/hooks/useTranslation";
import AirportSelector from "./AirportSelector";
import DatePicker from "./DatePicker";
import CryptoSelector from "./CryptoSelector";

function Hero() {
  const [tripType, setTripType] = useState("round-trip");
  const [departureAirport, setDepartureAirport] = useState("");
  const [destinationAirport, setDestinationAirport] = useState("");
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const videoRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language];

  // Fonction de recherche
  const handleSearch = () => {
    // Validation des champs requis
    if (!departureAirport || !destinationAirport || !departureDate) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    // Construction des paramètres pour la recherche
    const searchParams = new URLSearchParams({
      from: departureAirport,
      to: destinationAirport,
      departDate: departureDate,
      adults: 1,
    });

    // Ajouter la date de retour si aller-retour
    if (tripType === "round-trip" && returnDate) {
      searchParams.append("returnDate", returnDate);
    }

    // Redirection vers la page de résultats
    window.location.href = `/flights?${searchParams.toString()}`;
  };

  // Fonction pour gérer la sélection de crypto
  const handleCryptoSelect = (crypto) => {
    setSelectedCrypto(crypto);
  };

  // Fonction pour échanger les aéroports
  const handleDateSelect = (departure, returnDate) => {
    setDepartureDate(departure);
    setReturnDate(returnDate);
  };

  const swapAirports = () => {
    const temp = departureAirport;
    setDepartureAirport(destinationAirport);
    setDestinationAirport(temp);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // La vidéo se joue une fois puis revient au début et s'arrête
      const handleVideoEnd = () => {
        video.currentTime = 0; // Revenir au début de la vidéo
        video.pause();
      };

      video.addEventListener("ended", handleVideoEnd);

      return () => {
        video.removeEventListener("ended", handleVideoEnd);
      };
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/images/video-background.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-left mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
              {t.bookAllTickets}
            </h1>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {t.airlineTickets}
            </h2>
            <p className="text-lg md:text-xl text-gray-300">{t.bestPrice}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 relative overflow-visible">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-600 font-medium">
                {t.flightSearch}
              </span>
            </div>

            <div className="flex gap-2 mb-4">
              <button
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  tripType === "round-trip"
                    ? "bg-violet-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setTripType("round-trip")}
              >
                {t.roundtrip}
              </button>
              <button
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  tripType === "one-way"
                    ? "bg-violet-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setTripType("one-way")}
              >
                {t.oneWay}
              </button>
            </div>

            <div className="relative overflow-visible">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-end relative">
                <div className="relative">
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    {t.from}?
                  </label>
                  <AirportSelector
                    placeholder={t.fromPlaceholder}
                    value={departureAirport}
                    onChange={setDepartureAirport}
                    className="h-12"
                  />
                </div>

                <div className="relative">
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    {t.to}?
                  </label>
                  <AirportSelector
                    placeholder={t.toPlaceholder}
                    value={destinationAirport}
                    onChange={setDestinationAirport}
                    className="h-12"
                  />
                </div>

                {/* Bouton d'échange - parfaitement centré entre les deux champs */}
                <div className="hidden md:flex absolute inset-0 pointer-events-none z-10">
                  <div className="flex items-center justify-center w-2/5 h-full">
                    <button
                      onClick={swapAirports}
                      className="bg-white border-2 border-gray-200 rounded-full p-2 hover:border-violet-400 hover:bg-violet-50 transition-all shadow-lg pointer-events-auto mt-6"
                      type="button"
                    >
                      <svg
                        className="w-4 h-4 text-violet-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    {t.dates}
                  </label>
                  <DatePicker
                    onDateSelect={handleDateSelect}
                    selectedDeparture={departureDate}
                    selectedReturn={returnDate}
                    isRoundTrip={tripType === "round-trip"}
                  />
                </div>

                <div className="relative">
                  <label className="block text-gray-600 text-sm font-medium mb-1">
                    {t.cryptoPayment}
                  </label>
                  <CryptoSelector
                    onCryptoSelect={handleCryptoSelect}
                    selectedCrypto={selectedCrypto}
                  />
                </div>

                <div>
                  <button
                    onClick={handleSearch}
                    className="w-full bg-violet-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-violet-700 transition-all duration-300 shadow-md hover:shadow-lg h-12 text-sm"
                  >
                    {t.search}
                  </button>
                </div>
              </div>

              <div className="flex gap-4 mt-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-violet-600"
                    defaultChecked
                  />
                  <span className="text-gray-600 text-sm">
                    {t.baggageIncluded}
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-violet-600"
                    defaultChecked
                  />
                  <span className="text-gray-600 text-sm">
                    {t.directFlight}
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
