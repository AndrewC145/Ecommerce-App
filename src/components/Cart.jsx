import { CartContext } from "../App";

function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
}

export default Cart;
