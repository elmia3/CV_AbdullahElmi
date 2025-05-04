"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Java",
    "SQL",
    "Git",
    "REST APIs",
  ];

  const aboutText = {
    en: {
      title: "About Me",
      paragraphs: [
        "I am a passionate 3rd year Software Engineering student with a strong foundation in modern web technologies and software development practices. My journey in technology is driven by a constant desire to learn and create innovative solutions that make a difference.",
        "Currently, I focus on full-stack development, building scalable applications, and exploring emerging technologies. I believe in writing clean, maintainable code and following best practices in software development.",
      ],
      skillsTitle: "Technical Skills",
    },
    nl: {
      title: "Over Mij",
      paragraphs: [
        "Ik ben een gepassioneerde derdejaars student Software Engineering met een sterke basis in moderne webtechnologieën en softwareontwikkelingspraktijken. Mijn reis in technologie wordt gedreven door een constante drang om te leren en innovatieve oplossingen te creëren die het verschil maken.",
        "Momenteel richt ik me op full-stack ontwikkeling, het bouwen van schaalbare applicaties en het verkennen van opkomende technologieën. Ik geloof in het schrijven van schone, onderhoudbare code en het volgen van best practices in softwareontwikkeling.",
      ],
      skillsTitle: "Technische Vaardigheden",
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            {aboutText[language].title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="relative aspect-square w-full max-w-md mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl transform rotate-6 scale-95 opacity-25" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl transform -rotate-6 scale-95 opacity-25" />
              <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-purple-400/20">
                <Image
                  src="/images/profile.jpg"
                  alt="Abdullah Elmi"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-500 hover:scale-110"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 space-y-6"
            >
              <p>{aboutText[language].paragraphs[0]}</p>
              <p>{aboutText[language].paragraphs[1]}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
              {aboutText[language].skillsTitle}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.1 * index }}
                  className="bg-purple-100 dark:bg-purple-600/20 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-purple-200 dark:hover:bg-purple-600/30 transition-colors"
                >
                  <span className="text-gray-800 dark:text-white font-medium">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
