import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

interface NavItemProps {
  href: string;
  children: ReactNode;
}

export default function NavItem({ href, children }: NavItemProps) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link
      href={href}
      className={clsx(
        isActive
          ? 'font-bold bg-[#6913d8] text-gray-0'
          : 'hover:bg-[#6913d8]',
        'p-2 rounded-lg flex gap-2 items-center transition-all',
        'hover:text-gray-0'
      )}
    >
      {children}
    </Link>
  );
}
