import React, {useContext} from 'react';
import {ShopContext} from "../../context/ShopContext.tsx";
import remove_icon from '../../assets/cart_cross_icon.png'

const CartItems = () => {

    const {allProduct, cartItems, removeFromCart} = useContext(ShopContext);

    return (
        <div className="my-16 mx-40">
            <div className="grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center gap-20 py-5 text-[#454545] text-sm font-bold">
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
                        <div className="grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center gap-20 py-5 text-[#454545] text-sm font-medium">
                            <img src={product.image} alt=""/>
                            <p>{product.name}</p>
                            <p>${product.new_price}</p>
                            <button
                            className="h-[50px] w-[64px] border-[2px] border-[#ebebeb] bg-white rounded-lg"
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
            <div className="flex my-24">
                <div className="flex-1 flex flex-col mr-[200px] gap-10">
                    <h1>Cart Total</h1>
                    <div>
                        <div>
                            <p>Subtotal</p>
                            <p>$0</p>
                        </div>
                        <hr/>
                        <div>
                            <p>Shipping Fee</p>
                            <p>Free
                            </p>
                            <hr/>
                            <div>
                                <h3>Total</h3>
                                <h3>$0</h3>
                            </div>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                    <div>
                        <p>If you have a promo code, Enter it here</p>
                        <div>
                            <input type="text"/>
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;