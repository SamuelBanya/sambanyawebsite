'use client';

import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Bands', href: '/' },
  { name: 'Art', href: '/art' },
  {
    name: 'Music',
    href: '/music',
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.name}>
            <a href={link.href} className="link link-primary">
              {link.name}
            </a>
          </li>
        );
      })}
    </>
  );
}
