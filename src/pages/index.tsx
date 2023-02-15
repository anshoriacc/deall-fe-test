import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';
import useSWR from 'swr';

import { Query } from 'src/types';

import fetcher from '@lib/fetcher';
import Container from '@components/Container';
import Filter from '@components/Products/Filter';
import Table from '@components/ProductTable';
import debounce from '@lib/debounce';
import Pagination from '@components/Pagination';

export default function Home() {
  const [query, setQuery] = useState<Query>({
    page: 1,
    category: '',
    search: '',
  });

  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products/${
      query.category ? `category/${query.category}` : ''
    }${query.search ? `search?q=${query.search}` : ''}${
      query.search ? '&' : '?'
    }limit=10&skip=${(query.page - 1) * 10}`,
    fetcher
  );

  const totalPage = useMemo(
    () => (data?.total < 10 ? 1 : Math.ceil(data?.total / 10)),
    [data?.total]
  );

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'category') {
      return setQuery((prevState) => ({
        ...prevState,
        category: e.target.value,
        page: 1,
        search: '',
      }));
    }

    return setQuery((prevState) => ({
      ...prevState,
      search: e.target.value,
      page: 1,
      category: '',
    }));
  };

  const nextPage = useCallback(() => {
    if (query.page < totalPage) {
      setQuery((prevState) => ({
        ...prevState,
        page: prevState.page + 1,
      }));
    }
  }, [query.page, totalPage]);

  const previousPage = useCallback(() => {
    if (query.page > 1) {
      setQuery((prevState) => ({
        ...prevState,
        page: prevState.page - 1,
      }));
    }
  }, [query.page]);

  const debouncedChange = debounce(changeHandler);

  return (
    <Container title="Products">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <Filter {...{ query, debouncedChange }} />
      <Table {...{ data, error, isLoading }} />
      <Pagination
        {...{ page: query.page, totalPage, nextPage, previousPage }}
      />
    </Container>
  );
}
