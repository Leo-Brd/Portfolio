"use client"
import "./globals.css";
import React from 'react';
import Header from "@/components/header"
import Footer from "@/components/footer"
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';

export default function RootLayout({ children }) {
  return (
    <I18nextProvider i18n={i18n}>
      <html lang={i18n.language}>
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Je suis un développeur passioné par la création d'applications web modernes et performantes !" />
          <title>LeoBrd - Portfolio</title>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
          <link href="https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"></link>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
          <link href="https://fonts.googleapis.com/css2?family=Taviraj:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
        </head>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </I18nextProvider>
  );
}
