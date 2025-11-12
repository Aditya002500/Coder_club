import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedSection, AnimatedContainer, AnimatedItem } from "@/components/ui/animated-section";
import { fadeInUp, scaleIn, staggerContainer, staggerItem } from "@/lib/animations";

type TeamMemberProps = {
  name: string;
  role: string;
  avatar: string;
  linkedin: string;
  level?: string;
  isVerified?: boolean;
};

function TeamMemberCard({ name, role, avatar, linkedin, level, isVerified = false }: TeamMemberProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl lg:rounded-3xl glass-card p-4 sm:p-6 w-full max-w-sm mx-auto transition-all duration-500"
      whileHover={{
        scale: 1.03,
        y: -6,
        rotateY: 2,
      }}
      transition={{ duration: 0.3 }}
    >
      
      {/* Level badge for students */}
      {level && (
        <div className="absolute right-3 sm:right-4 top-3 sm:top-4 z-10">
          <motion.span
            className="inline-block rounded-full bg-primary/30 backdrop-blur-sm border border-primary/40 px-2 sm:px-3 py-1 text-xs font-medium text-primary dot-background-text transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            {level} Level
          </motion.span>
        </div>
      )}

      {/* Profile Photo with enhanced hover effects */}
      <div className="mb-4 flex justify-center relative z-10">
        <div className="relative">
          <motion.div
            className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 overflow-hidden rounded-full glass-card p-1 transition-all duration-500"
            whileHover={{
              scale: 1.1,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={avatar}
              alt={name}
              className="h-full w-full rounded-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              loading="lazy"
            />
          </motion.div>
          {/* Glowing ring on hover - Desktop only */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/40 opacity-0 hidden lg:block"
            whileHover={{ opacity: 1 }}
            animate={{ rotate: 360 }}
            transition={{
              opacity: { duration: 0.3 },
              rotate: { duration: 4, repeat: Infinity, ease: "linear" }
            }}
          />
        </div>
      </div>

      {/* Profile Info with slide-up animation */}
      <motion.div
        className="text-center relative z-10"
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        <motion.h3
          className="responsive-text-base lg:responsive-text-lg font-semibold dot-background-heading transition-colors duration-300"
          whileHover={{ color: "var(--primary)" }}
        >
          {name}
        </motion.h3>
        <p className="mt-1 responsive-text-sm dot-background-text transition-colors duration-300">
          {role}
        </p>
      </motion.div>

      {/* LinkedIn Button */}
      <div className="mt-4 sm:mt-6 flex justify-center relative z-10">
        <motion.a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card text-primary transition-all duration-300"
          whileHover={{
            scale: 1.1,
            backgroundColor: "rgba(59, 130, 246, 0.2)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          aria-label={`Connect with ${name} on LinkedIn`}
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ duration: 0.2 }}
          >
            <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 drop-shadow-sm" />
          </motion.div>
        </motion.a>
      </div>

      {/* Animated border on hover */}
      <motion.div
        className="absolute inset-0 rounded-3xl border border-primary/30 opacity-0 pointer-events-none"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

const Team = () => {
  const faculty = [
    {
      name: "Dr.M.Vinoth Kumar ",
      role: "HOD,ISE",
      image: "https://i.ibb.co/yJjG7w7/Whats-App-Image-2025-10-28-at-16-33-13-0cfa91f1-modified.png",
      alt: "Dr. M. Vinoth Kumar - HOD, ISE",
      linkedin: "https://in.linkedin.com/in/drvinothkumarm",
    },
    {
      name: "Prof. Abhayakumar S Inchal ",
      role: "Faculty Coordinator",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
      linkedin: "https://in.linkedin.com/in/abhayakumar-inchal-b26326351",
    },
  ];

  const students = [
    {
      name: "Chandan K V",
      role: "President",
      level: "Zenith",
      image: "https://i.ibb.co/rKx4qdB9/Whats-App-Image-2025-11-11-at-17-12-10-2f8b78ef-modified.png",
      alt: "Chandan K V - Head",
      linkedin: "www.linkedin.com/Chandan-K-V",
    },
    {
      name: "Abhishek Kumar Choudhary",
      role: "Website Head",
      level: "Zenith",
      image: "https://i.ibb.co/rKFhyFVp/Whats-App-Image-2025-11-07-at-19-34-43-a04da05b-modified.png",
      alt: "Abhishek C - Website Head",
      linkedin: "https://www.linkedin.com/in/abhishek-kumar-choudhary-155052292",
    },
    {
      name: "Amruta Bhargav K",
      role: "Design Head",
      level: "Zenith",
      image: "https://i.postimg.cc/s2ph7cQP/Whats-App-Image-2025-11-11-at-19-25-34-4fa63faa-modified.png",
      alt: "Amruta Bhargav K - Design Head",
      linkedin: "https://www.linkedin.com/in/amruta-bhargav-k-b26a242a7",
    },
    {
      name: "Faiza V",
      role: "Content Head",
      level: "Zenith",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Faiza",
      linkedin: "https://www.linkedin.com/in/faiza-v-k-40a78616b/",
    },
    {
      name: "Aditi Karnawat",
      role: "Technical Head",
      level: "Zenith",
      image: "https://i.ibb.co/Zp4Dh4fW/IMG-20251111-223545-modified.png",
      alt: "Aditi Karnawat - Technical Head",
      linkedin: "https://www.linkedin.com/in/aditi-karnawat-55606b296/",
    },
  
  ];

  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-4">
        <AnimatedSection animation={fadeInUp} className="text-center mb-16">
          <h2 className="font-heading responsive-text-4xl md:responsive-text-5xl font-bold mb-4 dot-background-heading">
            Meet the <span className="text-primary">Team</span>
          </h2>
          <p className="responsive-text-lg dot-background-text max-w-2xl mx-auto">
            Dedicated individuals working together to build an amazing coding
            community
          </p>
        </AnimatedSection>

        {/* Faculty Section */}
        <div className="mb-16">
          <AnimatedSection animation={fadeInUp} delay={200}>
            <h3 className="font-heading responsive-text-xl lg:responsive-text-2xl font-bold mb-8 text-center dot-background-heading">
              Faculty Coordinators
            </h3>
          </AnimatedSection>
          
          <AnimatedContainer
            stagger={true}
            staggerDelay={0.2}
            className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
          >
            {faculty.map((member, index) => (
              <AnimatedItem
                key={index}
                animation={scaleIn}
                index={index}
              >
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  avatar={member.image}
                  linkedin={member.linkedin}
                />
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>

        {/* Student Leaders Section */}
        <div>
          <AnimatedSection animation={fadeInUp} delay={400}>
            <h3 className="font-heading responsive-text-xl lg:responsive-text-2xl font-bold mb-8 text-center dot-background-heading">
              Student Leaders
            </h3>
          </AnimatedSection>
          
          <AnimatedContainer
            stagger={true}
            staggerDelay={0.15}
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          >
            {students.map((member, index) => (
              <AnimatedItem
                key={index}
                animation={scaleIn}
                index={index}
              >
                <TeamMemberCard
                  name={member.name}
                  role={member.role}
                  avatar={member.image}
                  linkedin={member.linkedin}
                  level={member.level}
                />
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </div>
    </section>
  );
};

export default Team;
