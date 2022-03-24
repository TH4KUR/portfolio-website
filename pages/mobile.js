import React from 'react';
import Head from 'next/head';
import LinkStyled from '../components/LinkStyled';

const mobile = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logo.svg" />
        <title>{`Home - Eashaan's Portfolio`}</title>
      </Head>
      <div
        style={{ minHeight: 'calc(100vh - 4rem)' }}
        className="w-full grid bg-dark justify-items-center"
      >
        <img
          src={'/logo.svg'}
          alt="logo"
          height={35}
          width={35}
          className="self-center"
        />
        <span className="text-gray-300 text-2xl text-center self-start w-11/12">
          Ooh oh looks like youre on a mobile! <br /> The mobile version of the
          website isnt ready yet. <br /> Try switching to desktop site and click
          the link below or else use a desktop. <br />
          <LinkStyled
            href="/"
            text={<>Back to home &rarr;</>}
            invert={true}
          ></LinkStyled>
          <br /> -or- <br /> just sit back and wait for the mobile version!
        </span>
      </div>
    </>
  );
};

export default mobile;
