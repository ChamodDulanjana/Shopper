import React from 'react';
import arrow_icon from '../../assets/breadcrum_arrow.png'
import {Product} from "../../assets/all_product.tsx";

interface ProductProp{
    product:Product
}

const BreadCrum = ({props}:ProductProp) => {
    const product = props;

    return (
        <div>
            HOME <img src={arrow_icon}/>  SHOP <img src={arrow_icon}/>  {product.category} <img src={arrow_icon}/> {product.name} <img src={arrow_icon}/>
        </div>
    );
};

export default BreadCrum;