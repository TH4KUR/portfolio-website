/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

const Faq = () => {
  const [faq, useFaq] = useState([
    {
      question: `Question goes here...`,
      ans: `Here goes an answer for the above question. No ideas for what
      questions to add. Suggestion hi de dena aa hi gye ho toh through the form below.`,
    },
    {
      question: `Question 2 pls come here...`,
      ans: `Here goes an answer for the above question (2). No ideas for what
      questions to add so im just leaving it as it is.`,
    },
    {
      question: `Question 3 go there here...`,
      ans: `Here goes an answer for the above question (3). No ideas for what
      questions to add so im just leaving it as it is.`,
    },
  ]);
  return (
    <div className="w-full px-4 pt-16">
      <div className="w-full max-w-md p-2 mx-auto rounded-2xl bg-dark">
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
