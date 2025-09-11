'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-4 py-2 transition-colors font-semibold border-2 rounded-3xl pl-4 pr-4 ${
        isActive ? 'bg-red border-red text-white' : 'hover:bg-red'
      }`}
    >
      {children}
    </Link>
  );
}
