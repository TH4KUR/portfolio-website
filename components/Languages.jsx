import {
  DiJavascript1,
  DiPython,
  DiNodejsSmall,
  DiSass,
  DiReact,
} from 'react-icons/di';
import { GiBabyBottle } from 'react-icons/gi';
import { FaBook } from 'react-icons/fa';
import {
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from 'react-icons/si';

import Tag from './Tag';
import { useState } from 'react/cjs/react.development';

export const Languages = ({ input }) => {
  return (
    <div className="grid sm:grid-cols-6 grid-cols-5 place-content-center">
      <div className={'language self-end'}>
        <SiHtml5 className=" text-orange-600 text-[2.5rem] mb-1" />
        <p>HTML</p>
      </div>
      <div className={'language self-end'}>
        <SiCss3 className=" text-cyan-500 text-[2.5rem] mb-1" />
        <p>CSS</p>
      </div>
      <div className={'language'}>
        <DiJavascript1 className=" text-yellow-400 text-5xl " />
        <p>JavaScript</p>
      </div>
      <div className={'language'}>
        <DiPython className=" text-teal-500 text-5xl " />
        <Tag
          text={'Beginner'}
          bg={'bg-blue-900 text-gray-100'}
          icon={<GiBabyBottle key={Math.trunc(Math.random() * 100 + 1)} />}
        />
        <p>Python</p>
      </div>
    </div>
  );
};

export const Frameworks = () => {
  return (
    <div className="grid sm:grid-cols-6 grid-cols-4 grid-rows-2 place-content-center">
      <div className={'language'}>
        <Tag
          text={'Gaining XP'}
          bg={'bg-orange-500 text-dark-5 font-semibold'}
          icon={<FaBook key={Math.trunc(Math.random() * 100 + 1)} />}
        />
        <SiMongodb className=" text-green-500 text-5xl" />
        <p className="fade">MongoDB</p>
        <p className="fade-counter">M</p>
      </div>
      <div className={'language'}>
        <Tag
          text={'Gaining XP'}
          bg={'bg-orange-500 text-dark-5 font-semibold'}
          icon={<FaBook key={Math.trunc(Math.random() * 100 + 1)} />}
        />
        <SiExpress className=" text-gray-100 text-5xl " />
        <p className="fade">Express.js</p>
        <p className="fade-counter">E</p>
      </div>
      <div className={'language'}>
        <Tag
          text={'Beginner'}
          bg={'bg-blue-900 text-gray-100'}
          icon={<GiBabyBottle key={Math.trunc(Math.random() * 100 + 1)} />}
        />
        <DiReact className=" text-blue-500 text-5xl react" />
        <p className="fade">React</p>
        <p className="fade-counter">R</p>
      </div>
      <div className={'language'}>
        <Tag
          text={'Gaining XP'}
          bg={'bg-orange-500 text-dark-5 font-semibold'}
          icon={<FaBook key={Math.trunc(Math.random() * 100 + 1)} />}
        />
        <DiNodejsSmall className=" text-green-400 text-5xl mb-1" />
        <p className="fade">Node.js</p>
        <p className="fade-counter">N</p>
      </div>
      <div className={'language'}>
        <DiSass className=" text-pink-600 text-5xl mb-1" />
        <p>Sass</p>
      </div>
      <div className={'language self-center'}>
        <SiNextdotjs className=" text-yellow-400 text-4xl mb-2" />
        <Tag
          text={'Beginner'}
          bg={'bg-blue-900 text-gray-100'}
          icon={<GiBabyBottle key={Math.trunc(Math.random() * 100 + 1)} />}
        />
        <p>Next.js</p>
      </div>
      <div className={'language self-center'}>
        <SiTailwindcss className="text-cyan-400 text-5xl" />
        <p>TailwindCSS</p>
      </div>
    </div>
  );
};
