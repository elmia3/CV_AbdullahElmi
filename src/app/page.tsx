"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Timeline from "@/components/Timeline";
import { FaArrowDown, FaCode, FaLaptopCode } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const { language } = useLanguage();

  // Parallax effect for the hero section
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const heroText = {
    en: {
      student: "Software Engineering Student",
      description:
        "Passionate about creating innovative solutions and building the future of technology. Currently pursuing my degree in Software Engineering with a focus on web development.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      scrollDown: "Scroll Down",
    },
    nl: {
      student: "Software Engineering Student",
      description:
        "Gepassioneerd over het creëren van innovatieve oplossingen en het bouwen aan de toekomst van technologie. Momenteel volg ik mijn opleiding Software Engineering met een focus op webontwikkeling.",
      viewProjects: "Bekijk Projecten",
      contactMe: "Neem Contact Op",
      scrollDown: "Scroll naar beneden",
    },
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Mouse move effect for the hero section
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate mouse position relative to the center of the screen
  useEffect(() => {
    if (typeof window !== "undefined") {
      setMouseOffset({
        x: mousePosition.x - window.innerWidth / 2,
        y: mousePosition.y - window.innerHeight / 2,
      });
    }
  }, [mousePosition]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-purple-300/20 dark:bg-purple-900/20 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: "10%",
            top: "20%",
          }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-pink-300/20 dark:bg-pink-900/20 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            right: "10%",
            bottom: "20%",
          }}
        />
      </div>

      <motion.div
        ref={heroRef}
        className="container mx-auto px-4 py-20 relative z-10"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text text-center"
        >
          <motion.div
            animate={{
              x: mouseOffset.x * 0.01,
              y: mouseOffset.y * 0.01,
            }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Abdullah Elmi
            </h1>
          </motion.div>

          <motion.h2
            className="text-2xl md:text-3xl mb-8 text-gray-700 dark:text-gray-300"
            animate={{
              x: mouseOffset.x * 0.005,
              y: mouseOffset.y * 0.005,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.1,
            }}
          >
            {heroText[language].student}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              x: mouseOffset.x * 0.003,
              y: mouseOffset.y * 0.003,
            }}
            transition={{
              delay: 0.5,
              x: { type: "spring", stiffness: 100, damping: 30, delay: 0.2 },
              y: { type: "spring", stiffness: 100, damping: 30, delay: 0.2 },
            }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12"
          >
            {heroText[language].description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              x: mouseOffset.x * 0.002,
              y: mouseOffset.y * 0.002,
            }}
            transition={{
              delay: 0.8,
              x: { type: "spring", stiffness: 100, damping: 30, delay: 0.3 },
              y: { type: "spring", stiffness: 100, damping: 30, delay: 0.3 },
            }}
            className="flex flex-col md:flex-row justify-center gap-4"
          >
            <motion.a
              className="px-8 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
            >
              <span>{heroText[language].viewProjects}</span>
              <FaCode className="text-lg transform group-hover:rotate-12 transition-transform" />
            </motion.a>

            <motion.a
              className="px-8 py-3 border border-purple-600 rounded-full hover:bg-purple-600/20 transition-colors flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
            >
              <span>{heroText[language].contactMe}</span>
              <FaLaptopCode className="text-lg transform group-hover:rotate-12 transition-transform" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              x: mouseOffset.x * 0.002,
              y: mouseOffset.y * 0.002,
            }}
            transition={{
              delay: 0.8,
              x: { type: "spring", stiffness: 100, damping: 30, delay: 0.3 },
              y: { type: "spring", stiffness: 100, damping: 30, delay: 0.3 },
            }}
            className="mt-16"
          >
            <motion.a
              href="#about"
              className="inline-flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              whileHover={{ y: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mb-2">{heroText[language].scrollDown}</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <FaArrowDown className="text-xl" />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      <About />
      <Timeline />
      <Projects />
      <Contact />
    </main>
  );
}
