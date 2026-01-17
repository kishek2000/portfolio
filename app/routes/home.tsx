import type { Route } from "./+types/home";
import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Adi Kishore | Full Stack Developer & Designer" },
    { name: "description", content: "Portfolio of Adi Kishore - Full Stack Developer, UI/UX Designer, and DevOps enthusiast creating world-class digital experiences." },
  ];
}

// ============================================
// DATA
// ============================================

const coreServices = [
  {
    title: "Full Stack Dev",
    icon: "💻",
    desc: "Building scalable applications from frontend to backend with modern technologies and best practices.",
    color: "#2dd4bf",
  },
  {
    title: "UI/UX Design",
    icon: "🎨",
    desc: "Crafting intuitive interfaces and delightful user experiences that drive engagement and conversions.",
    color: "#a78bfa",
  },
  {
    title: "DevOps",
    icon: "🚀",
    desc: "Implementing CI/CD pipelines, containerization, and cloud infrastructure for reliable deployments.",
    color: "#fb7185",
  },
];

const experiences = [
  {
    company: "Atlassian",
    role: "Full Stack Developer Intern",
    period: "Nov 2022 - June 2023",
    desc: "Enhanced feature flagging and experimentation workflows on the Measurement Platform team. Engaged in the complete software development lifecycle with mentorship from Senior to Principal Engineers.",
    tech: ["React", "TypeScript", "GraphQL", "PostgreSQL"],
  },
  {
    company: "Optus",
    role: "Full Stack Developer Intern",
    period: "Feb 2021 - Aug 2021",
    desc: "Worked on Digital Networks Automation, creating and optimising automation tools for the Network team. Introduced DevOps practices and learned from Senior Network Engineers.",
    tech: ["React", "TypeScript", "MongoDB", "Docker", "Rancher"],
  },
  {
    company: "Sadafal Education",
    role: "Full Stack Developer, UI Designer",
    period: "Apr 2020 - Present",
    desc: "Full redesign and implementation of global website. Leading development of a global education platform and e-commerce website for student-made products.",
    tech: ["React", "TypeScript", "Remix", "GraphQL", "CosmosDB"],
  },
  {
    company: "Accenture & Autism Awareness",
    role: "Full Stack Developer",
    period: "Jan 2021 - Present",
    desc: "Building an intelligent education platform for children with ASD. Focused on tailored content with detailed analysis and guidance for parents.",
    tech: ["React", "TypeScript", "Apollo GraphQL", "MongoDB"],
  },
];

