import React from 'react';
import Heading from './Heading';
import styles from '../styles/Form.module.css';
import HeadingContainer from './HeadingContainer';
import { IoConstructOutline } from 'react-icons/io5';

const Form = () => {
  return (
    <section id="contact" className="w-full min-h-[90vh] bg-dark-4 py-20">
      <div className="w-[86.3%] mx-auto grid grid-cols-2">
        <Heading text={'Contact Me'} big={false} />
      </div>

      <div className="grid lg:grid-cols-2 w-[86.3%] mx-auto mt-5">
        <div className="md:w-[86.3%] pb-2 md:pb-0">
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
            className=" w-3/4 lg:block hidden"
          />
        </div>
        <div className="text-gray-100 text-4xl">
          {/* <form action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-dark-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-2xl leading-none font-medium text-gray-200"
                    >
                      First name
                    </label>
                    <input
                      readOnly
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 focus:ring-hero focus:border-hero bg-dark-4 block w-full shadow-sm text-xl leading-none border-dark-2 text-gray-300 rounded-md"
                      value={'Eashaan'}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="block text-2xl leading-none font-medium text-gray-200"
                    >
                      Last name
                    </label>
                    <input
                      readOnly
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 focus:ring-hero focus:border-hero bg-dark-4 block w-full shadow-sm text-xl leading-none border-dark-2 text-gray-300 rounded-md"
                      value={'Thakur'}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="email-address"
                      className="block text-2xl leading-none font-medium text-gray-200"
                    >
                      Email address
                    </label>
                    <input
                      readOnly
                      type="text"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      className="mt-1 focus:ring-hero focus:border-hero bg-dark-4 block w-full shadow-sm text-xl leading-none border-dark-2 text-gray-300 rounded-md"
                      value={'max910payne@gmail.com'}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-5">
                    <label
                      htmlFor="message"
                      className="block text-2xl leading-none font-medium text-gray-200"
                    >
                      Your message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      autoComplete="email"
                      className="mt-1 focus:ring-hero focus:border-hero bg-dark-4 block w-full shadow-sm text-xl leading-none border-dark-2 text-gray-300 rounded-md resize-none h-[6.5rem] sm:h-[6rem]"
                      value={`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda unde vitae in beatae rerum officiis officia.`}
                      readOnly
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-dark-3 text-right sm:px-6 flex justify-between items-center">
                <p className="flex text-xl text-hero-dark text-left leading-none">
                  <IoConstructOutline className="text-hero text-base self-center mr-4" />{' '}
                  Form under construction,
                  <br /> will be up soon ;)
                </p>
                <button
                  disabled
                  type="submit"
                  className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xl leading-none font-medium rounded-md text-white bg-hero cursor-not-allowed hover:bg-hero-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hero ${styles.textShadow}`}
                >
                  Send
                </button>
              </div>
            </div>
          </form> */}
          Send me a mail at: <br />{' '}
          <span className="text-3xl">eashaanthakur13[at]gmail[dot]com</span>
        </div>
      </div>
    </section>
  );
};

export default Form;
