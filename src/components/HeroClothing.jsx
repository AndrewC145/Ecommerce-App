import { Link } from "react-router-dom";

function HeroClothing({ category, image }) {
  return (
    <div className="w-full text-center md:w-1/2">
      <div className="relative h-[50vh] overflow-hidden md:h-[70vh] lg:h-[80vh] xl:h-screen">
        <img src={image} className="size-full object-cover"></img>
        <div className="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2">
          <Link
            className="text-2xl text-white md:text-5xl lg:text-6xl xl:text-8xl"
            to={`Shop/${category}`}
          >
            {category}'s Clothing
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroClothing;
