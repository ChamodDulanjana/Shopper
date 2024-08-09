import React from 'react';
import footer_logo from '../../assets/logo_big.png'
import instagram_icon from '../../assets/instagram_icon.png'
import pintester_icon from '../../assets/pintester_icon.png'
import whatsapp_icon from '../../assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-12">
            <div className="flex items-center gap-5">
                <img src={footer_logo} alt=""/>
                <p className="text-[#383838] text-2xl font-medium">SHOPPER</p>
            </div>
            <ul className="flex list-none gap-12 text-[#252525] text-[16px]">
                <li className="cursor-pointer">Company</li>
                <li className="cursor-pointer">Product</li>
                <li className="cursor-pointer">Offices</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
            </ul>
            <div className="flex gap-4">
                <div className="p-5 pb-2">
                    <img src={instagram_icon} className="w-5 cursor-pointer"/>
                </div>
                <div className="p-5 pb-2">
                    <img src={pintester_icon} className="w-5 cursor-pointer"/>
                </div>
                <div className="p-5 pb-2">
                    <img src={whatsapp_icon} className="w-5 cursor-pointer"/>
                </div>
            </div>
            <div className="flex flex-col items-center gap-10 w-full mb-8 text-[#1a1a1a] text-lg">
                <hr className="w-[80%] border-none rounded-xl h-[1px] bg-[#c7c7c7]"/>
                <p className="text-sm">Copyright @ 2024 - All Right Reserve</p>
            </div>
        </div>
    );
};

export default Footer;