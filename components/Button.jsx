const Button = ({ text }) => {
  return (
    <button className={`drop-shadow text-white bg-hero hover:bg-hero-dark btn`}>
      {text}
    </button>
  );
};

export default Button;
