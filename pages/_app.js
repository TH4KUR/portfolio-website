import '../styles/globals.css';
import Nav from '../components/Nav';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logo.svg" />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
