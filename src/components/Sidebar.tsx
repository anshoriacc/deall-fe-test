import React from 'react';
import clsx from 'clsx';

import { FaShoppingBag, FaShoppingCart } from 'react-icons/fa';

import NavItem from './NavItem';

function Sidebar() {
  const date = new Date();

  return (
    <aside
      className={clsx(
        'fixed left-0 min-w-[160px] w-[20%] hidden min-h-[calc(100vh-72.73px)] bg-gray-0 p-4 flex-col justify-between transition-all',
        'sm:flex',
        'dark:bg-gray-850'
      )}
    >
      <div className="flex flex-col gap-4">
        <NavItem href="/">
          <>
            <span>
              <FaShoppingBag />
            </span>
            <span>Products</span>
          </>
        </NavItem>
        <NavItem href="/carts">
          <>
            <span>
              <FaShoppingCart />
            </span>
            <span>Carts</span>
          </>
        </NavItem>
      </div>
      <p className="text-xs text-gray-500">
        © {date.getFullYear()}
        <br />
        <a
          href="http://anshori.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:animate-pulse"
        >
          Achmad Anshori
        </a>
        <span>🔹 </span>
        <a
          href="https://github.com/anshoriacc/deall-fe-test"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold hover:animate-pulse"
        >
          src
        </a>
      </p>
    </aside>
  );
}

export default Sidebar;
