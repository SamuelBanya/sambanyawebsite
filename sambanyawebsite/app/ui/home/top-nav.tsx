import Link from 'next/link';
import NavLinks from '@/app/ui/home/nav-links';
import SamLogo from '../sam-logo';

export default function TopNav() {
  return (
    <div
      data-theme="greytheme"
      className="flex h-full flex-col px-3 py-4 md:px-2"
    >
      <div className="w-32 text-white md:w-40">
        <SamLogo />
      </div>
      <div className="flex grow flex-row md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
      </div>
    </div>
  );
}
