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
      className={`px-4 py-2 rounded-3xl border transition-all duration-300 font-medium
    ${isActive ? 'bg-red border-red text-white' : 'border-white text-white hover:bg-red hover:text-white'}
  `}
    >
      {children}
    </Link>
  );
}
