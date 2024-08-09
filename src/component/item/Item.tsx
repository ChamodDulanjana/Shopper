import React from 'react';

interface Props {
    id: number,
    image: string,
    name: string,
    new_price: number,
    old_price: number,
    key?: number
}

const Item = ({id, image, name, new_price, old_price, key}: Props) => {
    return (
        <div className="w-56  hover:transition duration-600 hover:scale-105 ">
            <img src={image} alt=""/>
            <p className="mt-2 text-sm">{name}</p>
            <div className="flex gap-4 mt-2">
                <div className="text-[#374151] text-sm font-medium">${new_price}</div>
                <s className="text-[#8c8c8c] text-sm font-medium decoration-1">${old_price}</s>
            </div>
        </div>
    );
};

export default Item;