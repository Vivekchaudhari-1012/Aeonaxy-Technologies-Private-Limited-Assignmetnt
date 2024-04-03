import React from "react";
import { Link } from "react-router-dom";
import Img1 from './images/P4Img1.png';
import Img2 from './images/P4Img2.png';
import Img3 from './images/P4Img3.png';
import Img4 from './images/P4Img4.png';
const Page4 = () =>{
    return(
        <div>
            <div className="flex items-center">
            <Link to='/Page3'><button className=" ml-4 mr-3">&lt;</button></Link>
                <hr className="w-4/5 h-2 bg-green-600 border-b-20 rounded-full mt-4 mb-4 "/>
            </div>
            <h1 className="text-2xl font-bold text-black p-2 m-1 mt-8">What is your math comfort level?</h1>
            <p className="text-sm font-semibold text-gray-700 p-1 m-2 mb-6">Choose the highest level you feel confident in - you can always adjust later.</p>
  
            <div class="flex flex-col lg:flex-row md:flex-row justify-center">
                <div className="border border-gray-400 rounded-md hover:border-orange-300 hover:shadow-lg transition duration-300 ease-in-out m-10 p-4 sm:m-2 flex flex-col items-center">
                    <p><img src={Img1} alt="loading" /></p>
                    <h1>Arithmetic</h1>
                    <p className='font-thin text-sm'>Introductory</p>
                </div>

                <div className="border border-gray-400 rounded-md  hover:border-orange-300 hover:shadow-lg transition duration-300 ease-in-out m-10 p-4 sm:m-2 flex flex-col items-center">
                    <p><img src={Img2} alt="loading"/></p>
                    <h1>Basic Algebra</h1>
                    <p className='font-thin text-sm'>Foundational</p>
                </div>
                <div className="border border-gray-400 rounded-md  hover:border-orange-300 hover:shadow-lg transition duration-300 ease-in-out m-10 p-4 sm:m-2 flex flex-col items-center">
                    <p><img src={Img3} alt="loading"/></p>
                    <h1>Intermediate Algebra</h1>
                    <p className='font-thin text-sm'>Intermediate</p>
                </div>
                <div className="border border-gray-400 rounded-md  hover:border-orange-300 hover:shadow-lg transition duration-300 ease-in-out m-10 p-4 sm:m-2 flex flex-col items-center">
                    <p><img src={Img4} alt="loading"/></p>
                    <h1>Calculus</h1>
                    <p className='font-thin text-sm'>Advanced</p>
                </div>

            </div>
            
            <Link to="/Page5"><button className="w-1/10 m-2 px-12 p-2 bg-black hover:bg-gray-400 text-white rounded-md border border-gray-400">Continue</button></Link>
        </div>
    );
}
export default Page4;