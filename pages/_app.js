import '../styles/globals.css';
import Head from 'next/head';
import { useEffect } from 'react';
import { logUserEvents } from '../utils/util';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    logUserEvents();
  }, []);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logo.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
