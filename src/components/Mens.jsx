import { Link } from "react-router-dom";
import useFetchProducts from "./useFetchProducts";
import ProductCard from "./ProductCard";

function Mens() {
  const { products, error } = useFetchProducts();
  const mensProducts = products.filter((product) => product.category === "men's clothing");

  if (error) {
    console.error(error);
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-4xl">Something went wrong!</p>
      </div>
    );
  }
  return (
    <div className="p-4 md:p-8 lg:p-10 xl:p-12">
      <div className="py-10 text-center sm:py-12 md:py-14 lg:py-20 xl:py-28">
        <p className="text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">MENS</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-10 lg:grid-cols-3 lg:gap-12 xl:grid-cols-4 xl:gap-14">
        {mensProducts.map((product) => (
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

export default Mens;
