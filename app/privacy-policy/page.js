import Link from "next/link";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
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
          Privacy Policy for CryptoFly
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last Updated:</strong> August 24, 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to CryptoFly ("we," "us," or "our"). This Privacy Policy
                explains how we collect, use, protect, and handle your personal
                information when you use our cryptocurrency flight booking
                platform. By using our services, you agree to the collection and
                use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                2. Information We Collect
              </h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                2.1 Personal Information
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Contact Information:</strong> Name, email address,
                  phone number
                </li>
                <li>
                  <strong>Travel Information:</strong> Passport details, travel
                  preferences, booking history
                </li>
                <li>
                  <strong>Payment Information:</strong> Cryptocurrency wallet
                  addresses, transaction IDs (we do not store private keys)
                </li>
                <li>
                  <strong>Identity Verification:</strong> Government-issued ID
                  for compliance with travel regulations
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                2.2 Non-Personal Information
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Browser type and device information</li>
                <li>IP address and location data</li>
                <li>Website usage patterns and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                3. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Process flight bookings and cryptocurrency payments</li>
                <li>
                  Verify your identity for security and compliance purposes
                </li>
                <li>Communicate booking confirmations and travel updates</li>
                <li>Provide customer support and resolve issues</li>
                <li>Improve our services and user experience</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>
                  Send promotional offers and travel deals (with your consent)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                4. Cryptocurrency and Blockchain
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Important:</strong> Cryptocurrency transactions are
                recorded on public blockchains and are generally irreversible
                and publicly visible. While we take measures to protect your
                privacy:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>We never store your private keys or seed phrases</li>
                <li>
                  Transaction details may be visible on public blockchain
                  explorers
                </li>
                <li>
                  We use secure wallet integration services for payment
                  processing
                </li>
                <li>
                  All crypto transactions are subject to blockchain network
                  confirmations
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                5. Data Sharing and Third Parties
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <strong>Airlines and Travel Partners:</strong> To process your
                  bookings
                </li>
                <li>
                  <strong>Payment Processors:</strong> For cryptocurrency
                  transaction processing
                </li>
                <li>
                  <strong>Government Authorities:</strong> When required by law
                  or for security purposes
                </li>
                <li>
                  <strong>Service Providers:</strong> Who help us operate our
                  platform (under strict confidentiality)
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>
                  We never sell your personal data to third parties.
                </strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                6. Data Security
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>End-to-end encryption for sensitive data transmission</li>
                <li>Secure storage with industry-standard encryption</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Multi-factor authentication for account access</li>
                <li>Compliance with international data protection standards</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                7. Cookies and Tracking
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We use cookies to enhance your experience, analyze site usage,
                and provide personalized content. You can manage your cookie
                preferences through our Cookie Settings in the footer of our
                website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                8. Your Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access and review your personal data</li>
                <li>Correct or update inaccurate information</li>
                <li>
                  Request deletion of your data (subject to legal requirements)
                </li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability and withdrawal of consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                9. International Transfers
              </h2>
              <p className="text-gray-700 leading-relaxed">
                As a global platform, your data may be transferred to and
                processed in countries other than your own. We ensure
                appropriate safeguards are in place to protect your data during
                international transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                10. Changes to This Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy periodically. We will notify
                you of any material changes via email or through a prominent
                notice on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                11. Contact Us
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2">
                  If you have questions about this Privacy Policy or our data
                  practices, please contact us:
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>
                    <strong>Email:</strong> privacy@cryptofly.com
                  </li>
                  <li>
                    <strong>Address:</strong> CryptoFly Privacy Team
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
