// Configuration pour les APIs de vols et affiliation
export const flightAPIs = {
  // Travelpayouts (très recommandé pour l'affiliation)
  travelpayouts: {
    token: process.env.TRAVELPAYOUTS_TOKEN,
    marker: process.env.TRAVELPAYOUTS_MARKER, // Ton ID d'affiliation
    baseUrl: "https://api.travelpayouts.com/v1",
    commissionRate: "3-7%", // Commission par booking
  },

  // Kiwi.com (bon pour l'Europe)
  kiwi: {
    apiKey: process.env.KIWI_API_KEY,
    affiliateId: process.env.KIWI_AFFILIATE_ID,
    baseUrl: "https://api.skypicker.com",
    commissionRate: "1-5%",
  },

  // Amadeus (premium mais payant)
  amadeus: {
    clientId: process.env.AMADEUS_CLIENT_ID,
    clientSecret: process.env.AMADEUS_CLIENT_SECRET,
    baseUrl: "https://api.amadeus.com/v2",
    priceModel: "pay-per-call",
  },
};

// Configuration crypto
export const cryptoConfig = {
  supportedCryptos: [
    { id: "bitcoin", symbol: "BTC", name: "Bitcoin" },
    { id: "ethereum", symbol: "ETH", name: "Ethereum" },
    { id: "tether", symbol: "USDT", name: "Tether" },
    { id: "binancecoin", symbol: "BNB", name: "BNB" },
    { id: "cardano", symbol: "ADA", name: "Cardano" },
    { id: "solana", symbol: "SOL", name: "Solana" },
  ],
  priceAPI: "https://api.coingecko.com/api/v3/simple/price",
  updateInterval: 30000, // 30 secondes
};

// Sources de revenus
export const monetization = {
  affiliate: {
    travelpayouts: "3-7%", // Par booking
    kiwi: "1-5%", // Par booking
    amadeus: "negotiable", // Négociable selon volume
  },
  advertising: {
    googleAdsense: "auto",
    cryptoAds: "targeted", // Pubs crypto spécialisées
    travelAds: "contextual",
  },
  premium: {
    alerts: "$9.99/month", // Alertes prix crypto
    analytics: "$19.99/month", // Analytics avancées
    api: "$99/month", // Accès API pour développeurs
  },
};
