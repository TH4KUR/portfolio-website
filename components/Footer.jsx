import React from 'react';
import Link from 'next/link';
import { DiGithubBadge } from 'react-icons/di';
import LinkStyled from './LinkStyled';
const Footer = () => {
  return (
    <footer
      style={{ minHeight: '40vh' }}
      className="gap-4 grid items-top sm:grid-cols-4 px-10 lg:px-20 py-10 bg-dark-5"
    >
      <div className="grid grid-rows-auto lg:h-3/4">
        <div className="grid items-center">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img className="h-7" src="/logo.svg" alt="E. logo" />
          <p className="text-gray-300 text-lg lg:w-[40ch] pt-3">
            © This website was built by Eashaan Th4kur. All rights reserved.
          </p>
        </div>
        <div className="gap-2 grid grid-cols-3 h-12 items-start justify-items-start text-gray-300 w-2/5">
          <LinkStyled
            text={
              <>
                <DiGithubBadge />
              </>
            }
            invert={true}
            href="https://github.com/th4kur"
            blank={true}
          />
        </div>
      </div>
      <ul className="lg:h-3/4 lg:justify-self-end w-1/2">
        <li className="font-medium mb-3 sm:mb-6 text-hero-dark text-xl">
          Quick Links
        </li>
        <li className="mb-2">
          <Link href="#about">
            <a className="hover:text-gray-500 text-gray-300 text-lg transition-colors">
              About
            </a>
          </Link>
        </li>
        <li className="mb-2">
          <Link href="#projects">
            <a className="hover:text-gray-500 text-gray-300 text-lg transition-colors">
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href="#contact">
            <a className="hover:text-gray-500 text-gray-300 text-lg transition-colors">
              Contact
            </a>
          </Link>
        </li>
      </ul>
      <ul className="lg:h-3/4 lg:justify-self-center">
        <li className="font-medium mb-3 sm:mb-6 text-hero-dark text-xl">
          Address
        </li>
        <li className="text-gray-300 text-lg">
          Address kyu chahiye mera 😡😡😡
        </li>
      </ul>
      <ul className="lg:h-3/4 lg:justify-self-center">
        <li className="font-medium mb-3 sm:mb-6 text-hero-dark text-xl">
          Contact Me
        </li>
        <li className="mb-2 text-gray-300 text-lg">
          Email: max910payne@gmail.com
        </li>
        <li className="mb-2 text-gray-300 text-lg">Phone no:&nbsp; :(</li>
      </ul>
    </footer>
  );
};

export default Footer;
