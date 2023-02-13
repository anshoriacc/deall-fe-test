import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import deall from '@assets/images/deall.png';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const themeHandler = () => {
    if (theme === 'light') {
      return setTheme('dark');
    }
    return setTheme('light');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header
      className={clsx(
        'fixed top-0 w-full p-4 bg-gray-0 flex justify-center border-b border-gray-100 transition-all',
        'dark:bg-gray-850 dark:border-gray-800'
      )}
    >
      <Link
        href="/"
        className={clsx(
          'relative px-2 bg-[#6913d8] rounded-lg',
          'hover:animate-pulse'
        )}
      >
        <Image src={deall} alt="deall logo" className="h-[40px] w-auto" />
      </Link>
      <button
        onClick={themeHandler}
        className={clsx(
          'absolute right-4 h-[40px] aspect-square flex justify-center items-center rounded-lg transition-all',
          'hover:bg-[#6913d8] hover:text-gray-0'
        )}
      >
        {theme === 'light' ? <BsSunFill /> : <BsMoonStarsFill />}
      </button>
    </header>
  );
}

export default Header;
