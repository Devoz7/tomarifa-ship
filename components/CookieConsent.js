"use client";

import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem(
      "cookieSettings",
      JSON.stringify({
        necessary: true,
        analytics: true,
        marketing: true,
      })
    );
    setShowBanner(false);
    setShowSettings(false);
  };

  const rejectAll = () => {
    localStorage.setItem("cookieConsent", "rejected");
    localStorage.setItem(
      "cookieSettings",
      JSON.stringify({
        necessary: true,
        analytics: false,
        marketing: false,
      })
    );
    setShowBanner(false);
    setShowSettings(false);
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  const saveSettings = (settings) => {
    localStorage.setItem("cookieConsent", "custom");
    localStorage.setItem("cookieSettings", JSON.stringify(settings));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-blue-600 shadow-2xl z-50 animate-slide-up">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">🍪</div>
                <h3 className="text-lg font-bold text-gray-800">
                  Cookie Settings
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                We use cookies to enhance your browsing experience, analyze our
                site traffic, and personalize content. By continuing to use our
                site, you accept our use of cookies. Learn more about how we use
                cookies and manage your preferences.
              </p>
              <button
                onClick={openSettings}
                className="text-blue-600 text-sm font-medium hover:underline mt-2"
              >
                Customize my choices
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 lg:ml-6">
              <button
                onClick={rejectAll}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Reject All
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Settings Modal */}
      {showSettings && (
        <CookieSettingsModal
          onSave={saveSettings}
          onClose={() => setShowSettings(false)}
        />
      )}
    </>
  );
};

const CookieSettingsModal = ({ onSave, onClose }) => {
  const [settings, setSettings] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  const handleSave = () => {
    onSave(settings);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">
              Cookie Preferences
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Necessary Cookies */}
          <div className="flex items-start justify-between">
            <div className="flex-1 pr-4">
              <h3 className="font-semibold text-gray-800 mb-2">
                Necessary Cookies
              </h3>
              <p className="text-sm text-gray-600">
                These cookies are essential for the website to function and
                cannot be disabled. They enable core functionality such as
                security, network management, and accessibility.
              </p>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={settings.necessary}
                disabled
                className="w-5 h-5 text-blue-600 rounded border-gray-300"
              />
            </div>
          </div>

          {/* Analytics Cookies */}
          <div className="flex items-start justify-between">
            <div className="flex-1 pr-4">
              <h3 className="font-semibold text-gray-800 mb-2">
                Analytics Cookies
              </h3>
              <p className="text-sm text-gray-600">
                These cookies help us understand how visitors interact with our
                website by collecting and reporting information anonymously.
                This helps us improve our site.
              </p>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={settings.analytics}
                onChange={(e) =>
                  setSettings({ ...settings, analytics: e.target.checked })
                }
                className="w-5 h-5 text-blue-600 rounded border-gray-300"
              />
            </div>
          </div>

          {/* Marketing Cookies */}
          <div className="flex items-start justify-between">
            <div className="flex-1 pr-4">
              <h3 className="font-semibold text-gray-800 mb-2">
                Marketing Cookies
              </h3>
              <p className="text-sm text-gray-600">
                These cookies are used to personalize advertisements and analyze
                the effectiveness of our advertising campaigns. They track your
                activity across websites.
              </p>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={settings.marketing}
                onChange={(e) =>
                  setSettings({ ...settings, marketing: e.target.checked })
                }
                className="w-5 h-5 text-blue-600 rounded border-gray-300"
              />
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3 justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
