import { useState, useEffect } from "react";

function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) =>
        data.filter(
          (product) =>
            product.category === "men's clothing" || product.category === "women's clothing",
        ),
      )
      .then((data) => setProducts(data))
      .catch((error) => setError(error));
  }, []);

  return { products, error };
}

export default useFetchProducts;
