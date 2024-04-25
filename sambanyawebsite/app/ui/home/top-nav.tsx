import Link from 'next/link';
import NavLinks from '@/app/ui/home/nav-links';
import SamLogo from '../sam-logo';

export default function TopNav() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Sam Banya</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Links</summary>
              <ul className="rounded-t-none bg-base-100 p-2">
                <NavLinks />
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
