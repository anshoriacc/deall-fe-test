import Container from '@components/Container';
import clsx from 'clsx';

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
        <h2 className="text-xl font-bold mt-2">
          Deployment link:{' '}
          <a
            href="https://deall-fe-test.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:animate-pulse"
          >
            https://deall-fe-test.vercel.app/
          </a>
        </h2>
        <h2 className="text-xl font-bold mt-2">Pages</h2>
        <ul>
          <li>Home (README): readme</li>
          <li>Products: display products list</li>
          <li>Carts: display carts list</li>
          <li>Cart Detail: display cart detail (detail and products)</li>
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
