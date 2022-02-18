import Link from 'next/link';
import Button from './Button';
import LinkStyled from './LinkStyled';

const nav = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 container mx-auto z-[2]">
      <div className="bg-dark text-2xl font-light leading-none px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between justify-items-stretch h-16">
          <Link href={'/'}>
            <a>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={'/logo.svg'} alt="logo" height={35} width={35} />
            </a>
          </Link>
          <ul className="list-none grid grid-cols-4 gap-4 items-center justify-items-center">
            {nav.map(({ name, href }, i) => {
              return (
                <li key={i}>
                  <LinkStyled text={name} href={href} />
                </li>
              );
            })}
          </ul>
          <Button text="Get In Touch" />
        </div>
      </div>
    </nav>
  );
}
