
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage.jsx";
import Products from "./pages/ProductsPage.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import Navbar from "./Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
