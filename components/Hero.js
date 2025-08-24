'use client';

import { useState, useRef, useEffect } from 'react';

function Hero() {
  const [tripType, setTripType] = useState('round-trip');
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // La vidéo se joue une fois puis revient au début et s'arrête
      const handleVideoEnd = () => {
        video.currentTime = 0; // Revenir au début de la vidéo
        video.pause();
      };
      
      video.addEventListener('ended', handleVideoEnd);
      
      return () => {
        video.removeEventListener('ended', handleVideoEnd);
      };
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/images/video-background.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
      
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-left mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
              Book all your
            </h1>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              airline tickets
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              at the best price using your preferred cryptocurrency.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-600 font-medium">Flight search</span>
            </div>

            <div className="flex gap-2 mb-4">
              <button 
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  tripType === "round-trip" 
                    ? "bg-violet-600 text-white" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setTripType("round-trip")}
              >
                Roundtrip
              </button>
              <button 
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  tripType === "one-way" 
                    ? "bg-violet-600 text-white" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setTripType("one-way")}
              >
                One way
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-end">
              <div className="relative">
                <label className="block text-gray-600 text-sm font-medium mb-1">From?</label>
                <input
                  type="text"
                  placeholder="City or airport"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-800 font-medium leading-tight hover:border-violet-400 focus:border-violet-400 focus:outline-none transition-all h-12"
                />
              </div>

              <div className="relative">
                <label className="block text-gray-600 text-sm font-medium mb-1">To?</label>
                <input
                  type="text"
                  placeholder="City or airport"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-gray-800 font-medium leading-tight hover:border-violet-400 focus:border-violet-400 focus:outline-none transition-all h-12"
                />
              </div>

              <div className="relative">
                <label className="block text-gray-600 text-sm font-medium mb-1">Dates</label>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 cursor-pointer hover:border-violet-400 transition-all h-12 flex items-center">
                  <div className="flex-1">
                    <div className="text-gray-800 font-medium leading-tight text-sm">
                      Departure - Return
                    </div>
                  </div>
                  <span className="text-violet-600 ml-2 text-sm">📅</span>
                </div>
              </div>

              <div className="relative">
                <label className="block text-gray-600 text-sm font-medium mb-1">Crypto payment</label>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 cursor-pointer hover:border-violet-400 transition-all h-12 flex items-center">
                  <div className="flex-1">
                    <div className="text-gray-800 font-medium leading-tight flex items-center gap-2 text-sm">
                      <span className="text-yellow-500">₿</span>
                      <span>Bitcoin</span>
                    </div>
                    <div className="text-green-600 text-xs">-5% discount</div>
                  </div>
                  <span className="text-violet-600 ml-2">▼</span>
                </div>
              </div>

              <div>
                <button className="w-full bg-violet-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-violet-700 transition-all duration-300 shadow-md hover:shadow-lg h-12 text-sm">
                  Search
                </button>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-violet-600" defaultChecked />
                <span className="text-gray-600 text-sm">Baggage included</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-violet-600" defaultChecked />
                <span className="text-gray-600 text-sm">Direct flight</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
