import Link from 'next/link';

const LinkStyled = ({ text, href, invert }) => {
  return (
    <Link href={href}>
      <a
        className={
          invert
            ? `text-hero hover:text-gray-50 transition-colors text-2xl`
            : `text-gray-50 hover:text-hero transition-colors text-2xl`
        }
      >
        {text}
      </a>
    </Link>
  );
};

export default LinkStyled;
