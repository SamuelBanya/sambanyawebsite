import Link from 'next/link';
import NavLinks from '@/app/ui/home/nav-links';
import SamLogo from '../sam-logo';

export default function TopNav() {
  return (
    <div className="ml-2 mr-2 flex grid grid-cols-2">
      <div className="flex justify-start">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary className="text-xl">Links</summary>
              <ul className="rounded-t-none bg-base-100 p-2">
                <NavLinks />
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="flex justify-end">
        <a href="/" className="btn btn-ghost text-xl">
          Sam Banya
        </a>
      </div>
    </div>
  );
}
