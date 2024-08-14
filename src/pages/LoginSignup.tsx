import React from 'react';

const LoginSignup = () => {
    const inputFldStyles = "h-12 w-full pl-5 border-[1px] border-[#c9c9c9] outline-none text-[#5c5c5c] text-sm " +
        "rounded-lg max-[800px]:h-10 max-[800px]:text-[12px]";

    return (
        <div className="w-full h-[100%] bg-[#fce3fe] pt-[100px] mb-28">
            <div className="w-[580px] h-[600px] bg-white m-auto py-[40px] px-[60px] max-[800px]:w-[500px]
            max-[630px]:w-[400px] max-[630px]:px-[40px] max-[530px]:w-[380px]">
                <h1 className="mt-[20px] font-bold text-xl">Sign Up</h1>
                    <form action="" className="flex flex-col gap-8 mt-8">
                        <input type="text" placeholder="Name" className={inputFldStyles}/>
                        <input type="email" placeholder="Email"  className={inputFldStyles}/>
                        <input type="password" placeholder="Password"  className={inputFldStyles}/>
                    </form>
                <button className="h-12 w-full text-white bg-blue-950 rounded-lg border-none cursor-pointer mt-8 text-sm
                active:text-[13px] transition duration-500 max-[800px]:h-10 max-[800px]:text-[12px]">Continue</button>
                <p className="mt-8 text-[#5c5c5c] text-sm font-medium max-[800px]:text-[12px]">Already have an account?
                    <span className="text-[#ff4141] font-medium pl-2 cursor-pointer max-[800px]:text-[12px]">Login here</span>
                </p>
                <div className="flex items-center mt-8 gap-2 text-[#5c5c5c] text-sm font-medium max-[800px]:text-[12px]">
                    <input type="checkbox" name="" id=""/>
                    <p>By continuing, I agree to terms of ues and privacy policy.</p>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;