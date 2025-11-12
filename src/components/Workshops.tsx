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
      title: "React & TypeScript Masterclass",
      date: "March 15, 2025",
      venue: "Lab 301, ISE Block",
      status: "upcoming",
      attendees: 45,
      description:
        "Learn modern React patterns, TypeScript integration, and build a full-stack application.",
      tags: ["Frontend", "TypeScript", "React"],
    },
    {
      title: "Data Structures Deep Dive",
      date: "March 22, 2025",
      venue: "Seminar Hall, ISE",
      status: "upcoming",
      attendees: 60,
      description:
        "Master essential DSA concepts with hands-on problem solving and competitive programming tips.",
      tags: ["DSA", "Algorithms", "Problem Solving"],
    },
    {
      title: "Building REST APIs with Node.js",
      date: "March 29, 2025",
      venue: "Lab 302, ISE Block",
      status: "upcoming",
      attendees: 38,
      description:
        "Create scalable backend services, implement authentication, and deploy to the cloud.",
      tags: ["Backend", "Node.js", "API"],
    },
    {
      title: "Git & GitHub Essentials",
      date: "February 28, 2025",
      venue: "Online",
      status: "past",
      attendees: 75,
      description:
        "Version control fundamentals, collaborative workflows, and open source contribution.",
      tags: ["Git", "GitHub", "DevOps"],
    },
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
                      <motion.div
                        className="flex items-center space-x-1 text-sm text-foreground/60"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Users className="h-4 w-4" />
                        <span>{workshop.attendees}</span>
                      </motion.div>
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
                        variant="ghost"
                        className="group mt-4 w-full justify-between btn-with-icon"
                        onClick={() => {
                          // Handle view workshop
                          console.log(`Viewing workshop: ${workshop.title}`);
                        }}
                      >
                        View Workshop
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
