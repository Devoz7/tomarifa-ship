import React from 'react';

const AirplaneIcon = ({ className = "w-6 h-6" }) => {
  return (
    <div className={`${className} relative`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-white transform rotate-12 animate-pulse"
      >
        <path
          d="M21 16V14L13 9V3.5A1.5 1.5 0 0 0 11.5 2A1.5 1.5 0 0 0 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z"
          fill="currentColor"
          className="drop-shadow-lg"
        />
      </svg>
      {/* Traînée de l'avion */}
      <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
        <div className="flex space-x-1">
          <div className="w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '0ms'}}></div>
          <div className="w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '200ms'}}></div>
          <div className="w-1 h-1 bg-white rounded-full animate-ping" style={{animationDelay: '400ms'}}></div>
        </div>
      </div>
    </div>
  );
};

export const LoginSuccessToast = ({ userName, onClose }) => {
  const handleCloseClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  return (
    <div className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-sm max-w-md mx-auto">
      {/* Bouton de fermeture */}
      <button
        onClick={handleCloseClick}
        className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 group z-[10001] cursor-pointer"
        style={{ zIndex: 10001 }}
        type="button"
      >
        <svg className="w-4 h-4 text-white group-hover:rotate-90 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="p-8">
        <div className="flex flex-col items-center text-center">
          {/* Animation d'avion principale */}
          <div className="relative mb-6">
            <div className="relative">
              <AirplaneIcon className="w-16 h-16" />
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-pulse"></div>
            </div>
            {/* Cercle de succès animé */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Titre principal */}
          <h2 className="text-2xl font-bold text-white mb-2">
            Décollage réussi ! ✈️
          </h2>
          
          {/* Message de bienvenue */}
          <p className="text-white/90 text-lg mb-1">
            Bienvenue à bord {userName?.split(' ')[0]} 🎉
          </p>
          
          {/* Sous-titre */}
          <p className="text-white/70 text-sm mb-6">
            Vous êtes maintenant connecté et prêt à voyager vers de nouveaux horizons
          </p>

          {/* Barre de progression animée */}
          <div className="w-full bg-white/20 rounded-full h-2 mb-4 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse" style={{width: '100%'}}></div>
          </div>

          {/* Message de statut */}
          <p className="text-white/60 text-xs uppercase tracking-wider font-semibold">
            🌟 Authentification terminée avec succès
          </p>
        </div>
      </div>

      {/* Particules d'animation en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-white/25 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-4 right-12 w-1 h-1 bg-white/35 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
      </div>
    </div>
  );
};

export default AirplaneIcon;
