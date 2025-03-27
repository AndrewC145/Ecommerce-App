import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Shop from "./components/Shop";
import { useState } from "react";
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import Cart from "./components/Cart";
import ProductPage from "./components/ProductPage";
import LoadError from "./components/LoadError";
import CartContext from "./components/CartContext";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <BrowserRouter>
      <Header></Header>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route path="shop" element={<Shop />}></Route>
          <Route path="shop/mens" element={<Mens />}></Route>
          <Route path="shop/womens" element={<Womens />}></Route>
          <Route path="product/:id" element={<ProductPage />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="*" element={<LoadError />}></Route>
        </Routes>
      </CartContext.Provider>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
