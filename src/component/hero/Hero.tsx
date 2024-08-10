import React from 'react';
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_img from '../../assets/hero_image.png'

const Hero = () => {
    return (
        <div className="h-full flex bg-gradient-to-b from-pink-300 via-pink-200 to-pink-0 ... ">
            <div className="flex-1 flex flex-col justify-center gap-5 pl-44 leading-tight">
                <h2 className="text-[#090909] text-2xl font-medium">NEW ARRIVALS ONLY</h2>
                <div className="flex items-center gap-5">
                    <p className="text-[#171717] text-6xl font-bold">new</p>
                    <img src={hand_icon} className="w-[105px] relative bottom-2"/>
                </div>
                <p className="text-[#171717] text-6xl font-bold">collections</p>
                <p className="text-[#171717] text-6xl font-bold">for everyone</p>

                <div className="flex justify-center items-center gap-4 w-[250px] h-[50px] rounded-full mt-8 bg-[#ff4141]
                text-white text-lg font-normal cursor-pointer  hover:bg-[#EA6861]">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt=""/>
                </div>
            </div>


            <div className="flex-1 flex items-center justify-center">
                <img src={hero_img} className="w-[500px] pt-4"/>
            </div>
        </div>
    );
};

export default Hero;