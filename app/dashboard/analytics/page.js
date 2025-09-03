"use client";

import { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function AnalyticsDashboard() {
  const [stats, setStats] = useState(null);
  const [period, setPeriod] = useState("7d");
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  // Protection : seulement pour les admins
  const isAdmin = session?.user?.email === "admin@cryptofly.com"; // Remplace par ton email

  const fetchStats = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/analytics?period=${period}`);
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error("Erreur fetch stats:", error);
    } finally {
      setLoading(false);
    }
  }, [period]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Accès refusé
          </h1>
          <p className="text-gray-600 mb-6">
            Vous devez être connecté pour voir cette page
          </p>
          <Link
            href="/"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Accès refusé
          </h1>
          <p className="text-gray-600 mb-6">
            Cette page est réservée aux administrateurs
          </p>
          <Link
            href="/dashboard"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
          >
            Retour au dashboard
          </Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                💰 Dashboard Revenus
              </h1>
              <p className="text-gray-600">
                Analytics et monétisation CryptoFly
              </p>
            </div>

            {/* Sélecteur période */}
            <div className="flex items-center gap-4">
              <select
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2"
              >
                <option value="24h">Dernières 24h</option>
                <option value="7d">7 derniers jours</option>
                <option value="30d">30 derniers jours</option>
                <option value="90d">90 derniers jours</option>
              </select>

              <Link
                href="/dashboard"
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Retour
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* KPIs principaux */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Revenus estimés</p>
                <p className="text-2xl font-bold text-green-600">
                  {stats?.metrics.estimatedRevenue}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Clics affiliation</p>
                <p className="text-2xl font-bold text-blue-600">
                  {stats?.metrics.affiliateClicks}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔗</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Conversions</p>
                <p className="text-2xl font-bold text-purple-600">
                  {stats?.metrics.conversions}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✈️</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Taux conversion</p>
                <p className="text-2xl font-bold text-orange-600">
                  {stats?.metrics.conversionRate}
                </p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Répartition des revenus */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              💵 Répartition des revenus
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Affiliation voyage</span>
                <span className="font-semibold text-green-600">
                  {stats?.metrics.revenueBreakdown.affiliate}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Publicités</span>
                <span className="font-semibold text-blue-600">
                  {stats?.metrics.revenueBreakdown.ads}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Abonnements premium</span>
                <span className="font-semibold text-purple-600">
                  {stats?.metrics.revenueBreakdown.premium}
                </span>
              </div>
            </div>
          </div>

          {/* Top cryptos */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              ₿ Cryptos populaires
            </h3>
            <div className="space-y-3">
              {stats?.metrics.topCryptos.map((crypto, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-600">{crypto.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ width: `${crypto.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium">
                      {crypto.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top routes */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              🛩️ Routes populaires
            </h3>
            <div className="space-y-3">
              {stats?.metrics.topRoutes.map((route, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-600">{route.route}</span>
                  <span className="font-semibold text-gray-800">
                    {route.searches} recherches
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions rapides */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-4">🚀 Actions rapides</h3>
            <div className="space-y-3">
              <button className="w-full bg-white/20 hover:bg-white/30 rounded-lg p-3 text-left transition-colors">
                📊 Exporter les données
              </button>
              <button className="w-full bg-white/20 hover:bg-white/30 rounded-lg p-3 text-left transition-colors">
                📧 Envoyer rapport par email
              </button>
              <button className="w-full bg-white/20 hover:bg-white/30 rounded-lg p-3 text-left transition-colors">
                ⚙️ Configurer alertes
              </button>
            </div>
          </div>
        </div>

        {/* Métriques détaillées */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            📈 Vue d&apos;ensemble
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">
                {stats?.metrics.totalSearches}
              </div>
              <div className="text-sm text-gray-600">Recherches totales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {stats?.metrics.affiliateClicks}
              </div>
              <div className="text-sm text-gray-600">
                Clics générant des revenus
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">
                {stats?.metrics.conversions}
              </div>
              <div className="text-sm text-gray-600">Ventes confirmées</div>
            </div>
          </div>
        </div>

        {/* Footer dashboard */}
        <div className="mt-8 text-center text-sm text-gray-500">
          Dernière mise à jour :{" "}
          {stats?.lastUpdated
            ? new Date(stats.lastUpdated).toLocaleString("fr-FR")
            : "N/A"}
        </div>
      </div>
    </div>
  );
}
