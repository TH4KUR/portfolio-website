import Card from './Card';
import HeadingContainer from './HeadingContainer';
import LinkStyled from './LinkStyled';
import { DiJavascript1, DiNodejsSmall, DiSass, DiReact } from 'react-icons/di';
import {
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from 'react-icons/si';
import { useState } from 'react';

const allData = [
  {
    github: {
      stat: undefined,
    },
    cardData: {
      imageSrc: `bg-[url('/siis.png')]`,
      modalImg: `bg-[url('/siis-modal.png')]`,
      title: 'SiiS Website',
      shortDes:
        'I made this static website for an IT solutions provider company called SiiS. I used this project as a way to get a good grasp on tailwindcss.',
    },
    modalData: {
      title: 'SiiS Website',
      des: 'I made this static website for an IT solutions provider company called SiiS. I used this project as a way to get a good grasp on tailwindcss. I also did some basic SEO.',
      languages: [
        <SiHtml5 key={1} className="text-orange-600 text-[1.8rem] mr-2" />,
        <SiTailwindcss key={2} className=" text-cyan-400 text-3xl mr-2" />,
        <DiJavascript1 key={3} className=" text-yellow-400 text-3xl" />,
      ],
    },
    requestsData: {
      finalUrl: 'https://www.siis.in/',
      url: 'https://proxy.eashaan.workers.dev/?url=http://www.siis.in',
      load: 'Checking website status',
      success: 'Website is online',
      done: 'Visit Website',
    },
  },
  {
    github: {
      stat: true,
      link: 'https://github.com/TH4KUR/brilliance',
    },
    cardData: {
      imageSrc: `bg-[url('/brilliance.png')]`,
      modalImg: `bg-[url('/brilliance-modal.png')]`,
      title: 'Brilliance App',
      shortDes:
        'I made this app as a entry for my first hackathon. This app helps students to track their progress throughout their session and compare it with their friends and many more.',
    },
    modalData: {
      title: 'Brilliance App',
      des: 'I made this app as a entry for my first hackathon. This app helps students to track their progress throughout their session and compare it with their friends to compete with them and many more. I have two github branches the hackathon original and the recently updated one. ',
      languages: [
        <SiHtml5 key={1} className="text-orange-600 text-[1.7rem] mr-2" />,
        <DiJavascript1 key={2} className=" text-yellow-400 text-3xl mr-2" />,
        <DiNodejsSmall key={3} className=" text-green-400 text-3xl mr-2" />,
        <SiMongodb key={4} className=" text-green-500 text-3xl" />,
      ],
    },
    requestsData: {
      finalUrl: 'https://fast-shore-10116.herokuapp.com/',
      url: 'https://proxy.eashaan.workers.dev/?url=https://fast-shore-10116.herokuapp.com/allusers',
      load: 'Checking website status',
      success: 'Website is online',
      fail: 'Website is offline',
      onfail: 'Giving the app a caffene shot',
      done: 'Visit Website',
    },
  },
];

const Projects = () => {
  const [initial, setInitial] = useState(false);
  const [text, setText] = useState(<>Load More &rarr;</>);
  const testFunc = () => {
    setInitial(false);
    setText(<>{`That's it for now`}</>);
  };
  return (
    <section className="w-full min-h-[86vh] bg-dark-5 grid">
      <div className="w-[86.3%] py-10 mx-auto grid grid-cols-2 items-center">
        <div>
          <HeadingContainer
            small={'My Projects'}
            big={
              <>
                Any fool can write <br /> code that a computer can understand.
                <br /> Good programmers write code that <br /> humans can
                understand.
              </>
            }
            des={
              "I understand that the best way to measure the understanding and experience of one's expertise in a language is by looking at the way he writes code. So here are some of my best projects so far."
            }
          >
            <div className="flex">
              <button
                className={`${
                  !initial ? 'text-hero hover:text-gray-50' : 'text-gray-100'
                } transition-colors text-2xl border-b border-current pb-0 leading-none cursor-pointer`}
                onClick={testFunc}
                disabled={initial}
              >
                {text}
              </button>
            </div>
          </HeadingContainer>
        </div>
        <div className="grid gap-3 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
          {allData.map((el, i) => (
            <Card key={i} data={el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
