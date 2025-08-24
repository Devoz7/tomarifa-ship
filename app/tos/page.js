import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Terms of Service | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-4xl mx-auto">
      <div className="p-8">
        <Link href="/" className="btn btn-ghost mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>

        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last Updated:</strong> August 24, 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                1. Agreement to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to CryptoFly. These Terms of Service ("Terms") govern
                your use of our cryptocurrency-enabled flight booking platform.
                By accessing or using our services, you agree to be bound by
                these Terms. If you do not agree to these Terms, please do not
                use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                2. Description of Service
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CryptoFly is a digital platform that enables users to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Search and book flights from various airlines</li>
                <li>
                  Make payments using supported cryptocurrencies (Bitcoin,
                  Ethereum, USDC, BNB)
                </li>
                <li>Manage travel bookings and receive confirmations</li>
                <li>Access customer support for travel-related inquiries</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                3. User Account and Registration
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>You must be at least 18 years old to create an account</li>
                <li>
                  You are responsible for maintaining the security of your
                  account credentials
                </li>
                <li>
                  You must provide accurate and complete information during
                  registration
                </li>
                <li>One account per person; sharing accounts is prohibited</li>
                <li>
                  You are responsible for all activities under your account
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                4. Cryptocurrency Payments
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                4.1 Accepted Cryptocurrencies
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We currently accept: Bitcoin (BTC), Ethereum (ETH), USD Coin
                (USDC), and Binance Coin (BNB).
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                4.2 Payment Terms
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  All cryptocurrency transactions are final and irreversible
                </li>
                <li>
                  Payment confirmation requires blockchain network confirmations
                </li>
                <li>
                  Exchange rates are locked at the time of payment initiation
                </li>
                <li>
                  Network fees (gas fees) are the responsibility of the user
                </li>
                <li>
                  Failed transactions due to insufficient gas or network issues
                  are not our responsibility
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                4.3 Price Fluctuations
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Cryptocurrency prices are volatile. The final amount charged
                will be based on the exchange rate at the moment of payment
                confirmation on the blockchain.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                5. Booking and Travel Terms
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                5.1 Booking Process
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  All bookings are subject to airline availability and approval
                </li>
                <li>
                  Prices may change until payment is confirmed on the blockchain
                </li>
                <li>
                  You must provide accurate passenger information matching
                  travel documents
                </li>
                <li>
                  Additional fees (baggage, seat selection) may apply per
                  airline policies
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                5.2 Travel Documents
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Valid passport and visas are your responsibility</li>
                <li>
                  You must comply with all destination country requirements
                </li>
                <li>
                  Entry may be denied by authorities regardless of valid booking
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                6. Cancellation and Refund Policy
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                6.1 Cancellations
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Cancellation policies vary by airline and fare type</li>
                <li>
                  Some tickets may be non-refundable or have cancellation fees
                </li>
                <li>Cancellation requests must be made through our platform</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                6.2 Cryptocurrency Refunds
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Important:</strong> Due to the nature of cryptocurrency
                transactions:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Refunds are processed to the same wallet address used for
                  payment
                </li>
                <li>
                  Refund amounts are calculated at current exchange rates, not
                  original payment rates
                </li>
                <li>
                  Network fees for refund transactions are deducted from the
                  refund amount
                </li>
                <li>
                  Processing time depends on blockchain network congestion
                </li>
                <li>
                  We are not responsible for wallet access issues or lost
                  private keys
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                7. Prohibited Uses
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  Using the platform for illegal activities or money laundering
                </li>
                <li>Providing false or fraudulent information</li>
                <li>Attempting to manipulate cryptocurrency exchange rates</li>
                <li>Using automated tools to make bookings (bots, scrapers)</li>
                <li>
                  Reselling bookings or operating as a travel agency without
                  authorization
                </li>
                <li>Violating any applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                CryptoFly acts as an intermediary between you and airlines. We
                are not liable for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Flight delays, cancellations, or schedule changes</li>
                <li>Cryptocurrency network issues or failed transactions</li>
                <li>Loss of private keys or wallet access</li>
                <li>Regulatory changes affecting cryptocurrency use</li>
                <li>
                  Force majeure events or circumstances beyond our control
                </li>
                <li>Third-party services or airline policies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                9. Compliance and Regulation
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  We comply with applicable anti-money laundering (AML) laws
                </li>
                <li>Know Your Customer (KYC) verification may be required</li>
                <li>
                  We reserve the right to report suspicious activities to
                  authorities
                </li>
                <li>
                  Some jurisdictions may restrict cryptocurrency use for travel
                  bookings
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                10. Privacy and Data Protection
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your privacy is important to us. Please review our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-blue-600 hover:underline"
                >
                  Privacy Policy
                </Link>{" "}
                to understand how we collect, use, and protect your personal
                information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                11. Modifications to Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. Material
                changes will be communicated via email or prominent notice on
                our platform. Continued use of our services after changes
                constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                12. Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms are governed by the laws of France. Any disputes
                will be resolved in the courts of Paris, France.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                13. Contact Information
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  If you have questions about these Terms of Service, please
                  contact us:
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>
                    <strong>Email:</strong> legal@cryptofly.com
                  </li>
                  <li>
                    <strong>Support:</strong> support@cryptofly.com
                  </li>
                  <li>
                    <strong>Address:</strong> CryptoFly Legal Department
                  </li>
                </ul>
              </div>
            </section>

            <section className="border-t pt-6">
              <p className="text-gray-600 text-sm">
                By using CryptoFly, you acknowledge that you have read,
                understood, and agree to be bound by these Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TOS;
