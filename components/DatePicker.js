"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/hooks/useTranslation";

const DatePicker = ({
  onDateSelect,
  selectedDeparture = null,
  selectedReturn = null,
  isRoundTrip = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectingFor, setSelectingFor] = useState("departure"); // 'departure' ou 'return'
  const dropdownRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language];

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

  const monthNames = {
    fr: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ],
    en: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  };

  const dayNames = {
    fr: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  };

  const currentLang = language;

  const formatDate = (date) => {
    if (!date) return "";
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    return `${day}/${month}`;
  };

  const getDisplayText = () => {
    if (selectedDeparture && selectedReturn && isRoundTrip) {
      return `${formatDate(selectedDeparture)} - ${formatDate(selectedReturn)}`;
    } else if (selectedDeparture) {
      return isRoundTrip
        ? `${formatDate(selectedDeparture)} - ${t.return}`
        : formatDate(selectedDeparture);
    }
    return `${t.departure}${isRoundTrip ? ` - ${t.return}` : ""}`;
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Jours vides pour aligner le premier jour
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Jours du mois
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const isDateSelectable = (date) => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  };

  const isDateSelected = (date) => {
    if (!date) return false;
    const dateStr = date.toDateString();

    if (selectedDeparture && selectedDeparture.toDateString() === dateStr)
      return "departure";
    if (selectedReturn && selectedReturn.toDateString() === dateStr)
      return "return";

    // Vérifier si la date est dans la plage sélectionnée
    if (
      selectedDeparture &&
      selectedReturn &&
      date > selectedDeparture &&
      date < selectedReturn
    ) {
      return "range";
    }

    return false;
  };

  const handleDateClick = (date) => {
    if (!isDateSelectable(date)) return;

    if (!isRoundTrip) {
      // Aller simple
      onDateSelect(date, null);
      setIsOpen(false);
      return;
    }

    if (
      selectingFor === "departure" ||
      !selectedDeparture ||
      (selectedDeparture && date < selectedDeparture)
    ) {
      // Sélection du départ
      onDateSelect(date, null);
      setSelectingFor("return");
    } else {
      // Sélection du retour
      onDateSelect(selectedDeparture, date);
      setIsOpen(false);
      setSelectingFor("departure");
    }
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const prevMonth = () => {
    const today = new Date();
    const prevMonthDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1
    );

    // Ne pas aller avant le mois actuel
    if (prevMonthDate >= new Date(today.getFullYear(), today.getMonth())) {
      setCurrentMonth(prevMonthDate);
    }
  };

  const renderMonth = (monthDate, isSecondMonth = false) => {
    const days = getDaysInMonth(monthDate);
    const monthName = monthNames[currentLang][monthDate.getMonth()];
    const year = monthDate.getFullYear();

    return (
      <div className="p-3">
        <div className="flex items-center justify-between mb-4">
          {!isSecondMonth && (
            <button
              onClick={prevMonth}
              className="p-2 hover:bg-violet-100 rounded-full transition-colors"
              type="button"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          <h3 className="text-lg font-semibold text-gray-800 flex-1 text-center">
            {monthName} {year}
          </h3>

          {!isSecondMonth && (
            <button
              onClick={nextMonth}
              className="p-2 hover:bg-violet-100 rounded-full transition-colors"
              type="button"
            >
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Jours de la semaine */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames[currentLang].map((day) => (
            <div
              key={day}
              className="text-center text-sm font-medium text-gray-500 py-2"
            >
              {day}
            </div>
          ))}
        </div>

        {/* Grille des jours */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((date, index) => {
            if (!date) {
              return <div key={index} className="h-10"></div>;
            }

            const selectionType = isDateSelected(date);
            const isSelectable = isDateSelectable(date);

            let dayClasses =
              "h-10 w-10 flex items-center justify-center text-sm font-medium rounded-lg cursor-pointer transition-all ";

            if (!isSelectable) {
              dayClasses += "text-gray-300 cursor-not-allowed ";
            } else if (selectionType === "departure") {
              dayClasses += "bg-violet-600 text-white shadow-md ";
            } else if (selectionType === "return") {
              dayClasses += "bg-violet-600 text-white shadow-md ";
            } else if (selectionType === "range") {
              dayClasses += "bg-violet-100 text-violet-700 ";
            } else {
              dayClasses +=
                "text-gray-700 hover:bg-violet-50 hover:text-violet-600 ";
            }

            return (
              <button
                key={index}
                onClick={() => handleDateClick(date)}
                className={dayClasses}
                disabled={!isSelectable}
                type="button"
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-50 border border-gray-200 rounded-lg p-3 cursor-pointer hover:border-violet-400 transition-all h-12 flex items-center"
      >
        <div className="flex-1">
          <div className="text-gray-800 font-medium leading-tight text-sm">
            {getDisplayText()}
          </div>
        </div>
        <svg
          className="w-5 h-5 text-violet-600 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-1/2 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden"
          style={{
            width: "500px",
            transform: "translateX(-50%)",
            zIndex: 9999,
          }}
        >
          {/* Header avec instructions */}
          <div className="bg-violet-50 px-4 py-3 border-b border-violet-100">
            <div className="text-sm text-violet-700 font-medium">
              {selectingFor === "departure"
                ? `📅 ${t.selectDeparture || "Sélectionnez la date de départ"}`
                : `📅 ${t.selectReturn || "Sélectionnez la date de retour"}`}
            </div>
          </div>

          {/* Calendrier double */}
          <div className="flex">
            <div className="w-60">{renderMonth(currentMonth)}</div>
            <div className="border-l border-gray-200 w-60">
              {renderMonth(
                new Date(
                  currentMonth.getFullYear(),
                  currentMonth.getMonth() + 1
                ),
                true
              )}
            </div>
          </div>

          {/* Footer avec boutons */}
          <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 flex justify-between items-center">
            <button
              onClick={() => {
                onDateSelect(null, null);
                setSelectingFor("departure");
              }}
              className="text-sm text-gray-600 hover:text-violet-600 font-medium transition-colors"
              type="button"
            >
              Effacer
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-violet-600 text-white text-sm font-medium rounded-lg hover:bg-violet-700 transition-colors"
              type="button"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DatePicker;
