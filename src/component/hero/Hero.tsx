import React from 'react';
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from '../../assets/arrow.png'
import hero_img from '../../assets/hero_image.png'

const Hero = () => {
    return (
        <div className="h-full flex bg-gradient-to-b from-pink-300 via-pink-200 to-pink-0 ... max-sm:flex-col">
            <div className="flex-1 flex flex-col justify-center gap-4 pl-44 leading-tight max-xl:pl-32 max-lg:pl-28 max-[800px]:pl-20
            max-[800px]:gap-3 max-sm:my-20">
                <h2 className="text-[#090909] text-2xl font-medium  max-lg:text-xl max-[800px]:text-lg">NEW ARRIVALS ONLY</h2>
                <div className="flex items-center gap-5">
                    <p className="text-[#171717] text-6xl font-bold max-lg:text-5xl max-[800px]:text-4xl">new</p>
                    <img src={hand_icon} className="w-[105px] relative bottom-2 max-lg:w-[90px] max-[800px]:w-[75px]"/>
                </div>
                <p className="text-[#171717] text-6xl font-bold max-lg:text-5xl max-[800px]:text-4xl">collections</p>
                <p className="text-[#171717] text-6xl font-bold max-lg:text-5xl max-[800px]:text-4xl">for everyone</p>

                <div className="flex justify-center items-center gap-4 w-[250px] h-[50px] rounded-full mt-8 bg-[#ff4141]
                text-white text-lg font-normal cursor-pointer  hover:bg-[#EA6861]  max-lg:w-[220px] max-lg:h-[45px] max-lg:text-[16px]
                max-lg:gap-3  max-[800px]:w-[200px] max-[800px]:h-[40px]  max-[800px]:text-sm">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt=""/>
                </div>
            </div>


            <div className="flex-1 flex items-center justify-center max-sm:hidden">
                <img src={hero_img} className="w-[500px] pt-4 max-lg:w-[380px] max-[800px]:w-[300px]"/>
            </div>
        </div>
    );
};

export default Hero;