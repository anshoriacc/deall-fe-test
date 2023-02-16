import clsx from 'clsx';

import Navigation from './Navigation';

function MobileNav() {
  return (
    <div
      className={clsx(
        'fixed bottom-0 w-full p-4 bg-gray-0 border-t border-gray-100 transition-all z-10',
        'sm:hidden',
        'dark:bg-gray-850 dark:border-gray-800'
      )}
    >
      <Navigation />
    </div>
  );
}

export default MobileNav;
