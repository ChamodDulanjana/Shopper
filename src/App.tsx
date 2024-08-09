import { useState } from 'react'
import Navbar from "./component/navbar/Navbar.tsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Shop from "./pages/Shop.tsx";
import ShopCategory from "./pages/ShopCategory.tsx";
import Product from "./pages/Product.tsx";
import Cart from "./pages/Cart.tsx";
import LoginSignup from "./pages/LoginSignup.tsx";


function App() {

  return (
    <div className="font-poppins m-0">
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Shop/>}/>
                <Route path="/mens" element={<ShopCategory category={"men"}/>}/>
                <Route path="/women" element={<ShopCategory category={"women"}/>}/>
                <Route path="/kids" element={<ShopCategory category={"kids"}/>}/>
                <Route path="/product" element={<Product/>}>
                    <Route path=":productId" element={<Product/>}/>
                </Route>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/login" element={<LoginSignup/>}/>
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App
