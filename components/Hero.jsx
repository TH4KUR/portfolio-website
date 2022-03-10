/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import HeadingContainer from './HeadingContainer';
import { Objects3d } from './Objects3d';

const Hero = () => {
  const [src, setSrc] = useState(null);
  useEffect(() => {
    setSrc('./objects/mac.html');
  }, []);
  return (
    <header className="hero">
      <div
        id="mac"
        className="mac text-gray-50 grid place-items-center col-span-2"
      >
        {src && <Objects3d src={src} />}
      </div>
      <div className="hero__box grid">
        <div>
          <Objects3d src="./objects/objects.html" />
        </div>
        <HeadingContainer
          small={'Web Developer'}
          big={
            <>
              Hello I am <br />
              Eashaan Thakur an aspiring web developer
            </>
          }
          links={[
            {
              text: 'E: max910payne@gmail.com',
              href: 'mailto:max910payne@gmail.com',
            },
          ]}
          des="I am currently a high school student, learning new technologies in web development. I love building websites but I also play CTFs whenever i get the time. "
        />
      </div>
    </header>
  );
};

export default Hero;
