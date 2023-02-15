import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

import deall from '@assets/images/deall.png';
import { BsMoonStarsFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';

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
        'fixed top-0 w-full p-4 bg-gray-0 flex justify-center border-b border-gray-100 transition-all z-10',
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
          'absolute right-4 h-[40px] aspect-square flex justify-center items-center rounded-lg text-yellow-500 text-2xl transition-all',
          'hover:bg-gray-100 dark:hover:bg-gray-800'
        )}
      >
        {theme === 'light' ? <FaSun /> : <BsMoonStarsFill />}
      </button>
    </header>
  );
}

export default Header;
