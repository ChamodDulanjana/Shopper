import React, {useContext} from 'react';
import dropDown_icon from "../assets/dropdown_icon.png"
import Item from "../component/item/Item.tsx";
import {ShopContext} from "../context/ShopContext.tsx";


interface ShopCategoryProps {
    banner:string;
    category:string;
}

const ShopCategory = ({banner, category}:ShopCategoryProps) => {
    const all_product = useContext(ShopContext);
    return (
        <div>
            <img src={banner} className="w-[80%] block m-10 mb-0 mx-auto"/>

            <div className="flex justify-center items-center w-full">
                <div className="flex my-16 justify-between items-center w-[80%]">
                    <p>
                        <span className="font-bold">Showing 1-12</span> out of 36 products
                    </p>
                    <div className="px-5 py-3 rounded-[25px] border-[1px] border-[#888] mr-5">
                        <p>Sort By </p>
                        {/*<img src={dropDown_icon}/>*/}
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center w-full">
                <div className="grid grid-cols-4 mb-20 mx-24  gap-12">
                    {all_product.allProduct.map((item, index) => {
                        if (category === item.category) {
                            return <Item key={index} id={item.id} image={item.image as string} name={item.name}
                                         new_price={item.new_price} old_price={item.old_price}/>
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
            <div className="flex justify-center items-center m-auto w-[160px] h-[50px] rounded-[75px] bg-[#ededed]
            text-[#787878] text-sm font-medium cursor-pointer active:text-[13px] mb-20 active:transition duration-500">
                Explore More
            </div>

        </div>
    );
};

export default ShopCategory;