import React, {useState} from 'react';
import logo from '../../assets/logo.png'
import cart_logo from '../../assets/cart_icon.png'
import {Link} from "react-router-dom";

const Navbar = () => {
    const ulStyles = "flex flex-col items-center justify-center gap-3 cursor-pointer";
    const liStyles = "border-non w-[80%] h-1 rounded-2xl bg-[#FF4141]";

    const [menu, setMenu] = useState<string>("shop");

    return (
        <div className="flex justify-around p-16 shadow-lg h-20">
            <div className="flex items-center gap-5">
                <img src={logo}/>
                <p className="text-xl font-medium">SHOPPER</p>
            </div>
            <ul className="flex items-center gap-14 list-none text-[#626262] font-medium">
                <li onClick={()=>{setMenu("shop")}}
                    className={ulStyles}
                >
                    <Link to="/">Shop</Link> {menu === "shop" ? <hr className={liStyles}/> : <></>}
                </li>
                <li onClick={()=>{setMenu("men")}}
                    className={ulStyles}
                >
                    <Link to="/men">Men</Link> {menu === "men" ? <hr className={liStyles}/> : <></>}
                </li>
                <li onClick={()=>{setMenu("women")}}
                    className={ulStyles}
                >
                    <Link to="/women">Women</Link> {menu === "women" ? <hr className={liStyles}/> : <></>}
                </li>
                <li onClick={()=>{setMenu("kids")}}
                    className={ulStyles}
                >
                    <Link to="/kids">Kids</Link> {menu === "kids" ? <hr className={liStyles}/> : <></>}
                </li>
            </ul>
            <div className="flex items-center gap-20">
                <Link to="/login">
                    <button
                        className="w-[110px] h-[40px] outline-none border-[1px] border-[#7a7a7a] rounded-full active:bg-[#f3f3f3]">Login
                    </button>
                </Link>
                <Link to="/cart"><img src={cart_logo}/></Link>
                <div
                    className="w-[22px] h-[22px] flex justify-center items-center rounded-full text-sm bg-red-700 text-white mb-10 -ml-24">0</div>
            </div>
        </div>
    );
};

export default Navbar;