import React from "react";
import { Link } from "react-router-dom";
import Img from './images/P5Img.jpg'
const Page5 = () =>{
    return(
        <div>
            <div className="flex items-center">
                <Link to='/Page4'><button className=" ml-4 mr-3">&lt;</button></Link>
                <hr className="w-full h-2 bg-green-600 border-b-20 rounded-full mt-4 mb-4 mr-4"/>
            </div>
            
           <div class="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between mt-8">
                <div className="w-1/3 mx-auto">
                    <img src={Img} alt="loding" className="w-full lg:h-96 mr-4 object-contain "/>
                </div>
                <div className="w-1/2 h-96 mx-auto my-auto">
                    <h1 className="text-2xl font-bold text-black lg:pt-32 md:pt-16 sm:pt-8 lg:text-left md:text-left sm:text-left lg:mb-4 md:mb-4 sm:mb-4">You're on your way!</h1>
                    <p className="text-left">⭐⭐⭐⭐⭐</p>
                    <p className="text-sm font-semibold text-gray-700 text-center lg:text-left md:text-left sm:text-left">
                        "Through its enagaging and well-structured courses, Brillant has taught me mathematical concepts that I previously struggled to understand.
                        I now feel condfident approaching both technical job interview and real world problem solving situations."
                    </p>
                    <p className="text-left mt-6">-Jacob S</p>
                </div>
           </div> 
            <Link to="/Page6"><button className="w-1/10 m-2 px-12 p-2 bg-black hover:bg-gray-400 text-white rounded-md border border-gray-400">Continue</button></Link>
        </div>
    );
}

export default Page5;