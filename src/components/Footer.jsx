import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex w-full justify-between bg-[#ddcdca] xl:px-20 xl:py-28">
      <div>
        <p className="mb-4 font-sans text-lg font-semibold md:text-xl">
          Sign up for 10% off your first order and hear about anything new Embers!
        </p>
        <label htmlFor="email" className="sr-only"></label>
        <input
          className="w-[70%] border-b-1 p-3"
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email Address"
        ></input>
        <button className="ml-3">Submit</button>
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-semibold">Categories</p>
        <div className="flex flex-col">
          <Link to="/shop/mens">Men</Link>
          <Link to="/shop/womens">Women</Link>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-semibold">Embers</p>
        <p>1234 Street Name</p>
        <p>City, State, 12345</p>
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-semibold">Social Media</p>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>TikTok</p>
        <p>Pinterest</p>
      </div>
    </footer>
  );
}

export default Footer;
