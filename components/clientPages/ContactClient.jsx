"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

export default function ContactClient() {
  const { t } = useTranslation('common');
  const [formStatus, setFormStatus] = useState('');
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const { name, email, message } = formData;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setIsFormValid(name.trim() !== '' && isEmailValid && message.trim() !== '');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    validateForm();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) {
      setFormStatus('Veuillez remplir tous les champs correctement.');
      setIsError(true);
      return;
    }

    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setFormStatus('Mail envoyé avec succès !');
        setIsError(false);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('Erreur lors de l\'envoi du mail');
        setIsError(true);
      }
    } catch (error) {
      console.error(error);
      setFormStatus('Erreur lors de l\'envoi du mail');
      setIsError(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground py-8 sm:p-8 mt-24"
    >
      {/* Titre de la page */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold text-primary dark:text-secondary mb-8"
      >
        {t("contact-title")}
      </motion.h1>
      {/* Conteneur principal */}
      <div className="w-full max-w-4xl bg-card backdrop-blur-sm border border-white/20 rounded-lg p-8 shadow-lg">
        {/* Section du formulaire */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-semibold text-primary dark:text-secondary mb-6">
            {t("contact-form-title")}
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground dark:text-secondary">
                {t("contact-name-title")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-1 bg-background/50 border dark:border-white/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder= {t("contact-name-placeholder")}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground dark:text-secondary">
                {t("contact-mail-title")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 mt-1 bg-background/50 border dark:border-white/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder= {t("contact-mail-placeholder")}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground dark:text-secondary">
                {t("contact-message-title")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className="w-full px-4 py-2 mt-1 bg-background/50 border dark:border-white/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder= {t("contact-message-placeholder")}
                required
              />
            </div>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full px-6 py-3 bg-primary text-white rounded-lg transition-colors duration-300 ${
                isFormValid ? 'hover:bg-primary/90' : 'opacity-80 cursor-not-allowed'
              }`}
            >
              {t("contact-form-send")}
            </button>
          </form>
          {formStatus && (
            <p
              className={`mt-4 text-center ${
                isError ? 'text-red-500' : 'text-green-500'
              }`}
            >
              {formStatus}
            </p>
          )}
        </motion.div>
        {/* Section des liens de contact */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-primary mb-6">
            {t("contact-details")}
          </h2>
          {/* Liens de contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
                href="https://www.google.com/maps/place/Lyon,+France"
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center space-x-4 p-4 bg-background/50 border dark:border-white/80 rounded-lg hover:shadow-lg dark:shadow-white/10 transition-shadow duration-300 cursor-pointer"
            >
              <FaMapMarkerAlt className="w-6 h-6 text-primary" />
              <span className="text-muted-foreground">Lyon, France</span>
            </a>
            <a
              href="mailto:leobordet.pro@gmail.com"
              className="flex items-center space-x-4 p-4 bg-background/50 border dark:border-white/80 rounded-lg hover:bg-background/70 transition-all duration-300 hover:shadow-lg dark:shadow-white/10"
            >
              <FaEnvelope className="w-6 h-6 text-primary" />
              <span className="text-muted-foreground">leobordet.pro@gmail.com</span>
            </a>
            <a
              href="tel:+33783194855"
              className="flex items-center space-x-4 p-4 bg-background/50 border dark:border-white/80 rounded-lg hover:bg-background/70 transition-all duration-300 hover:shadow-lg dark:shadow-white/10"
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