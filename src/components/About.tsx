import { Target, Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { AnimatedSection, AnimatedContainer, AnimatedItem } from "@/components/ui/animated-section";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animations";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <AnimatedSection animation={fadeInUp} className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 dot-background-heading">
            About <span className="text-primary">Coder's Club</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg dot-background-text max-w-2xl mx-auto px-2 sm:px-0">
            We're not just a club – we're a community of passionate learners,
            creators, and innovators.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left: Mission & Vision Cards */}
          <AnimatedContainer stagger={true} staggerDelay={0.2} className="space-y-4 sm:space-y-6">
            <AnimatedItem animation={fadeInLeft} index={0}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <SpotlightCard
                  className="hover-lift p-4 sm:p-6"
                  spotlightColor="rgba(59, 130, 246, 0.15)"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <motion.div
                      className="bg-primary/10 p-2 sm:p-3 rounded-lg sm:rounded-xl flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Target className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 dot-background-heading">
                        Our Mission
                      </h3>
                      <p className="dot-background-text leading-relaxed text-sm sm:text-base">
                        To foster a vibrant coding culture that encourages
                        innovation, collaboration, and continuous learning among
                        students. We aim to bridge the gap between academic theory
                        and practical application through hands-on projects and
                        peer-to-peer learning.
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            </AnimatedItem>

            <AnimatedItem animation={fadeInLeft} index={1}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <SpotlightCard
                  className="hover-lift p-4 sm:p-6"
                  spotlightColor="rgba(16, 185, 129, 0.15)"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <motion.div
                      className="bg-primary/10 p-2 sm:p-3 rounded-lg sm:rounded-xl flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Eye className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 dot-background-heading">
                        Our Vision
                      </h3>
                      <p className="dot-background-text leading-relaxed text-sm sm:text-base">
                        To become the leading student community for technology
                        enthusiasts, creating an ecosystem where every member feels
                        empowered to learn, build, and share their knowledge with
                        others. We envision a future where coding is accessible to
                        all.
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            </AnimatedItem>
          </AnimatedContainer>

          {/* Right: What We Do */}
          <AnimatedSection animation={fadeInRight} delay={300} className="mt-6 lg:mt-0">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <SpotlightCard
                className="space-y-4 sm:space-y-6 p-4 sm:p-6"
                spotlightColor="rgba(168, 85, 247, 0.15)"
              >
                <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Heart className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary" />
                  </motion.div>
                  <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold dot-background-heading">What We Do</h3>
                </div>

                <motion.div
                  className="space-y-3 sm:space-y-4"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    {
                      title: "Weekly Workshops",
                      desc: "Hands-on sessions covering frontend, backend, DSA, and emerging technologies.",
                    },
                    {
                      title: "Project Showcases",
                      desc: "Opportunities to present your work and get feedback from peers and mentors.",
                    },
                    {
                      title: "Hackathons & Competitions",
                      desc: "Team-based challenges to solve real-world problems and win exciting prizes.",
                    },
                    {
                      title: "Peer Learning",
                      desc: "Collaborative study groups and mentorship programs for skill development.",
                    },
                    {
                      title: "Industry Connections",
                      desc: "Guest lectures and networking sessions with professionals from top companies.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-2 sm:space-x-3 p-2.5 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl glass-card hover:bg-white/15 transition-all cursor-pointer touch-target"
                      variants={staggerItem}
                      whileHover={{
                        scale: 1.02,
                        x: 5,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        className="bg-primary/30 backdrop-blur-sm text-primary rounded-full w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 border border-primary/20"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        {index + 1}
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold mb-1 dot-background-heading text-sm sm:text-base">{item.title}</p>
                        <p className="text-xs sm:text-sm dot-background-text leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </SpotlightCard>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
