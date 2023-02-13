import clsx from 'clsx';
import Head from 'next/head';
import { ReactNode } from 'react';

import Header from './Header';
import MobileNav from './MobileNav';
import Sidebar from './Sidebar';

interface ContainerProps {
  children: ReactNode;
  title?: string;
}

function Container({ children, title }: ContainerProps) {
  const meta = {
    title: title ? `${title} | Deall Frontend Test` : 'Deall Frontend Test',
    description: 'This site built for Deall Frontend Test using Next.js',
  };

  return (
    <main
      className={clsx(
        'min-h-[100vh] pt-[72.73px] pb-[72.73px] pl-0 bg-white text-gray-800 transition-all',
        'sm:pb-0',
        'dark:bg-gray-900 dark:text-gray-0'
      )}
    >
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <Header />
      <Sidebar />
      <section className="sm:pl-[25%]">{children}</section>
      <MobileNav />
    </main>
  );
}

export default Container;
