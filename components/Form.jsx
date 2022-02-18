import React from 'react';
import Heading from './Heading';

const Form = () => {
  return (
    <section className="w-full min-h-[90vh] bg-dark-5">
      <div className="w-[86.3%] pt-40 mx-auto grid grid-cols-2">
        <Heading text={'Contact Me'} big={false} />
      </div>
    </section>
  );
};

export default Form;
