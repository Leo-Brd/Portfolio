import "./globals.css";
import Header from "@/components/header"

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Je suis un développeur passioné par la création d'applications web modernes et performantes !" />
        <title>LeoBrd - Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"></link>
        <link href="https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
