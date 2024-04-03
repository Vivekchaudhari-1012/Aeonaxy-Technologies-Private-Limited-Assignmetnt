import React from "react";
import { Link } from "react-router-dom";
import Img1 from './images/p1Img1.jpg';
import Img2 from './images/P1Img2.jpeg';
import Img3 from './images/P1Img3.jpeg';
import Img4 from './images/P1Img4.png';
import Img5 from './images/P1Img5.jpeg';
import Img6 from './images/P1Img6.jpeg';
const Page1 = () =>{
  
    return (
        <div>
            <div className="flex items-center">
            <Link to='/'><button className=" ml-4 mr-3">&lt;</button></Link>
                <hr className="w-1/5 h-2 bg-green-600 border-b-20 rounded-full mt-4 mb-4 "/>
            </div>

            <h1 className="text-2xl font-bold text-black p-2 m-1">Which describes you best?</h1>
            <p className="text-sm font-semibold text-gray-700 p-1 m-2 mb-8">This will help us personalize your experience</p>

            <div className="max-w-sm mx-auto">
                <div className="p-2 m-2 rounded-md border border-gray-400 text-left mx-auto hover:border-orange-300 hover:shadow-lg transition duration-300 ease-in-out flex items-center">
                    <img src={Img1} alt="loding" className="w-10 h-10 mr-4"/>
                    <p><span className="font-semibold">Student</span> or soon to enrolled</p>
                </div>

                <div className="p-2 m-2 rounded-md border border-gray-400 text-left mx-auto hover:border-orange-300 hover:shadow-lg transition duration-300 ease-in-out flex items-center ">
                    <img src={Img2} alt="loding" className="w-10 h-10 mr-4"/>
                    <p><span className="font-semibold">Professional</span> or soon to enrolled</p>
                </div>

                <div className=" p-2 m-2 rounded-md border border-gray-400 text-left mx-auto hover:border-orange-300 hover:shadow-lg transition duration-300 ease-in-out flex items-center ">
                    <img src={Img3} alt="loding" className="w-10 h-10 mr-4"/>
                    <p><span className="font-semibold">Parent</span> or soon to enrolled</p>
                </div>

                <div className="p-2 m-2 rounded-md border border-gray-400 text-left mx-auto hover:border-orange-300 hover:shadow-lg transition duration-300 ease-in-out flex items-center ">
                    <img src={Img4} alt="loding" className="w-10 h-10 mr-4"/>
                    <p><span className="font-semibold">Lifelong learner</span> or soon to enrolled</p>
                </div>

                <div className="p-2 m-2 rounded-md border border-gray-400 text-left mx-auto hover:border-orange-300 hover:shadow-lg transition duration-300 ease-in-out flex items-center ">
                    <img src={Img5} alt="loding" className="w-10 h-10 mr-4"/>
                    <p><span className="font-semibold">Teacher</span> or soon to enrolled</p>
                </div>

                <div className="p-2 m-2 rounded-md border border-gray-400 text-left mx-auto hover:border-orange-300 hover:shadow-lg transition duration-300 ease-in-out flex items-center ">
                    <img src={Img6} alt="loding" className="w-10 h-10 mr-4"/>
                    <p><span className="font-semibold">Other</span> or soon to enrolled</p>
                </div>
            </div>
            
            <Link to="/Page2"><button className="w-1/10 m-2 px-12 p-2 bg-black hover:bg-gray-400 text-white rounded-md border border-gray-400">Continue</button></Link>
        </div>
    );
};

export default Page1;