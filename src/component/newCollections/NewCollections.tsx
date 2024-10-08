import React from 'react';
import new_collections from "../../assets/new_collections.tsx";
import Item from "../item/Item.tsx";

const NewCollections = () => {
    return (
        <div className="flex flex-col items-center gap-3 my-10">
            <h1 className="text-[#171717] text-3xl font-medium mt-10 max-[800px]:text-2xl  max-[523px]:text-[20px]">NEW COLLECTIONS</h1>
            <hr className="w-44 h-1 rounded-full bg-[#252525] mb-5 max-[523px]:w-36"/>
            <div className="grid grid-cols-4 my-16 mx-8 gap-14 items-center justify-center max-[1200px]:grid-cols-3 max-[920px]:grid-cols-2 max-[523px]:gap-10">
                {new_collections.map((item, index) => {
                    return <Item key={index} id={item.id} image={item.image as string} name={item.name}
                                 new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    );
};

export default NewCollections;