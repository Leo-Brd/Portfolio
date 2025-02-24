import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Je suis un développeur passioné par la création d'applications web modernes et performantes !" />
        <title>LeoBrd- Portfolio</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
