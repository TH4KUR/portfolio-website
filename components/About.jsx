/* eslint-disable react/no-unescaped-entities */

import Faq from './Faq';
import Heading from './Heading';
import HeadingContainer from './HeadingContainer';

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-[85vh] py-10 sm:py-5 bg-dark-4 grid place-content-center"
    >
      <div className="w-10/12 mx-auto grid lg:grid-cols-2 items-center md:gap-5 gap-2">
        <div className="md:pl-2">
          <HeadingContainer
            small={'About Me'}
            big={
              <>
                You can't use up creativity <br /> The more you use the more you
                have left in your significant mind.
              </>
            }
            des={
              'I believe creativity is really important in web development. Making creative and user friendly website truly makes me happy with my work. If you have any more questions about me please find the answers beside.'
            }
          >
            <div className="flex">
              <span className="mr-3 text-7xl text-hero self-start ">4+</span>
              <p className="self-center text-xl leading-none text-gray-300 translate-y-[-5px]">
                Years of <br /> Experience
              </p>
            </div>
          </HeadingContainer>
        </div>
        <div className="grid justify-start">
          <div className="md:pl-2 grid justify-start">
            <div>
              <Heading text={'FAQs'} big={false} />
            </div>
            <Heading
              text={
                <>Here are the answers to some frequently asked questions</>
              }
              big={true}
              c={'lg:mx-auto'}
            />
          </div>
          <Faq />
        </div>
      </div>
    </section>
  );
};

export default About;
