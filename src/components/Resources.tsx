import { Book, Code, Database, FileText, Globe, Layers, Video, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, AnimatedContainer, AnimatedItem } from "@/components/ui/animated-section";
import { fadeInUp, scaleIn, staggerContainer, staggerItem } from "@/lib/animations";
import { useParallax } from "@/hooks/useScrollAnimation";

const Resources = () => {
  const categories = [
    {
      id: 1,
      name: "React Development",
      icon: Code,
      color: "text-blue-400",
      resources: [
        { 
          title: "React Essentials Guide (PDF)", 
          type: "PDF", 
          link: "#" 
        },
        { 
          title: "Learn React (Official Docs)", 
          type: "Documentation", 
          link: "https://react.dev/learn" 
        },
        { 
          title: "Interactive React Tutorial", 
          type: "Tutorial", 
          link: "https://react-tutorial.app/" 
        },
      ],
    },
    {
      id: 2,
      name: "CSS & Styling",
      icon: Layers,
      color: "text-purple-400",
      resources: [
        { 
          title: "CSS Grid & Flexbox Workshop", 
          type: "Video Course", 
          link: "https://cssgrid.io/" 
        },
        { 
          title: "CSS Grid & Flexbox (Free Course)", 
          type: "Online Course", 
          link: "https://cursa.app/en/free-course/css-grid-and-flexbox-to-responsive-websites-efae" 
        },
      ],
    },
    {
      id: 3,
      name: "Tailwind CSS",
      icon: Layers,
      color: "text-cyan-400",
      resources: [
        { 
          title: "Tailwind CSS Cheatsheet (PDF)", 
          type: "PDF", 
          link: "https://browsee.io/content/Tailwind%20CSS%20Cheatsheet.pdf" 
        },
        { 
          title: "Tailwind CSS Cheatsheet (GitHub)", 
          type: "GitHub", 
          link: "https://github.com/just214/tailwind-cheatsheet" 
        },
      ],
    },
    {
      id: 4,
      name: "Node.js & Backend",
      icon: Database,
      color: "text-green-400",
      resources: [
        { 
          title: "Node.js Best Practices (PDF)", 
          type: "PDF Guide", 
          link: "https://assets.digitalocean.com/books/how-to-code-in-nodejs.pdf" 
        },
        { 
          title: "The Node Beginner Book", 
          type: "E-book", 
          link: "https://nodebeginner.org/" 
        },
      ],
    },
    {
      id: 5,
      name: "No-Code Tools",
      icon: Code,
      color: "text-accent",
      resources: [
        { title: "Figma for Developers", type: "Video", link: "#" },
        { title: "Webflow Crash Course", type: "Tutorial", link: "#" },
        { title: "Notion for Project Management", type: "PDF", link: "#" },
      ],
    },
    {
      id: 6,
      name: "Interview Preparation",
      icon: FileText,
      color: "text-accent",
      resources: [
        { title: "Technical Interview Guide", type: "PDF", link: "#" },
        { title: "System Design Primer", type: "Article", link: "#" },
        { title: "Behavioral Questions Bank", type: "PDF", link: "#" },
      ],
    },
  ];

  const getResourceIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FileText size={16} />;
      case "Video":
        return <Video size={16} />;
      case "Article":
        return <Book size={16} />;
      default:
        return <Code size={16} />;
    }
  };

  const { ref: parallaxRef, offset } = useParallax(0.2);
  
  return (
    <section id="resources" className="py-24 relative overflow-hidden">

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection animation={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-4">
            Resource Library
          </h2>
          <p className="text-lg text-secondary-text max-w-2xl mx-auto">
            Curated learning materials and tools to accelerate your coding journey
          </p>
        </AnimatedSection>

        <AnimatedContainer
          stagger={true}
          staggerDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <AnimatedItem
              key={category.id}
              animation={scaleIn}
              index={index}
            >
              <motion.div
                className="glass-card rounded-3xl p-8 h-full"
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  rotateY: 3,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center"
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                      backgroundColor: "rgba(59, 130, 246, 0.2)"
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <category.icon className={`${category.color} w-7 h-7`} />
                  </motion.div>
                  <motion.h3
                    className="text-xl font-bold text-primary-text"
                    whileHover={{ color: "var(--accent)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {category.name}
                  </motion.h3>
                </div>

                <motion.div
                  className="space-y-4"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {category.resources.map((resource, idx) => (
                    <motion.a
                      key={idx}
                      href={resource.link}
                      className="flex items-start gap-3 p-4 rounded-xl glass-card transition-colors group cursor-pointer"
                      variants={staggerItem}
                      whileHover={{
                        scale: 1.02,
                        backgroundColor: "rgba(59, 130, 246, 0.05)",
                        x: 5
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="mt-1 text-secondary-text group-hover:text-accent transition-colors"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {getResourceIcon(resource.type)}
                      </motion.div>
                      <div className="flex-1">
                        <motion.h4
                          className="font-semibold text-primary-text group-hover:text-accent transition-colors mb-1"
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          {resource.title}
                        </motion.h4>
                        <span className="text-xs text-secondary-text">
                          {resource.type}
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
};

export default Resources;
