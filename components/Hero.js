/* eslint-disable react/no-unescaped-entities */
import HeadingContainer from './HeadingContainer';
import { Objects3d } from './Objects3d';

const Hero = () => {
  return (
    <header className="hero">
      <div className="text-gray-50 grid place-items-center col-span-2">
        Hero images goes here
      </div>
      <div className="hero__box grid">
        <div>
          <Objects3d />
        </div>
        <HeadingContainer
          small={'Web Developer'}
          big={
            <>
              Based in India <br />
              I'm a student and Aspiring Web Developer
            </>
          }
          links={[
            {
              text: 'E: max910payne@gmail.com',
              href: 'mailto:max910payne@gmail.com',
            },
          ]}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil molestias laboriosam illo adipisci, accusamus reiciendis eveniet voluptates sunt labore necessitatibus veritatis natus recusandae possimus, provident, cumque voluptate doloribus dolorem tempora?"
        />
      </div>
    </header>
  );
};

export default Hero;
