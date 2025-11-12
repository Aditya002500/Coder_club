import { HoverButton } from "@/components/ui/hover-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, UserPlus, BookOpen, Rocket, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, AnimatedContainer, AnimatedItem } from "@/components/ui/animated-section";
import { fadeInUp, slideInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { useParallax } from "@/hooks/useScrollAnimation";

const JoinUs = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Fill Membership Form",
      description:
        "Complete our simple online form with your details and areas of interest.",
    },
    {
      icon: BookOpen,
      title: "Attend Orientation",
      description:
        "Join our welcome session to learn about club activities and meet fellow members.",
    },
    {
      icon: Rocket,
      title: "Start as Nova",
      description:
        "Begin your journey as a Nova member and access all club resources and workshops.",
    },
  ];

  const { ref: parallaxRef, offset } = useParallax(0.4);
  
  return (
    <section id="join" className="py-24 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation={fadeInUp} className="text-center mb-16">
          <h2 className="font-heading responsive-text-4xl md:responsive-text-5xl font-bold mb-4 dot-background-heading">
            Ready to <span className="text-primary">Join Us?</span>
          </h2>
          <p className="responsive-text-lg dot-background-text max-w-2xl mx-auto">
            Become part of our thriving community and start your journey towards
            becoming a better developer
          </p>
        </AnimatedSection>

        <AnimatedContainer
          stagger={true}
          staggerDelay={0.2}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <AnimatedItem
                key={index}
                animation={slideInUp}
                index={index}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    rotateY: 5,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="glass-card h-full">
                    <CardContent className="p-8 text-center">
                      <motion.div
                        className="bg-transparent border border-primary/30 p-4 rounded-2xl inline-block mb-4 backdrop-blur-sm"
                        whileHover={{
                          scale: 1.1,
                          rotate: 360,
                          borderColor: "rgba(255, 255, 255, 0.5)",
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <motion.div
                        className="text-4xl font-bold text-primary/20 mb-2"
                        whileHover={{
                          scale: 1.2,
                          color: "var(--primary)"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {index + 1}
                      </motion.div>
                      <motion.h3
                        className="font-heading responsive-text-xl font-bold mb-3 dot-background-heading"
                        whileHover={{ color: "var(--primary)" }}
                        transition={{ duration: 0.2 }}
                      >
                        {step.title}
                      </motion.h3>
                      <p className="dot-background-text">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedItem>
            );
          })}
        </AnimatedContainer>

        <AnimatedSection animation={slideInUp} delay={600} className="max-w-3xl mx-auto">
          <motion.div
            whileHover={{
              scale: 1.02,
              y: -5,
            }}
            transition={{ duration: 0.3 }}
          >
            <Card className="glass-card border-2 border-primary/20">
              <CardContent className="p-8">
                <motion.h3
                  className="font-heading responsive-text-2xl font-bold mb-6 text-center dot-background-heading"
                  whileHover={{ scale: 1.05, color: "var(--primary)" }}
                  transition={{ duration: 0.2 }}
                >
                  What You'll Get
                </motion.h3>
                
                <motion.div
                  className="grid md:grid-cols-2 gap-4 mb-8"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    "Access to exclusive workshops",
                    "Mentorship from seniors",
                    "Project collaboration opportunities",
                    "Networking with industry professionals",
                    "Certificates and recognition",
                    "Skill development resources",
                    "Hackathon participation",
                    "Community support and guidance",
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-2"
                      variants={staggerItem}
                      whileHover={{
                        x: 5,
                        scale: 1.02
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      </motion.div>
                      <span className="dot-background-text">{benefit}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="text-center space-y-4">
                  <Button
                    className="mt-8 group mx-auto btn-with-icon"
                    size="lg"
                    onClick={() => {
                      // Handle join now
                      console.log("Join Now clicked");
                    }}
                  >
                    Join the Club
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Button>
                  <p className="responsive-text-sm dot-background-text">
                    Membership is open to all ISE students. No prior coding
                    experience required!
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default JoinUs;
