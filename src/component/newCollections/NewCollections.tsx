import React from 'react';
import new_collections from "../../assets/new_collections.tsx";
import Item from "../item/Item.tsx";

const NewCollections = () => {
    return (
        <div className="flex flex-col items-center gap-3 my-10">
            <h1 className="text-[#171717] text-3xl font-medium mt-10 max-[800px]:text-2xl">NEW COLLECTIONS</h1>
            <hr className="w-44 h-1 rounded-full bg-[#252525] mb-5"/>
            <div className="flex flex-wrap m-16 gap-14 items-center justify-center">
                {new_collections.map((item, index) => {
                    return <Item key={index} id={item.id} image={item.image as string} name={item.name}
                                 new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    );
};

export default NewCollections;