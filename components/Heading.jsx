const Heading = ({ children, text, big, c = '' }) => {
  const s = typeof c === 'object' ? c : {};
  return !big ? (
    <h2 className={`heading ${s ? '' : c}`} style={s}>
      {text || children}
    </h2>
  ) : (
    <h1
      className={`heading--big text-gray-50 leading-none mb-3 md:w-[26ch] ${
        'w-10/12' && c
      }`}
    >
      {text || children}
    </h1>
  );
};

export default Heading;
