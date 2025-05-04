"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { FaBriefcase, FaGraduationCap, FaShieldAlt } from "react-icons/fa";

const timelineData = [
  {
    type: "work",
    icon: <FaShieldAlt className="text-xl text-green-500" />,
    period: {
      en: "2025 – Present",
      nl: "2025 – Heden",
    },
    title: {
      en: "Security, Workrate, Haarlem",
      nl: "Beveiliging, Workrate, Haarlem",
    },
    description: {
      en: "Security job in a datacenter.",
      nl: "Beveiligingswerk in een datacenter.",
    },
  },
  {
    type: "work",
    icon: <FaBriefcase className="text-xl text-purple-500" />,
    period: {
      en: "2024",
      nl: "2024",
    },
    title: {
      en: "Software Developer, Devife, Soest",
      nl: "Software Developer, Devife, Soest",
    },
    description: {
      en: "Full-stack web development with Vue.js, TypeScript, and Strapi.",
      nl: "Full-stack webontwikkeling met Vue.js, TypeScript en Strapi.",
    },
  },
  {
    type: "work",
    icon: <FaBriefcase className="text-xl text-purple-500" />,
    period: {
      en: "2022",
      nl: "2022",
    },
    title: {
      en: "Delivery Driver, FEBO, Haarlem",
      nl: "Bezorger, FEBO, Haarlem",
    },
    description: {
      en: "Delivery and customer service.",
      nl: "Bezorging en klantcontact.",
    },
  },
  {
    type: "work",
    icon: <FaBriefcase className="text-xl text-purple-500" />,
    period: {
      en: "2021 – 2022",
      nl: "2021 – 2022",
    },
    title: {
      en: "Delivery Driver, Thuisbezorgd, Haarlem",
      nl: "Bezorger, Thuisbezorgd, Haarlem",
    },
    description: {
      en: "Food delivery in Haarlem.",
      nl: "Eten bezorgen in Haarlem.",
    },
  },
  {
    type: "education",
    icon: <FaGraduationCap className="text-xl text-pink-500" />,
    period: {
      en: "2022 – Present",
      nl: "2022 – Heden",
    },
    title: {
      en: "Software Engineering, HBO-ICT, HvA, Amsterdam",
      nl: "Software Engineering, HBO-ICT, HvA, Amsterdam",
    },
    description: {
      en: "Currently studying Software Engineering.",
      nl: "Momenteel HBO-ICT Software Engineering student.",
    },
  },
];

const Timeline = () => {
  const { language } = useLanguage();

  return (
    <section
      id="timeline"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          {language === "en" ? "My Journey" : "Mijn Reis"}
        </h2>
        <div className="relative flex flex-col items-center">
          <div
            className="absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400 dark:from-purple-700 dark:to-pink-700 z-0"
            style={{ transform: "translateX(-50%)" }}
          />
          {timelineData.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`w-full md:w-1/2 flex ${
                  isLeft ? "justify-start" : "justify-end"
                } mb-12 relative z-10`}
              >
                <div
                  className={`relative max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-purple-100 dark:border-purple-700 ${
                    isLeft ? "ml-0 md:mr-8" : "mr-0 md:ml-8"
                  }`}
                >
                  <div className="flex items-center mb-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 dark:from-purple-700 dark:to-pink-700 shadow-lg mr-3">
                      {item.icon}
                    </div>
                    <span className="text-sm text-purple-600 dark:text-purple-300 font-semibold">
                      {item.period[language]}
                    </span>
                  </div>
                  <div className="font-bold text-lg text-gray-900 dark:text-white mb-1">
                    {item.title[language]}
                  </div>
                  <div className="text-gray-700 dark:text-gray-300 text-sm">
                    {item.description[language]}
                  </div>
                  <span
                    className={`absolute top-6 ${
                      isLeft ? "-right-4" : "-left-4"
                    } w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-400 dark:from-purple-700 dark:to-pink-700 rounded-full border-4 border-white dark:border-gray-900 z-20`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
