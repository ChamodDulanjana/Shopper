import React from 'react';
import arrow_icon from '../../assets/breadcrum_arrow.png'
import {Product} from "../../assets/all_product.tsx";

 export interface ProductProp{
    product:Product
}

const BreadCrum = ({props}:ProductProp) => {
    const product = props;

    return (
        <div className="flex gap-2 mt-3 text-sm text-[#5e5e5e]">
            Home <img src={arrow_icon}/>  Shop <img src={arrow_icon}/>  {product.category} <img src={arrow_icon}/> {product.name}
        </div>
    );
};

export default BreadCrum;