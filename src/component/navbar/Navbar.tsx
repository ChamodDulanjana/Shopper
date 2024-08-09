import React from 'react';
import logo from '../../assets/logo.png'
import cart_logo from '../../assets/cart_icon.png'

const Navbar = () => {
    const ulStyles = "flex flex-col items-center justify-center gap-3 cursor-pointer";
    const liStyles = "border-non w-[80%] h-1 rounded-2xl bg-[#FF4141]";
    const margin = "-55px";
    return (
        <div className="flex justify-around p-16 shadow-lg">
            <div className="flex items-center gap-5">
                <img src={logo}/>
                <p className="text-xl font-medium">SHOPPER</p>
            </div>
            <ul className="flex items-center gap-14 list-none text-[#626262] font-medium">
                <li className={ulStyles}>Shop <hr className={liStyles}/></li>
                <li className={ulStyles}>Men <hr className={liStyles}/></li>
                <li className={ulStyles}>Women <hr className={liStyles}/></li>
                <li className={ulStyles}>Kids <hr className={liStyles}/></li>
            </ul>
            <div className="flex items-center gap-20">
                <button
                    className="w-[110px] h-[40px] outline-none border-[1px] border-[#7a7a7a] rounded-full active:bg-[#f3f3f3]">Login
                </button>
                <img src={cart_logo}/>
                <div className="w-[22px] h-[22px] flex justify-center items-center rounded-full text-sm bg-red-800 text-white mb-10 -ml-24">0</div>
            </div>
        </div>
    );
};

export default Navbar;