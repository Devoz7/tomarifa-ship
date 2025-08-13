'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// Données simulées d'empreinte carbone par pays
const carbonData = {
  'China': { co2: '10.67 Gt', coordinates: [104.1954, 35.8617], color: '#ff4444' },
  'United States': { co2: '5.42 Gt', coordinates: [-95.7129, 37.0902], color: '#ff6666' },
  'India': { co2: '2.65 Gt', coordinates: [78.9629, 20.5937], color: '#ff8888' },
  'Russia': { co2: '1.71 Gt', coordinates: [105.3188, 61.5240], color: '#ffaaaa' },
  'Japan': { co2: '1.16 Gt', coordinates: [138.2529, 36.2048], color: '#ffcccc' },
  'Germany': { co2: '0.75 Gt', coordinates: [10.4515, 51.1657], color: '#ffdddd' },
  'Iran': { co2: '0.72 Gt', coordinates: [53.6880, 32.4279], color: '#ffeeee' },
  'South Korea': { co2: '0.66 Gt', coordinates: [127.7669, 35.9078], color: '#ffffaa' },
  'Saudi Arabia': { co2: '0.62 Gt', coordinates: [45.0792, 23.8859], color: '#ffffcc' },
  'Indonesia': { co2: '0.61 Gt', coordinates: [113.9213, -0.7893], color: '#ffffdd' },
  'Canada': { co2: '0.57 Gt', coordinates: [-106.3468, 56.1304], color: '#aaffaa' },
  'Mexico': { co2: '0.49 Gt', coordinates: [-102.5528, 23.6345], color: '#aaffcc' },
  'Brazil': { co2: '0.46 Gt', coordinates: [-51.9253, -14.2350], color: '#aaffdd' },
  'South Africa': { co2: '0.46 Gt', coordinates: [22.9375, -30.5595], color: '#aaffee' },
  'Turkey': { co2: '0.42 Gt', coordinates: [35.2433, 38.9637], color: '#ccffaa' }
};

