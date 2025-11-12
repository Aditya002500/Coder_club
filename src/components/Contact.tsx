import { Mail, Linkedin, Instagram, MapPin } from "lucide-react";
import { HoverButton } from "@/components/ui/hover-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AnimatedSection, AnimatedContainer, AnimatedItem } from "@/components/ui/animated-section";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animations";
import { useParallax } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref: parallaxRef, offset } = useParallax(0.3);
  
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation={fadeInUp} className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have questions? Want to collaborate? We'd love to hear from you!
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <AnimatedItem animation={fadeInLeft}>
              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  rotateY: 2,
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="glass-card h-full">
                  <CardContent className="p-8 space-y-6">
                    <div>
                      <motion.h3
                        className="font-heading text-2xl font-bold mb-6"
                        whileHover={{ color: "var(--primary)" }}
                        transition={{ duration: 0.2 }}
                      >
                        Contact Information
                      </motion.h3>
                    </div>

                    <motion.div
                      className="space-y-4"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="flex items-start space-x-4"
                        variants={staggerItem}
                        whileHover={{ x: 5, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="bg-primary/10 p-3 rounded-xl"
                          whileHover={{
                            scale: 1.1,
                            rotate: 10,
                            backgroundColor: "rgba(59, 130, 246, 0.2)"
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <Mail className="h-5 w-5 text-primary" />
                        </motion.div>
                        <div>
                          <p className="font-semibold mb-1">Email</p>
                          <motion.a
                            href="mailto:codersclub@university.edu"
                            className="text-foreground/70 hover:text-primary transition-colors"
                            whileHover={{ color: "var(--primary)" }}
                          >
                            codersclub@university.edu
                          </motion.a>
                        </div>
                      </motion.div>

                      <motion.div
                        className="flex items-start space-x-4"
                        variants={staggerItem}
                        whileHover={{ x: 5, scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="bg-primary/10 p-3 rounded-xl"
                          whileHover={{
                            scale: 1.1,
                            rotate: -10,
                            backgroundColor: "rgba(145, 47, 86, 0.2)"
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <MapPin className="h-5 w-5 text-primary" />
                        </motion.div>
                        <div>
                          <p className="font-semibold mb-1">Location</p>
                          <p className="text-foreground/70">
                            Department of ISE
                            <br />
                            University Campus, Block A
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>

                    <div className="pt-6 border-t border-border">
                      <p className="font-semibold mb-4">Follow Us</p>
                      <motion.div
                        className="flex space-x-4"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <motion.a
                          href="#"
                          className="p-3 bg-primary/10 rounded-xl transition-colors group"
                          variants={staggerItem}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(59, 130, 246, 0.2)",
                            rotate: 5
                          }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Linkedin className="h-5 w-5 text-primary" />
                        </motion.a>
                        <motion.a
                          href="#"
                          className="p-3 bg-accent/10 rounded-xl transition-colors group"
                          variants={staggerItem}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(145, 47, 86, 0.2)",
                            rotate: -5
                          }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Instagram className="h-5 w-5 text-accent" />
                        </motion.a>
                        <motion.a
                          href="mailto:codersclub@university.edu"
                          className="p-3 bg-accent/10 rounded-xl transition-colors group"
                          variants={staggerItem}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(168, 85, 247, 0.2)",
                            rotate: 5
                          }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Mail className="h-5 w-5 text-accent" />
                        </motion.a>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedItem>

            {/* Quick Message */}
            <AnimatedItem animation={fadeInRight} index={1}>
              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  rotateY: -2,
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="glass-card h-full">
                  <CardContent className="p-8">
                    <motion.h3
                      className="font-heading text-2xl font-bold mb-6"
                      whileHover={{ color: "var(--primary)" }}
                      transition={{ duration: 0.2 }}
                    >
                      Send us a Message
                    </motion.h3>
                    <p className="text-foreground/70 mb-6">
                      Click the button below to send us an email directly. We
                      typically respond within 24-48 hours.
                    </p>
                    
                    <HoverButton
                      className="w-full mb-8"
                      onClick={() =>
                        (window.location.href = "mailto:codersclub@university.edu")
                      }
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Email Us
                    </HoverButton>

                    <motion.div
                      className="p-6 bg-primary/5 rounded-xl border border-primary/10"
                      whileHover={{
                        scale: 1.02,
                        backgroundColor: "rgba(59, 130, 246, 0.1)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.h4
                        className="font-semibold mb-2"
                        whileHover={{ color: "var(--primary)" }}
                        transition={{ duration: 0.2 }}
                      >
                        Office Hours
                      </motion.h4>
                      <motion.div
                        className="space-y-1 text-sm text-foreground/70"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <motion.p variants={staggerItem}>Monday - Friday: 10:00 AM - 5:00 PM</motion.p>
                        <motion.p variants={staggerItem}>Saturday: 10:00 AM - 2:00 PM</motion.p>
                        <motion.p variants={staggerItem}>Sunday: Closed</motion.p>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedItem>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
