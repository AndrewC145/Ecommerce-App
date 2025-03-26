import { useState } from "react";
import useFetchProducts from "./useFetchProducts";
import { CartContext } from "../App";
import LoadError from "./LoadError";

function ProductPage() {
  const { products, error } = useFetchProducts();
  const { cartItems, setCartItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const idName = Number(window.location.pathname.split("/")[2]);

  const product = products ? products.find((product) => product.id === idName) : null;

  const handleQuantity = (e) => {
    if (e.target.value <= 0) {
      return;
    } else {
      setQuantity(e.target.value);
    }
  };

  if (error) {
    console.error(error);
    return <LoadError />;
  }

  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-4xl">Loading...</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (quantity <= 0) {
      return;
    } else {
      console.log(`Added ${quantity} ${product.title} to cart`);
      setQuantity(0);
    }
  };

  return (
    <div className="h-screen px-4 md:px-8 lg:px-10 xl:px-12">
      <div className="my-6 flex flex-col items-center justify-center gap-4 sm:items-start md:my-9 md:flex-row md:gap-8 lg:my-12 lg:gap-12 xl:my-20 xl:gap-16">
        <img
          className="size-[50%] sm:size-[40%] md:size-[35%] lg:size-[30%] xl:size-[25%]"
          src={product.image}
          alt={product.title}
        />
        <div className="flex w-[60%] flex-col gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl xl:text-5xl">
              {product.title}
            </h2>
            <p className="text-base font-semibold sm:text-lg md:text-xl">${product.price}</p>
            <p className="text-sm sm:text-base md:text-lg">{product.description}</p>
            <div className="lg:md-6 mt-4 flex items-center gap-4">
              <label htmlFor="quantity" className="sr-only text-sm sm:text-base md:text-lg">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                max="10"
                value={quantity}
                onChange={handleQuantity}
                className="h-full rounded-sm border border-gray-300 p-2 text-center text-sm md:p-3 md:text-lg"
              />
              <button
                className="transform cursor-pointer rounded-md bg-red-100 p-2 text-sm duration-150 hover:bg-red-200 md:p-3 md:text-lg"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
