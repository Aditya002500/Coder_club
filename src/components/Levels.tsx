import { Sparkles, Moon, Sun, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  Header,
  Plan,
  PlanName,
  Badge,
  Description,
  Body,
  List,
  ListItem
} from "@/components/pricing-card";
import { AnimatedSection, AnimatedContainer, AnimatedItem } from "@/components/ui/animated-section";
import { fadeInUp, scaleIn, staggerContainer, staggerItem } from "@/lib/animations";

const Levels = () => {
  const levels = [
    {
      name: "Nova Level",
      subtitle: "Beginner",
      icon: Sparkles,
      color: "from-yellow-400 to-orange-500",
      description: "Entry-level members beginning their coding journey with foundational learning and skill development",
      badge: "Entry Level",
      features: [
        "Attend weekly workshops and learning sessions",
        "Participate in beginner-friendly coding projects",
        "Engage in structured peer learning activities",
        "Complete assigned programming tasks and challenges",
        "Access to comprehensive club learning resources",
        "One-on-one mentorship from experienced senior members",
        "Official certificate of participation and achievement",
        "Exclusive networking opportunities and community events",
      ],
    },
    {
      name: "Eclipse Level",
      subtitle: "Intermediate",
      icon: Moon,
      color: "from-purple-500 to-pink-600",
      description: "Intermediate members demonstrating proven technical skills and active community contribution",
      badge: "Intermediate Level",
      features: [
        "Lead and coordinate small development project teams",
        "Provide mentorship and guidance to Nova level members",
        "Contribute to major club initiatives and strategic planning",
        "Organize and conduct specialized technical mini workshops",
        "Enjoy all Nova level benefits with enhanced privileges",
        "Access to exclusive leadership development opportunities",
        "Priority enrollment for advanced workshops and masterclasses",
        "Professional internship recommendations and career support",
      ],
    },
    {
      name: "Zenith Level",
      subtitle: "Advanced",
      icon: Sun,
      color: "from-cyan-500 to-blue-600",
      description: "Unlock premium coding platforms like LeetCode and HackerRank, plus all Eclipse benefits and exclusive perks for advanced members",
      badge: "Advanced Level",
      features: [
        "Drive strategic planning and high-level organizational decisions",
        "Oversee and manage major club projects and initiatives",
        "Represent the club at external events and conferences",
        "Guide overall club direction and long-term vision",
        "Receive all Eclipse level benefits with additional perks",
        "Wield executive decision-making power in club governance",
        "Access to direct industry connections and partnerships",
        "Premium letter of recommendation for career advancement",
      ],
    },
  ];

  return (
    <section id="levels" className="py-24 relative">
      <div className="container mx-auto px-4">
        <AnimatedSection animation={fadeInUp} className="text-center mb-16">
          <h2 className="font-heading responsive-text-4xl md:responsive-text-5xl font-bold mb-4 dot-background-heading">
            Membership <span className="text-primary">Levels</span>
          </h2>
          <p className="responsive-text-lg dot-background-text max-w-2xl mx-auto">
            Progress through our structured membership system designed to
            recognize growth and contribution
          </p>
        </AnimatedSection>

        <AnimatedContainer
          stagger={true}
          staggerDelay={0.2}
          className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 justify-items-center max-w-7xl mx-auto"
        >
          {levels.map((level, index) => {
            const Icon = level.icon;
            return (
              <AnimatedItem
                key={level.name}
                animation={scaleIn}
                index={index}
                className="w-full max-w-sm mx-auto"
              >
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    y: -8,
                    rotateY: 2,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group transition-all duration-300 w-full h-full p-1.5">
                    <Header>
                      <Plan>
                        <PlanName>
                          <motion.div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${level.color} flex items-center justify-center`}
                            whileHover={{
                              scale: 1.2,
                              rotate: 360,
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className="h-6 w-6 text-white" />
                          </motion.div>
                          <div>
                            <div className="font-heading text-xl font-bold text-foreground">
                              {level.name}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {level.subtitle}
                            </div>
                          </div>
                        </PlanName>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Badge>{level.badge}</Badge>
                        </motion.div>
                      </Plan>
                      <Description className="responsive-text-sm">{level.description}</Description>
                    </Header>

                    <Body className="p-4">
                      <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <List>
                          {level.features.map((feature, i) => (
                            <motion.div key={i} variants={staggerItem}>
                              <ListItem className="responsive-text-sm">
                                <motion.div
                                  whileHover={{ scale: 1.2, rotate: 360 }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5 drop-shadow-sm" />
                                </motion.div>
                                <span className="dot-background-text leading-relaxed">{feature}</span>
                              </ListItem>
                            </motion.div>
                          ))}
                        </List>
                      </motion.div>
                    </Body>
                  </Card>
                </motion.div>
              </AnimatedItem>
            );
          })}
        </AnimatedContainer>
      </div>
    </section>
  );
};

export default Levels;
