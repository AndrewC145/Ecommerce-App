import { Link } from "react-router-dom";

function Hero() {
  return (
    <main>
      <div className="h-screen bg-[url(./assets/images/hero-bg.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="flex h-full flex-col items-center justify-center gap-4 text-center text-white md:gap-8 lg:gap-12">
          <h1 className="font-roboto text-xl font-extrabold md:text-3xl lg:text-6xl xl:text-7xl">
            TRENDY STREETWEAR, <br /> MADE FOR YOU
          </h1>
          <Link
            className="w-40 rounded-md bg-[#FEF9F3] p-2 font-medium text-black transition duration-300 hover:bg-[#ccc8c3]"
            to="Shop"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Hero;
