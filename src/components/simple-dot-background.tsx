import { useEffect, useRef } from 'react';

interface DotBackgroundProps {
  className?: string;
}

export const SimpleDotBackground = ({ className = "" }: DotBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Device and performance detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isLowPerformance = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : false;
    
    // Adaptive settings based on device
    const settings = {
      dotSize: isMobile ? 1.0 : 1.2,
      spacing: isMobile ? 40 : 35,
      maxDistance: isMobile ? 80 : 100,
      baseOpacity: isMobile ? 0.12 : 0.15,
      maxOpacity: isMobile ? 0.6 : 0.8,
      interactionMultiplier: isMobile ? 0.4 : 0.6,
      frameSkip: isMobile || isLowPerformance ? 2 : 1
    };

    let frameCount = 0;
    let lastScrollY = 0;
    let ticking = false;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 2 : 3);
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      ctx.scale(dpr, dpr);
      ctx.imageSmoothingEnabled = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle mouse events on mobile
      if (isMobile && Math.random() > 0.5) return;
      
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY + (window.scrollY || 0)
      };
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (Math.abs(window.scrollY - lastScrollY) > 10) {
            lastScrollY = window.scrollY;
            if (animationRef.current) {
              cancelAnimationFrame(animationRef.current);
              drawDots();
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const drawDots = () => {
      if (!ctx || !canvas) return;

      frameCount++;
      
      // Frame skipping for performance
      if (frameCount % settings.frameSkip !== 0) {
        animationRef.current = requestAnimationFrame(drawDots);
        return;
      }

      const rect = canvas.getBoundingClientRect();
      
      // Enhanced background with subtle gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, rect.height);
      gradient.addColorStop(0, '#0a0a0a');
      gradient.addColorStop(0.5, '#0f0f0f');
      gradient.addColorStop(1, '#1a1a1a');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, rect.width, rect.height);
      
      const scrollY = window.scrollY || 0;
      const visibleTop = Math.max(0, scrollY - rect.height);
      const visibleBottom = scrollY + window.innerHeight + rect.height;
      
      // Optimize drawing area
      for (let x = settings.spacing / 2; x < rect.width; x += settings.spacing) {
        for (let y = settings.spacing / 2 - (scrollY % settings.spacing); y < rect.height + settings.spacing; y += settings.spacing) {
          const worldY = y + scrollY;
          
          // Skip dots outside visible area
          if (worldY < visibleTop || worldY > visibleBottom) continue;
          
          const dx = mouseRef.current.x - x;
          const dy = mouseRef.current.y - worldY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          let opacity = settings.baseOpacity;
          let size = settings.dotSize;
          
          if (distance < settings.maxDistance) {
            const influence = 1 - distance / settings.maxDistance;
            opacity = Math.min(settings.maxOpacity, settings.baseOpacity + influence * settings.interactionMultiplier);
            size = settings.dotSize + influence * (isMobile ? 1.0 : 1.5);
          }
          
          // Use more efficient drawing
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      animationRef.current = requestAnimationFrame(drawDots);
    };

    // Intersection Observer for performance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!animationRef.current) {
            drawDots();
          }
        } else {
          if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
            animationRef.current = undefined;
          }
        }
      });
    });

    observer.observe(canvas);
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    drawDots();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10,
        display: 'block',
        willChange: 'auto',
        backfaceVisibility: 'hidden',
        transform: 'translateZ(0)'
      }}
      aria-hidden="true"
      role="presentation"
    />
  );
};