import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';
import { ActiveLink } from '../ActiveLink';

const navItems = [
  { name: 'About', path: '/about' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  console.log('Server log');

  return (
    <nav className="flex bg-blue-900 p-2 m-2 rounded">
      <Link className="flex items-center" href="/">
        <HomeIcon className="mr-1" size={16} />
        <span>Home</span>
      </Link>

      <div className="flex flex-1" />

      {/* -- https://nextjs.org/docs/pages/api-reference/components/link#prefetch -- Quiere decir que el "prefetch" estaría habilitado solo para producción "Prefetching is only enabled in production." */}
      {navItems.map(element => (
        <ActiveLink
          /* otra forma hacer un spreed operator para enviar todas las propiedades */
          // {...element}
          key={element.name}
          name={element.name}
          path={element.path}
        />
      ))}
    </nav>
  );
};
