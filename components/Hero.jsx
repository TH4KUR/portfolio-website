/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import HeadingContainer from './HeadingContainer';
import LinkStyled from './LinkStyled';
import { Objects3d } from './Objects3d';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
const Hero = () => {
  const [src, setSrc] = useState(null);
  useEffect(() => {
    setSrc('./objects/mac.html');
  }, []);
  return (
    <header className="hero relative">
      <div
        id="mac"
        className="mac text-gray-50 grid place-items-center lg:col-span-2 absolute w-full h-full lg:relative"
      >
        {src && <Objects3d src={src} />}
      </div>
      <div className="hero__box grid col-span-3 lg:col-span-1">
        <div className="hidden lg:block">
          <Objects3d src="./objects/objects.html" />
        </div>
        <div className="flex items-center mx-auto w-11/12">
          <div className="z-10 lg:before:hidden before:absolute before:h-[75vh] before:w-full before:bg-dark-4 before:opacity-[0.07] before:z-[5] before:top-0">
            <HeadingContainer
              small={'Web Developer'}
              big={
                <>
                  Hello I am <br />
                  Eashaan Thakur a web developer
                </>
              }
              links={[
                {
                  text: 'E: eashaan@th4kur.me',
                  href: '/',
                  copy: true,
                  copyText: 'eashaan@th4kur.me',
                },
              ]}
              copy={true}
              des="I am currently a high school student, learning new technologies in web development. I love building websites and am constantly trying out new ideas. "
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 w-full flex justify-center lg:hidden">
        <LinkStyled
          invert={true}
          text={
            <>
              <MdOutlineKeyboardArrowDown className="text-4xl animate-bounce" />
            </>
          }
          href="#about"
        />
      </div>
    </header>
  );
};

export default Hero;
