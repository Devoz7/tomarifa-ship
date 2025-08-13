const CarbonTrackerLogo = ({ 
  size = 32, 
  className = "", 
  animate = false 
}) => {
  return (
    <div className={`relative ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`${animate ? 'transform group-hover:scale-110 transition-transform duration-200' : ''}`}
      >
        {/* Planète Terre stylisée */}
        <circle cx="16" cy="16" r="14" fill="url(#gradient)" stroke="url(#borderGradient)" strokeWidth="1"/>
        
        {/* Continents stylisés */}
        <path d="M8 12c2-1 4-1 6 0s3 2 5 1c1-1 2-3 4-2" stroke="#10B981" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M6 20c3-1 5 0 7-1s4-2 6-1c1 1 2 2 4 1" stroke="#10B981" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        <path d="M10 8c2 1 3 0 5 1s3 1 4 0" stroke="#10B981" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        
        {/* Points d'émission CO2 */}
        <circle cx="12" cy="10" r="1.5" fill="#EF4444" opacity="0.8"/>
        <circle cx="20" cy="14" r="1" fill="#F59E0B" opacity="0.8"/>
        <circle cx="14" cy="22" r="1.2" fill="#EF4444" opacity="0.7"/>
        <circle cx="24" cy="20" r="0.8" fill="#F59E0B" opacity="0.9"/>
        
        {/* Effet d'atmosphère */}
        <circle cx="16" cy="16" r="14" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2"/>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6"/>
            <stop offset="30%" stopColor="#1E40AF"/>
            <stop offset="70%" stopColor="#059669"/>
            <stop offset="100%" stopColor="#0D9488"/>
          </linearGradient>
          <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981"/>
            <stop offset="100%" stopColor="#3B82F6"/>
          </linearGradient>
        </defs>
      </svg>
      {animate && (
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full animate-pulse"></div>
      )}
    </div>
  );
};

export default CarbonTrackerLogo;
