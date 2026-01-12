import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { HoverButton } from "@/components/ui/hover-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { AnimatedSection, AnimatedContainer, AnimatedItem } from "@/components/ui/animated-section";
import { fadeInUp, slideInUp, staggerContainer, staggerItem } from "@/lib/animations";

const Workshops = () => {
  const workshops = [
    {
      title: "DSA BASICS",
      date: "To be announced",
      venue: "Venue to be announced",
      status: "upcoming",
      description:
        "Master the fundamentals of Data Structures and Algorithms with hands-on practice.",
      tags: ["DSA", "Algorithms", "Programming"],
      targetAudience: "Second-year ISE students"
    },
    {
      title: "Low-Code, No-Code Development",
      date: "17/11/2025",
      venue: "Venue to be announced",
      status: "past",
      description:
        "Learn to build and deploy your first website without writing a single line of code. Perfect for beginners!",
      tags: ["Web Development", "No-Code", "Beginner Friendly"],
      targetAudience: "First-year ISE students"
    }
  ];

  return (
    <section id="workshops" className="py-24 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection animation={fadeInUp} className="text-center mb-16">
          <h2 className="font-heading responsive-text-4xl md:responsive-text-5xl font-bold mb-4 dot-background-heading">
            Workshops & <span className="text-primary">Sessions</span>
          </h2>
          <p className="responsive-text-lg dot-background-text max-w-2xl mx-auto">
            Hands-on learning experiences designed to accelerate your coding
            journey
          </p>
        </AnimatedSection>

        <AnimatedContainer
          stagger={true}
          staggerDelay={0.2}
          className="grid md:grid-cols-2 gap-8"
        >
          {workshops.map((workshop, index) => (
            <AnimatedItem
              key={index}
              animation={slideInUp}
              index={index}
            >
              <motion.div
                whileHover={{
                  scale: 1.02,
                  y: -8,
                  rotateX: 2,
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group glass-card h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Badge
                          variant={
                            workshop.status === "upcoming" ? "default" : "outline"
                          }
                          className={
                            workshop.status === "past"
                              ? "bg-transparent border-white/30 text-white backdrop-blur-sm"
                              : ""
                          }
                        >
                          {workshop.status === "upcoming" ? "Upcoming" : "Past Event"}
                        </Badge>
                      </motion.div>
                      <div className="flex items-center space-x-4 text-sm text-foreground/70">
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          {workshop.targetAudience}
                        </div>
                      </div>
                    </div>

                    <motion.h3
                      className="font-heading responsive-text-xl font-bold transition-colors dot-background-heading"
                      whileHover={{ color: "var(--primary)" }}
                    >
                      {workshop.title}
                    </motion.h3>
                    <p className="responsive-text-sm dot-background-text mt-2">
                      {workshop.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <motion.div
                      className="flex items-center space-x-2 text-sm"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Calendar className="h-4 w-4 text-primary" />
                      </motion.div>
                      <span className="dot-background-text">{workshop.date}</span>
                    </motion.div>
                    
                    <motion.div
                      className="flex items-center space-x-2 text-sm"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <MapPin className="h-4 w-4 text-primary" />
                      </motion.div>
                      <span className="dot-background-text">{workshop.venue}</span>
                    </motion.div>

                    <motion.div
                      className="flex flex-wrap gap-2 pt-2"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {workshop.tags.map((tag, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full cursor-pointer"
                          variants={staggerItem}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(59, 130, 246, 0.2)"
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  </CardContent>

                  <CardFooter>
                    {workshop.status === "upcoming" ? (
                      <Button
                        className="mt-4 w-full group btn-with-icon"
                        onClick={() => {
                          // Handle register now
                          console.log(`Registering for: ${workshop.title}`);
                        }}
                      >
                        Register Now
                        <ArrowRight className="transition-transform group-hover:translate-x-1" />
                      </Button>
                    ) : (
                      <Button
                        disabled
                        className="mt-4 w-full group btn-with-icon opacity-50 cursor-not-allowed"
                      >
                        Register for Event
                        <ArrowRight className="transition-transform group-hover:translate-x-1" />
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedContainer>
      </div>
    </section>
  );
};

export default Workshops;
