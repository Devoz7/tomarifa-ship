"use client";

import { useState, useRef, useEffect } from "react";
import { searchAirports, getAirportByCode } from "@/data/airports";

const AirportSelector = ({
  placeholder = "Pays, ville, aéroport",
  value = "",
  onChange,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedAirport, setSelectedAirport] = useState(null);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  // Initialiser l'aéroport sélectionné si une valeur est fournie
  useEffect(() => {
    if (value && !selectedAirport) {
      const airport = getAirportByCode(value);
      if (airport) {
        setSelectedAirport(airport);
        setSearchQuery(`${airport.city} (${airport.code})`);
      }
    }
  }, [value, selectedAirport]);

  // Rechercher des aéroports quand la query change
  useEffect(() => {
    if (searchQuery.length >= 2) {
      const results = searchAirports(searchQuery);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  // Fermer le dropdown quand on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !inputRef.current?.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setSelectedAirport(null);
    setIsOpen(true);

    // Notifier le parent que la sélection a changé
    onChange && onChange("");
  };

  const handleAirportSelect = (airport) => {
    setSelectedAirport(airport);
    setSearchQuery(`${airport.city} (${airport.code})`);
    setIsOpen(false);
    setSuggestions([]);

    // Notifier le parent de la sélection
    onChange && onChange(airport.code);
  };

  const handleInputFocus = () => {
    setIsOpen(true);
    if (searchQuery.length >= 2) {
      const results = searchAirports(searchQuery);
      setSuggestions(results);
    }
  };

  const handleInputClick = () => {
    // Si un aéroport est sélectionné, vider le champ pour permettre une nouvelle recherche
    if (selectedAirport) {
      setSearchQuery("");
      setSelectedAirport(null);
      onChange && onChange("");
    }
    setIsOpen(true);
  };

  return (
    <div className={`relative h-12 ${className}`}>
      <input
        ref={inputRef}
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onClick={handleInputClick}
        placeholder={placeholder}
        className="w-full h-full pl-4 pr-12 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-0 focus:border-violet-400 hover:border-violet-400 transition-all cursor-pointer text-gray-800 font-medium"
        style={{ lineHeight: "normal" }}
        autoComplete="off"
      />

      {/* Icône d'avion */}
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <svg
          className="w-5 h-5 text-violet-600"
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

      {/* Dropdown des suggestions */}
      {isOpen && suggestions.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto z-50"
        >
          {suggestions.map((airport) => (
            <button
              key={airport.code}
              onClick={() => handleAirportSelect(airport)}
              className="w-full px-4 py-3 text-left hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">
                    {airport.city}
                  </div>
                  <div className="text-sm text-gray-500">
                    {airport.name}, {airport.country}
                  </div>
                </div>
                <div className="text-sm font-mono text-gray-400 bg-gray-100 px-2 py-1 rounded">
                  {airport.code}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Message si aucun résultat */}
      {isOpen && searchQuery.length >= 2 && suggestions.length === 0 && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50"
        >
          <div className="text-gray-500 text-center">
            Aucun aéroport trouvé pour &ldquo;{searchQuery}&rdquo;
          </div>
        </div>
      )}
    </div>
  );
};

export default AirportSelector;
