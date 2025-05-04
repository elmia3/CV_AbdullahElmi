"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaLinkedin, FaLaptopCode } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const contactText = {
    en: {
      title: "Get In Touch",
      connect: "Let's Connect",
      description:
        "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      linkedin: "LinkedIn",
      gmail: "Gmail",
    },
    nl: {
      title: "Neem Contact Op",
      connect: "Laten We Verbinden",
      description:
        "Ik sta altijd open voor het bespreken van nieuwe projecten, creatieve ideeën of kansen om deel uit te maken van jouw visie.",
      name: "Naam",
      email: "E-mail",
      message: "Bericht",
      send: "Verstuur Bericht",
      linkedin: "LinkedIn",
      gmail: "Gmail",
    },
  };

  const SERVICE_ID = "service_1kcm0u7";
  const TEMPLATE_ID = "template_2bwd5qr";
  const PUBLIC_KEY = "_AjpeF3_yveEIKiF3";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSent(false);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      setIsSending(false);
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 2000);
    } catch {
      setIsSending(false);
      alert("Failed to send message. Please try again.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-gradient-to-r from-purple-400/10 to-transparent rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-gradient-to-l from-pink-400/10 to-transparent rounded-full blur-3xl transform -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            {contactText[language].title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {contactText[language].connect}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {contactText[language].description}
              </p>

              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-600/20 flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-600/30 transition-colors">
                    <FaLinkedin className="text-2xl text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {contactText[language].linkedin}
                    </h4>
                    <a
                      href="https://www.linkedin.com/in/abdullah-elmi-43b294290"
                      className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      linkedin.com/in/abdullah
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-600/20 flex items-center justify-center group-hover:bg-purple-200 dark:group-hover:bg-purple-600/30 transition-colors">
                    <FaLaptopCode className="text-2xl text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {contactText[language].gmail}
                    </h4>
                    <a
                      href="mailto:elmiabdullah6@gmail.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                    >
                      elmiabdullah6@gmail.com
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <motion.div whileHover={{ y: -2 }}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {contactText[language].name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900 dark:text-white transition-all duration-300 hover:border-purple-400 dark:hover:border-purple-500"
                  required
                />
              </motion.div>

              <motion.div whileHover={{ y: -2 }}>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {contactText[language].email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900 dark:text-white transition-all duration-300 hover:border-purple-400 dark:hover:border-purple-500"
                  required
                />
              </motion.div>

              <motion.div whileHover={{ y: -2 }}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  {contactText[language].message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-gray-900 dark:text-white resize-none transition-all duration-300 hover:border-purple-400 dark:hover:border-purple-500"
                  required
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:shadow-lg flex items-center justify-center"
                disabled={isSending}
              >
                <AnimatePresence initial={false} mode="wait">
                  {isSending ? (
                    <motion.div
                      key="sending"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-2"
                    >
                      <div className="flex space-x-1">
                        <motion.span
                          className="block w-2 h-2 rounded-full bg-white"
                          animate={{ y: [0, -6, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 0.6,
                            delay: 0,
                          }}
                        />
                        <motion.span
                          className="block w-2 h-2 rounded-full bg-white"
                          animate={{ y: [0, -6, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 0.6,
                            delay: 0.2,
                          }}
                        />
                        <motion.span
                          className="block w-2 h-2 rounded-full bg-white"
                          animate={{ y: [0, -6, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 0.6,
                            delay: 0.4,
                          }}
                        />
                      </div>
                      <span>
                        {language === "en" ? "Sending..." : "Verzenden..."}
                      </span>
                    </motion.div>
                  ) : sent ? (
                    <motion.div
                      key="sent"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center gap-2"
                    >
                      <svg
                        className="h-5 w-5 mr-2 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{language === "en" ? "Sent!" : "Verzonden!"}</span>
                    </motion.div>
                  ) : (
                    <motion.span
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {contactText[language].send}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
