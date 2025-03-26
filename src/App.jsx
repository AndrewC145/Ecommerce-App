import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import Shop from "./components/Shop";
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import Cart from "./components/Cart";
import ProductPage from "./components/ProductPage";

function App() {
  const cartItems = [];

  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="shop/mens" element={<Mens />}></Route>
        <Route path="shop/womens" element={<Womens />}></Route>
        <Route path="product/:id" element={<ProductPage />}></Route>
        <Route path="cart" element={<Cart cartItems={cartItems} />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
