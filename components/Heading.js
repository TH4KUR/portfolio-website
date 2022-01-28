const Heading = ({ children, text, big, c }) => {
  return !big ? (
    <h2 className="heading">{text || children}</h2>
  ) : (
    <h1
      className={`heading--big text-gray-50 leading-none mb-3 ${
        'w-10/12' && c
      }`}
    >
      {text || children}
    </h1>
  );
};

export default Heading;
