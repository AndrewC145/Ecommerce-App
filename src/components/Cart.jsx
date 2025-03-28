import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import CategoryHeader from "./CategoryHeader";
import CartContext from "./CartContext";
import Button from "./Button";

function Cart() {
  const [total, setTotal] = useState(0);
  const { cartItems, setCartItems } = useContext(CartContext);

  const removeItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    calculateTotal();
  };

  const calculateTotal = () => {
    const totalAmount = cartItems.reduce((prev, curr) => {
      return (prev += curr.price * curr.quantity);
    }, 0);

    setTotal(totalAmount);
  };

  useEffect(() => {
    calculateTotal();

    return () => {
      setTotal(0);
    };
  });

  const handleQuantityChange = (e, id) => {
    const newQuantity = Number(e.target.value);
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      } else {
        return item;
      }
    });

    setCartItems(updatedItems);
    calculateTotal();
  };

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
        <div className="flex w-full justify-between border-b border-black p-4">
          <h2>Product</h2>
          <div className="flex w-full justify-end sm:w-1/3 sm:justify-between">
            <p className="hidden sm:block">Quantity</p>
            <p>Total</p>
          </div>
        </div>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex w-full justify-between border-b-1 border-gray-300 p-4 sm:flex-row md:py-6"
          >
            <div className="flex w-3/5 flex-col items-start gap-4 sm:flex-row sm:items-center md:w-2/3">
              <div className="size-24 lg:size-44 xl:size-52">
                <img
                  src={item.image}
                  alt={item.title}
                  className="size-24 object-contain lg:size-44 xl:size-52"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="w-[70%] text-base font-bold md:text-lg">{item.title}</p>
                <p className="mb-3 text-base font-semibold">${item.price}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="w-30 transform cursor-pointer rounded-md bg-red-100 p-2 text-sm duration-150 hover:bg-red-200 md:text-lg"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center sm:w-1/3 sm:flex-row sm:justify-between">
              <label htmlFor="quantity" className="sr-only text-sm sm:text-base md:text-lg">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder="1"
                min="1"
                max="10"
                onChange={(e) => handleQuantityChange(e, item.id)}
                defaultValue={item.quantity}
                className="w-10 rounded-sm border border-gray-300 p-0.5 text-center text-sm md:text-lg"
              />
              <p className="order-first">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mr-4 flex h-[70vh] w-full flex-col items-center p-4 sm:mr-6 md:mr-8 lg:mr-10 xl:mr-12">
        <div className="flex justify-between gap-8 text-xl font-semibold lg:text-2xl">
          <p>Subtotal</p>
          <p>${total.toFixed(2)}</p>
        </div>
        <p className="my-4 text-center text-sm text-gray-500 sm:mb-6 md:mb-7 lg:mb-8">
          Shipping and taxes calculated at checkout
        </p>
        <div className="flex justify-center">
          <Button text={"Checkout"} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
