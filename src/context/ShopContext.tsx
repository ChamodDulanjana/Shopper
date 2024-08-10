import React, {Context, createContext} from "react";
import all_product, {Product} from "../assets/all_product.tsx";

export const ShopContext: Context<Product[]> = createContext(all_product);

const ShopContextProvider = (props) => {

    const contextValue:Product[] = all_product;

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;