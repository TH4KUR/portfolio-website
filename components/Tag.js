import React from 'react';
import { useState } from 'react/cjs/react.development';
import { GiBabyBottle } from 'react-icons/gi';

const Tag = ({ text, bg, color, icon }) => {
  const [tag, setTag] = useState([icon]);
  return (
    <i
      className={`tag ${bg}`}
      onMouseEnter={() => setTag([text])}
      onMouseLeave={() => setTag(icon)}
    >
      {tag}
    </i>
  );
};

export default Tag;
