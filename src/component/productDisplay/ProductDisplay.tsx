import React, {useContext} from 'react';
import {ProductProp} from "../breadcrum/BreadCrum.tsx";
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import {ShopContext} from "../../context/ShopContext.tsx";

const ProductDisplay = ({props}: ProductProp) => {
    const product = props;
    const sizesStyles = "bg-[#F0EEF3] border-[#8c8c8c] border-[1px] w-10 h-10 flex items-center justify-center rounded-[3px] cursor-pointer";

    const {addToCart} = useContext(ShopContext);

    return (
        <div className="flex mx-24 mt-10 mb-20">
            <div className="flex gap-4">
                <div className="flex flex-col gap-4">
                    <img src={product.image} className="w-[450px]"/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                    <img src={product.image} alt=""/>
                </div>
                <div>
                    <img src={product.image} className="w-[2000px]"/>
                </div>
            </div>

            <div className="mx-16 flex flex-col gap-4">
                <h1 className="text-[#3d3d3d] text-3xl font-medium">{product.name}</h1>
                <div className="flex h-4 gap-1">
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_icon} alt=""/>
                    <img src={star_dull_icon} alt=""/>
                    <p className="text-sm">(134)</p>
                </div>
                <div className="flex my-5 gap-3 font-medium">
                    <div className="text-lg">${product.new_price}</div>
                    <s className="text-sm pt-1 text-[#8c8c8c]">${product.old_price}</s>
                </div>
                <div className="text-sm">
                    Casual shirt to wear out alert! Check out our new all-cotton flannel shirt! This shirt is made from
                    100% cotton, making it soft to the touch and gentle on the skin. The long-sleeve design is perfect
                    for those cooler days or nights, while the button-up closure makes it easy to take on and off. The
                    plaid design is perfect for any casual occasion, whether going to a barbecue or running errands. T
                    he shirt is made in Italy, so you know you’re getting a high-quality product.
                </div>
                <div>
                    <h1 className="text-lg font-medium">Select Size</h1>
                    <div className="flex my-5 gap-4">
                        <div className={sizesStyles}>S</div>
                        <div className={sizesStyles}>M</div>
                        <div className={sizesStyles}>L</div>
                        <div className={sizesStyles}>XL</div>
                        <div className={sizesStyles}>2XL</div>
                    </div>
                </div>
                <button
                    onClick={() => addToCart(product.id)}
                    className="text-white bg-[#FF4141] mb-10 border-none outline-none cursor-pointer w-48 h-14
                active:text-[15px] active:transition duration-500" >
                    ADD TO CART
                </button>
                <p className="text-sm"><span className="font-bold">Category : </span>Women, T-Shirt, Crop Top</p>
                <p className="text-sm"><span className="font-bold">Tags : </span>Modern, Latest</p>
            </div>
        </div>
    );
};

export default ProductDisplay;