import React, {Context, createContext, useState} from "react";
import all_product, {Product} from "../assets/all_product.tsx";

export const ShopContext = createContext(null);

interface cartProps{
    id: number;
    quantity: number;
}

const getDefaultCart = () => {
    let cart:cartProps = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}


const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [allProduct, setAllProduct] = useState(all_product);
    //console.log(cartItems);

    const addToCart = (itemId) => {
        setCartItems((prevState) => ({...prevState, [itemId]: prevState[itemId] + 1}));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prevState) => ({...prevState, [itemId]: prevState[itemId] - 1}));
    }

    const contextValue = {allProduct, cartItems, addToCart, removeFromCart, setAllProduct};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;