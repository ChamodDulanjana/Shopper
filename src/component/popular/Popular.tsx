import React from 'react';
import popular_products from '../../assets/PopularProducts.tsx'
import Item from "../item/Item.tsx";

const Popular = () => {
    return (
        <div className="flex flex-col items-center gap-3 mt-10">
            <h1 className="text-[#171717] text-3xl font-medium mt-10 max-[800px]:text-2xl">POPULAR IN WOMEN</h1>
            <hr className="w-44 h-1 rounded-full bg-[#252525] mb-5"/>
            <div className="flex m-16 gap-14 flex-wrap items-center justify-center">
                {popular_products.map((item, index) => {
                    return <Item key={index} id={item.id} name={item.name} image={item.image as string} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    );
};

export default Popular;