"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useTranslation } from 'next-i18next';

export default function ContactPage() {
  const { t, i18n } = useTranslation('common');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-8 mt-24"
    >
      {/* Titre de la page */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold text-primary mb-8"
      >
        Contactez-moi
      </motion.h1>

      {/* Conteneur principal */}
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 shadow-lg">
        {/* Section du formulaire */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Envoyez-moi un mail
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                Votre nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 mt-1 bg-background/50 border dark:border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Entrez votre nom"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                Votre e-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 mt-1 bg-background/50 border dark:border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Entrez votre e-mail"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground">
                Votre message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                className="w-full px-4 py-2 mt-1 bg-background/50 border dark:border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Écrivez votre message ici..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
            >
              Envoyer
            </button>
          </form>
        </motion.div>

        {/* Section des liens de contact */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Mes coordonnées
          </h2>

          {/* Liens de contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="flex items-center space-x-4 p-4 bg-background/50 border dark:border-white rounded-lg hover:shadow-lg dark:shadow-white/10 transition-shadow duration-300">
                <FaMapMarkerAlt className="w-6 h-6 text-primary" />
                <span className="text-muted-foreground">Lyon, France</span>
              </div>

              <a
                href="mailto:leobordet.pro@gmail.com"
                className="flex items-center space-x-4 p-4 bg-background/50 border dark:border-white rounded-lg hover:bg-background/70 transition-all duration-300 hover:shadow-lg dark:shadow-white/10"
              >
                <FaEnvelope className="w-6 h-6 text-primary" />
                <span className="text-muted-foreground">leobordet.pro@gmail.com</span>
              </a>

              <a
                href="tel:+33783194855"
                className="flex items-center space-x-4 p-4 bg-background/50 border dark:border-white rounded-lg hover:bg-background/70 transition-all duration-300 hover:shadow-lg dark:shadow-white/10"
              >
                <FaPhone className="w-6 h-6 text-primary" />
                <span className="text-muted-foreground">+33 7 83 19 48 55</span>
              </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}