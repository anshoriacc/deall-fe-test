import clsx from 'clsx';
import Link from 'next/link';
import { Fragment } from 'react';

import { TableProps } from 'src/types';

function CartTable({ data, error, isLoading, users }: TableProps) {
  return (
    <div className="p-4">
      <table
        className={clsx(
          'w-full table-auto border-collapse text-xs cursor-default',
          'sm:text-sm'
        )}
      >
        <thead className="bg-[#6913d8] text-gray-0">
          <tr>
            <th className="border-b border-[#500ea4] py-1 px-2 w-[50%] rounded-tl-lg">
              Products
            </th>
            <th className="border-x border-b border-[#500ea4] py-1 px-2 w-[10%]">
              Total Items
            </th>
            <th className="border-x border-b border-[#500ea4] py-1 px-2 w-[15%]">
              User
            </th>
            <th className="border-b border-[#500ea4] py-1 px-2 w-[25%] rounded-tr-lg">
              Total
            </th>
          </tr>
        </thead>
        {isLoading || error ? (
          <>
            <tbody>
              {[...Array(10)].map((_row, index) => (
                <tr
                  key={index}
                  className={clsx(
                    index % 2 === 0
                      ? 'bg-gray-0 dark:bg-gray-850 transition-all'
                      : '',
                    'group'
                  )}
                >
                  <td
                    className={clsx(
                      'border-gray-100 py-1 px-2 w-[50%] transition-all',
                      'dark:border-gray-800',
                      'group-hover:bg-gray-100 dark:group-hover:bg-gray-800 group-hover:bg-opacity-50'
                    )}
                  >
                    <div
                      className={clsx(
                        'w-full h-[12px] my-[2px] bg-gray-500 animate-pulse rounded-xl',
                        'sm:h-[14px] sm:my-[4px]'
                      )}
                    />
                    <div
                      className={clsx(
                        'w-full h-[12px] my-[2px] bg-gray-500 animate-pulse rounded-xl',
                        'sm:h-[14px] sm:my-[4px]'
                      )}
                    />
                  </td>
                  <td
                    className={clsx(
                      'border-x border-gray-100 py-1 px-2 w-[10%] transition-all',
                      'dark:border-gray-800',
                      'group-hover:bg-gray-100 dark:group-hover:bg-gray-800 group-hover:bg-opacity-50'
                    )}
                  >
                    <div
                      className={clsx(
                        'w-full h-[12px] my-[2px] bg-gray-500 animate-pulse rounded-xl',
                        'sm:h-[14px] sm:my-[3px]'
                      )}
                    />
                  </td>
                  <td
                    className={clsx(
                      'border-x border-gray-100 py-1 px-2 w-[15%] transition-all',
                      'dark:border-gray-800',
                      'group-hover:bg-gray-100 dark:group-hover:bg-gray-800 group-hover:bg-opacity-50'
                    )}
                  >
                    <div
                      className={clsx(
                        'w-full h-[12px] my-[2px] bg-gray-500 animate-pulse rounded-xl',
                        'sm:h-[14px] sm:my-[3px]'
                      )}
                    />
                  </td>
                  <td
                    className={clsx(
                      'border-gray-100 py-1 px-2 w-[25%] transition-all',
                      'dark:border-gray-800',
                      'group-hover:bg-gray-100 dark:group-hover:bg-gray-800 group-hover:bg-opacity-50'
                    )}
                  >
                    <div
                      className={clsx(
                        'w-full h-[12px] my-[2px] bg-gray-500 animate-pulse rounded-xl',
                        'sm:h-[14px] sm:my-[3px]'
                      )}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-[#6913d8] text-gray-0">
              <tr>
                <th
                  colSpan={3}
                  className="border-r border-t border-[#500ea4] py-1 px-2 rounded-bl-lg text-right"
                >
                  Total Data
                </th>
                <td className="border-t border-[#500ea4] py-1 px-2 rounded-br-lg">
                  <div
                    className={clsx(
                      'w-full h-[12px] my-[2px] bg-gray-500 animate-pulse rounded-xl',
                      'sm:h-[14px] sm:my-[3px]'
                    )}
                  />
                </td>
              </tr>
            </tfoot>
          </>
        ) : (
          <>
            <tbody>
              {data?.carts?.map((_cart: any, index: number) => (
                <tr
                  key={_cart.id}
                  className={clsx(
                    index % 2 === 0
                      ? 'bg-gray-0 dark:bg-gray-850 transition-all'
                      : '',
                    'group relative'
                  )}
                >
                  <td
                    title={_cart.products.map(
                      (_product: any, index: number) =>
                        ` ${_product.quantity}x ${_product.title}${
                          index === _cart.products.length - 1 ? '.' : ''
                        }`
                    )}
                    className={clsx(
                      'border-gray-100 py-1 px-2 w-[50%] transition-all',
                      'dark:border-gray-800',
                      'group-hover:bg-gray-100 dark:group-hover:bg-gray-800 group-hover:bg-opacity-50'
                    )}
                  >
                    <Link href={`/carts/${_cart.id}`}>
                      <p className={clsx('line-clamp-2', 'hover:underline')}>
                        {_cart.products.map((_product: any, index: number) => (
                          <Fragment key={_product.id}>
                            {`${_product.quantity}x `}{' '}
                            <span className="font-semibold">
                              {_product.title}
                            </span>
                            {index !== _cart.products.length - 1 ? ', ' : '.'}
                          </Fragment>
                        ))}
                      </p>
                    </Link>
                  </td>
                  <td
                    className={clsx(
                      'border-x border-gray-100 py-1 px-2 w-[10%] transition-all',
                      'dark:border-gray-800',
                      'group-hover:bg-gray-100 dark:group-hover:bg-gray-800 group-hover:bg-opacity-50'
                    )}
                  >
                    <p>{_cart.totalQuantity}</p>
                  </td>
                  <td
                    className={clsx(
                      'border-x border-gray-100 py-1 px-2 w-[15%] transition-all',
                      'dark:border-gray-800',
                      'group-hover:bg-gray-100 dark:group-hover:bg-gray-800 group-hover:bg-opacity-50'
                    )}
                  >
                    <p>
                      {
                        users?.find((element) => _cart.userId === element.id)
                          ?.fullName
                      }
                    </p>
                  </td>
                  <td
                    className={clsx(
                      'border-gray-100 py-1 px-2 w-[25%] transition-all',
                      'dark:border-gray-800',
                      'group-hover:bg-gray-100 dark:group-hover:bg-gray-800 group-hover:bg-opacity-50'
                    )}
                  >
                    <p>
                      <span className="line-through text-gray-500">
                        ${_cart.total}
                      </span>{' '}
                      <span className="font-semibold">
                        ${_cart.discountedTotal}
                      </span>
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-[#6913d8] text-gray-0">
              <tr>
                <th
                  colSpan={3}
                  className="border-r border-t border-[#500ea4] py-1 px-2 rounded-bl-lg text-right"
                >
                  Total Data
                </th>
                <th className="border-t border-[#500ea4] py-1 px-2 rounded-br-lg text-left">
                  <p>{data?.total}</p>
                </th>
              </tr>
            </tfoot>
          </>
        )}
      </table>
    </div>
  );
}

export default CartTable;
