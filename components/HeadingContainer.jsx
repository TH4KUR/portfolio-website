import Heading from './Heading';
import LinkStyled from './LinkStyled';

const HeadingContainer = ({ small = false, big, des, links, children }) => {
  return (
    <div className="hero__box">
      {small && <Heading big={false}>{small}</Heading>}
      <Heading big={true}>{big}</Heading>
      <p className="hero__text text-gray-300 text-2xl leading-tight mb-3 w-10/12">
        {des}
      </p>
      {links &&
        links.map(({ text, href }, i) => (
          <LinkStyled key={i} text={text} href={href} invert={true} />
        ))}
      {children}
    </div>
  );
};

export default HeadingContainer;
