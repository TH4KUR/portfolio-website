const Button = ({ text, href }) => {
    return (
      <a className={`drop-shadow text-white bg-hero hover:bg-hero-dark btn`} href={href}>
        {text}
      </a>
    );
  };
  
  export default Button;
  