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
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h4>BEST SELLER</h4>
      <div>
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
