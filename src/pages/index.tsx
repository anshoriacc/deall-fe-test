/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';

import Container from '@components/Container';

function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold mb-4">
          Deall Frontend Technical Test
        </h1>
        <p>
          This project built for technical test in Deall using Next.js and
          deployed in Vercel.
        </p>
        <div className="flex gap-2 flex-wrap">
          <a
            href="https://www.npmjs.com/package/react"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/npm/v/react?label=react"
              alt="react"
              className="h-5 w-auto"
            />
          </a>
          <a
            href="https://www.npmjs.com/package/next"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/npm/v/next?label=next"
              alt="next"
              className="h-5 w-auto"
            />
          </a>
          <a
            href="https://www.npmjs.com/package/typescript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/npm/v/typescript?label=typescript"
              alt="typescript"
              className="h-5 w-auto"
            />
          </a>
          <a
            href="https://www.npmjs.com/package/next-themes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/npm/v/next-themes?label=next-themes"
              alt="next-themes"
              className="h-5 w-auto"
            />
          </a>
          <a
            href="https://www.npmjs.com/package/swr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/npm/v/swr?label=swr"
              alt="swr"
              className="h-5 w-auto"
            />
          </a>
          <a
            href="https://www.npmjs.com/package/tailwindcss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://img.shields.io/npm/v/tailwindcss?label=tailwindcss"
              alt="tailwindcss"
              className="h-5 w-auto"
            />
          </a>
        </div>
        <h2 className="text-xl font-bold mt-2">
          Repository link:{' '}
          <a
            href="https://github.com/anshoriacc/deall-fe-test"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:animate-pulse"
          >
            https://github.com/anshoriacc/deall-fe-test
          </a>
        </h2>
        <h2 className="text-xl font-bold mt-2">Pages</h2>
        <ul>
          <li className="before:content-['🏠']">Home (README): readme</li>
          <li className="before:content-['🛍️']">
            Products: display products list
          </li>
          <li className="before:content-['🛒']">Carts: display carts list</li>
          <li className="before:content-['🛒']">
            Cart Detail: display cart detail (detail and products)
          </li>
        </ul>
        <h2 className="text-xl font-bold mt-2">Features</h2>
        <ul>
          <li className="before:content-['🌙']">Dark mode</li>
          <li className="before:content-['🔎']">Filter: search and category</li>
          <li className="before:content-['📃']">Pagination</li>
          <li className="before:content-['📱']">Responsive</li>
        </ul>
        <h2 className="text-xl font-bold mt-2">Run Locally</h2>
        <p>Clone the Project</p>
        <code
          className={clsx('p-4 bg-gray-0 transition-all', 'dark:bg-gray-850')}
        >
          git clone https://github.com/anshoriacc/deall-fe-test
        </code>
        <p>Go to project directory</p>
        <code
          className={clsx('p-4 bg-gray-0 transition-all', 'dark:bg-gray-850')}
        >
          cd deall-fe-test
        </code>
        <p>Install dependencies</p>
        <code
          className={clsx('p-4 bg-gray-0 transition-all', 'dark:bg-gray-850')}
        >
          npm install
        </code>
        <p>Start the server</p>
        <code
          className={clsx('p-4 bg-gray-0 transition-all', 'dark:bg-gray-850')}
        >
          npm run dev
        </code>
      </div>
    </Container>
  );
}

export default Home;
