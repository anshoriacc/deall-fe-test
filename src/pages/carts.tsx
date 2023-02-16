import { useCallback, useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';

import { CartsProps } from 'src/types';

import fetcher from '@lib/fetcher';

import Container from '@components/Container';
import CartTable from '@components/Carts/CartTable';
import Pagination from '@components/Pagination';

function Carts({ users }: CartsProps) {
  const [mounted, setMounted] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/carts?limit=10&skip=${(page - 1) * 10}`,
    fetcher
  );

  const totalPage = useMemo(
    () => (data?.total < 10 ? 1 : Math.ceil(data?.total / 10)),
    [data?.total]
  );

  const nextPage = useCallback(() => {
    if (page < totalPage) {
      setPage((prevState) => prevState + 1);
    }
  }, [page, totalPage]);

  const previousPage = useCallback(() => {
    if (page > 1) {
      setPage((prevState) => prevState - 1);
    }
  }, [page]);

  useEffect(() => {
    setMounted(() => true);
  }, []);

  if (!mounted) return null;

  return (
    <Container title="Carts">
      <h1 className="text-2xl font-bold">Carts</h1>
      <CartTable {...{ data, error, isLoading, users }} />
      <Pagination {...{ page: page, totalPage, nextPage, previousPage }} />
    </Container>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(
    'https://dummyjson.com/users?limit=0&select=firstName'
  );
  const { users } = await res.data;

  const mappedUsers = users.map((_user: any) => ({
    id: _user.id,
    fullName: `${_user.firstName} ${_user.lastName}`,
  }));

  return { props: { users: mappedUsers } };
}

export default Carts;
