import React, {useContext, useRef, useState} from 'react';
import {ProductProp} from "../breadcrum/BreadCrum.tsx";
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import {ShopContext} from "../../context/ShopContext.tsx";
import '../../index.css'
import { IoClose } from "react-icons/io5";

const ProductDisplay = ({props}: ProductProp) => {
    const product = props;
    const sizesStyles = "bg-[#F0EEF3] border-[#8c8c8c] border-[1px] w-10 h-10 flex items-center justify-center rounded-[3px] " +
        "cursor-pointer max-[552px]:text-sm max-[552px]:w-8 max-[552px]:h-8";
    const smImgStyles = "w-[110px] max-[850px]:w-[65px] max-[2000px]:w-[90px]";
    const starImgStyles = "max-[552px]:h-[13px]";

    const {addToCart} = useContext(ShopContext);
    const sizeS = useRef();
    const sizeM = useRef();
    const sizeL = useRef();
    const sizeXL = useRef();
    const size2XL = useRef();

    const [popup, setPopup] = useState(false);

    const toggleSize = (size)=>{
        size === "[S]" ? sizeS.current.style.backgroundColor = "#55efc4" : sizeS.current.style.backgroundColor = "#F0EEF3";
        size === "[M]" ? sizeM.current.style.backgroundColor = "#55efc4" : sizeM.current.style.backgroundColor = "#F0EEF3";
        size === "[L]" ? sizeL.current.style.backgroundColor = "#55efc4" : sizeL.current.style.backgroundColor = "#F0EEF3";
        size === "[XL]" ? sizeXL.current.style.backgroundColor = "#55efc4" : sizeXL.current.style.backgroundColor = "#F0EEF3";
        size === "[2XL]" ? size2XL.current.style.backgroundColor = "#55efc4" : size2XL.current.style.backgroundColor = "#F0EEF3";
    }

    return (
        <div className=" mx-20 mt-10 mb-20 flex max-[850px]:flex-col max-[850px]:items-center relative">

            {popup && <div
                className="w-[450px] h-[150px] flex absolute top-16 left-0 right-0 m-auto shadow-all bg-green-400 rounded-[10px]">
                <IoClose className="absolute right-2 top-2 text-red-500 text-xl cursor-pointer" onClick={()=> setPopup(false)}/>
                <div className="absolute top-16 left-[90px] font-medium text-lg">Product Added Successfully!</div>
            </div>}

            <div className="flex gap-4 max-[850px]:mb-20">
                <div className="flex flex-col gap-4">
                <img src={product.image} className={smImgStyles}/>
                    <img src={product.image} className={smImgStyles}/>
                    <img src={product.image} className={smImgStyles}/>
                    <img src={product.image} className={smImgStyles}/>
                </div>
                <div>
                    <img src={product.image} className="w-[500px] max-[2000px]:w-[400px] max-[850px]:w-[300px]"/>
                </div>
            </div>

            <div className="ml-16 mr-5 flex flex-col gap-4 w-[50%] max-[850px]:w-[80%] max-[850px]:ml-0">
                <h1 className="text-[#3d3d3d] text-3xl font-medium max-xl:text-2xl max-[552px]:text-xl">{product.name}</h1>
                <div className="flex h-4 gap-1">
                    <img src={star_icon} className={starImgStyles}/>
                    <img src={star_icon} className={starImgStyles}/>
                    <img src={star_icon} className={starImgStyles}/>
                    <img src={star_icon} className={starImgStyles}/>
                    <img src={star_dull_icon} className={starImgStyles}/>
                    <p className="text-sm max-[552px]:text-[12px]">(134)</p>
                </div>
                <div className="flex my-5 gap-3 font-medium">
                    <div className="text-lg max-[552px]:text-[16px]">${product.new_price}</div>
                    <s className="text-sm pt-1 text-[#8c8c8c] max-[552px]:text-[12px]">${product.old_price}</s>
                </div>
                <div className="text-sm">
                    Casual shirt to wear out alert! Check out our new all-cotton flannel shirt! This shirt is made from
                    100% cotton, making it soft to the touch and gentle on the skin. The long-sleeve design is perfect
                    for those cooler days or nights, while the button-up closure makes it easy to take on and off. The
                    plaid design is perfect for any casual occasion, whether going to a barbecue or running errands. T
                    he shirt is made in Italy, so you know you’re getting a high-quality product.
                </div>
                <div>
                    <h1 className="text-lg font-medium max-[552px]:text-[16px]">Select Size</h1>
                    <div className="flex my-5 gap-4">
                        <div className={sizesStyles} ref={sizeS} onClick={()=> {
                            product.size = "[S]";
                            toggleSize("[S]");
                            /*sizeS.current.classList.toggle("toggle_size_style");*/
                            /*sizeS.current.style.borderColor = "#00b894"*/
                        }}>S</div>
                        <div className={sizesStyles} ref={sizeM} onClick={()=> {
                            product.size = "[M]";
                            toggleSize("[M]");
                        }}>M</div>
                        <div className={sizesStyles} ref={sizeL} onClick={()=> {
                            product.size = "[L]";
                            toggleSize("[L]");
                        }}>L</div>
                        <div className={sizesStyles} ref={sizeXL} onClick={()=> {
                            product.size = "[XL]";
                            toggleSize("[XL]");
                        }}>XL</div>
                        <div className={sizesStyles} ref={size2XL} onClick={()=> {
                            product.size = "[2XL]";
                            toggleSize("[2XL]");
                        }}>2XL</div>
                    </div>
                </div>
                <button
                    onClick={() => {
                        addToCart(product.id);
                        setPopup(true);
                    }}
                    className="text-white bg-[#FF4141] mb-10 border-none outline-none cursor-pointer w-48 h-14
                active:text-[15px] active:transition duration-500 max-[552px]:w-40 max-[552px]:h-12 max-[552px]:text-sm" >
                ADD TO CART
                </button>
                <p className="text-sm"><span className="font-bold">Category : </span>Women, T-Shirt, Crop Top</p>
                <p className="text-sm"><span className="font-bold">Tags : </span>Modern, Latest</p>
            </div>
        </div>
    );
};

export default ProductDisplay;