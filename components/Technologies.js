import Heading from './Heading';
import HeadingContainer from './HeadingContainer';
import { Frameworks, Languages } from './Languages';

const Technologies = () => {
  return (
    <section className="min-h-[85vh] bg-dark-4 flex items-center">
      <div className="w-10/12 grid grid-cols-2 items-center mx-auto my-auto">
        <div className="h-full">
          <HeadingContainer
            small={'Technologies'}
            big={
              'The only way to learn a new programming language is by writing programs in it.'
            }
            des={
              "I completely agree with the above quote by Dennis Ritchie, and beside are the programming languages and frameworks that I have used in quite a few projects and I'm quite comfortable with."
            }
          />
        </div>
        <div>
          <div className="mb-2">
            <Heading text={'Languages'} big={false} />
            <Languages />
          </div>
          <div className="mb-2">
            <Heading text={'Frameworks'} big={false} />
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
