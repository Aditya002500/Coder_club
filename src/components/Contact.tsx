import { Mail, Instagram, MapPin } from "lucide-react";
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

        <div className="max-w-6xl mx-auto">
          <div className="space-y-8 lg:space-y-0 lg:grid lg:gap-8 lg:grid-cols-[1.1fr_1fr]">
            {/* WhatsApp Community */}
            <AnimatedItem animation={fadeInLeft}>
              <motion.div
                className="lg:h-full"
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  rotateY: -2,
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="glass-card lg:h-full">
                  <CardContent className="p-8 space-y-6 flex flex-col h-full">
                    <motion.h3
                      className="font-heading text-2xl font-bold"
                      whileHover={{ color: "var(--primary)" }}
                      transition={{ duration: 0.2 }}
                    >
                      Join WhatsApp Community
                    </motion.h3>
                    <p className="text-foreground/70">
                      Stay updated with event announcements, resources, and peer support by joining our active WhatsApp group.
                    </p>
                    <motion.div
                      className="rounded-2xl overflow-hidden border border-primary/20 shadow-inner flex-1 min-h-[22rem] bg-black/5"
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.img
                        src="https://i.ibb.co/GvZn2cXb/IMG-20251118-WA0001-1.jpg"
                        alt="Coder's Club WhatsApp Community"
                        className="w-full h-full object-contain"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.div>
                    <div className="pt-2 mt-auto">
                      <a
                        href="https://chat.whatsapp.com/DPL6tYAbpHG5qav7YbCGXA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <HoverButton className="w-full md:w-auto mx-auto flex justify-center">
                          Join Community
                        </HoverButton>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatedItem>

            <div className="flex flex-col gap-8">
              {/* Contact Info */}
              <AnimatedItem animation={fadeInRight}>
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    rotateY: 2,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="glass-card">
                    <CardContent className="p-8 space-y-6 flex flex-col h-full">
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
                              href="mailto:codersclubrvitm@gmail.com"
                              className="text-foreground/70 hover:text-primary transition-colors whitespace-nowrap text-sm sm:text-base"
                              whileHover={{ color: "var(--primary)" }}
                            >codersclubrvitm@gmail.com</motion.a>
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
                             
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>

                      <div className="pt-6 border-t border-border mt-auto">
                        <p className="font-semibold mb-4">Follow Us</p>
                        <motion.div
                          className="flex space-x-4"
                          variants={staggerContainer}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          <motion.a
                            href="https://www.instagram.com/codersclub.rvitm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Instagram className="h-5 w-5 text-accent" />
                          </motion.a>
                          <motion.a
                            href="mailto:codersclubrvitm@gmail.com"
                            className="p-3 bg-accent/10 rounded-xl transition-colors group"
                            variants={staggerItem}
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "rgba(168, 85, 247, 0.2)",
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
                  <Card className="glass-card">
                    <CardContent className="p-8 flex flex-col gap-6 h-full">
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
                      
                      <a href="mailto:codersclubrvitm@gmail.com">
                        <HoverButton
                          className="w-full md:w-auto border border-primary/20"
                        >
                          <Mail className="mr-2 h-5 w-5" />
                          Email Us
                        </HoverButton>
                      </a>

                      <motion.div
                        className="p-6 bg-primary/5 rounded-xl border border-primary/10 mt-auto"
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
      </div>
    </section>
  );
};

export default Contact;
