import React from "react";
import { Link } from "react-router-dom";
import Img from './images/P3Img.jpeg'
const Page3 = () =>{
    return(
        <div> 
            <div className="flex items-center">
            <Link to='/Page2'><button className=" ml-4 mr-3">&lt;</button></Link>
                <hr className="w-3/5 h-2 bg-green-600 border-b-20 rounded-full mt-4 mb-4 "/>
            </div>
            <div className="flex flex-col lg:flex-row md:flex-row justify-evenly m-10">
                <div className=" w-72 h-72 mx-auto">
                    <img src={Img} alt="loading" className="w-72 h-72"/>
                </div>
                
                <div className="w-72 h-72 mt-8 pt-16 mx-auto">
                    <h1 className="text-2xl font-bold text-black">You're in the right place</h1>
                    <p className="text-sm font-semibold text-gray-700 ">Brilliant gets you hands-om to help improve your Professional skills and knowledge.
                        You'll interact with concepts and solve fun problems in math, science, and computer science.
                    </p>
                </div>
            </div>
            <Link to="/Page4"><button className="w-1/10 m-2 px-12 p-2 bg-black hover:bg-gray-400 text-white rounded-md border border-gray-400">Continue</button></Link>
        </div>
    );
}
export default Page3;