const Button = ({ text, color, hover, bg }) => {
  return (
    <button
      className={`drop-shadow ${
        color
          ? `text-${color} bg-${bg} hover:bg-${hover}`
          : `text-white bg-hero hover:bg-hero-dark`
      } btn`}
    >
      {text}
    </button>
  );
};

export default Button;
