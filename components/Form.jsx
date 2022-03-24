import React from 'react';
import Heading from './Heading';
import styles from '../styles/Form.module.css';
import HeadingContainer from './HeadingContainer';
import { IoConstructOutline } from 'react-icons/io5';

const Form = () => {
  return (
    <section id="contact" className="w-full min-h-[90vh] bg-dark-4">
      <div className="w-[86.3%] pt-40 mx-auto grid grid-cols-2">
        <Heading text={'Contact Me'} big={false} />
      </div>

      <div className="grid grid-cols-2 w-[86.3%] mx-auto">
        <div className="mt-5">
          <form action="#" method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-dark-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-xl leading-none font-medium text-gray-200"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 focus:ring-hero focus:border-hero bg-dark-4 block w-full shadow-sm sm:text-xl leading-none border-dark-2 text-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-xl leading-none font-medium text-gray-200"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 focus:ring-hero focus:border-hero bg-dark-4 block w-full shadow-sm sm:text-xl leading-none border-dark-2 text-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="email-address"
                      className="block text-xl leading-none font-medium text-gray-200"
                    >
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      className="mt-1 focus:ring-hero focus:border-hero bg-dark-4 block w-full shadow-sm sm:text-xl leading-none border-dark-2 text-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="message"
                      className="block text-xl leading-none font-medium text-gray-200"
                    >
                      Your message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      autoComplete="email"
                      className="mt-1 focus:ring-hero focus:border-hero bg-dark-4 block w-full shadow-sm sm:text-xl leading-none border-dark-2 text-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-dark-3 text-right sm:px-6 flex justify-between items-center">
                <p className="flex text-xl text-hero-dark">
                  <IoConstructOutline className="text-hero text-base self-center mr-2" />{' '}
                  Form under construction. No worries it will be up soon ;)
                </p>
                <button
                  type="submit"
                  className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xl leading-none font-medium rounded-md text-white bg-hero hover:bg-hero-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hero ${styles.textShadow}`}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="w-[86.3%] justify-self-end">
          <HeadingContainer
            big={'Have any more questions?'}
            des={
              'If you have any more questions regarding me or just want to provide feed, then you can simply reach me through the contact form beside. '
            }
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/contact.svg"
            draggable="false"
            alt="contact"
            className=" w-3/4"
          />
        </div>
      </div>
    </section>
  );
};

export default Form;
