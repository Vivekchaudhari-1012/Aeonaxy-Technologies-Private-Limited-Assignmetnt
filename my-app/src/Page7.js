import React from "react";
import Img from './images/P7Img1.jpeg'

const Page7 = () => {
    return (
        <div className="mt-40">
            <h1 className="text-2xl lg:text-5xl md:text-3xl font-bold text-black p-4 m-2">Learning paths based on your answers</h1>
            <p className="text-md lg:text-lg font-semibold text-gray-700 p-1 m-2 mb-8">Choose one to get started. Your can switch anytime</p>
            
            <div className="flex flex-col justify-evenly lg:flex-row sm:flex-row md:flex-row mx-20">
                
                <div className="mb-8">
                    <div className="absolute w:20 text-sm lg:text-lg md:text-base lg:w-40 px-2 ml-10 rounded-full bg-yellow-400 lg:ml-60 -m-3 sm:ml-10 md:ml-16">MOST POPULAR</div>

                    <div className="flex flex-col justify-evenly border border-gray-500 w-auto rounded-md lg:pt-8 sm:h-64 sm:flex-row">
                        <div className="w-full h-32 text-left md:pt-6 sm:pt-6">
                            <p><span className="font-bold">Foundational Math</span>Build your foundational skills in algebra, geometry, and probability.</p>
                        </div>
                        <div className="w-full h-32 md:pt-6 sm:pt-6">
                            <img src={Img} alt="loading" className="w-full h-32"/>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-evenly border border-gray-500 w-auto rounded-md lg:pt-8 sm:h-64 sm:flex-row lg:ml-2 md:ml-2 sm:ml-2">
                    <div className="w-full h-32 text-left md:pt-6 sm:pt-6">
                        <p><span className="font-bold">Mathematical Thinking </span>Build your foundational skills in algebra,geometry and probability.</p>
                    </div>

                    <div className="w-full h-32 md:pt-6 sm:pt-6">
                        <img src={Img} alt="loading" className="w-full h-32"/>
                    </div>
                </div>

            </div> 
        </div>
        
    );
}
export default Page7;