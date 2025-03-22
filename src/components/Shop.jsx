import useFetchProducts from "./useFetchProducts";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function Shop() {
  const { products, error } = useFetchProducts();
  const shopProducts = products;

  if (error) {
    console.log(error);
    return <p>Something went wrong!</p>;
  }

  return (
    <div className="p-4 md:p-8 lg:p-10 xl:p-12">
      <div className="py-10 text-center sm:py-12 md:py-14 lg:py-20 xl:py-28">
        <p className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">SHOP</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-10 lg:grid-cols-3 lg:gap-12 xl:grid-cols-4 xl:gap-14">
        {shopProducts.map((product) => (
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

export default Shop;
