import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Shop from "./components/Shop";
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="shop/mens" element={<Mens />}></Route>
        <Route path="shop/womens" element={<Womens />}></Route>
        <Route path="cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
