import { HoverButton } from "@/components/ui/hover-button";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { heroTitle, heroSubtitle, heroImage as heroImageVariant, staggerContainer, staggerItem } from "@/lib/animations";
import { useParallax } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref: parallaxRef, offset } = useParallax(0.3);
  
  useEffect(() => {
    // Load the Spline viewer script
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.99/build/spline-viewer.js';
    script.type = 'module';
    document.body.appendChild(script);
    
    return () => {
      // Clean up
      document.body.removeChild(script);
    };
  }, []);
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hide Spline watermark */}
      <style>{`
        spline-viewer::part(logo) {
          display: none !important;
        }
        spline-viewer #logo {
          display: none !important;
        }
        spline-viewer > div > a {
          display: none !important;
          pointer-events: none !important;
        }
      `}</style>
      
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-0 sm:pt-0 lg:pt-0"
      >

        <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10 pt-0">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[90vh] sm:min-h-[85vh]">
          {/* Left Content */}
          <motion.div
            className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              className="inline-flex items-center space-x-1.5 sm:space-x-2 bg-primary/20 backdrop-blur-md border border-primary/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
              variants={staggerItem}
            >
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary drop-shadow-lg" />
              <span className="text-xs sm:text-sm font-medium text-primary dot-background-text">
                Official ISE Department Club
              </span>
            </motion.div>

            <motion.h1
              className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight dot-background-heading"
              variants={heroTitle}
            >
              Building a{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Coding Culture
              </span>{" "}
              Together
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base lg:text-lg dot-background-text leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0"
              variants={heroSubtitle}
            >
              A student-led club fostering learning, creativity, and
              collaboration through code. Join us in creating an innovative
              community at the Department of Information Science & Engineering.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start"
              variants={staggerItem}
            >
              <HoverButton
                onClick={() => scrollToSection("#join")}
                className="group bg-primary hover:bg-primary/90 text-white border-none touch-target text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3"
              >
                Join the Club
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </HoverButton>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#workshops")}
                className="glass-card border-white/30 hover:bg-white/20 dot-background-text touch-target text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3"
              >
                View Workshops
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-6 sm:pt-8 max-w-sm sm:max-w-md mx-auto lg:mx-0"
              variants={staggerContainer}
            >
              <motion.div className="space-y-1 text-center lg:text-left" variants={staggerItem}>
                <div className="flex items-center justify-center lg:justify-start space-x-1 sm:space-x-2">
                  <Users className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-primary drop-shadow-lg" />
                  <motion.p
                    className="text-lg sm:text-xl lg:text-2xl font-bold font-heading dot-background-heading"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    200+
                  </motion.p>
                </div>
                <p className="text-xs sm:text-sm dot-background-text">Active Members</p>
              </motion.div>
              <motion.div className="space-y-1 text-center lg:text-left" variants={staggerItem}>
                <div className="flex items-center justify-center lg:justify-start space-x-1 sm:space-x-2">
                  <Code className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-accent drop-shadow-lg" />
                  <motion.p
                    className="text-lg sm:text-xl lg:text-2xl font-bold font-heading dot-background-heading"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4, duration: 0.5 }}
                  >
                    50+
                  </motion.p>
                </div>
                <p className="text-xs sm:text-sm dot-background-text">Projects Built</p>
              </motion.div>
              <motion.div className="space-y-1 text-center lg:text-left" variants={staggerItem}>
                <div className="flex items-center justify-center lg:justify-start space-x-1 sm:space-x-2">
                  <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-accent drop-shadow-lg" />
                  <motion.p
                    className="text-lg sm:text-xl lg:text-2xl font-bold font-heading dot-background-heading"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.6, duration: 0.5 }}
                  >
                    30+
                  </motion.p>
                </div>
                <p className="text-xs sm:text-sm dot-background-text">Workshops</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Spline 3D Model */}
          <motion.div
            className="order-1 lg:order-2 relative w-full max-w-2xl mx-auto lg:mx-0 lg:ml-auto aspect-square lg:aspect-auto"
            variants={heroImageVariant}
          >
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] flex items-center justify-center rounded-3xl overflow-visible">
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  transform: `translateY(${offset * 20}px)`,
                  transition: 'transform 0.1s ease-out',
                }}
              >
                <spline-viewer
                  url="https://prod.spline.design/z8Bs-o7O9gZDV1jo/scene.splinecode"
                  loading="eager"
                  style={{
                    width: '100%',
                    height: '110%',
                    border: 'none',
                    background: 'transparent',
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
