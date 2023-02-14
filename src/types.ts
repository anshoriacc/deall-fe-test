import { ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  title?: string;
}

export interface NavItemProps {
  href: string;
  children: ReactNode;
}

export interface Query {
  page: number;
  category: string;
  search: string;
}

export interface FilterProps {
  query: Query;
  debouncedChange: (...args: any) => void;
}

export interface TableProps {
  data: any;
  error: any;
  isLoading: boolean;
}