const projects = [
  {
    title: "NeuroNudge",
    subtitle: "Adaptive learning for unique minds",
    desc: "An innovative educational platform with adaptive Q-learning algorithms for individuals with ASD. Offers personalized learning journeys and interactive challenges.",
    image: "/thumbnails/neuronudge.webp",
    tech: ["Rust"],
    type: "personal" as const,
    period: "Nov - Dec 2023",
    links: { github: "https://github.com/kishek2000/neuro-nudge" },
  },
  {
    title: "GalacticEd",
    subtitle: "Empower your child's learning",
    desc: "An intelligent education platform that tailors content dynamically for children who have ASD. Built in collaboration with Autism Awareness and Accenture.",
    image: "/thumbnails/galacticed.png",
    tech: ["React", "TypeScript", "GraphQL", "MongoDB"],
    type: "industry" as const,
    period: "Jan 2021 - Present",
    links: { demo: "https://youtu.be/YY9z1u1X_fA" },
  },
  {
    title: "Vir Srinivas",
    subtitle: "Filmmaker Portfolio",
    desc: "Portfolio website for an award-winning feature film writer, producer and director. Custom design and development with modern animations.",
    image: "/thumbnails/vir-thumbnail.png",
    tech: ["React", "TypeScript", "NextJS"],
    type: "industry" as const,
    period: "Oct 2021 - Present",
    links: { live: "https://www.virsrinivas.com/" },
  },
  {
    title: "Dungeon Mania",
    subtitle: "Explore dungeons and defeat monsters",
    desc: "A 2D game where you explore dungeons and defeat monsters! Features time travel, potions, and many interactive gameplay elements.",
    image: "/thumbnails/dungeonMania.png",
    tech: ["Java"],
    type: "university" as const,
    period: "Jul - Aug 2022",
    links: {},
  },
  {
    title: "Concentrum",
    subtitle: "Disease outbreak info platform",
    desc: "Widget library and customizable screens for disease outbreak information. Allows users to create and share dashboards.",
    image: "/thumbnails/concentrum.png",
    tech: ["React", "TypeScript", "FastAPI", "MongoDB"],
    type: "university" as const,
    period: "Feb - Apr 2021",
    links: { github: "https://github.com/nikhilahuja314/SENG3011_SourDough", demo: "https://youtu.be/yHOr7dQGYKk" },
  },
  {
    title: "transport.me",
    subtitle: "Manage all your travel needs",
    desc: "A mobile application that removes the need for multiple apps, managing all your travel needs in one place.",
    image: "/thumbnails/transportme.png",
    tech: ["React", "Expo", "Figma"],
    type: "university" as const,
    period: "Jun - Aug 2020",
    links: { demo: "https://youtu.be/FvWCukOS9bE" },
  },
  {
    title: "Bahudha Foundation",
    subtitle: "Global peace and harmony",
    desc: "Website for an organisation focused on empowerment with a vision for global peace and harmony.",
    image: "/thumbnails/bahudha.png",
    tech: ["React", "TypeScript", "Cloudflare"],
    type: "industry" as const,
    period: "Mar 2022 - Present",
    links: { live: "https://bahudha-foundation.org" },
  },
  {
    title: "Sadafal Education",
    subtitle: "Discover, Learn and Master your passion",
    desc: "An aspiring global education provider that helps individuals to discover, learn and master their passion.",
    image: "/thumbnails/se.png",
    tech: ["React", "TypeScript", "Figma"],
    type: "industry" as const,
    period: "Jun 2020 - Present",
    links: { live: "https://sadafal-education.com" },
  },
  {
    title: "knowledge.path",
    subtitle: "Anyone can learn",
    desc: "An education platform where anyone can be employed in their passion. Powered by Sadafal Education.",
    image: "/thumbnails/kp.png",
    tech: ["TypeScript", "GraphQL", "DynamoDB", "Docker"],
    type: "industry" as const,
    period: "Jul 2020 - Present",
    links: {},
  },
  {
    title: "Discovery",
    subtitle: "Learning made fun",
    desc: "A platform that makes children's education fun and engaging, covering interesting areas of content about the world!",
    image: "/thumbnails/discovery.png",
    tech: ["React", "Figma"],
    type: "personal" as const,
    period: "May 2020",
    links: { live: "https://kishek2000.github.io/discovery/" },
  },
  {
    title: "myLounge",
    subtitle: "Listen. Watch. Relax.",
    desc: "A digital lounge to browse TV Shows, Movies, Podcasts and Music, instantly finding streaming services for any media.",
    image: "/thumbnails/mylounge.png",
    tech: ["React", "Django", "CSS"],
    type: "university" as const,
    period: "Feb - Apr 2020",
    links: { github: "https://github.com/kishek2000/Team-100", demo: "https://www.youtube.com/watch?v=znZc0CzMUmQ" },
  },
];

const techCategories = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Next.js", "HTML", "CSS", "Emotion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Python", "FastAPI", "Django", "GraphQL", "Express"],
  },
  {
    title: "DevOps",
    items: ["Docker", "AWS", "Rancher", "Harbor", "GitHub Actions", "Helm"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "DynamoDB", "SQLite", "CosmosDB"],
  },
];

