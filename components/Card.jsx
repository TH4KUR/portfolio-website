/* eslint-disable react/no-unescaped-entities */
import { Dialog, Transition } from '@headlessui/react';
import { useState, Fragment } from 'react';
import Heading from './Heading';
import { FaTimes } from 'react-icons/fa';
import { BsCheck2 } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';
import { CgSpinner } from 'react-icons/cg';
import { DiGithubBadge } from 'react-icons/di';
import sendPing from '../utils/sendPing';

const Card = ({ data }) => {
  let failCount = 0;
  const { cardData, modalData, requestsData, github } = data;

  // Project request status
  const [reqStatus, setReqStatus] = useState(false);

  // Button text state
  const [buttonText, setButtonText] = useState('Check Demo Status');

  // Modal
  let [isOpen, setIsOpen] = useState(false);

  const setStatus = (stat, msg = '') => {
    setReqStatus(stat);
    setButtonText(requestsData[msg] || msg || requestsData[stat]);
  };
  const clickHandler = async (e, url, stat) => {
    try {
      let status = stat ? stat : null;

      if (!(reqStatus === 'done')) {
        e.preventDefault();

        setStatus('load', status || 'load');

        const response =
          stat === 'onfail'
            ? await sendPing(url, { timeout: 15000 })
            : await sendPing(url);

        if (response.ok) {
          setStatus('success', stat || 'success');
          setTimeout(() => setStatus('done'), 500);
        }
      } else {
        return;
      }
    } catch (error) {
      failCount++;
      if (failCount > 2) {
        setStatus('fail', 'There seems to be a server error');
        return;
      }
      setStatus('fail');
      setTimeout(() => {
        clickHandler(e, url, 'onfail');
      }, 500);
    }
  };

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
        className="animate-border relative py-4 px-3 rounded bg-dark-4 h-full grid grid-rows-2 cursor-pointer gap-2 items-start"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div className={`${cardData.imageSrc} bg-cover h-full w-full`}></div>
        <div className="flex flex-col justify-center">
          <div>
            <h5 className="text-gray-200 text-2xl">{cardData.title}</h5>
            <p className="text-gray-400 text-[1.35rem] leading-none">
              {cardData.shortDes}
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
              <div className="inline-block w-full max-w-lg p-4 my-8 overflow-hidden text-left align-middle transition-all transform bg-dark-5 shadow-xl rounded-2xl relative">
                <Heading text={'Project'} big={false} />
                <div className="mt-2">
                  <div
                    className={`${cardData.modalImg} bg-cover w-full h-[30vh] rounded`}
                  ></div>
                  <Dialog.Title
                    as="h3"
                    className="text-3xl font-medium leading-6 text-gray-200 mb-1 mt-2"
                  >
                    {modalData.title}
                  </Dialog.Title>
                  <p className="text-2xl text-gray-400 leading-none">
                    {modalData.des}
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
                  <div className="flex mt-1">{[...modalData.languages]}</div>
                  <div className="mt-4">
                    <Heading
                      text={'Links'}
                      big={false}
                      c={{ marginBottom: 0 }}
                    />
                    <div className="flex flex-col md:flex-row place-items-start">
                      <a
                        className={`py-1 px-2 ${
                          (reqStatus === 'success' && 'text-emerald-500') ||
                          (reqStatus === 'fail' && 'text-red-500') ||
                          'text-pink-600'
                        } text-xl bg-dark-4 rounded mr-2 mb-2 md:mb-0 flex items-center focus:border-none`}
                        style={{ textShadow: '1px 2px 6px #000000e1' }}
                        onClick={(e) => {
                          clickHandler(e, requestsData.url);
                        }}
                        href={
                          reqStatus === 'done' ? requestsData.finalUrl : '#'
                        }
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
                      <a
                        href={github.stat && github.link}
                        className={`py-1 px-2 text-pink-600 text-xl bg-dark-4 rounded flex items-center ${
                          github.stat ? '' : 'cursor-not-allowed with-info'
                        } relative`}
                        style={{ textShadow: '1px 2px 6px #000000e1' }}
                      >
                        <DiGithubBadge className="mr-1 leading-none text-xl transform -translate-y-[2px]" />
                        {github.stat ? 'Source Code' : 'Not Permitted'}
                        <i
                          className={`bg-dark-5 text-gray-200 p-1 not-italic absolute w-[30ch] top-[-5rem] inset-x-0 hidden -translate-x-9 cursor-text text-center`}
                        >
                          Source code cant be publicly shared but code snippets
                          can be shared upon request
                        </i>
                      </a>
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
