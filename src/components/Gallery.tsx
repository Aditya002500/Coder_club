import { motion } from "framer-motion";
import InteractiveImageBentoGallery from "./bento-gallery";
import { useParallax } from "@/hooks/useScrollAnimation";

const Gallery = () => {
  const { ref: parallaxRef, offset } = useParallax(0.2);
  
  // Enhanced gallery data with descriptions for bento layout
  const galleryImages = [
    {
      id: 1,
      title: "Annual Hackathon 2024",
      desc: "48-hour coding marathon with innovative solutions and prizes",
      url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      span: "" // Empty span since we use CSS Grid layout
    },
    {
      id: 2,
      title: "JavaScript Workshop",
      desc: "Hands-on learning session covering modern JS frameworks",
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      span: ""
    },
    {
      id: 3,
      title: "Team Collaboration",
      desc: "Members working together on exciting projects",
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
      span: ""
    },
    {
      id: 4,
      title: "Code Review Session",
      desc: "Peer programming and best practices discussion",
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      span: ""
    },
    {
      id: 5,
      title: "Project Demo Day",
      desc: "Showcasing innovative solutions and creative projects",
      url: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&q=80",
      span: ""
    },
    {
      id: 6,
      title: "Technical Talk",
      desc: "Industry expert sharing insights on latest technologies",
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
      span: ""
    },
    {
      id: 7,
      title: "Algorithm Workshop",
      desc: "Deep dive into data structures and problem solving",
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      span: ""
    },
    {
      id: 8,
      title: "Open Source Contribution",
      desc: "Contributing to community projects and learning Git workflows",
      url: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&q=80",
      span: ""
    },
    {
      id: 9,
      title: "Mobile App Development",
      desc: "Building cross-platform applications with React Native",
      url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      span: ""
    },
    {
      id: 10,
      title: "Web Design Showcase",
      desc: "Creative UI/UX designs and modern web technologies",
      url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      span: ""
    }
  ];

  return (
    <div id="gallery" className="relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div
        ref={parallaxRef}
        className="absolute inset-0 opacity-20"
        style={{ y: offset * 0.3 }}
      >
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-accent/10 rounded-full blur-xl" />
      </motion.div>

      {/* Custom CSS for glass effect integration */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .gallery-bento-container .bg-background {
            background: transparent !important;
          }
          
          .gallery-bento-container h2 {
            color: rgba(255, 255, 255, 0.95) !important;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          }
          
          .gallery-bento-container p {
            color: rgba(255, 255, 255, 0.8) !important;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
          }
          
          .gallery-bento-container .bg-card {
            background: rgba(255, 255, 255, 0.05) !important;
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3) !important;
          }
          
          .gallery-bento-container .bg-card:hover {
            background: rgba(255, 255, 255, 0.08) !important;
            border-color: rgba(255, 255, 255, 0.2) !important;
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4) !important;
            transform: scale(1.02) translateY(-4px) !important;
          }
          
          .gallery-bento-container .shadow-sm {
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3) !important;
          }
          
          .gallery-bento-container .hover\\:shadow-lg:hover {
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4) !important;
          }
        `
      }} />
      
      <div className="gallery-bento-container relative z-10">
        <InteractiveImageBentoGallery
          title="Gallery"
          description="Moments captured from our workshops, hackathons, and coding sessions"
          imageItems={galleryImages}
        />
      </div>
    </div>
  );
};

export default Gallery;
