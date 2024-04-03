'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Links', href: '/dashboard' },
  { name: 'Art', href: '/dashboard/art' },
  {
    name: 'Music',
    href: '/dashboard/music',
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
