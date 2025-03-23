import { useState } from "react";
import useFetchProducts from "./useFetchProducts";

function ProductPage() {
  const { products, error } = useFetchProducts();
  const [quantity, setQuantity] = useState(0);
  const idName = Number(window.location.pathname.split("/")[2]);

  const product = products ? products.find((product) => product.id === idName) : null;

  if (error) {
    console.error(error);
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-4xl">Something went wrong!</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-4xl">Loading...</p>
      </div>
    );
  }

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
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
