import React from 'react';
import exclusive_image from '../../assets/exclusive_image.png'

const Offers = () => {
    return (
        <div className="w-[80%] h-[60vh] flex m-auto px-24 mb-32 bg-gradient-to-b from-pink-300 via-pink-200 to-pink-0 ...
        mt-16 max-lg:h-[45vh] max-lg:px-16 max-lg:gap-5">
            <div className="flex-1 flex flex-col justify-center items-start">
                <h1 className="text-[#171717] text-6xl font-medium max-xl:text-5xl max-lg:text-4xl max-[800px]:text-3xl">Exclusive</h1>
                <h1 className="text-[#171717] text-6xl font-medium max-xl:text-5xl max-lg:text-4xl max-[800px]:text-3xl">Offers For You</h1>
                <p className="text-[#171717] text-lg font-medium mt-3 max-xl:text-[16px] max-lg:text-sm max-[800px]:text-[12px]">ONLY ON BEST SELLERS PRODUCTS</p>
                <button className="w-40 h-12 rounded-3xl bg-[#ff4141] border-none text-white text-lg mt-10 font-medium
                cursor-pointer hover:bg-[#EA6861] max-xl:w-32 max-xl:h-10 max-xl:text-sm  max-[800px]:mt-5">Check Now</button>
            </div>

            <div className="flex-1 flex items-center justify-end pt-10 max-[800px]:pt-0 max-sm:hidden">
                <img src={exclusive_image} className="w-[290px] max-xl:w-[260px] max-lg:w-[230px]"/>
            </div>
        </div>
    );
};

export default Offers;