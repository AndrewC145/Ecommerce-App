import { useContext } from "react";
import CartContext from "./CartContext";

function Cart() {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);

  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
}

export default Cart;
