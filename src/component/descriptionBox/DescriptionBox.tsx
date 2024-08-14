import React, {LegacyRef, useEffect, useRef, useState} from 'react';
import {DescriptionBoxObj} from "../../assets/DescriptionBoxList.tsx";


const DescriptionBox = () => {
    const [value, setValue] = useState("Casual shirt to wear out alert! Check out our new all-cotton flannel shirt! This shirt is made from 100% cotton, making it soft to the touch and gentle on the skin. The long-sleeve design is perfectfor those cooler days or nights, while the button-up closure makes it easy to take on and off. Theplaid design is perfect for any casual occasion, whether going to a barbecue or running errands. The shirt is made in Italy, so you know you’re getting a high-quality product." );


    //const defaultValue = "Casual shirt to wear out alert! Check out our new all-cotton flannel shirt! This shirt is made from 100% cotton, making it soft to the touch and gentle on the skin. The long-sleeve design is perfectfor those cooler days or nights, while the button-up closure makes it easy to take on and off. Theplaid design is perfect for any casual occasion, whether going to a barbecue or running errands. The shirt is made in Italy, so you know you’re getting a high-quality product.";

    const changeProperty = (type) =>{
        DescriptionBoxObj.map((value)=>{
            if(value.type === type){
                setValue(value.value);
            }
        })
    }

        return (
        <div className="mx-16">
            <div className="flex">
                <div
                    onClick={() => changeProperty("description")}
                    className="flex items-center justify-center text-sm font-medium w-[140px] h-[50px] border-[#d0d0d0] border-[1px] cursor-pointer" >Description
                </div>
                <div
                    onClick={() => changeProperty("review")}
                    className="flex items-center justify-center text-sm font-medium w-[140px] h-[50px] border-[#d0d0d0] border-[1px] cursor-pointer">Reviews
                    (122)
                </div>
            </div>
            <div className="flex flex-col gap-6 border-[#D0D0D0] border-[1px] p-10 mb-20 text-sm">
                <p>{value}</p>

            </div>
        </div>
    );
};

export default DescriptionBox;