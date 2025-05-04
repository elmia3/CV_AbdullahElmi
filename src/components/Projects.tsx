"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { language } = useLanguage();

  const projects = [
    {
      title: {
        en: "Outlier Detection with Azure",
        nl: "Outlier Detection met Azure",
      },
      description: {
        en: "Development of a scalable system for detecting anomalous logins using Azure Functions. Includes a self-learning module for behavior analysis.",
        nl: "Ontwikkeling van een schaalbaar systeem voor het detecteren van afwijkende inlogs met Azure Functions. Implementatie van een zelflerende module voor gedragsanalyse.",
      },
      technologies: {
        en: ["Azure", "Machine Learning", "Cloud Computing"],
        nl: ["Azure", "Machine Learning", "Cloud Computing"],
      },
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-4xl text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 7a4 4 0 018 0v4a4 4 0 01-8 0V7z"
          />
        </svg>
      ),
    },
    {
      title: {
        en: "Project Enterprise Web Application (Project EWA)",
        nl: "Project Enterprise Web Applicatie (Project EWA)",
      },
      description: {
        en: "A collaborative web application project for a real client, built in a Scrum team. Features include RESTful services, JPA, and a relational database.",
        nl: "Een samenwerkingsproject voor een webapplicatie voor een echte klant, gebouwd in een Scrum-team. Functies omvatten RESTful services, JPA en een relationele database.",
      },
      technologies: {
        en: ["HTML5", "CSS", "REST", "JPA", "SCRUM", "UML", "Database"],
        nl: ["HTML5", "CSS", "REST", "JPA", "SCRUM", "UML", "Database"],
      },
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-4xl text-cyan-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5"
          />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: {
        en: "OBA Search Webapp",
        nl: "OBA Zoek Webapp",
      },
      description: {
        en: `A web application for the Amsterdam Public Library (OBA) that helps users easily search for reliable information using natural language and the ChatGPT API. The app is extendable to multiple languages, uses simple (B1-level) language, and can also search the hybrid library (books, media, activities). Built with HTML, CSS, JavaScript, Node.js, Express, and MySQL.`,
        nl: `Een webapplicatie voor de Openbare Bibliotheek Amsterdam (OBA) waarmee Amsterdammers eenvoudig en in natuurlijke taal betrouwbare informatie kunnen zoeken via de ChatGPT API. De app is uitbreidbaar naar meerdere talen, gebruikt eenvoudige taal (B1-niveau) en kan zoeken in de hybride bibliotheek (boeken, media, activiteiten). Gemaakt met HTML, CSS, JavaScript, Node.js, Express en MySQL.`,
      },
      technologies: {
        en: [
          "HTML",
          "CSS",
          "JavaScript",
          "Node.js",
          "Express",
          "MySQL",
          "ChatGPT API",
        ],
        nl: [
          "HTML",
          "CSS",
          "JavaScript",
          "Node.js",
          "Express",
          "MySQL",
          "ChatGPT API",
        ],
      },
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-4xl text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-black transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-400/10 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-pink-400/10 to-transparent rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            {language === "en" ? "Featured Projects" : "Uitgelichte Projecten"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title.en}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 * index }}
                className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl dark:shadow-purple-500/5 dark:hover:shadow-purple-500/10"
              >
                <div className="relative h-48 flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-600/20 dark:to-pink-600/20">
                  {project.icon}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.title[language]}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description[language]}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies[language].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-600/20 text-purple-600 dark:text-purple-400 rounded-full group-hover:bg-purple-200 dark:group-hover:bg-purple-600/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
