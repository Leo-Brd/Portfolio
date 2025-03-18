import { useState } from "react";
import { motion } from "framer-motion";

export const ToolIcon = ({ tool, index }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <motion.div
        initial={{ opacity: 0, x: (index % 2 === 0 ? -50 : 50), y: (index % 3 === 0 ? -50 : 50) }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 * index }}
        whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.1 } }}
        className="relative p-4 rounded-full shadow-md dark:shadow-white dark:shadow-sm bg-card flex items-center justify-center hover:shadow-lg transition-all cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {tool.icon}

        {/* Mini modale au survol de la div parente */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 left-0 transform translate-y-full bg-background/90 backdrop-blur-sm border border-primary/20 dark:border-white rounded-lg p-2 shadow-lg z-50"
          >
            <p className="text-sm text-foreground">{tool.name}</p>
          </motion.div>
        )}
      </motion.div>
    );
  };