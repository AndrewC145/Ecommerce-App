import { useContext } from "react";
import { Link } from "react-router-dom";
import CategoryHeader from "./CategoryHeader";
import CartContext from "./CartContext";
import Button from "./Button";

function Cart() {
  const { cartItems } = useContext(CartContext);

  if (!cartItems.length) {
    return (
      <div className="flex h-screen flex-col items-center">
        <CategoryHeader category={"Cart"} />
        <h1 className="mb-4 text-center text-xl md:mb-6 md:text-2xl lg:text-3xl xl:mb-8">
          Your cart is empty
        </h1>
        <Link to={"/shop"}>
          <Button text={"Continue Shopping"} />
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
        {cartItems.map((item) => (
          <div key={item.id} className="flex flex-col">
            <div className="flex items-center py-4 md:py-6 xl:py-8">
              <img className="size-52 object-contain" src={item.image}></img>
              <div>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <button className="mt-3 transform cursor-pointer rounded-md bg-red-100 p-2 text-sm duration-150 hover:bg-red-200 md:p-3 md:text-lg">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
