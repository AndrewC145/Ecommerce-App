import { useState } from "react";
import { Link } from "react-router-dom";
import bagIcon from "../assets/shopping-bag.svg";
import Hamburger from "hamburger-react";

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex w-full items-center bg-[#FEF9F3] p-4 font-roboto font-light">
      <div className="hidden sm:flex sm:flex-1">
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="shop/mens">Mens</Link>
          </li>
          <li>
            <Link to="shop/womens">Womens</Link>
          </li>
        </ul>
      </div>
      <div className="relative w-full sm:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen && (
          <ul className="absolute flex flex-col gap-4 rounded bg-white p-4 shadow-lg">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="shop">Shop</Link>
            </li>
            <li>
              <Link to="shop/mens">Mens</Link>
            </li>
            <li>
              <Link to="shop/womens">Womens</Link>
            </li>
            <li>
              <Link to="cart">Cart</Link>
            </li>
          </ul>
        )}
      </div>
      <div className="flex items-center justify-center">
        <h1 className="font-ledger text-xl italic md:text-2xl lg:text-4xl">EMBERS</h1>
      </div>
      <div className="hidden flex-1 justify-end sm:flex">
        <Link to="cart">
          <img className="w-7" src={bagIcon} alt="cart"></img>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
