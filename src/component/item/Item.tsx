import React from 'react';
import {Link} from "react-router-dom";

interface Props {
    id: number,
    image: string,
    name: string,
    new_price: number,
    old_price: number,
    key?: number
}

const Item = ({id, image, name, new_price, old_price }: Props) => {
    return (
        <Link to={`/product/${id}`} onClick={():void =>{
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'auto'  // Optional: 'auto' or 'smooth'
            });
        }}>
            <div className="w-56 transition duration-450 hover:scale-105 cursor-pointer max-[640px]:w-48 max-[523px]:w-40">
                <img src={image} alt=""/>
                <p className="mt-2 text-sm">{name}</p>
                <div className="flex gap-4 mt-2">
                    <div className="text-[#374151] text-sm font-medium">${new_price}</div>
                    <s className="text-[#8c8c8c] text-sm font-medium decoration-1">${old_price}</s>
                </div>
            </div>
        </Link>
    );
};

export default Item;