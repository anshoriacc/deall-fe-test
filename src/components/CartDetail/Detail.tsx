import clsx from 'clsx';

import { CartDetailProps } from 'src/types';

function Detail({ cart, user }: CartDetailProps) {
  const { fullName } = user;

  return (
    <div
      className={clsx(
        'bg-gray-0 m-4 p-4 rounded-lg grid grid-cols-2',
        'dark:bg-gray-850'
      )}
    >
      <div className="flex flex-col gap-4">
        <p>User: {fullName}</p>
      </div>
      <div className="flex flex-col gap-4">
        <p># of Items: {cart?.totalQuantity}</p>
        <p>
          Total Price:{' '}
          <span className="line-through text-gray-500">${cart.total}</span>{' '}
          <span className="font-bold">${cart.discountedTotal}</span>
        </p>
      </div>
    </div>
  );
}

export default Detail;
