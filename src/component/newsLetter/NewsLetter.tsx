import React from 'react';

const NewsLetter = () => {
    return (
        <div className="w-[80%] h-[50vh] flex flex-col items-center justify-center m-auto px-36 mb-32
        bg-gradient-to-b from-pink-300 via-pink-200 to-pink-0 ... gap-8">
            <h1 className="text-[#454545] text-5xl font-medium">Get Exclusive Offers On Your Email</h1>
            <p className="text-[#454545] text-xl">Subscribe to our new letter and stay on update</p>
            <div className="flex items-center justify-between bg-white w-[730px] h-[60px] rounded-full">
                <input type="email" placeholder="Input your email" className="w-[500px] ml-8 border-none outline-none text-[#616161] font-poppins text-sm"/>
                <button className="w-[210px] h-[60px] rounded-full bg-black text-white text-sm cursor-pointer active:text-[13px] active:transition duration-500">Subscribe</button>
            </div>
        </div>
    );
};

export default NewsLetter;