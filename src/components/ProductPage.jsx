import { useState } from "react";
import useFetchProducts from "./useFetchProducts";

function ProductPage() {
  const { products, error } = useFetchProducts();
  const [quantity, setQuantity] = useState(0);
  const idName = Number(window.location.pathname.split("/")[2]);

  const product = products ? products.find((product) => product.id === idName) : null;

  console.log(product);

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
    <div>
      <div>
        <img src={product.image} alt={product.title} />
        <div>
          <div>
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
