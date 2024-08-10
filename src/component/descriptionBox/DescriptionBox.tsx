import React, {useRef, useState} from 'react';
import {DescriptionBoxObj} from "../../assets/DescriptionBoxList.tsx";


const DescriptionBox = () => {
    const [value, setValue] = useState("");

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
                    className="flex items-center justify-center text-sm font-medium w-[140px] h-[50px] border-[#d0d0d0] border-[1px]" >Description
                </div>
                <div
                    onClick={() => changeProperty("review")}
                    className="flex items-center justify-center text-sm font-medium w-[140px] h-[50px] border-[#d0d0d0] border-[1px]">Reviews
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