"use client";

import { useState, useEffect } from "react";

export const useCookies = () => {
  const [cookieConsent, setCookieConsent] = useState(null);
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    const settings = localStorage.getItem("cookieSettings");

    setCookieConsent(consent);
    if (settings) {
      setCookieSettings(JSON.parse(settings));
    }
  }, []);

  const showCookieBanner = () => {
    localStorage.removeItem("cookieConsent");
    localStorage.removeItem("cookieSettings");
    setCookieConsent(null);
    window.location.reload();
  };

  return {
    cookieConsent,
    cookieSettings,
    showCookieBanner,
  };
};

export default useCookies;
