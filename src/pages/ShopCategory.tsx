import React, {useContext} from 'react';
import dropDown_icon from "../assets/dropdown_icon.png"
import Item from "../component/item/Item.tsx";
import {ShopContext} from "../context/ShopContext.tsx";


interface ShopCategoryProps {
    banner:string;
    category:string;
}

const ShopCategory = ({banner, category}:ShopCategoryProps) => {
    const all_products = useContext(ShopContext);
    return (
        <div>
            <img src={banner}  className="w-[1250px]"/>
            <div>
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div>
                    Sort By <img src={dropDown_icon} alt=""/>
                </div>
            </div>

            <div>
                {all_products.map((item, index) => {
                    if(category === item.category){
                        return <Item key={index} id={item.id} image={item.image as string} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
                    }else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
};

export default ShopCategory;