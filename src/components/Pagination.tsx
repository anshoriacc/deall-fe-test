import clsx from 'clsx';

import { PaginationProps } from 'src/types';

import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

function Pagination({
  page,
  totalPage,
  nextPage,
  previousPage,
}: PaginationProps) {
  return (
    <div className="px-4 flex justify-end items-center gap-4 text-lg">
      <button
        onClick={previousPage}
        disabled={page === 1}
        className={clsx(
          'p-2 bg-[#6913d8] text-gray-0 flex justify-center items-center rounded-lg',
          'disabled:bg-gray-100 disabled:text-gray-500',
          'dark:disabled:bg-gray-800'
        )}
      >
        <MdArrowBackIos />
      </button>
      <div>{page}</div>
      <button
        onClick={nextPage}
        disabled={page === (totalPage ? totalPage : 1)}
        className={clsx(
          'p-2 bg-[#6913d8] text-gray-0 flex justify-center items-center rounded-lg',
          'disabled:bg-gray-100 disabled:text-gray-500',
          'dark:disabled:bg-gray-800'
        )}
      >
        <MdArrowForwardIos />
      </button>
    </div>
  );
}

export default Pagination;
