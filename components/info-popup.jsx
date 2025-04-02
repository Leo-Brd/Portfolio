"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function PopupAlternance() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const popupData = localStorage.getItem("popupAlternanceData");
      
      if (!popupData) {
        setShowPopup(true);
      } else {
        const { lastClosedDate } = JSON.parse(popupData);
        const now = new Date();
        const lastClosed = new Date(lastClosedDate);
        
        // Réaffiche la popup tous les jours à minuit
        const isNewDay = now.getDate() !== lastClosed.getDate() || 
                         now.getMonth() !== lastClosed.getMonth() || 
                         now.getFullYear() !== lastClosed.getFullYear();
        
        setShowPopup(isNewDay);
      }
    }
  }, []);

  const closePopup = () => {
    const popupData = {
      lastClosedDate: new Date().toISOString()
    };
    localStorage.setItem("popupAlternanceData", JSON.stringify(popupData));
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-fadeIn hidden sm:block">
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg max-w-xs border border-gray-300 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          🎯 Je recherche une alternance ou un stage !
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
          Je suis à la recherche d'une entreprise qui me permettra de développer mes compétences en développement web.
        </p>
        <div className="mt-3 flex justify-between">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-3 py-1.5 text-sm rounded-md hover:bg-blue-700 transition"
          >
            Me contacter
          </Link>
          <button
            onClick={closePopup}
            className="text-gray-500 dark:text-gray-400 text-sm hover:text-gray-700 dark:hover:text-gray-300"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}