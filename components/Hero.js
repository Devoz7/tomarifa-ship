'use client';

// Composant Hero avec planète 3D interactive
import TestimonialsAvatars from "./TestimonialsAvatars";
import ParticlesBackground from "./ParticlesBackground";
import Earth3D from "./Earth3D";
import { useState } from 'react';

const Hero = () => {
  const [showEarth, setShowEarth] = useState(false);

  if (showEarth) {
    return <Earth3D onBack={() => setShowEarth(false)} />;
  }

  return (
    <section className="w-full bg-gradient-to-br from-green-50 via-blue-50 to-teal-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20 relative">
        <ParticlesBackground />
        
        {/* Éléments décoratifs flottants */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        
        <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start lg:max-w-xl z-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4 bg-gradient-to-r from-green-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              Réduisez votre empreinte carbone
            </h1>
            <p className="text-lg opacity-80 leading-relaxed text-gray-700">
              Suivez, analysez et compensez vos émissions de CO₂ en temps réel. 
              Rejoignez des milliers d&apos;entreprises qui font la différence pour la planète.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <button 
              onClick={() => setShowEarth(true)}
              className="btn btn-primary btn-lg w-full sm:w-auto bg-gradient-to-r from-green-600 to-teal-600 border-none hover:from-green-700 hover:to-teal-700 text-white font-semibold px-8 py-3 rounded-lg transform transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🌍 Explorer la Planète 3D
            </button>
            <button className="btn btn-outline btn-lg w-full sm:w-auto border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200">
              📊 Voir la démo
            </button>
          </div>

          {/* Statistiques d'impact */}
          <div className="flex gap-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">2.5M</div>
              <div className="text-sm text-gray-600">Tonnes CO₂ évitées</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">1,200+</div>
              <div className="text-sm text-gray-600">Entreprises partenaires</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-600">98%</div>
              <div className="text-sm text-gray-600">Satisfaction client</div>
            </div>
          </div>

          <TestimonialsAvatars priority={true} />
        </div>

        <div className="flex-1 lg:max-w-lg relative z-10 flex flex-col gap-6">
          {/* Aperçu du dashboard interactif - déplacé vers le haut */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-green-100 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <span className="text-sm text-gray-500 ml-2">Dashboard en temps réel</span>
            </div>
            
            {/* Graphique simulé */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Émissions mensuelles</h3>
              <div className="flex items-end gap-2 h-24">
                <div className="bg-green-400 w-4 h-16 rounded-t"></div>
                <div className="bg-green-500 w-4 h-20 rounded-t"></div>
                <div className="bg-green-600 w-4 h-12 rounded-t"></div>
                <div className="bg-blue-400 w-4 h-18 rounded-t"></div>
                <div className="bg-blue-500 w-4 h-24 rounded-t"></div>
                <div className="bg-teal-400 w-4 h-14 rounded-t"></div>
                <div className="bg-teal-500 w-4 h-10 rounded-t"></div>
              </div>
            </div>

            {/* Métriques */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-lg p-3">
                <div className="text-xs text-green-700">Réduction ce mois</div>
                <div className="text-xl font-bold text-green-800">-23%</div>
              </div>
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-3">
                <div className="text-xs text-blue-700">Objectif atteint</div>
                <div className="text-xl font-bold text-blue-800">87%</div>
              </div>
            </div>

            {/* Badge de certification */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold transform rotate-12 shadow-lg">
              🏆 Certifié ISO 14001
            </div>
          </div>

          {/* Miniature Terre 3D - nouvelle section */}
          <div 
            onClick={() => setShowEarth(true)}
            className="relative bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl shadow-2xl p-6 border border-blue-200 transform hover:scale-105 transition-all duration-300 cursor-pointer group overflow-hidden"
          >
            {/* Fond étoilé */}
            <div className="absolute inset-0 opacity-30">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
            
            {/* Contenu de la miniature */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-3 h-3 rounded-full bg-teal-500 animate-pulse" style={{animationDelay: '1s'}}></div>
                <span className="text-sm text-white/80 ml-2">🌍 Vue Planète 3D</span>
              </div>
              
              {/* Planète miniature CSS */}
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 via-green-500 to-blue-600 shadow-2xl animate-spin-slow">
                    {/* Continents simulés */}
                    <div className="absolute top-2 left-3 w-4 h-3 bg-green-600 rounded-full opacity-80"></div>
                    <div className="absolute bottom-3 right-2 w-5 h-4 bg-green-600 rounded-full opacity-80"></div>
                    <div className="absolute top-6 right-4 w-3 h-2 bg-green-600 rounded-full opacity-80"></div>
                    
                    {/* Points lumineux pour les pays */}
                    <div className="absolute top-4 left-6 w-1 h-1 bg-red-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-6 left-4 w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-8 right-6 w-1 h-1 bg-orange-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                  </div>
                  
                  {/* Atmosphère */}
                  <div className="absolute inset-0 w-24 h-24 rounded-full bg-blue-300/20 animate-pulse"></div>
                </div>
              </div>
              
              {/* Texte d'appel à l'action */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">Explorer en 3D</h3>
                <p className="text-sm text-white/70 mb-3">
                  Découvrez l&apos;empreinte carbone mondiale sur une planète interactive
                </p>
                <div className="inline-flex items-center gap-2 text-teal-300 text-sm font-medium group-hover:text-teal-200 transition-colors">
                  <span>Cliquez pour explorer</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
            
            {/* Badge "Nouveau" */}
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-teal-400 to-blue-400 text-white px-2 py-1 rounded-full text-xs font-bold transform rotate-12 shadow-lg animate-bounce">
              ✨ Nouveau
            </div>
          </div>

          {/* Éléments flottants repositionnés */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-green-400 rounded-lg transform rotate-45 animate-float opacity-80"></div>
          <div className="absolute -bottom-4 -right-8 w-8 h-8 bg-blue-400 rounded-full animate-bounce-slow opacity-80"></div>
          <div className="absolute top-1/2 -left-8 w-6 h-6 bg-teal-400 rounded transform rotate-45 animate-float opacity-80"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
