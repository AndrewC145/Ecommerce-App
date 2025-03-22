import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard";

function HomeItems() {
  const [homeProducts, setHomeProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) =>
        data.filter(
          (product) =>
            product.category === "men's clothing" || product.category === "women's clothing",
        ),
      )
      .then((data) => data.slice(1, 6))
      .then((data) => setHomeProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="p-4 md:p-8 lg:p-10 xl:p-12">
      <h4 className="mb-3 text-xl md:mb-5 md:text-2xl lg:mb-7 lg:text-3xl xl:mb-9 xl:text-4xl">
        BEST SELLER
      </h4>
      <div className="flex flex-col gap-3 md:flex-row md:gap-4 lg:gap-5">
        {homeProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="flex flex-col gap-3 md:flex-row md:gap-4 lg:gap-5"
          >
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomeItems;
