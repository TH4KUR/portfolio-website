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

const allData = [
  {
    cardData: {
      imageSrc: `bg-[url('/siis.png')]`,
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
    // http://fast-shore-10116.herokuapp.com/allusers
    requestsData: {
      finalUrl: 'https://www.siis.in/',
      url: 'https://proxy.eashaan.workers.dev/?url=http://www.siis.in',
      load: 'Checking website status',
      success: 'Website is online',
      done: 'Visit Website',
    },
  },
  {
    cardData: {
      imageSrc: `bg-[url('/brilliance.jpeg')]`,
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
  {
    cardData: {
      imageSrc: '/image.png',
      title: 'SiiS Website',
      shortDes:
        'I made this static website for an IT solutions provider company called SiiS. I used this project as a way to get a good grasp on tailwindcss.',
    },
    modalData: {
      title: 'SiiS Website',
      des: 'I made this static website for an IT solutions provider company called SiiS. I used this project as a way to get a good grasp on tailwindcss.',
      languages: [
        <SiHtml5 key={1} className="text-orange-600 text-[1.8rem] mr-2" />,
        <SiTailwindcss key={2} className=" text-cyan-400 text-3xl mr-2" />,
        <DiJavascript1 key={3} className=" text-yellow-400 text-3xl" />,
      ],
    },
    requestsData: {
      finalUrl: 'https://www.siis.in/',
      url: 'https://api.github.com/',
      load: 'Checking website status',
      success: 'Website is online',
      fail: 'Website is offline',
      onfail: 'Giving the app a caffene shot',
      done: 'Visit Website',
    },
  },
  {
    cardData: {
      imageSrc: '/image.png',
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
      url: 'https://api.github.com/',
      load: 'Checking website status',
      success: 'Website is online',
      fail: 'Website is offline',
      onfail: 'Giving the app a caffene shot',
      done: 'Visit Website',
    },
  },
  {
    cardData: {
      imageSrc: '/image.png',
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
      url: 'https://api.github.com/',
      load: 'Checking website status',
      success: 'Website is online',
      fail: 'Website is offline',
      onfail: 'Giving the app a caffene shot',
      done: 'Visit Website',
    },
  },
];

const Projects = () => {
  return (
    <section className="w-full min-h-[90vh] bg-dark-5 grid">
      <div className="w-[86.3%] pt-40 mx-auto grid grid-cols-2">
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
            <LinkStyled
              text={
                <p className="border-b border-current pb-0 leading-none">
                  Load More &rarr;
                </p>
              }
              href={'/'}
              invert={true}
            />
          </div>
        </HeadingContainer>
        <div className="grid grid-cols-3 grid-rows-2 gap-3">
          {allData.map((el, i) => (
            <Card key={i} data={el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
