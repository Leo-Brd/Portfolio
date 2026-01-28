import Head from 'next/head';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page non trouvée | Votre Portfolio</title>
        <meta name="description" content="La page que vous recherchez n'existe pas ou a été déplacée." />
      </Head>
      
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">Page non trouvée</h2>
          <p className="text-gray-600 mb-8 dark:text-white">
            Oups ! La page que vous recherchez semble avoir été déplacée, supprimée ou n'existe pas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-md hover:shadow-lg" passHref>
                Retour à l'accueil
            </Link>
            
            <Link href="/contact" className="px-6 py-3 border border-primary dark:bg-primary text-primary dark:text-white font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-primary/90 transition-colors duration-300" passHref>
                Contactez-moi
            </Link>
          </div>
        </div>
        
        {/* Illustration SVG */}
        <div className="mt-12">
          <svg
            width="300"
            height="200"
            viewBox="0 0 839.6 473.8"
            className="text-indigo-200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M630.5 337.4c-1.4-1.4-3.3-2.2-5.3-2.2H214.4c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5h410.8l-98 98c-2.9 2.9-2.9 7.7 0 10.6 1.5 1.5 3.4 2.2 5.3 2.2s3.8-.7 5.3-2.2l109.4-109.4c2.9-2.9 2.9-7.7 0-10.6l-106.6-106.6z"
            />
            <path
              fill="currentColor"
              d="M214.4 158.6h410.8c4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5H214.4c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5z"
            />
          </svg>
        </div>
      </div>
    </>
  );
}