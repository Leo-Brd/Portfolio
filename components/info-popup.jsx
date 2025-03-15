"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function PopupAlternance() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");
    setShowPopup(true);
    if (!hasSeenPopup) {
      setShowPopup(true);
    }
  }, []);

  const closePopup = () => {
    localStorage.setItem("hasSeenPopup", "true");
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
