import React, {useContext} from 'react';
import {ShopContext} from "../../context/ShopContext.tsx";
import remove_icon from '../../assets/cart_cross_icon.png'
import './CartItem.css'

const CartItems = () => {

    const {allProduct, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext);

    return (
        <div className="my-16 mx-40 max-xl:mx-20 max-[900px]:mx-10">
            <div className="grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center gap-20 py-5 text-[#454545] text-sm font-bold
            max-xl:grid-cols-[0.5fr,3fr,0.5fr,0.5fr,0.5fr,0.5fr] max-[1206px]:gap-16 max-[800px]:gap-10  max-[700px]:hidden">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className="h-[2px] bg-[#e2e2e2] border-none"/>
            {allProduct.map((product) => {
                if(cartItems[product.id]>0) {
                    return <div>
                        <div className="grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center gap-20 py-5 text-[#454545]
                        text-sm font-medium max-[1206px]:gap-16 max-xl:grid-cols-[0.5fr,3fr,0.5fr,0.5fr,0.5fr,0.5fr] max-[800px]:gap-10
                        max-[900px]:grid-cols-[0.5fr,2fr,0.5fr,0.5fr,0.5fr,0.5fr] max-[700px]:flex">
                            <img src={product.image} className="max-[1206px]:w-[55px]"/>
                            <p>{product.name}{"-"+product.size}</p>
                            <p>${product.new_price}</p>
                            <button
                            className="h-[50px] w-[64px] border-[2px] border-[#ebebeb] bg-white rounded-lg max-[700px]:gap-5"
                            >{cartItems[product.id]}</button>
                            <p>${product.new_price * cartItems[product.id]}</p>
                            <img
                                className="w-3 cursor-pointer"
                                src={remove_icon} onClick={() => {
                                removeFromCart(product.id);
                            }} alt=""/>
                        </div>
                        <hr className="h-[2px] bg-[#e2e2e2] border-none"/>
                    </div>
                }
                return null;
            })}
            <div className="flex my-24 text-sm cart-item-sub">
                <div
                    id="div1"
                    className="flex-1 flex flex-col mr-[50px] gap-10">
                    <h1 className="text-xl font-bold">Cart Total</h1>
                    <div>
                        <div className="flex justify-between py-5">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="flex justify-between py-5">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className="flex justify-between py-5 font-bold">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                        <button
                            className="w-[240px] h-[50px] outline-none border-none bg-[#ff5a5a] text-white text-sm font-medium cursor-pointer mt-10">PROCEED
                            TO CHECKOUT
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CartItems;