"use client";

import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  const handleCookieClick = () => {
    setShowCookieBanner(true);
  };

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowCookieBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookiesAccepted", "false");
    setShowCookieBanner(false);
  };

  return (
    <>
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-16">
          {/* Main section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Welcome aboard! 🚀
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl leading-relaxed">
              Because traveling is great, but traveling with peace of mind is
              even better! We offer you the best flight options on a newly
              designed website, with high-quality customer service and crypto
              payments!
            </p>
          </div>

          {/* Link grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Our offers */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Our offers</h3>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Crypto payment
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Bitcoin gift card
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Vacation vouchers
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Rent a car
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Join the crypto club
                </Link>
              </div>
            </div>

            {/* Learn more */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Learn more</h3>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  CryptoNews
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Roadmap
                </Link>
                <Link
                  href="mailto:contact@cryptofly.com?subject=CryptoFly Contact - Flight Booking Inquiry&body=Hello CryptoFly Team,%0D%0A%0D%0AI am interested in:%0D%0A- Flight booking%0D%0A- Crypto payment options%0D%0A- Other: %0D%0A%0D%0APlease contact me.%0D%0A%0D%0AThank you!"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact us
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Crypto guides
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  FAQ
                </Link>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Legal</h3>
              <div className="space-y-2">
                <Link
                  href="/tos"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Legal notices
                </Link>
                <Link
                  href="/privacy-policy"
                  className="block text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Privacy Policy
                </Link>
                <button
                  onClick={handleCookieClick}
                  className="block text-left text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Cookie Settings
                </button>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">
                Crypto Newsletter
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Receive CryptoFly deals once a month (or more if we find
                interesting flights)
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Latest News */}
          <div className="mb-12">
            <h3 className="font-bold text-gray-800 mb-6">Our latest news</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Bitcoin hits a new record high: impact on flight bookings
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Airlines are widely adopting crypto payments
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Traveling without a visa with blockchain: 40 countries are
                getting on board
              </Link>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-200 pt-8">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} CryptoFly - All rights reserved
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-blue-600 shadow-lg z-50">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">🍪</span>
                  <h3 className="font-bold text-gray-800">Cookie Notice</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  We use cookies to improve your experience and analyze site
                  traffic. Do you accept our use of cookies?
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={rejectCookies}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={acceptCookies}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
