import React, {useContext} from 'react';
import {ShopContext} from "../context/ShopContext.tsx";
import {useParams} from "react-router-dom";
import BreadCrum from "../component/breadcrum/BreadCrum.tsx";
import {Product} from "../assets/all_product.tsx";
import ProductDisplay from "../component/productDisplay/ProductDisplay.tsx";
import DescriptionBox from "../component/descriptionBox/DescriptionBox.tsx";


const ProductPg = () => {
    const all_product = useContext(ShopContext);
    const {productId} = useParams();
    const product= all_product.find((item:Product) => item.id === Number(productId));

    return (
        <div>
            <BreadCrum props={product}/>
            <ProductDisplay props={product}/>
        </div>
    );
};

export default ProductPg;