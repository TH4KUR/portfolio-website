/* eslint-disable react/no-unescaped-entities */
import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';
import Heading from './Heading';
import { FaTimes } from 'react-icons/fa';
import { BsCheck2 } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';
import { CgSpinner } from 'react-icons/cg';
import {
  DiJavascript1,
  DiNodejsSmall,
  DiSass,
  DiReact,
  DiGithubBadge,
} from 'react-icons/di';
import {
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from 'react-icons/si';
import ENCRYPTED_KEY from '../apiKey';
const API_KEY = [...ENCRYPTED_KEY]
  .map((c) => String.fromCharCode(c.charCodeAt(0) ^ 76))
  .join('');

const requestConfig = { method: 'GET', mode: 'no-cors' };

// Server Status check on click
async function sendPing(resource, options = {}) {
  const { timeout = 3000 } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);
  return response;
}

const Card = () => {
  const requestsData = {
    url: 'url',
    load: 'Checking website status',
    success: 'Website is online',
    fail: 'Website is offline',
    done: 'Visit Website',
    onfail: 'Giving the app a caffene shot',
  };
  const [reqStatus, setReqStatus] = useState(false);
  const [buttonText, setButtonText] = useState('Check Demo Status');
  const setStatus = (stat) => {
    setReqStatus(stat);
    setButtonText(requestsData[stat]);
  };
  const clickHandler = async (e) => {
    try {
      if (!(reqStatus === 'done')) {
        e.preventDefault();
        setStatus('load');

        const response = await sendPing(
          'https://forkify.com/api/v2/recipes?search=pizza&key=99c2d18e-b9b2-4c0c-9260-3db5685e42f4'
        );
        if (response.ok) {
          setTimeout(setStatus('done'), 500);
        }
        console.log(response);
      } else {
        return;
      }
    } catch (error) {
      setStatus('fail');
      setTimeout(() => {});
      console.log(error);
    }
  };
  let [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div
        onClick={openModal}
        className="animate-border relative py-4 px-3 rounded bg-dark-4 h-full grid grid-rows-2 cursor-pointer"
      >
        <img src="/image.png" alt="Project Picture" />
        <div className="flex flex-col justify-center">
          <div>
            <h5 className="text-gray-200 text-2xl">SiiS Homepage</h5>
            <p className="text-gray-400 text-xl leading-none">
              A completely static web-page for a IT solutions company called
              SiiS. Also did some basic SEO for Google, and other social media.
            </p>
          </div>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-dark-3 bg-opacity-30" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-4 my-8 overflow-hidden text-left align-middle transition-all transform bg-dark shadow-xl rounded-2xl relative">
                <Heading text={'Project'} big={false} />
                <div className="mt-2">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl font-medium leading-6 text-gray-200 mb-1"
                  >
                    SiiS Website
                  </Dialog.Title>
                  <p className="text-2xl text-gray-400 leading-none">
                    A completely static web-page for a IT solutions company
                    called SiiS. Also did some basic SEO for Google, and other
                    social media.
                  </p>
                </div>
                <FaTimes
                  className="text-hero-dark absolute top-4 right-5 text-lg cursor-pointer"
                  onClick={closeModal}
                />
                <div className="mt-4">
                  <Heading
                    text={'Technologies Used'}
                    big={false}
                    c={{ marginBottom: 0 }}
                  />
                  <div className="flex mt-1">
                    <SiHtml5 className="text-orange-600 text-[1.8rem] mr-2" />
                    <SiTailwindcss className=" text-cyan-400 text-3xl mr-2" />
                    <DiJavascript1 className=" text-yellow-400 text-3xl" />
                  </div>
                  <div className="mt-4">
                    <Heading
                      text={'Links'}
                      big={false}
                      c={{ marginBottom: 0 }}
                    />
                    <div className="flex">
                      <a
                        className={`py-1 px-2 ${
                          (reqStatus === 'success' && 'text-emerald-500') ||
                          (reqStatus === 'fail' && 'text-red-500') ||
                          'text-pink-600'
                        } text-xl bg-dark-4 rounded mr-2 flex items-center`}
                        style={{ textShadow: '1px 2px 6px #000000e1' }}
                        onClick={clickHandler}
                        href={reqStatus === 'done' ? 'https://google.com' : '#'}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {(reqStatus === 'load' && (
                          <CgSpinner className="animate-spin mr-1 mb-1" />
                        )) ||
                          (reqStatus === 'success' && (
                            <BsCheck2 className="text-emerald-500 mr-1 transform -translate-y-[2px]" />
                          )) ||
                          (reqStatus === 'fail' && (
                            <FaTimes className="text-red-500 text-sm mr-1 transform -translate-y-[2px]" />
                          )) ||
                          (reqStatus === 'done' && (
                            <BiLinkExternal className="text-sm mr-1 transform -translate-y-[2px]" />
                          ))}
                        {buttonText}
                      </a>
                      <button
                        className="py-1 px-2 text-pink-600 text-xl bg-dark-4 rounded flex items-center cursor-not-allowed relative with-info"
                        style={{ textShadow: '1px 2px 6px #000000e1' }}
                      >
                        <DiGithubBadge className="mr-1 leading-none text-xl transform -translate-y-[2px]" />
                        Not Permitted
                        <i className="bg-dark-5 text-gray-200 p-1 not-italic absolute w-[30ch] top-[-5rem] inset-x-0 hidden -translate-x-9 cursor-text">
                          Source code cant be publicly shared but code snippets
                          can be shared upon request
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Card;
