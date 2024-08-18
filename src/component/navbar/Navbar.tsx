import React, {useContext, useEffect, useRef, useState} from 'react';
import logo from '../../assets/logo.png'
import cart_logo from '../../assets/cart_icon.png'
import {Link} from "react-router-dom";
import {ShopContext} from "../../context/ShopContext.tsx";
import menu_icon from '../../assets/menu_icon.png'
import './Navbar.css'

const Navbar:React.FC = () => {
    const liStyles = "flex flex-col items-center justify-center gap-3 cursor-pointer max-xl:gap-1";
    const liSideNavStyles = "flex flex-col items-center justify-center cursor-pointer " +
        "w-full h-12 hover:bg-pink-300";
    const hrStyles = "border-non w-[80%] h-1 rounded-2xl bg-[#FF4141]";

    const [menu, setMenu] = useState<string>("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const listItemRef1 = useRef<HTMLLIElement>();
    const listItemRef2 = useRef<HTMLLIElement>();
    const listItemRef3 = useRef<HTMLLIElement>();
    const listItemRef4 = useRef<HTMLLIElement>();
    const cartRef5 = useRef<HTMLLIElement>();
    const loginRef6 = useRef<HTMLLIElement>();


    const sideNavbarLiStyles = (menu) => {
        // Check if the ref is not null (TypeScript safety check)
      menu === 'shop' ? listItemRef1.current.style.backgroundColor = "#fd79a8" :  listItemRef1.current.style.backgroundColor = "";
      menu === 'men' ? listItemRef2.current.style.backgroundColor = '#fd79a8': listItemRef2.current.style.backgroundColor = '';
      menu === 'women' ? listItemRef3.current.style.backgroundColor = '#fd79a8': listItemRef3.current.style.backgroundColor = '';
      menu === 'kids' ? listItemRef4.current.style.backgroundColor = '#fd79a8': listItemRef4.current.style.backgroundColor = '';
      menu === 'cart' ? cartRef5.current.style.backgroundColor = '#fd79a8': cartRef5.current.style.backgroundColor = '';
      menu === 'login' ? loginRef6.current.style.backgroundColor = '#fd79a8': loginRef6.current.style.backgroundColor = '';
    }


    const [toggleNavMenu, setToggleNavMenu] = useState(false);

    return (
        <div className="flex justify-between items-center p-14 shadow-lg h-20 max-xl:p-12">
            <div className="flex items-center gap-5 max-xl:w-12">
                <img src={logo}/>
                <p className="text-xl font-medium max-lg:text-[18px]">SHOPPER</p>
            </div>
            <img
                onClick={()=>setToggleNavMenu(!toggleNavMenu)}
                src={menu_icon}
                className="w-6 cursor-pointer hidden max-[800px]:block"/>
            <ul
                className="flex items-center gap-14 list-none text-[#626262] font-medium max-xl:gap-10 max-xl:text-sm max-lg:ml-20 max-[800px]:hidden">
                <li onClick={()=>setMenu("shop")}
                    className={liStyles}
                >
                    <Link to="/">Shop</Link> {menu === "shop" ? <hr className={hrStyles}/> : <></>}
                </li>
                <li onClick={()=>setMenu("men")}
                    className={liStyles}
                >
                    <Link to="/men">Men</Link> {menu === "men" ? <hr className={hrStyles}/> : <></>}
                </li>
                <li onClick={()=>setMenu("women")}
                    className={liStyles}
                >
                    <Link to="/women">Women</Link> {menu === "women" ? <hr className={hrStyles}/> : <></>}
                </li>
                <li onClick={()=>setMenu("kids")}
                    className={liStyles}
                >
                    <Link to="/kids">Kids</Link> {menu === "kids" ? <hr className={hrStyles}/> : <></>}
                </li>
            </ul>
            <div className="flex items-center gap-20 max-xl:gap-10 max-[800px]:hidden">
                <Link to="/login">
                    <button
                        onClick={()=> setMenu("login")}
                        className="w-[110px] h-[40px] outline-none border-[1px] border-[#7a7a7a] rounded-full active:bg-[#f3f3f3]
                        max-xl:w-[100px] max-xl:h-[35px] max-lg:w-[90px] max-lg:h-[30px]">Login
                    </button>
                </Link>
                <Link to="/cart"><img src={cart_logo} className="max-xl:w-[32px]" onClick={()=> setMenu("cart")}/></Link>
                <div
                    className="w-[22px] h-[22px] flex justify-center items-center rounded-full text-sm bg-red-700 text-white mb-10 -ml-24
                    max-xl:w-[20px] max-xl:h-[20px] max-xl:text-[12px] max-xl:-ml-12 max-xl:mb-8 max-lg:text-[12px]">
                    {getTotalCartItems()}
                </div>
            </div>

            {/*--------------------SIDE NAVIGATION------------------------*/}

            {
                toggleNavMenu && (<div
                    className="bg-pink-200 w-[270px] h-[80vh] absolute right-[0px] top-24 rounded-l-3xl block z-50 shadow-custom transition duration-500">
                    <ul
                        className="flex flex-col items-center gap-0 list-none text-[#626262] font-medium mt-10 text-[15px]">
                        <li
                            ref={listItemRef1}
                            onClick={() => sideNavbarLiStyles("shop")}
                            className={liSideNavStyles}
                        >
                            <Link to="/">Shop</Link>
                        </li>
                        <li onClick={() => sideNavbarLiStyles("men")}
                            className={liSideNavStyles}
                            ref={listItemRef2}
                        >
                            <Link to="/men">Men</Link>
                        </li>
                        <li onClick={() =>sideNavbarLiStyles("women")}
                            className={liSideNavStyles}
                            ref={listItemRef3}
                        >
                            <Link to="/women">Women</Link>
                        </li>
                        <li onClick={() => sideNavbarLiStyles("kids")}
                            className={liSideNavStyles}
                            ref={listItemRef4}
                        >
                            <Link to="/kids">Kids</Link>
                        </li>
                    </ul>

                    <div className="flex flex-col items-center w-full h-12 text-[#626262] font-medium text-[15px]">
                        <div className="w-full h-12 hover:bg-pink-300 flex justify-center items-center" ref={cartRef5} onClick={()=> sideNavbarLiStyles("cart")}>
                            <Link to="/cart"><img src={cart_logo} className="w-[26px] pt-[14px] pb-2"/>
                                <div
                                    className="w-[18px] h-[18px] flex justify-center items-center rounded-full text-[10px]
                            bg-red-700 text-white absolute top-[236px] right-[112px]">
                                    {getTotalCartItems()}
                                </div>
                            </Link>
                        </div>
                        <div className="w-full h-14 hover:bg-pink-300 flex justify-center items-center" ref={loginRef6} onClick={()=> sideNavbarLiStyles("login")}>
                            <Link to="/login">
                                <button
                                    className=" h-12 outline-none border-none">Login
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default Navbar;