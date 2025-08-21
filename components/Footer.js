import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/*Main section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome aboard! 🚀-
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl leading-relaxed">
            Because traveling is great, but traveling with peace of mind is even
            better! We offer you the best flight options on a newly designed
            website, with high-quality customer service and crypto payments!
          </p>
        </div>

        {/*Link grid*/}
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
                href="#"
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

          {/*Regulations*/}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Réglementation</h3>
            <div className="space-y-2">
              <Link
                href="/tos"
                className="block text-gray-600 hover:text-blue-600 transition-colors"
              >
                CGV / CGU
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
              <Link
                href="#"
                className="block text-gray-600 hover:text-blue-600 transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Newsletter crypto</h3>
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
                Follow us
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
              Bitcoin hits a new record high: impact on flight bookings flight
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
              Traveling without a visa with blockchain: 40 countries are getting
              on board
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
  );
};

export default Footer;
