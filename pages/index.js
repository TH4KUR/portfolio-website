import Hero from '../components/Hero';
import Head from 'next/head';
import About from '../components/About';
import Technologies from '../components/Technologies';
import Projects from '../components/Projects';
import Form from '../components/Form';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logo.svg" />
        <title>{`Home - Eashaan's Portfolio`}</title>
      </Head>
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Form />
      <Script src="../utils/redirect.js" strategy="beforeInteractive" />
    </>
  );
}
