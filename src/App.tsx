import { useState } from 'react'
import Navbar from "./component/navbar/Navbar.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Shop from "./pages/Shop.tsx";
import ShopCategory from "./pages/ShopCategory.tsx";
import ProductPg from "./pages/ProductPg.tsx";
import Cart from "./pages/Cart.tsx";
import LoginSignup from "./pages/LoginSignup.tsx";
import Footer from "./component/footer/Footer.tsx";
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kids_banner from './assets/banner_kids.png'


function App() {

  return (
    <div className="font-poppins m-0">
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Shop/>}/>
                <Route path="/men" element={<ShopCategory banner={men_banner as string} category={"men"}/>}/>
                <Route path="/women" element={<ShopCategory banner={women_banner as string} category={"women"}/>}/>
                <Route path="/kids" element={<ShopCategory banner={kids_banner as string} category={"kid"}/>}/>
                <Route path="/product" element={<ProductPg/>}>
                    <Route path=":productId" element={<ProductPg/>}/>
                </Route>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/login" element={<LoginSignup/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>

    </div>
  )
}

export default App