const socialLinks = [
  { name: "GitHub", url: "https://github.com/kishek2000", icon: "GH" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/adi-kishore/", icon: "LI" },
  { name: "SoundCloud", url: "https://soundcloud.com/adi-kishore/", icon: "SC" },
];

// ============================================
// COMPONENTS
// ============================================

// Floating particles for ambient effect
function FloatingParticles() {
  const particles = useMemo(() => 
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      color: ['#2dd4bf', '#a78bfa', '#fb7185'][Math.floor(Math.random() * 3)],
    })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: particle.color,
            opacity: 0.3,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.1, 0.4, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Animated background orbs
function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(45, 212, 191, 0.15) 0%, transparent 70%)",
          left: "-20%",
          top: "10%",
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 70%)",
          right: "-10%",
          top: "40%",
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(251, 113, 133, 0.15) 0%, transparent 70%)",
          left: "30%",
          bottom: "10%",
          filter: "blur(40px)",
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "revealing" | "done">("loading");

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setPhase("revealing");
          setTimeout(() => {
            setPhase("done");
            setTimeout(onComplete, 600);
          }, 800);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 100);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="loader-screen"
      initial={{ opacity: 1 }}
      animate={{
        opacity: phase === "done" ? 0 : 1,
        y: phase === "done" ? -20 : 0,
      }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Animated orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(45, 212, 191, 0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(167, 139, 250, 0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 50, -100, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo / Name reveal */}
        <motion.div
          className="overflow-hidden mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-black tracking-tighter"
            style={{ fontFamily: "Cabinet Grotesk, sans-serif" }}
            initial={{ y: 100 }}
            animate={{ y: phase === "revealing" ? -10 : 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="gradient-text-aurora">AK</span>
          </motion.h1>
        </motion.div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-[var(--color-bg-elevated)] rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "var(--gradient-primary)" }}
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Loading text */}
        <motion.p
          className="mt-4 text-sm text-[var(--color-text-subtle)] tracking-widest uppercase"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {phase === "revealing" ? "Welcome" : "Loading experience"}
        </motion.p>
      </div>
    </motion.div>
  );
}

