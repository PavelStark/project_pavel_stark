import "./App.css";
import Footer from "./components/Footer/index.jsx";
import Header from "./components/Header/index.jsx";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/index.jsx";
import NotFoundPage from "./pages/NotFoundPage/index.js";
import ProductsPages from "./pages/ProductsPage/index.jsx";
import CategoriesPage from "./pages/CategoriesPage/index.js";
import AllSalesPage from "./pages/AllSalesPage/index.jsx";
import ProductsListPage from "./pages/CategoryProductsPage/index.jsx";
import SingleProductPage from "./pages/SigleProductPage/index.jsx";
import CartPage from "./pages/CartPage/index.jsx";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/categories/all" element={<CategoriesPage />} />
        <Route path='/categories/:id' element={<ProductsListPage />}/>
        <Route path="/products/all" element={<ProductsPages />}/>
        <Route path="/products/:id" element={<SingleProductPage />}/>
        <Route path="/sales/all" element={<AllSalesPage />}/>
        <Route path="/cart/" element={<CartPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

