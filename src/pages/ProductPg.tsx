import React, {useContext} from 'react';
import {ShopContext} from "../context/ShopContext.tsx";
import {useParams} from "react-router-dom";
import BreadCrum from "../component/breadcrum/BreadCrum.tsx";
import {Product} from "../assets/all_product.tsx";
import ProductDisplay from "../component/productDisplay/ProductDisplay.tsx";
import DescriptionBox from "../component/descriptionBox/DescriptionBox.tsx";
import RelatedProducts from "../component/relatedProducts/RelatedProducts.tsx";


const ProductPg = () => {
    const {allProduct} = useContext(ShopContext);
    const {productId} = useParams();
    const product= allProduct.find((item:Product) => item.id === Number(productId));

    return (
        <div>
            <BreadCrum props={product}/>
            <ProductDisplay props={product}/>
            <DescriptionBox/>
            <RelatedProducts props={product}/>
        </div>
    );
};

export default ProductPg;