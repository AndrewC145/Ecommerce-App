import { Link } from "react-router-dom";
import bagIcon from "../assets/shopping-bag.svg";

function Header() {
  return (
    <nav className="sticky top-0 z-50 flex w-full items-center bg-[#FEF9F3] p-4 font-roboto font-light">
      <div className="flex flex-1">
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
      <div className="flex items-center justify-center">
        <h1 className="font-ledger text-xl italic md:text-2xl lg:text-4xl">EMBERS</h1>
      </div>
      <div className="flex flex-1 justify-end">
        <Link to="cart">
          <img className="w-7" src={bagIcon} alt="cart"></img>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