const Earth3D = ({ onBack }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const earthRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const animationIdRef = useRef(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const markersRef = useRef([]);

  useEffect(() => {
    if (!mountRef.current) return;

    const mountElement = mountRef.current; // Copie de la référence au début

    // Configuration de la scène
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountElement.appendChild(renderer.domElement);

    // Sauvegarde des références
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    // Création de la planète Terre
    const earthGeometry = new THREE.SphereGeometry(5, 64, 64);
    
    // Texture procédurale de la Terre plus réaliste
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 512;
    const context = canvas.getContext('2d');
    
    // Créer un gradient pour simuler les océans et continents
    const gradient = context.createLinearGradient(0, 0, 1024, 512);
    gradient.addColorStop(0, '#1e40af'); // Bleu océan
    gradient.addColorStop(0.3, '#2563eb');
    gradient.addColorStop(0.7, '#3b82f6');
    gradient.addColorStop(1, '#1e40af');
    
    context.fillStyle = gradient;
    context.fillRect(0, 0, 1024, 512);
    
    // Ajouter des "continents" verts
    context.fillStyle = '#059669'; // Vert
    for (let i = 0; i < 30; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 512;
      const size = Math.random() * 100 + 50;
      context.beginPath();
      context.arc(x, y, size, 0, Math.PI * 2);
      context.fill();
    }
    
    // Ajouter de la texture nuageuse
    context.fillStyle = 'rgba(255, 255, 255, 0.3)';
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 512;
      const size = Math.random() * 60 + 30;
      context.beginPath();
      context.arc(x, y, size, 0, Math.PI * 2);
      context.fill();
    }
    
    const earthTexture = new THREE.CanvasTexture(canvas);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: earthTexture,
      transparent: true,
      opacity: 0.9,
      shininess: 100,
    });

    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earthRef.current = earth;
    scene.add(earth);

    // Ajout d'une atmosphère
    const atmosphereGeometry = new THREE.SphereGeometry(5.2, 64, 64);
    const atmosphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x87ceeb,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Ajout d'étoiles en arrière-plan
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 10000;
    const positions = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 2000;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 2 });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Ajout des marqueurs de pays
    const markers = [];
    Object.entries(carbonData).forEach(([country, data]) => {
      // Marqueur principal
      const markerGeometry = new THREE.SphereGeometry(0.08, 16, 16);
      const markerMaterial = new THREE.MeshBasicMaterial({ 
        color: data.color,
        transparent: true,
        opacity: 0.9 
      });
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      
      // Conversion des coordonnées géographiques en coordonnées 3D
      const lat = data.coordinates[1] * Math.PI / 180;
      const lon = data.coordinates[0] * Math.PI / 180;
      const radius = 5.15;
      
      marker.position.x = radius * Math.cos(lat) * Math.cos(lon);
      marker.position.y = radius * Math.sin(lat);
      marker.position.z = radius * Math.cos(lat) * Math.sin(lon);
      
      // Halo autour du marqueur
      const haloGeometry = new THREE.RingGeometry(0.1, 0.2, 16);
      const haloMaterial = new THREE.MeshBasicMaterial({ 
        color: data.color,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide
      });
      const halo = new THREE.Mesh(haloGeometry, haloMaterial);
      halo.position.copy(marker.position);
      halo.lookAt(0, 0, 0);
      
      marker.userData = { country, data, halo };
      markers.push(marker);
      scene.add(marker);
      scene.add(halo);
    });

    markersRef.current = markers;

    // Éclairage
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 5);
    scene.add(directionalLight);

    // Position de la caméra
    camera.position.z = 15;

    // Gestion des clics sur les marqueurs
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseClick = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(markers);

      if (intersects.length > 0) {
        const marker = intersects[0].object;
        setSelectedCountry({
          name: marker.userData.country,
          data: marker.userData.data
        });
      }
    };

    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(markers);

      if (intersects.length > 0) {
        const marker = intersects[0].object;
        setHoveredCountry(marker.userData.country);
        document.body.style.cursor = 'pointer';
      } else {
        setHoveredCountry(null);
        document.body.style.cursor = 'default';
      }
    };

    renderer.domElement.addEventListener('click', onMouseClick);
    renderer.domElement.addEventListener('mousemove', onMouseMove);

    // Animation de rotation
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      if (earth) {
        earth.rotation.y += 0.005;
      }
      
      // Animation des marqueurs et halos
      markers.forEach((marker, index) => {
        const time = Date.now() * 0.001;
        // Pulsation des marqueurs
        marker.scale.setScalar(1 + Math.sin(time * 3 + index) * 0.3);
        
        // Animation des halos
        if (marker.userData.halo) {
          marker.userData.halo.scale.setScalar(1 + Math.sin(time * 2 + index) * 0.5);
          marker.userData.halo.material.opacity = 0.2 + Math.sin(time * 2 + index) * 0.2;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Gestion du redimensionnement
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Nettoyage
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('click', onMouseClick);
      renderer.domElement.removeEventListener('mousemove', onMouseMove);
      if (mountElement && renderer.domElement) {
        mountElement.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Filtrage des pays pour la recherche
  const filteredCountries = Object.entries(carbonData).filter(([country]) =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCountrySelect = (countryName) => {
    const country = carbonData[countryName];
    setSelectedCountry({
      name: countryName,
      data: country
    });
    setSearchTerm('');

    // Animation vers le pays sélectionné
    if (cameraRef.current && earthRef.current) {
      const lat = country.coordinates[1] * Math.PI / 180;
      const lon = country.coordinates[0] * Math.PI / 180;
      
      // Position de la caméra pour voir le pays
      const targetPosition = {
        x: 12 * Math.cos(lat) * Math.cos(lon),
        y: 12 * Math.sin(lat),
        z: 12 * Math.cos(lat) * Math.sin(lon)
      };

      // Animation smooth vers la position
      const animateCamera = (startPos, endPos, duration = 2000) => {
        const startTime = Date.now();
        
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function
          const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
          const easedProgress = easeInOutCubic(progress);
          
          cameraRef.current.position.x = startPos.x + (endPos.x - startPos.x) * easedProgress;
          cameraRef.current.position.y = startPos.y + (endPos.y - startPos.y) * easedProgress;
          cameraRef.current.position.z = startPos.z + (endPos.z - startPos.z) * easedProgress;
          
          cameraRef.current.lookAt(0, 0, 0);
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        
        animate();
      };
      
      animateCamera(cameraRef.current.position, targetPosition);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Rendu 3D */}
      <div ref={mountRef} className="absolute inset-0" />
      
      {/* Interface utilisateur */}
      <div className="absolute top-0 left-0 right-0 z-10 p-6">
        {/* Bouton retour */}
        <div className="absolute top-4 left-4">
          <button
            onClick={onBack}
            className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-all flex items-center gap-2"
          >
            ← Retour
          </button>
        </div>

        {/* Titre et description */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            🌍 Carbon Tracker
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explorez l&apos;empreinte carbone mondiale en temps réel. Cliquez sur un pays ou utilisez la recherche.
          </p>
        </div>

        {/* Barre de recherche */}
        <div className="max-w-md mx-auto relative">
          <input
            type="text"
            placeholder="Rechercher un pays..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-gray-300 border border-white/20 focus:outline-none focus:border-green-400 focus:bg-white/20 transition-all"
          />
          
          {/* Résultats de recherche */}
          {searchTerm && filteredCountries.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 max-h-60 overflow-y-auto">
              {filteredCountries.map(([country, data]) => (
                <button
                  key={country}
                  onClick={() => handleCountrySelect(country)}
                  className="w-full px-4 py-3 text-left text-white hover:bg-white/20 transition-colors border-b border-white/10 last:border-b-0"
                >
                  <div className="font-semibold">{country}</div>
                  <div className="text-sm text-gray-300">CO₂: {data.co2}</div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Panneau d'informations du pays sélectionné */}
      {selectedCountry && (
        <div className="absolute bottom-6 left-6 right-6 md:left-6 md:right-auto md:w-96 z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-white">{selectedCountry.name}</h3>
              <button
                onClick={() => setSelectedCountry(null)}
                className="text-white/70 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-3">
              <div>
                <span className="text-gray-300">Émissions CO₂ annuelles:</span>
                <div className="text-3xl font-bold text-red-400">{selectedCountry.data.co2}</div>
              </div>
              
              <div className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: selectedCountry.data.color }}
                ></div>
                <span className="text-gray-300">Niveau d&apos;intensité carbone</span>
              </div>
              
              <div className="pt-3 border-t border-white/20">
                <p className="text-sm text-gray-300">
                  Cliquez sur d&apos;autres pays pour comparer les données d&apos;émissions.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Instructions flottantes */}
      {!selectedCountry && (
        <div className="absolute bottom-6 right-6 z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
            <p className="text-white text-sm">
              🖱️ Cliquez sur les points lumineux<br/>
              🔍 Utilisez la recherche en haut<br/>
              🌍 La Terre tourne automatiquement
            </p>
          </div>
        </div>
      )}

      {/* Indicateur de pays survolé */}
      {hoveredCountry && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
          <div className="bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
            {hoveredCountry}
          </div>
        </div>
      )}
    </div>
  );
};

export default Earth3D;
