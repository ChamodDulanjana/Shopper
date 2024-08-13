import React, {useContext, useRef, useState} from 'react';
import logo from '../../assets/logo.png'
import cart_logo from '../../assets/cart_icon.png'
import {Link} from "react-router-dom";
import {ShopContext} from "../../context/ShopContext.tsx";
import menu_icon from '../../assets/menu_icon.png'
import './Navbar.css'

const Navbar = () => {
    const ulStyles = "flex flex-col items-center justify-center gap-3 cursor-pointer max-xl:gap-1";
    const hrStyles = "border-non w-[80%] h-1 rounded-2xl bg-[#FF4141]";

    const [menu, setMenu] = useState<string>("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const sideMenuRef = useRef(null);


    const menuIconToggle = (e)=> {
       sideMenuRef.current.classList.toggle('.navbar');
       e.target.classList.toggle('open');
    }

    return (
        <div className="flex justify-between items-center p-14 shadow-lg h-20 max-xl:p-12">
            <div className="flex items-center gap-5 max-xl:w-12">
                <img src={logo}/>
                <p className="text-xl font-medium max-lg:text-[18px]">SHOPPER</p>
            </div>
            <img
                onClick={menuIconToggle}
                src={menu_icon}
                className="w-6 cursor-pointer hidden max-[800px]:block"/>
            <ul
                className="flex items-center gap-14 list-none text-[#626262] font-medium max-xl:gap-10 max-xl:text-sm max-lg:ml-20 max-[800px]:hidden">
                <li onClick={()=>{setMenu("shop")}}
                    className={ulStyles}
                >
                    <Link to="/">Shop</Link> {menu === "shop" ? <hr className={hrStyles}/> : <></>}
                </li>
                <li onClick={()=>{setMenu("men")}}
                    className={ulStyles}
                >
                    <Link to="/men">Men</Link> {menu === "men" ? <hr className={hrStyles}/> : <></>}
                </li>
                <li onClick={()=>{setMenu("women")}}
                    className={ulStyles}
                >
                    <Link to="/women">Women</Link> {menu === "women" ? <hr className={hrStyles}/> : <></>}
                </li>
                <li onClick={()=>{setMenu("kids")}}
                    className={ulStyles}
                >
                    <Link to="/kids">Kids</Link> {menu === "kids" ? <hr className={hrStyles}/> : <></>}
                </li>
            </ul>
            <div className="flex items-center gap-20 max-xl:gap-10 max-[800px]:hidden">
                <Link to="/login">
                    <button
                        className="w-[110px] h-[40px] outline-none border-[1px] border-[#7a7a7a] rounded-full active:bg-[#f3f3f3]
                        max-xl:w-[100px] max-xl:h-[35px] max-lg:w-[90px] max-lg:h-[30px]">Login
                    </button>
                </Link>
                <Link to="/cart"><img src={cart_logo} className="max-xl:w-[32px]"/></Link>
                <div
                    className="w-[22px] h-[22px] flex justify-center items-center rounded-full text-sm bg-red-700 text-white mb-10 -ml-24
                    max-xl:w-[20px] max-xl:h-[20px] max-xl:text-[12px] max-xl:-ml-12 max-xl:mb-8 max-lg:text-[12px]">
                    {getTotalCartItems()}
                </div>
            </div>

            {/*--------------------SIDE NAVIGATION------------------------*/}

            <div
                ref={sideMenuRef}
                className="bg-pink-200 w-[270px] h-[80%] absolute right-[0px] top-24 rounded-l-3xl">
                <ul
                    className="flex flex-col items-center gap-10 list-none text-[#626262] font-medium mt-10 text-[16px]">
                    <li onClick={() => {
                        setMenu("shop")
                    }}
                        className={ulStyles}
                    >
                        <Link to="/">Shop</Link> {menu === "shop" ? <hr className={hrStyles}/> : <></>}
                    </li>
                    <li onClick={() => {
                        setMenu("men")
                    }}
                        className={ulStyles}
                    >
                        <Link to="/men">Men</Link> {menu === "men" ? <hr className={hrStyles}/> : <></>}
                    </li>
                    <li onClick={() => {
                        setMenu("women")
                    }}
                        className={ulStyles}
                    >
                        <Link to="/women">Women</Link> {menu === "women" ? <hr className={hrStyles}/> : <></>}
                    </li>
                    <li onClick={() => {
                        setMenu("kids")
                    }}
                        className={ulStyles}
                    >
                        <Link to="/kids">Kids</Link> {menu === "kids" ? <hr className={hrStyles}/> : <></>}
                    </li>
                </ul>

                <div className="flex flex-col items-center gap-10 mt-10">
                    <Link to="/cart"><img src={cart_logo} className="max-xl:w-[32px]"/>
                        <div
                            className="w-[20px] h-[20px] flex justify-center items-center rounded-full text-[12px] bg-red-700 text-white absolute top-[295px] right-[120px]">
                            {getTotalCartItems()}
                        </div>
                    </Link>

                    <Link to="/login">
                        <button
                            className="w-[110px] h-[40px] outline-none border-[1px] border-[#7a7a7a] rounded-full active:bg-[#f3f3f3]">Login
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Navbar;