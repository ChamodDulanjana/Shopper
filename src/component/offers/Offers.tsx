import React from 'react';
import exclusive_image from '../../assets/exclusive_image.png'

const Offers = () => {
    return (
        <div className="w-[80%] h-[60vh] flex m-auto px-24 mb-32 bg-gradient-to-b from-pink-300 via-pink-200 to-pink-0 ...  mt-10">
            <div className="flex-1 flex flex-col justify-center items-start">
                <h1 className="text-[#171717] text-6xl font-medium">Exclusive</h1>
                <h1 className="text-[#171717] text-6xl font-medium mb-2">Offers For You</h1>
                <p className="text-[#171717] text-lg font-medium">ONLY ON BEST SELLERS PRODUCTS</p>
                <button className="w-40 h-12 rounded-3xl bg-[#ff4141] border-none text-white text-lg mt-10 font-medium cursor-pointer hover:bg-[#EA6861]">Check Now</button>
            </div>

            <div className="flex-1 flex items-center justify-end pt-10">
                <img src={exclusive_image} className="w-[290px]"/>
            </div>
        </div>
    );
};

export default Offers;