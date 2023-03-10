import clsx from 'clsx';

import Navigation from './Navigation';

function Sidebar() {
  const date = new Date();

  return (
    <aside
      className={clsx(
        'fixed left-0 w-[240px] hidden min-h-[calc(100vh-72.73px)] bg-gray-0 p-4 flex-col justify-between transition-all border-r border-gray-100',
        'sm:flex',
        'dark:bg-gray-850 dark:border-gray-800'
      )}
    >
      <Navigation />
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
        <span> 🔹 </span>
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
