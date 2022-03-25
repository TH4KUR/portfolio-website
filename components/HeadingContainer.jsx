import Heading from './Heading';
import LinkStyled from './LinkStyled';
import ButtonStyled from './ButtonStyled';

const HeadingContainer = ({
  small = false,
  big,
  des,
  links,
  children,
  copy = false,
}) => {
  return (
    <div className="hero__box">
      {small && <Heading big={false}>{small}</Heading>}
      <Heading big={true}>{big}</Heading>
      <p className="hero__text text-gray-300 text-2xl leading-tight mb-3 w-10/12">
        {des}
      </p>
      {
        // if there are links passed into the function and one of them is a copy link.
        (links &&
          copy &&
          links.map(
            ({ text, copy = false, copyText }, i) =>
              copy && (
                <ButtonStyled
                  key={i}
                  text={text}
                  invert={true}
                  value={copyText}
                  copy={copy}
                />
              )
          )) ||
          // If copy doesnt exist
          (links &&
            links.map(({ text, href, copy = false }, i) => (
              <LinkStyled key={i} text={text} href={href} invert={true} />
            )))
      }
      {children}
    </div>
  );
};

export default HeadingContainer;
