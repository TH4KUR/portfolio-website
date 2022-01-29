import Card from './Card';
import HeadingContainer from './HeadingContainer';
import LinkStyled from './LinkStyled';
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
        <div className="grid grid-cols-3 grid-rows-2 h-5/6">
          <Card />
        </div>
      </div>
    </section>
  );
};

export default Projects;
