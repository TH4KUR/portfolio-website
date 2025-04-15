/* eslint-disable @next/next/no-img-element */
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
      <div className="w-10/12 mx-auto grid lg:grid-cols-2 items-center md:gap-10 gap-5 py-10">
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
              'I believe creativity is really important in web development. Making creative and user-friendly websites truly makes me happy with my work. If you have any more questions about me, please find the answers beside.'
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
        <div className="grid justify-start ">
          <div className="md:pl-2 grid justify-start">
            <div>
              <Heading text={'About Myself'} big={false} />
            </div>
            <p className="text-gray-300 text-[1.6rem] leading-[1.25]">
              Hello! My name is Eashaan Thakur, and I am a passionate web
              developer. I enjoy creating innovative and user-friendly websites
              that bring ideas to life. I am currently a high school student,
              constantly learning and exploring new technologies in the field of
              web development.
            </p>
            <div className="mt-5 grid grid-cols-2 justify-start gap-4">
              <div className="relative group">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="rounded-lg shadow-lg aspect-video object-cover group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-2xl font-semibold">
                    Eashaan Thakur
                  </span>
                </div>
              </div>
              <div className="relative group">
                <img
                  src="/av.webp"
                  alt="My school - Amrita Vidyalayam"
                  className="rounded-lg shadow-lg object-cover aspect-video group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-2xl font-semibold">
                    My School
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid justify-start">
          <div className="mt-8">
            <Heading text={'Hometown'} big={false} />
            <div className="grid grid-cols-2 gap-4 mt-3">
              <div className="relative group">
                <img
                  src="/hometown/1.jpg"
                  alt="Hometown 1"
                  className="rounded-lg shadow-lg aspect-video group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-2xl font-semibold">
                    Himachal Pradesh
                  </span>
                </div>
              </div>
              <div className="relative group">
                <img
                  src="/hometown/2.jpg"
                  alt="Hometown 2"
                  className="rounded-lg shadow-lg aspect-video group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-2xl font-semibold">
                    Himachal Pradesh
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <Heading text={'Education & Achievements'} big={false} />
            <p className="text-gray-300 text-[1.6rem] leading-[1.25] mt-3">
              I completed my schooling at Amrita Vidyalayam, where I built a
              strong academic foundation. Later, I prepared for the JEE
              examination at FIITJEE, which helped me develop a disciplined
              approach to problem-solving. Currently, I am pursuing the Computer
              Science and Linguistics Dual Degree (CLD) program at IIIT
              Hyderabad, where I am honing my skills in advanced web development
              and computational linguistics.
            </p>
          </div>
        </div>

        <div className="grid justify-center mt-10">
          <div>
            <Heading text={'FAQs'} big={false} />
          </div>
          <Heading
            text={<>Here are the answers to some frequently asked questions</>}
            big={true}
            c={'lg:mx-auto'}
          />
          <Faq />
        </div>
      </div>
    </section>
  );
};

export default About;
