import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      style={{ minHeight: '40vh' }}
      className="gap-4 grid items-center lg:grid-cols-4 px-20 py-5 bg-dark-5"
    >
      <div className="grid grid-rows-auto lg:h-3/4">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img className="h-7 mb-4" src="/logo.svg" alt="E. logo" />
          <p className="text-gray-300 text-lg">
            © This website was built by <br /> Eashaan Th4kur. All rights
            reserved.
          </p>
        </div>
        <div className="gap-2 grid grid-cols-3 h-12 items-start justify-items-start mt-4 text-gray-300 w-2/5">
          <a
            href="https://www.facebook.com/siisindia"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition-colors"
          >
            <i className="fill-current ph-facebook-logo-fill ph-xl"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/system-integration-&amp;-infrasture-solution?trk=public_profile_topcard-current-company"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition-colors"
          >
            <i className="fill-current ph-linkedin-logo-fill ph-xl"></i>
          </a>
          <a
            href="mailto:ashok.thakur@siis.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition-colors"
          >
            <i className="fill-current ph-envelope-bold ph-xl"></i>
          </a>
        </div>
      </div>
      <ul className="lg:h-3/4 lg:justify-self-end w-1/2">
        <li className="font-medium mb-3 sm:mb-6 text-hero-dark text-xl">
          Quick Links
        </li>
        <li className="mb-2">
          <Link href="/about">
            <a className="hover:text-gray-500 text-gray-300 text-lg transition-colors">
              About
            </a>
          </Link>
        </li>
        <li className="mb-2">
          <a
            href="#"
            className="hover:text-gray-500 text-gray-300 text-lg transition-colors"
          >
            Our Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-gray-500 text-gray-300 text-lg transition-colors"
          >
            Testimonials
          </a>
        </li>
      </ul>
      <ul className="lg:h-3/4 lg:justify-self-center">
        <li className="font-medium mb-3 sm:mb-6 text-hero-dark text-xl">
          Address
        </li>
        <li className="text-gray-300 text-lg">
          Address kyu chahiye mera stalker
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
