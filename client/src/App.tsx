import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import ProductSection from "./pages/product";
import IndividualProductView from "./pages/account";
import ProducerPage from "./pages/producer"; // Add this line
import SellerPage from "./pages/seller"; // Add this line

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<ProductSection />} path="/product" />
      <Route element={<IndividualProductView />} path="/product/:id" />
      <Route element={<ProducerPage />} path="/producer" />
      <Route element={<SellerPage />} path="/seller" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
