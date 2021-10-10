import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { initGA, logPageView } from '../src/components/googleAnalytics';
import '../src/scss/style.scss';
import Spinner from '../src/components/Spinner';
import ThemeContext from '../src/components/ThemeContext';
import UserContext from '../src/components/UserContext';
import config from '../src/config';
import SEO from '../src/seo';

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  const [Theme, setTheme] = useState('light');
  const [User, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
    setLoading(false);
  }, []);

  if (Loading) return <Spinner />;

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&family=Poppins:ital,wght@0,100;0,400;0,600;0,800;1,100;1,400;1,600;1,800&display=swap"
          rel="stylesheet"
        />
        <script
          data-ad-client={config.ADSENSE_ID}
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
        <title>{SEO.title}</title>
        <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        <meta name="title" content={SEO.title} />
        <meta name="description" content={SEO.description} />
        <meta name="keywords" content={SEO.keywords} />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </Head>

      <ThemeContext.Provider
        value={{
          Theme,
          setTheme
        }}>
        <UserContext.Provider
          value={{
            User,
            setUser
          }}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable={false}
            pauseOnHover
          />
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </UserContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default MyApp;
