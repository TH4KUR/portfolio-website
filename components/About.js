/* eslint-disable react/no-unescaped-entities */

import Faq from './Faq';
import Heading from './Heading';
import HeadingContainer from './HeadingContainer';

const About = () => {
  return (
    <section className="w-full min-h-[85vh] py-5 bg-dark-5 grid place-content-center">
      <div className="w-10/12 mx-auto grid grid-cols-2 items-center ">
        <HeadingContainer
          small={'About Me'}
          big={
            <>
              You can't use up creativity <br /> The more you use the more you
              <br />
              have left in your significant mind.
            </>
          }
          des={
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, eius? Aliquam nihil iste a consequuntur reprehenderit eligendi eos vero, obcaecati natus delectus? Earum possimus quo porro cumque quasi aperiam ab?'
          }
        >
          <div className="flex">
            <span className="mr-3 text-7xl text-hero self-start ">0+</span>
            <p className="self-center text-xl leading-none text-gray-300 translate-y-[-5px]">
              Years of <br /> Experience
            </p>
          </div>
        </HeadingContainer>
        <div>
          <div>
            <div className="mx-auto w-10/12">
              <Heading text={'FAQs'} big={false} />
            </div>
            <Heading
              text={
                <>
                  Here are the answers to some frequently <br /> asked questions
                </>
              }
              big={true}
              c={'w-10/12 mx-auto'}
            />
          </div>
          <Faq />
        </div>
      </div>
    </section>
  );
};

export default About;
