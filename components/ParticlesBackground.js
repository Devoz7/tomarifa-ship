"use client";
import { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Fonction pour redimensionner le canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Classe pour les particules
    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.fadeDelay = Math.random() * 600;
        this.fadeStart = Date.now() + this.fadeDelay;
        this.fadingOut = false;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = Math.random() * 0.5 + 0.1;
        this.radius = Math.random() * 3 + 1;
        this.opacity = 0;
        this.maxOpacity = Math.random() * 0.6 + 0.2;
        this.color = this.getRandomColor();
        this.fadeDelay = Math.random() * 600;
        this.fadeStart = Date.now() + this.fadeDelay;
        this.fadingOut = false;
      }

      getRandomColor() {
        const colors = [
          '34, 197, 94',    // green-500
          '16, 185, 129',   // emerald-500
          '59, 130, 246',   // blue-500
          '139, 69, 19',    // brown
          '34, 197, 94',    // green-500 (plus fréquent)
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Effet de fade in/out
        const now = Date.now();
        if (now > this.fadeStart) {
          if (!this.fadingOut && this.opacity < this.maxOpacity) {
            this.opacity += 0.005;
          } else if (!this.fadingOut && this.opacity >= this.maxOpacity) {
            this.fadingOut = true;
          } else if (this.fadingOut) {
            this.opacity -= 0.003;
          }
        }

        // Reset si la particule sort de l'écran
        if (this.y > canvas.height + 10 || 
            this.x < -10 || 
            this.x > canvas.width + 10 || 
            this.opacity <= 0) {
          this.reset();
        }
      }

      draw(ctx) {
        if (this.opacity > 0) {
          ctx.save();
          ctx.globalAlpha = this.opacity;
          ctx.fillStyle = `rgba(${this.color}, 1)`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
    }

    // Créer les particules
    const particleCount = window.innerWidth < 768 ? 30 : 50;
    particlesRef.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle());
    }

    // Fonction d'animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Nettoyage
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        background: 'transparent',
      }}
    />
  );
};

export default ParticlesBackground;
