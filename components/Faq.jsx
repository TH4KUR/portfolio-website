/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

const Faq = () => {
  const [faq, useFaq] = useState([
    {
      question: `Why learn to code?`,
      ans: `I started out in coding so that I could do something productive during lockdown and ended up loving it. Coding gives me very much creative freedom as I can build anything I want and nothing makes me happier than that.`,
    },
    {
      question: `Where does your inner drive come from?`,
      ans: `Web development is a constantly changing field with new languages and frameworks popping up everyday. I like to learn more and more about new technologies as it is my passion, So my inner drive to build websites comes from my willingness to gain knowledge.`,
    },
    {
      question: `What is your personal philosophy?`,
      ans: `Here goes an answer for the above question. It is a bit philosophical so ill give it a thought before answering.`,
    },
  ]);
  return (
    <div className="w-full lg:px-4 lg:pt-16 md:pt-2">
      <div className="w-full max-w-md p-2 lg:mx-auto rounded-2xl bg-dark">
        {faq.map(({ question, ans }, i) => {
          return (
            <div key={i} className="mb-1">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-2xl font-medium text-left text-gray-200 bg-dark-5 rounded-lg hover:bg-dark-4">
                      <span>{question}</span>
                      <ChevronUpIcon
                        className={`${
                          open
                            ? 'transform rotate-180'
                            : 'transform rotate-[270deg]'
                        } w-5 h-5 text-gray-300 self-center`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-xl text-gray-300">
                      {ans}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Faq;
