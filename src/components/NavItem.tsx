import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import { NavItemProps } from 'src/types';

function NavItem({ href, children, name }: NavItemProps) {
  const router = useRouter();
  const isActive =
    href !== '/' ? router.asPath.startsWith(href) : router.asPath === href;

  return (
    <Link
      href={href}
      title={name}
      className={clsx(
        isActive
          ? 'font-bold bg-[#6913d8] text-gray-0'
          : 'hover:bg-gray-100 dark:hover:bg-gray-800',
        'p-2 rounded-lg flex gap-2 items-center transition-all'
      )}
    >
      {children}
      <span
        className={clsx(isActive ? '' : 'hidden', 'sm:inline transition-all')}
      >
        {name}
      </span>
    </Link>
  );
}

export default NavItem;
