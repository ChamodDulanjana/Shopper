import React from 'react';
import all_product, {Product} from "../../assets/all_product.tsx";
import Item from "../item/Item.tsx";
import {ProductProp} from "../breadcrum/BreadCrum.tsx";

const RelatedProducts = ({props}:ProductProp) => {
    return (
        <div className="flex flex-col items-center gap-3 h-[90vh]">
            <h1 className="text-[#171717] text-3xl font-medium mt-10">Related Products</h1>
            <hr className="w-44 h-1 rounded-full bg-[#252525] mb-5" />
            <div className="flex w-[80vw] flex-col overflow-x-scroll overflow-y-hidden">
                <div className="mt-16 gap-8 flex h-[370px] pl-2">
                    {all_product.map((item: Product, index) => {
                        if(item.category === props.category){
                            return <Item key={index} id={item.id} image={item.image} name={item.name}
                                         new_price={item.new_price} old_price={item.old_price}/>
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default RelatedProducts;