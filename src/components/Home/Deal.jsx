import { Link } from "react-router-dom";

function Deal() {
  return (
    <div className="px-8 py-6 xl:px-40 xl:py-32">
      <div className="relative h-[60vh] bg-[url(./assets/images/streetwear-deals.jpg)] bg-cover bg-no-repeat">
        <div className="absolute bottom-[20%] left-10 flex w-[70%] flex-col items-start gap-2 text-white sm:w-1/3">
          <h3 className="text-lg font-bold sm:text-xl md:text-2xl xl:text-4xl">Special Deals</h3>
          <p className="text-sm md:text-base lg:text-lg">
            Discover a fresh new trend of streetwear with exclusive deals from Embers. Give new
            pieces a home to express yourself. Find uniqueness like no one else. Explore now!
          </p>
          <Link className="font-medium hover:underline" to="Shop">
            Visit Shop
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Deal;
