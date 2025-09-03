// Analytics pour tracker les conversions et optimiser les revenus
import { NextResponse } from "next/server";
import connectMongo from "@/libs/mongoose";

export async function POST(req) {
  try {
    const {
      event,
      data = {},
      timestamp = new Date().toISOString(),
      sessionId,
      userId,
    } = await req.json();

    // Tracker les événements importants pour la monétisation
    const trackingEvents = {
      // Recherche de vol
      flight_search: {
        from: data.from,
        to: data.to,
        departDate: data.departDate,
        crypto: data.selectedCrypto,
        sessionId,
      },

      // Clic sur résultat d'affiliation (CRUCIAL pour revenus)
      affiliate_click: {
        provider: data.provider,
        flightId: data.flightId,
        price: data.price,
        crypto: data.crypto,
        commission: data.commission,
        sessionId,
        userId,
      },

      // Conversion réussie
      booking_conversion: {
        provider: data.provider,
        amount: data.amount,
        crypto: data.crypto,
        commission: data.estimatedCommission,
        sessionId,
        userId,
      },

      // Interaction newsletter
      newsletter_signup: {
        email: data.email,
        source: data.source,
        sessionId,
      },

      // Clics pubs
      ad_click: {
        adProvider: data.adProvider,
        adType: data.adType,
        placement: data.placement,
        revenue: data.estimatedRevenue,
        sessionId,
      },
    };

    // Log pour analyse (remplacer par vraie DB plus tard)
    console.log(`[ANALYTICS] ${event}:`, trackingEvents[event] || data);

    // TODO: Sauvegarder en base pour analytics dashboard
    // await connectMongo();
    // await AnalyticsEvent.create({
    //   event,
    //   data: trackingEvents[event] || data,
    //   timestamp,
    //   sessionId,
    //   userId
    // });

    return NextResponse.json({
      success: true,
      message: "Event tracked successfully",
    });
  } catch (error) {
    console.error("Analytics error:", error);
    return NextResponse.json(
      { error: "Failed to track event" },
      { status: 500 }
    );
  }
}

// Endpoint pour récupérer les stats (dashboard admin)
export async function GET(req) {
  try {
    const url = new URL(req.url);
    const period = url.searchParams.get("period") || "7d";

    // Mock data pour l'instant (remplacer par vraie DB)
    const mockStats = {
      period,
      metrics: {
        totalSearches: 1250,
        affiliateClicks: 89,
        conversions: 12,
        conversionRate: "0.96%",
        estimatedRevenue: "€342.50",
        topCryptos: [
          { name: "Bitcoin", percentage: 45 },
          { name: "Ethereum", percentage: 30 },
          { name: "USDT", percentage: 15 },
          { name: "Others", percentage: 10 },
        ],
        topRoutes: [
          { route: "Paris → New York", searches: 145 },
          { route: "London → Tokyo", searches: 98 },
          { route: "Berlin → Dubai", searches: 87 },
        ],
        revenueBreakdown: {
          affiliate: "€289.30",
          ads: "€43.20",
          premium: "€10.00",
        },
      },
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json(mockStats);
  } catch (error) {
    console.error("Stats error:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
