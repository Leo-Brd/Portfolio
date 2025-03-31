"use client";
import { motion, useInView, animate, useMotionValue } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FaCar, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { TbRouter } from "react-icons/tb";
import { FaSchool } from "react-icons/fa6";
import { useTranslation } from 'next-i18next';

export function Certifications() {
  const { t } = useTranslation('common');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const [duration, setDuration] = useState(25);
  const animationControls = useRef(null);

  // Configuration du carrousel
  const cards = [
    {
      icon: <FaSchool className="w-12 h-12 text-primary" />,
      title: t("brevet-title"),
      subtitle: t("brevet-text"),
      date: t("brevet-date")
    },
    {
      icon: <FaGraduationCap className="w-12 h-12 text-primary" />,
      title: t("bac-title"),
      subtitle: t("bac-text"),
      date: t("bac-date")
    },
    {
      icon: <FaCar className="w-12 h-12 text-primary" />,
      title: t("permis-title"),
      subtitle: "",
      date: t("permis-date")
    },
    {
      icon: <TbRouter className="w-12 h-12 text-primary" />,
      title: "Cisco CCNA",
      subtitle: "Introduction To Networks",
      date: t("ccna-date")
    },
    {
      icon: <FaLaptopCode className="w-12 h-12 text-primary" />,
      title: t("oc-diploma-title"),
      subtitle: t("oc-diploma-text"),
      date: t("oc-diploma-date")
    }
  ];

  const duplicatedCards = [...cards, ...cards, ...cards];

  // Animation automatique avec boucle fluide
  useEffect(() => {
    if (!isInView) return;

    const cardWidth = 300;
    const totalWidth = cardWidth * cards.length;

    const startInfiniteAnimation = () => {
      const currentX = x.get();
      const targetX = currentX - totalWidth;
      
      animationControls.current = animate(x, [currentX, targetX], {
        duration: duration,
        ease: "linear",
        onComplete: () => {
          if (x.get() <= -totalWidth) {
            x.set(x.get() + totalWidth);
          }
          startInfiniteAnimation();
        }
      });
    };

    startInfiniteAnimation();

    return () => {
      if (animationControls.current) {
        animationControls.current.stop();
      }
    };
  }, [isInView, x, cards.length, duration]);

  // Pause/reprise au survol
  useEffect(() => {
    if (!isInView) return;

    if (isHovered) {
      if (animationControls.current) {
        animationControls.current.stop();
      }
    } else {
      const currentX = x.get();
      const remainingDistance = - (currentX % (300 * cards.length)) - (300 * cards.length);
      const remainingDuration = duration * (Math.abs(remainingDistance) / (300 * cards.length));
      
      animationControls.current = animate(x, [currentX, currentX + remainingDistance], {
        duration: remainingDuration,
        ease: "linear",
        onComplete: () => {
          x.set(x.get() % (300 * cards.length));
          const restartAnimation = () => {
            animationControls.current = animate(x, [x.get(), x.get() - (300 * cards.length)], {
              duration: duration,
              ease: "linear",
              onComplete: () => {
                x.set(x.get() % (300 * cards.length));
                restartAnimation();
              }
            });
          };
          restartAnimation();
        }
      });
    }
  }, [isHovered, isInView, x, duration, cards.length]);

  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div 
      className="overflow-hidden py-12 relative w-full mb-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '99vw',
        marginLeft: 'calc(-50vw + 50%)'
      }}
    >
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex gap-8 w-max"
        style={{ x }}
      >
        {duplicatedCards.map((card, index) => (
          <motion.div
            key={`card-${index}`}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="relative bg-background/80 backdrop-blur-sm border border-primary/20 rounded-lg p-5 hover:shadow-lg dark:hover:shadow-white/10 transition-shadow duration-300 flex flex-col justify-center items-center text-center min-w-[270px] w-[270px]"
          >
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {card.icon}
            </motion.div>
            <p className="text-lg text-primary/80 dark:text-secondary mt-2">{card.title}</p>
            {card.subtitle && <p className="text-sm text-primary/80 dark:text-secondary mt-1">{card.subtitle}</p>}
            <p className="text-sm text-secondary mt-1">{card.date}</p>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Masques pour créer l'effet de dégradé sur les bords */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </div>
  );
}