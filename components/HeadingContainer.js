import React from 'react';
import Heading from './Heading';
import LinkStyled from './LinkStyled';

const HeadingContainer = ({ small, big, des, links, children }) => {
  return (
    <div className="hero__box">
      <Heading>{small}</Heading>
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
