/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import About from '../components/About';

const about = () => {
  return (
    <>
      <Head>
        <title>About - Eashaan's Portfolio</title>
      </Head>
      <About />
    </>
  );
};

export default about;
