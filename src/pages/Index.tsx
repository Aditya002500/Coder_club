import NotchNavbar from "@/components/NotchNavbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Levels from "@/components/Levels";
import Workshops from "@/components/Workshops";
import Gallery from "@/components/Gallery";
import Projects from "@/components/Projects";
import Resources from "@/components/Resources";
import Team from "@/components/Team";
import JoinUs from "@/components/JoinUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SimpleDotBackground } from "@/components/simple-dot-background";
import { GlassOverlay } from "@/components/glass-overlay";
import CurvedSection from "@/components/CurvedSection";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Layer 1: Interactive dot background (z-index: -10) */}
      <SimpleDotBackground />
      
      {/* Layer 2: Glass overlay system (z-index: 5) */}
      <div className="relative z-[5]">
        {/* Full-width Navbar - iPhone style */}
        <NotchNavbar />
        
        {/* Content sections glass overlays */}
        <div className="relative space-y-3 sm:space-y-4 lg:space-y-6 px-2 sm:px-4 lg:px-6 pb-8">
          {/* Hero section - first child with no top margin */}
          <div className="!mt-0">
          {/* Hero section glass overlay */}
          <GlassOverlay variant="light" className="my-4 sm:my-6 lg:my-8">
            <CurvedSection
              position="top"
              glassEffect="backdrop-blur-0 bg-transparent border-0"
              className="relative"
            >
              <Hero />
            </CurvedSection>
          </GlassOverlay>
          
          {/* About section glass overlay */}
          <GlassOverlay variant="light" className="my-4 sm:my-6 lg:my-8">
            <CurvedSection
              position="middle"
              glassEffect="backdrop-blur-0 bg-transparent border-0"
            >
              <About />
            </CurvedSection>
          </GlassOverlay>
          
          {/* Levels section glass overlay */}
          <GlassOverlay variant="light" className="my-4 sm:my-6 lg:my-8">
            <CurvedSection
              position="middle"
              glassEffect="backdrop-blur-0 bg-transparent border-0"
            >
              <Levels />
            </CurvedSection>
          </GlassOverlay>
          
          {/* Workshops section glass overlay */}
          <GlassOverlay variant="light" className="my-4 sm:my-6 lg:my-8">
            <CurvedSection
              position="middle"
              glassEffect="backdrop-blur-0 bg-transparent border-0"
            >
              <Workshops />
            </CurvedSection>
          </GlassOverlay>
          
          {/* Gallery section glass overlay */}
          <GlassOverlay variant="light" className="my-4 sm:my-6 lg:my-8">
            <CurvedSection
              position="middle"
              glassEffect="backdrop-blur-0 bg-transparent border-0"
            >
              <Gallery />
            </CurvedSection>
          </GlassOverlay>
          
          {/* Projects section glass overlay */}
          <GlassOverlay variant="light" className="my-4 sm:my-6 lg:my-8">
            <CurvedSection
              position="middle"
              glassEffect="backdrop-blur-0 bg-transparent border-0"
            >
              <Projects />
            </CurvedSection>
          </GlassOverlay>
          
          {/* Resources section glass overlay */}
          <GlassOverlay variant="light" className="my-4 sm:my-6 lg:my-8">
            <CurvedSection
              position="middle"
              glassEffect="backdrop-blur-0 bg-transparent border-0"
            >
              <Resources />
            </CurvedSection>
          </GlassOverlay>
          
          {/* Team section glass overlay */}
          <GlassOverlay variant="light" className="my-4 sm:my-6 lg:my-8">
            <CurvedSection
              position="middle"
              glassEffect="backdrop-blur-0 bg-transparent border-0"
            >
              <Team />
            </CurvedSection>
          </GlassOverlay>
          
          {/* Join Us section glass overlay */}
          <GlassOverlay variant="light" className="my-4 sm:my-6 lg:my-8">
            <CurvedSection
              position="middle"
              glassEffect="backdrop-blur-0 bg-transparent border-0"
            >
              <JoinUs />
            </CurvedSection>
          </GlassOverlay>
          
          {/* Contact section glass overlay */}
          <GlassOverlay variant="light" className="my-4 sm:my-6 lg:my-8">
            <CurvedSection
              position="middle"
              glassEffect="backdrop-blur-0 bg-transparent border-0"
            >
              <Contact />
            </CurvedSection>
          </GlassOverlay>
          
          {/* Footer section glass overlay */}
          <GlassOverlay variant="light" className="mt-4 sm:mt-6 lg:mt-8">
            <CurvedSection
              position="bottom"
              glassEffect="backdrop-blur-0 bg-transparent border-0"
            >
              <Footer />
            </CurvedSection>
          </GlassOverlay>
          </div>
        </div>
      </div>
      
      {/* Layer 3: Top-level content (z-index: 10) - Available for any floating elements */}
      <div className="relative z-10 pointer-events-none">
        {/* Reserved for floating UI elements, tooltips, modals, etc. */}
      </div>
    </div>
  );
};

export default Index;
