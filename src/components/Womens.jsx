import useFetchProducts from "./useFetchProducts";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import CategoryHeader from "./CategoryHeader";
import LoadError from "./LoadError";

function Womens() {
  const { products, error } = useFetchProducts();
  const womenProducts = products.filter((product) => product.category === "women's clothing");

  if (error) {
    console.error(error);
    return <LoadError />;
  }

  return (
    <div className="p-4 md:p-8 lg:p-10 xl:p-12">
      <CategoryHeader category={"WOMENS"} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-10 lg:grid-cols-3 lg:gap-12 xl:grid-cols-4 xl:gap-14">
        {womenProducts.map((product) => (
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

export default Womens;
