import clsx from 'clsx';
import React from 'react';
import { FaHome, FaShoppingBag, FaShoppingCart } from 'react-icons/fa';

import NavItem from './NavItem';

function Navigation() {
  return (
    <div
      className={clsx(
        'flex gap-4 justify-center',
        'sm:flex-col sm:justify-start'
      )}
    >
      <NavItem href="/" name="Home (README)">
        <FaHome />
      </NavItem>
      <NavItem href="/products" name="Products">
        <FaShoppingBag />
      </NavItem>
      <NavItem href="/carts" name="Carts">
        <FaShoppingCart />
      </NavItem>
    </div>
  );
}

export default Navigation;
