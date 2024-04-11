'use client';

import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Links', href: '/home' },
  { name: 'Art', href: '/home/art' },
  {
    name: 'Music',
    href: '/home/music',
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <a key={link.name} href={link.href} className="link link-primary">
            {link.name}
          </a>
        );
      })}
    </>
  );
}
