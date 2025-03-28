import { useContext } from "react";
import { Link } from "react-router-dom";
import CategoryHeader from "./CategoryHeader";
import CartContext from "./CartContext";
import Button from "./Button";

function Cart() {
  const { setCartItems, cartItems } = useContext(CartContext);

  const removeItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  const handleQuantityChange = (e, id) => {
    const newQuantity = Number(e.target.value);
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item,
    );
    setCartItems(updatedItems);
    console.log(updatedItems);
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
        <div className="flex justify-between border-b border-black p-4">
          <h2>Product</h2>
          <div className="flex w-1/3 justify-between">
            <p className="hidden sm:block">Quantity</p>
            <p>Total</p>
          </div>
        </div>
        {cartItems.map((item) => (
          <div key={item.id} className="flex w-full flex-col justify-between p-4 md:flex-row">
            <div className="flex w-2/3 items-center gap-4">
              <img src={item.image} alt={item.title} className="size-52 object-contain" />
              <div className="flex flex-col gap-2">
                <p className="text-lg font-bold md:text-xl">{item.title}</p>
                <p className="mb-3 text-base font-semibold md:text-lg">${item.price}</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="w-30 transform cursor-pointer rounded-md bg-red-100 p-2 text-sm duration-150 hover:bg-red-200 md:text-lg"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="flex w-1/3 items-center justify-between">
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
                onChange={(e, id) => handleQuantityChange(e, id)}
                defaultValue={item.quantity}
                className="w-10 rounded-sm border border-gray-300 p-0.5 text-center text-sm md:text-lg"
              />
              <p>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
