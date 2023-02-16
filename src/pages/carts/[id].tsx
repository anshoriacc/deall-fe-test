import axios from 'axios';
import { useRouter } from 'next/router';

import { CartDetailProps } from 'src/types';

import Container from '@components/Container';
import Detail from '@components/CartDetail/Detail';
import CartProductTable from '@components/CartDetail/CartProductTable';

function CartDetail({ cart, user }: CartDetailProps) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container title="Cart Detail">
      <h1 className="text-2xl font-bold">Cart {id}</h1>
      <Detail {...{ cart, user }} />
      <CartProductTable data={cart} />
    </Container>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.query;

  const responseCart = await axios.get(`https://dummyjson.com/carts/${id}`);
  const { userId } = responseCart.data;

  const responseUser = await axios.get(`https://dummyjson.com/users/${userId}`);

  const { firstName, lastName } = responseUser.data;

  const user = {
    id: userId,
    fullName: `${firstName} ${lastName}`,
  };

  return { props: { user, cart: responseCart.data } };
}

export default CartDetail;
