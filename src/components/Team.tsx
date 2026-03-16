import { Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AnimatedSection, AnimatedContainer, AnimatedItem } from "@/components/ui/animated-section";
import { fadeInUp, scaleIn, staggerContainer, staggerItem } from "@/lib/animations";

type TeamMemberProps = {
  name: string;
  role: string;
  avatar: string;
  linkedin: string;
  github?: string;
  level?: string;
  isVerified?: boolean;
};

function TeamMemberCard({ name, role, avatar, linkedin, github, level, isVerified = false }: TeamMemberProps) {
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

      {/* Social Links */}
      <div className="mt-4 sm:mt-6 flex justify-center gap-3 relative z-10">
        {/* LinkedIn Button */}
        <motion.a
          href={linkedin.startsWith('http') ? linkedin : `https://${linkedin}`}
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

        {/* GitHub Button - Only show if GitHub URL is provided */}
        {github && (
          <motion.a
            href={github.startsWith('http') ? github : `https://github.com/${github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card text-foreground transition-all duration-300"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            aria-label={`View ${name}'s GitHub profile`}
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ duration: 0.2 }}
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5 drop-shadow-sm" />
            </motion.div>
          </motion.a>
        )}
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
      role: "Head Of Department - ISE",
      image: "https://i.ibb.co/yJjG7w7/Whats-App-Image-2025-10-28-at-16-33-13-0cfa91f1-modified.png",
      alt: "Dr. M. Vinoth Kumar - HOD, ISE",
      linkedin: "https://in.linkedin.com/in/drvinothkumarm",
    },
    {
      name: "Dr. Shruti P ",
      role: "Faculty Coordinator",
      image: "https://i.ibb.co/qY5wVQt8/1748096701429-1-modified.png",
      linkedin: "https://www.linkedin.com/in/dr-shruthip/",
    },
  ];

  const students = [
    {
      name: "Chandan K V",
      role: "President",
      image: "https://i.ibb.co/rKx4qdB9/Whats-App-Image-2025-11-11-at-17-12-10-2f8b78ef-modified.png",
      alt: "Chandan K V - Head",
      linkedin: "www.linkedin.com/Chandan-K-V",
      github: "https://github.com/The-ChandanKV",
    },
    {
      name: "Abhishek Choudhary",
      role: "Technical Head",
      image: "https://i.ibb.co/B9XHjBX/IMG-3533-modified.png",
      alt: "Abhishek C - Website Head",
      linkedin: "https://www.linkedin.com/in/abhishek-kumar-choudhary-155052292",
      github: "https://github.com/Abhishek-ch30",
    },
    {
      name: "Amruta Bhargav K",
      role: "Design Head",
      image: "https://i.postimg.cc/s2ph7cQP/Whats-App-Image-2025-11-11-at-19-25-34-4fa63faa-modified.png",
      alt: "Amruta Bhargav K - Design Head",
      linkedin: "https://www.linkedin.com/in/amruta-bhargav-k-b26a242a7",
      github: "https://github.com/AmrutaBK",
    },
    {
      name: "Faiza V K",
      role: "Content Head",
      image: "https://i.ibb.co/JWdC32hR/cropped-circle-image.png",
      linkedin: "https://www.linkedin.com/in/faiza-v-k-40a78616b/",
      github: "https://github.com/faizavk",
    },
    {
      name: "Aditi Karnawat",
      role: "Technical Head",
      image: "https://i.ibb.co/Zp4Dh4fW/IMG-20251111-223545-modified.png",
      alt: "Aditi Karnawat - Technical Head",
      linkedin: "https://www.linkedin.com/in/aditi-karnawat-55606b296/",
      github: "https://github.com/AditiKarnawat",
    },
    {
      name: "Shreya Mohan Bhat",
      role: "PR Head",
      image: "https://i.ibb.co/SXhPz82W/Whats-App-Image-2026-03-06-at-23-18-04-modified.png",
      alt: "Shreya Mohan Bhat - PR Head",
      linkedin: "https://www.linkedin.com/in/shreya-mohan-bhat-547108293?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      github: "https://github.com/shreyabhat75/",
    },
    {
      name: "Rethash Dev Reddy",
      role: "Event Head",
      image: "https://i.ibb.co/7tQJyMhq/Whats-App-Image-2026-03-06-at-23-23-34-modified.png",
      alt: "Rethash Dev Reddy - PR Head",
      linkedin: "www.linkedin.com/in/rethash-reddy",
      github: "https://github.com/reth0608/",
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
                  github={member.github}
                  
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
