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
      .then((data) => data.slice(0, 5))
      .then((data) => setHomeProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="overflow-scroll p-4 md:p-8 lg:p-10 xl:p-12">
      <h4 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl">BEST SELLER</h4>
      <div className="flex flex-col gap-3 md:flex-row">
        {homeProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default HomeItems;
