import clsx from 'clsx';
import Image from 'next/image';

import { TableProps } from 'src/types';

function CartProductTable({ data }: TableProps) {
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
            <th className="border-b border-[#500ea4] py-1 px-2 w-[40%] rounded-tl-lg">
              Product Name
            </th>
            <th className="border-x border-b border-[#500ea4] py-1 px-2 w-[25%]">
              Price
            </th>
            <th className="border-x border-b border-[#500ea4] py-1 px-2 w-[10%]">
              Quantity
            </th>
            <th className="border-b border-[#500ea4] py-1 px-2 w-[25%] rounded-tr-lg">
              Sub Total
            </th>
          </tr>
        </thead>

        <>
          <tbody>
            {data?.products?.map((_product: any, index: number) => (
              <tr
                key={_product.id}
                className={clsx(
                  index % 2 === 0
                    ? 'bg-gray-0 dark:bg-gray-850 transition-all'
                    : '',
                  'group relative'
                )}
              >
                <td
                  className={clsx(
                    'border-gray-100 py-1 px-2 w-[40%] transition-all',
                    'dark:border-gray-800',
                    'group-hover:bg-gray-100 dark:group-hover:bg-gray-800 group-hover:bg-opacity-50'
                  )}
                >
                  <p title={_product.title} className="line-clamp-1">
                    {_product.title}
                  </p>
                </td>
                <td
                  className={clsx(
                    'border-x border-gray-100 py-1 px-2 w-[25%] transition-all',
                    'dark:border-gray-800',
                    'group-hover:bg-gray-100 dark:group-hover:bg-gray-800 group-hover:bg-opacity-50'
                  )}
                >
                  <p>
                    <span className="line-through text-gray-500">
                      ${_product.price}
                    </span>{' '}
                    <span className="font-semibold">
                      $
                      {(
                        ((100 - _product.discountPercentage) / 100) *
                        _product.price
                      ).toFixed(2)}
                    </span>{' '}
                    <span className="bg-red-400 text-xs rounded-lg px-1 inline-block">
                      {_product.discountPercentage}%{' '}
                      <span className={clsx('hidden', 'sm:inline')}>off</span>
                    </span>
                  </p>
                </td>
                <td
                  className={clsx(
                    'border-x border-gray-100 py-1 px-2 w-[10%] transition-all',
                    'dark:border-gray-800',
                    'group-hover:bg-gray-100 dark:group-hover:bg-gray-800 group-hover:bg-opacity-50'
                  )}
                >
                  <p>{_product.quantity}</p>
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
                      ${_product.total}
                    </span>{' '}
                    <span className="font-semibold">
                      ${_product.discountedPrice}
                    </span>{' '}
                    <span className="bg-red-400 text-xs rounded-lg px-1 inline-block">
                      {_product.discountPercentage}%{' '}
                      <span className={clsx('hidden', 'sm:inline')}>off</span>
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
                className="border-r border-t border-[#500ea4] py-1 px-2 w-[80%] rounded-bl-lg text-right"
              >
                Total
              </th>
              <th className="border-t border-[#500ea4] py-1 px-2 w-[20%] rounded-br-lg text-left">
                <p>
                  <span className="line-through text-gray-200">
                    ${data.total}
                  </span>{' '}
                  <span>${data.discountedTotal}</span>
                </p>
              </th>
            </tr>
          </tfoot>
        </>
      </table>
    </div>
  );
}

export default CartProductTable;
