import { useContext } from "react";
import { Link } from "react-router-dom";
import CategoryHeader from "./CategoryHeader";
import CartContext from "./CartContext";

function Cart() {
  const { cartItems } = useContext(CartContext);

  if (!cartItems.length) {
    return (
      <div className="flex h-screen flex-col items-center">
        <CategoryHeader category={"Cart"} />
        <h1 className="text-center text-xl md:text-2xl lg:text-3xl">Your cart is empty</h1>
        <Link to={"/shop"}>
          <button className="mt-7 transform cursor-pointer rounded-md bg-red-100 p-2 text-sm duration-150 hover:bg-red-200 md:mt-10 md:p-3 md:text-lg">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <CategoryHeader category={"Cart"} />
      <div className="p-4 md:p-8 lg:p-10 xl:p-12">
        <div className="flex justify-between border-b border-black p-4">
          <h2>Product</h2>
          <div className="flex w-1/3 justify-between">
            <p>Quantity</p>
            <p>Total</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
