import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex w-full flex-col justify-between bg-[#ddcdca] px-4 py-6 sm:flex-row sm:px-8 sm:py-12 md:px-14 md:py-16 lg:px-16 lg:py-20 xl:px-20 xl:py-28">
      <div className="sm:w-[40%] md:w-[50%] lg:w-[60%]">
        <p className="mb-4 font-sans text-lg font-semibold md:text-xl">
          Sign up for 10% off your first order and hear about anything new Embers!
        </p>
        <label htmlFor="email" className="sr-only"></label>
        <input
          className="border-b-1 p-3 lg:w-[60%]"
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email Address"
        ></input>
        <button className="ml-3">Submit</button>
      </div>
      <div className="flex gap-4 md:gap-8 lg:gap-12 xl:gap-16">
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-lg font-semibold">Categories</p>
          <div className="flex flex-col">
            <Link to="/shop/mens">Men</Link>
            <Link to="/shop/womens">Women</Link>
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-lg font-semibold">Embers</p>
          <p>1234 Street Name</p>
          <p>City, State, 12345</p>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <p className="text-lg font-semibold">Social Media</p>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>TikTok</p>
          <p>Pinterest</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
