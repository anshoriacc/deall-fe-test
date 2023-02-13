import clsx from 'clsx';
import React from 'react';
import { FaShoppingBag, FaShoppingCart } from 'react-icons/fa';
import NavItem from './NavItem';

function MobileNav() {
  return (
    <div
      className={clsx(
        'fixed bottom-0 w-full p-4 flex gap-4 justify-center bg-gray-0 border-t border-gray-100 transition-all',
        'sm:hidden',
        'dark:bg-gray-850 dark:border-gray-800'
      )}
    >
      <NavItem href="/">
        <FaShoppingBag />
        Products
      </NavItem>
      <NavItem href="/carts">
        <FaShoppingCart />
        Carts
      </NavItem>
    </div>
  );
}

export default MobileNav;