function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX - 150, y: e.clientY - 150 });
      setIsVisible(true);
    };
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="cursor-follower hidden md:block"
      animate={{
        x: position.x,
        y: position.y,
        opacity: isVisible ? 0.6 : 0,
      }}
      transition={{ type: "spring", damping: 30, stiffness: 200 }}
    />
  );
}

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(45, 212, 191, 0.15) 0%, transparent 70%)",
          y,
        }}
      />

      <motion.div className="container relative z-10 pt-20" style={{ opacity }}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              className="text-lg md:text-xl text-[var(--color-text-muted)] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hey! 👋 I'm
            </motion.p>

            <motion.h1
              className="hero-title mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="block text-[var(--color-text)]">Adi</span>
              <span className="block gradient-text-aurora">Kishore</span>
            </motion.h1>

            <motion.p
              className="hero-subtitle mb-8 mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              A <span className="text-[var(--color-primary)]">Full Stack Developer</span> and{" "}
              <span className="text-[var(--color-secondary)]">UI/UX Designer</span> passionate about
              creating world-class digital experiences that delight users and drive results.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>

          {/* Profile image */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Animated rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[var(--color-primary)] opacity-30"
                style={{ scale: 1.15 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-[var(--color-secondary)] opacity-20"
                style={{ scale: 1.3 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Pulsing glow */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(45, 212, 191, 0.3) 0%, transparent 70%)",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Image container */}
              <motion.div
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-[var(--color-primary)]"
                style={{ boxShadow: "0 0 60px var(--color-primary-glow)" }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/profile2.jpg"
                  alt="Adi Kishore"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span className="text-sm text-[var(--color-text-subtle)]">Explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section relative">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title gradient-text">What I Do</h2>
          <motion.div
            className="w-16 h-1 mx-auto mt-4 mb-6 rounded-full"
            style={{ background: "var(--gradient-primary)" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="section-subtitle mx-auto">
            Core abilities driving innovative solutions and exceptional user experiences.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {coreServices.map((service, index) => (
            <AnimatedSection key={service.title} delay={0.1 * index}>
              <motion.div
                className="card h-full flex flex-col items-center text-center p-8 group relative overflow-hidden"
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated background gradient on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${service.color}15 0%, transparent 70%)`,
                  }}
                />
                
                {/* Floating particles inside card */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full opacity-0 group-hover:opacity-60"
                    style={{
                      width: 4 + i * 2,
                      height: 4 + i * 2,
                      background: service.color,
                      left: `${20 + i * 30}%`,
                      top: `${70 + i * 10}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
                
                {/* Top accent line */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                  style={{ background: service.color, transformOrigin: "left" }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                />
                
                {/* Icon container */}
                <motion.div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-6 relative z-10"
                  style={{
                    background: `${service.color}15`,
                    border: `2px solid ${service.color}30`,
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{
                    boxShadow: [
                      `0 0 0 ${service.color}00`,
                      `0 0 20px ${service.color}30`,
                      `0 0 0 ${service.color}00`,
                    ],
                  }}
                  transition={{
                    boxShadow: { duration: 2, repeat: Infinity },
                  }}
                >
                  {service.icon}
                </motion.div>

                <h3
                  className="text-xl font-bold mb-4 transition-colors relative z-10 group-hover:text-[var(--color-primary)]"
                  style={{ color: "var(--color-text)" }}
                >
                  {service.title}
                </h3>

                <p className="text-[var(--color-text-muted)] leading-relaxed relative z-10">
                  {service.desc}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section relative overflow-hidden">
      {/* Background accent */}
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-full opacity-30"
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full" style={{ background: "radial-gradient(circle, rgba(167, 139, 250, 0.2) 0%, transparent 70%)" }} />
      </motion.div>

      <div className="container relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title gradient-text">Experience</h2>
          <motion.div
            className="w-16 h-1 mx-auto mt-4 mb-6 rounded-full"
            style={{ background: "var(--gradient-primary)" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="section-subtitle mx-auto">
            My professional journey building impactful products.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <div className="timeline">
            {experiences.map((exp, index) => (
              <AnimatedSection key={exp.company} delay={0.1 * index}>
                <motion.div
                  className="timeline-item"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="card group">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">{exp.company}</h3>
                      <span className="text-sm text-[var(--color-primary)] font-medium">{exp.period}</span>
                    </div>
                    <p className="text-[var(--color-secondary)] font-medium mb-3">{exp.role}</p>
                    <p className="text-[var(--color-text-muted)] mb-4 leading-relaxed">{exp.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, i) => (
                        <motion.span 
                          key={t} 
                          className="tech-badge"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.05 * i }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projectColors = {
    industry: "#2dd4bf",
    university: "#a78bfa",
    personal: "#fb7185",
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title gradient-text">Featured Projects</h2>
          <motion.div
            className="w-16 h-1 mx-auto mt-4 mb-6 rounded-full"
            style={{ background: "var(--gradient-primary)" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="section-subtitle mx-auto mb-8">
            A collection of industry, personal, and university projects.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap justify-center gap-6">
            {Object.entries(projectColors).map(([type, color]) => (
              <motion.div 
                key={type} 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div 
                  className="w-3 h-3 rounded-full" 
                  style={{ background: color, boxShadow: `0 0 10px ${color}50` }}
                  animate={{
                    boxShadow: [
                      `0 0 10px ${color}50`,
                      `0 0 20px ${color}80`,
                      `0 0 10px ${color}50`,
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm text-[var(--color-text-muted)] capitalize">{type}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <div className="project-grid">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={0.05 * index}>
              <motion.div
                className="card overflow-hidden group cursor-pointer h-full flex flex-col"
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Type indicator with pulse */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 rounded-full z-10"
                  style={{
                    background: projectColors[project.type],
                    boxShadow: `0 0 15px ${projectColors[project.type]}80`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Image */}
                <div className="relative h-48 -mx-8 -mt-8 mb-6 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] to-transparent" />
                  
                  {/* Period badge */}
                  <div className="absolute bottom-2 left-2 text-xs px-2 py-1 rounded-full glass text-[var(--color-text-subtle)]">
                    {project.period}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--color-text-subtle)] mb-3">{project.subtitle}</p>
                <p className="text-[var(--color-text-muted)] text-sm mb-4 line-clamp-3 flex-grow">{project.desc}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-[rgba(45,212,191,0.1)] text-[var(--color-primary)] border border-[rgba(45,212,191,0.3)]">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 text-[var(--color-text-subtle)]">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto pt-4 border-t border-[var(--color-border)]">
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Code
                    </motion.a>
                  )}
                  {(project.links.demo || project.links.live) && (
                    <motion.a
                      href={project.links.demo || project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      {project.links.live ? "Live" : "Demo"}
                    </motion.a>
                  )}
                  {!project.links.github && !project.links.demo && !project.links.live && (
                    <span className="text-sm text-[var(--color-text-subtle)]">Coming soon</span>
                  )}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="container relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title gradient-text">Technical Skills</h2>
          <motion.div
            className="w-16 h-1 mx-auto mt-4 mb-6 rounded-full"
            style={{ background: "var(--gradient-primary)" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="section-subtitle mx-auto">
            Technologies I work with to bring ideas to life.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, catIndex) => (
            <AnimatedSection key={category.title} delay={0.1 * catIndex}>
              <motion.div 
                className="card h-full group"
                whileHover={{ y: -8 }}
              >
                <h3 className="text-lg font-bold text-[var(--color-primary)] mb-4 flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: catIndex * 0.5 }}
                  >
                    {catIndex === 0 && "🎯"}
                    {catIndex === 1 && "⚙️"}
                    {catIndex === 2 && "🔧"}
                    {catIndex === 3 && "📊"}
                  </motion.span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      className="tech-badge"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * itemIndex }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background effects */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, rgba(45, 212, 191, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 50%, rgba(167, 139, 250, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 50%, rgba(45, 212, 191, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container relative z-10">
        <AnimatedSection>
          <motion.div
            className="max-w-2xl mx-auto text-center card py-16 px-8 relative overflow-hidden"
            whileHover={{ boxShadow: "0 0 60px var(--color-primary-glow)" }}
          >
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-50"
              style={{
                background: "linear-gradient(90deg, var(--color-primary), var(--color-secondary), var(--color-accent), var(--color-primary))",
                backgroundSize: "300% 100%",
                padding: 1,
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "xor",
                WebkitMaskComposite: "xor",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Decorative top line */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-1 rounded-full"
              style={{ background: "var(--gradient-primary)" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />

            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "Cabinet Grotesk, sans-serif" }}
            >
              Let's Work{" "}
              <span className="gradient-text">Together</span>
            </motion.h2>

            <p className="text-[var(--color-text-muted)] text-lg mb-8 leading-relaxed">
              Have an exciting project in mind? I'd love to hear about it!
              <br />
              Let's create something amazing together.
            </p>

            {/* Email badge */}
            <motion.a
              href="mailto:kishek12@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl mb-8"
              style={{
                background: "rgba(45, 212, 191, 0.1)",
                border: "2px solid rgba(45, 212, 191, 0.3)",
              }}
              whileHover={{
                scale: 1.05,
                borderColor: "var(--color-primary)",
                background: "rgba(45, 212, 191, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-[var(--color-primary)]"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-lg font-semibold text-[var(--color-primary)]">
                kishek12@gmail.com
              </span>
            </motion.a>

            {/* Social links */}
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-sm font-bold">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Footer */}
        <motion.footer
          className="text-center mt-16 pt-8 border-t border-[var(--color-border)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-[var(--color-text-subtle)] text-sm">
            © {new Date().getFullYear()} Adi Kishore. Crafted with{" "}
            <motion.span 
              className="text-[var(--color-accent)] inline-block"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ♥
            </motion.span>{" "}
            and lots of{" "}
            <span className="text-[var(--color-primary)]">code</span>.
          </p>
        </motion.footer>
      </div>
    </section>
  );
}

// ============================================
// MAIN COMPONENT
// ============================================

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.main
          className="relative bg-noise"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <BackgroundOrbs />
          <FloatingParticles />
          <CursorFollower />
          <Hero />
          <Services />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </motion.main>
      )}
    </>
  );
}
