import React from 'react';

const NewsLetter = () => {
    return (
        <div className="w-[80%] h-[50vh] flex flex-col items-center justify-center px-5 m-auto mb-32
        bg-gradient-to-b from-pink-300 via-pink-200 to-pink-0 ... gap-8">
            <h1 className="text-[#454545] text-5xl font-medium max-[1414px]:text-4xl max-xl:text-3xl max-[800px]:text-2xl">Get Exclusive Offers On Your Email</h1>
            <p className="text-[#454545] text-xl max-xl:text-lg max-[800px]:text-[16px]">Subscribe to our new letter and stay on update</p>
            <div className="flex items-center justify-between bg-white w-[65vw] h-[60px] rounded-full  max-[1414px]:h-[55px]
            max-xl:h-[50px] max-[800px]:h-[45px]">
                <input
                    type="email"
                    placeholder="Input your email"
                    className="w-[500px] ml-8 border-none outline-none text-[#616161] font-poppins text-sm"/>
                <button
                    className="w-[210px] h-[60px] rounded-full bg-black text-white text-sm cursor-pointer active:text-[13px]
                active:transition duration-500 max-[1414px]:h-[55px] max-xl:h-[50px] max-xl:w-[180px] max-[800px]:h-[45px]
                 px-5">Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;