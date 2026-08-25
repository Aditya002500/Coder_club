import { ExternalLink, Github, Laptop } from "lucide-react";
import { motion } from "framer-motion";
import { HoverButton } from "@/components/ui/hover-button";
import { AnimatedSection, AnimatedContainer, AnimatedItem } from "@/components/ui/animated-section";
import { fadeInUp, slideInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { useParallax } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI-powered content generation",
      description: "Creator AI is an AI-powered content generation application",
      image: "https://i.ibb.co/3J1LhgT/Screenshot-2025-11-13-011217.png",
      tech: ["React", "Liveblocks", "Yjs", "Drizzle", "Node.js"],
      github: "https://github.com/Abhishek-ch30/Ai_automation",
      demo: "https://ai-automation-1vmt.onrender.com/"
    },
    {
      id: 2,
      title: "Business Website",
      description: "Built for IT solution business to provide web app development services",
      image: "https://i.ibb.co/CddH1Rr/Screenshot-2025-11-13-011605.png",
      tech: ["React", "Tailwind CSS", "Supabase"],
      github: "https://github.com/Abhishek-ch30/ElevateEdge_main_web",
      demo: "https://elevate-edge-main-web.vercel.app/"
    },
    {
      id: 3,
      title: "Student Portal",
      description: "Centralized platform for students to access resources, assignments, and announcements.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      github: "#",
      demo: "#",
      author: "Team Nova",
    },
    {
      id: 4,
      title: "Algorithm Visualizer",
      description: "Interactive tool to visualize sorting and searching algorithms with step-by-step execution.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tech: ["React", "D3.js", "Framer Motion"],
      github: "#",
      demo: "#",
      author: "Team Zenith",
    },
  ];

  const { ref: parallaxRef, offset } = useParallax(0.3);
  
  return (
    <section id="projects" className="py-24 relative overflow-hidden">

      <style dangerouslySetInnerHTML={{
        __html: `
          .projects-scroll::-webkit-scrollbar {
            display: none;
          }

          .projects-scroll {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection animation={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-4">
            Project Showcase
          </h2>
          <p className="text-lg text-secondary-text max-w-2xl mx-auto">
            Innovative projects built by our talented members
          </p>
        </AnimatedSection>

        {/* Mobile horizontal cards */}
        <div className="md:hidden mb-10">
          <div className="projects-scroll flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="snap-center min-w-[85%] glass-card rounded-3xl overflow-hidden backdrop-blur-xl border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {project.author && (
                    <div className="absolute top-3 right-3 glass-card px-3 py-1 rounded-full text-xs text-white/80">
                      {project.author}
                    </div>
                  )}
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm mt-1">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      className="flex-1 flex items-center justify-center gap-1 text-xs font-semibold text-primary bg-primary/10 rounded-xl py-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} /> Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex-1 flex items-center justify-center gap-1 text-xs font-semibold text-white bg-accent/70 rounded-xl py-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} /> Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <AnimatedContainer
            stagger={true}
            staggerDelay={0.3}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {projects.map((project, index) => (
              <AnimatedItem
                key={project.id}
                animation={slideInUp}
                index={index}
              >
                <motion.div
                  className="glass-card rounded-3xl overflow-hidden h-full"
                  whileHover={{
                    scale: 1.02,
                    y: -10,
                    rotateY: 2,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div
                      className="absolute top-4 right-4 glass-card px-3 py-1 rounded-full"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-2">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Laptop size={16} className="text-accent" />
                        </motion.div>
                        <span className="text-sm font-medium text-primary-text">
                          {project.author}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  <div className="p-8">
                    <motion.h3
                      className="text-2xl font-bold text-primary-text mb-3"
                      whileHover={{ color: "var(--primary)" }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-secondary-text mb-6">{project.description}</p>

                    <motion.div
                      className="flex flex-wrap gap-2 mb-6"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {project.tech.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium cursor-pointer"
                          variants={staggerItem}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(59, 130, 246, 0.2)"
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    <div className="flex gap-4">
                      <motion.a
                        href={project.github}
                        className="flex items-center gap-2 px-4 py-2 border-2 border-accent text-accent rounded-xl transition-colors"
                        whileHover={{
                          backgroundColor: "var(--accent)",
                          color: "white",
                          scale: 1.05
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Github size={18} />
                        </motion.div>
                        <span className="font-medium">Code</span>
                      </motion.a>
                      
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <HoverButton className="flex items-center gap-2">
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ExternalLink size={18} />
                          </motion.div>
                          <span className="font-medium">Live Demo</span>
                        </HoverButton>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
};

export default Projects;
