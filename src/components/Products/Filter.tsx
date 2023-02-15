import { ChangeEvent, useState } from 'react';
import clsx from 'clsx';
import useSWR from 'swr';

import { FilterProps } from 'src/types';

function Filter({ debouncedChange, categories }: FilterProps) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const changeHandler = (e: ChangeEvent<any>) => {
    if (e.target.name === 'category') {
      setCategory(() => e.target.value);
      setSearch(() => '');
      debouncedChange(e);
      return;
    }

    setSearch(() => e.target.value);
    setCategory(() => '');
    debouncedChange(e);
    return;
  };

  return (
    <div className={clsx('px-4 grid gap-4', 'grid-cols-[3fr_2fr]')}>
      <input
        type="search"
        name="search"
        value={search}
        placeholder="Search by product name"
        onChange={changeHandler}
        className={clsx(
          'px-2 py-1 border-2 border-gray-100 rounded-lg',
          'focus:outline-none focus:border-gray-200',
          'dark:border-gray-800 dark:focus:border-gray-700'
        )}
      />
      <select
        name="category"
        value={category}
        onChange={changeHandler}
        className={clsx(
          'px-2 py-1 border-2 border-gray-100 rounded-lg',
          'focus:outline-none focus:border-gray-200',
          'dark:border-gray-800 dark:focus:border-gray-700'
        )}
      >
        <option value="">Filter by category</option>
        {categories?.map((category: string, index: number) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
