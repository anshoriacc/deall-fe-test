import clsx from 'clsx';
import Image from 'next/image';

import { ProductTableProps } from 'src/types';

function ProductTable({ data, error, isLoading }: ProductTableProps) {
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
            <th className="border-b border-[#500ea4] py-1 px-2 w-[30%] rounded-tl-lg">
              Product Name
            </th>
            <th className="border-x border-b border-[#500ea4] py-1 px-2 w-[20%]">
              Brand
            </th>
            <th className="border-x border-b border-[#500ea4] py-1 px-2 w-[15%]">
              Price
            </th>
            <th className="border-x border-b border-[#500ea4] py-1 px-2 w-[15%]">
              Stock
            </th>
            <th className="border-b border-[#500ea4] py-1 px-2 w-[20%] rounded-tr-lg">
              Category
            </th>
          </tr>
        </thead>
        {isLoading || error ? (
          <>
            <tbody>
              {[...Array(10)].map((row, index) => (
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
                      'border-gray-100 py-1 px-2 w-[30%] transition-all',
                      'dark:border-gray-800',
                      'group-hover:bg-gray-100 group-hover:bg-opacity-50'
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
                      'border-x border-gray-100 py-1 px-2 w-[20%] transition-all',
                      'dark:border-gray-800',
                      'group-hover:bg-gray-100 group-hover:bg-opacity-50'
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
                      'group-hover:bg-gray-100 group-hover:bg-opacity-50'
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
                      'group-hover:bg-gray-100 group-hover:bg-opacity-50'
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
                      'border-gray-100 py-1 px-2 w-[20%] transition-all',
                      'dark:border-gray-800',
                      'group-hover:bg-gray-100 group-hover:bg-opacity-50'
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
                  colSpan={4}
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
              {data?.products?.map((row: any, index: number) => (
                <tr
                  key={row.id}
                  className={clsx(
                    index % 2 === 0
                      ? 'bg-gray-0 dark:bg-gray-850 transition-all'
                      : '',
                    'group relative'
                  )}
                >
                  <td
                    className={clsx(
                      'border-gray-100 py-1 px-2 w-[30%] transition-all',
                      'dark:border-gray-800',
                      'group-hover:bg-gray-100 group-hover:bg-opacity-50'
                    )}
                  >
                    <div title={row.title} className="relative">
                      <p className="line-clamp-1 peer">{row.title}</p>
                      <Image
                        src={row.images[0]}
                        width={120}
                        height={120}
                        alt={row.title}
                        className={clsx(
                          'absolute top-full left-full w-[120px] h-[120px] object-cover invisible z-10 border-4 border-white shadow-md',
                          'peer-hover:visible'
                        )}
                      />
                    </div>
                  </td>
                  <td
                    className={clsx(
                      'border-x border-gray-100 py-1 px-2 w-[20%] transition-all',
                      'dark:border-gray-800',
                      'group-hover:bg-gray-100 group-hover:bg-opacity-50'
                    )}
                  >
                    <p title={row.brand} className="line-clamp-1">
                      {row.brand}
                    </p>
                  </td>
                  <td
                    className={clsx(
                      'border-x border-gray-100 py-1 px-2 w-[15%] transition-all',
                      'dark:border-gray-800',
                      'group-hover:bg-gray-100 group-hover:bg-opacity-50'
                    )}
                  >
                    <p title={row.price}>{row.price}</p>
                  </td>
                  <td
                    className={clsx(
                      'border-x border-gray-100 py-1 px-2 w-[15%] transition-all',
                      'dark:border-gray-800',
                      'group-hover:bg-gray-100 group-hover:bg-opacity-50'
                    )}
                  >
                    <p title={row.stock}>{row.stock}</p>
                  </td>
                  <td
                    className={clsx(
                      'border-gray-100 py-1 px-2 w-[20%] transition-all',
                      'dark:border-gray-800',
                      'group-hover:bg-gray-100 group-hover:bg-opacity-50'
                    )}
                  >
                    <p title={row.category} className="line-clamp-1">
                      {row.category}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-[#6913d8] text-gray-0">
              <tr>
                <th
                  colSpan={4}
                  className="border-r border-t border-[#500ea4] py-1 px-2 w-[80%] rounded-bl-lg text-right"
                >
                  Total Data
                </th>
                <th className="border-t border-[#500ea4] py-1 px-2 w-[20%] rounded-br-lg text-left">
                  <p>{data.total}</p>
                </th>
              </tr>
            </tfoot>
          </>
        )}
      </table>
    </div>
  );
}

export default ProductTable;
