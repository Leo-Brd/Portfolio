"use client"
import "./globals.css";
import React from 'react';
import Header from "@/components/header"
import Footer from "@/components/footer"
import PopUp from "@/components/info-popup"
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';

export default function RootLayout({ children }) {
  return (
    <I18nextProvider i18n={i18n}>
      <html lang={i18n.language}>
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Language" content="fr" />
          <meta name="generator" content="LeoBrd Portfolio - Created with Next.js and Tailwind CSS"></meta>
          <meta name="description" content="Je suis un développeur passioné par la création d'applications web modernes et performantes !" />
          <title>LeoBrd - Portfolio</title>

          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
          <link href="https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
          <link href="https://fonts.googleapis.com/css2?family=Taviraj:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>

          { /*OpenGraph Meta Tags*/ }
          <meta property="og:type" content="website" />
          <meta property="og:title" content="LeoBrd - Développeur Web" />
          <meta property="og:description" content="Bienvenue sur mon portfolio ! Découvrez mes projets et compétences en développement web." />
          <meta property="og:url" content="https://portfolio-gamma-vert-55.vercel.app/" />
          <meta property="og:image" content="https://portfolio-gamma-vert-55.vercel.app/cards_img.png" />
          <meta property="og:image:alt" content="Aperçu du portfolio de LeoBrd" />
          <meta property="og:site_name" content="LeoBrd Portfolio" />
          <meta property="og:locale" content="fr_FR" />

          { /*Twitter Meta Tags*/ }
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="LeoBrd - Développeur Web" />
          <meta name="twitter:description" content="Découvrez mon portfolio et mes projets en développement web." />
          <meta name="twitter:image" content="https://portfolio-gamma-vert-55.vercel.app/cards_img.png" />
          <meta name="twitter:image:alt" content="Aperçu du portfolio de LeoBrd" />

          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "LeoBrd",
                "jobTitle": "Développeur Web",
                "url": "https://portfolio-gamma-vert-55.vercel.app/",
                "sameAs": [
                  "https://github.com/Leo-Brd",
                  "https://www.linkedin.com/in/leo-bordet/",
                  "https://discord.com/users/leo_brd"
                ],
                "description": "Développeur web en apprentissage spécialisé en React et Node.js. Découvrez mes projets, compétences et expériences en parcourant mon portfolio !"
              }
            `}
          </script>

        </head>
        <body>
          <Header />
            {children}
          <Footer />

          <PopUp />
        </body>
      </html>

    </I18nextProvider>
  );
}
