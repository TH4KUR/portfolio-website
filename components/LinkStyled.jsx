import Link from 'next/link';

const LinkStyled = ({ text, href, invert, blank = false }) => {
  return (
    <Link href={href}>
      <a
        target={(blank && '_blank') || '_self'}
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
