import React, {Context, createContext, useState} from "react";
import all_product, {Product} from "../assets/all_product.tsx";

export const ShopContext = createContext(null);

interface cartProps{
    id: number;
    quantity: number;
}

const getDefaultCart = () => {
    let cart= {};
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

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if(cartItems[item]> 0) {
                let productInfo;
                allProduct.find((product) => {product.id === Number(item) ? productInfo=product : null});
                totalAmount += productInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalCartQuantity = 0;
        for (const item in cartItems) {
            totalCartQuantity += cartItems[item];
        }
        return totalCartQuantity;
    }

    const contextValue = {allProduct, cartItems, addToCart, removeFromCart, setAllProduct, getTotalCartAmount, getTotalCartItems};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;