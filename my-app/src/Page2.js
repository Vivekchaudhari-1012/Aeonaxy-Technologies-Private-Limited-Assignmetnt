import React from "react";
import { Link } from "react-router-dom";
import Img1 from './images/P2Img1.jpg';
import Img2 from './images/P2Img2.jpeg';
import Img3 from './images/P2Img3.png'
import Img4 from './images/P2Img4.jpeg';
import Img5 from './images/P2Img5.jpeg';
const Page2 = () =>{
    return(
        <div>
            <div className="flex items-center">
            <Link to='/'><button className=" ml-4 mr-3">&lt;</button></Link>
                <hr className="w-2/5 h-2 bg-green-600 border-b-20 rounded-full mt-4 mb-4 "/>
            </div>
            <h1 className="text-2xl font-bold text-black p-2 m-1">Which are you most interested in?</h1>
            <p className="text-sm font-semibold text-gray-700 p-1 m-2 mb-8">Choose just one. This will help us get you started(but won't limit your experience)</p>
            
            <div className="max-w-sm mx-auto">
                <p className="p-2 m-2 rounded-md border border-gray-400 text-left mx-auto hover:border-orange-300 hover:shadow-lg transition duration-300 ease-in-out flex items-center">
                    <img src={Img1} alt="loding" className="w-10 h-10 mr-4"/>
                    Learning specific skills to advance my career
                </p>

                <p className="p-2 m-2 rounded-md border border-gray-400 text-left mx-auto hover:border-orange-300 hover:shadow-lg transition duration-300 ease-in-out flex items-center">
                    <img src={Img2} alt="loding" className="w-10 h-10 mr-4"/>
                    Exploring new topics i'm interested in
                </p>
                <p className="p-2 m-2 rounded-md border border-gray-400 text-left mx-auto hover:border-orange-300 hover:shadow-lg transition duration-300 ease-in-out flex items-center">
                    <img src={Img3} alt="loding" className="w-10 h-10 mr-4"/>
                    Refreshing my math foundations
                </p>
                <p className="p-2 m-2 rounded-md border border-gray-400 text-left mx-auto hover:border-orange-300 hover:shadow-lg transition duration-300 ease-in-out flex items-center">
                    <img src={Img4} alt="loding" className="w-10 h-10 mr-4"/>
                    Exercising my brain to stay sharp
                </p>
                <p className="p-2 m-2 rounded-md border border-gray-400 text-left mx-auto hover:border-orange-300 hover:shadow-lg transition duration-300 ease-in-out flex items-center">
                    <img src={Img5} alt="loding" className="w-10 h-10 mr-4"/>
                    Something else
                </p>
            </div>
            
           <Link to="/Page3"><button className="w-1/10 m-2 px-12 p-2 bg-black hover:bg-gray-400 text-white rounded-md border border-gray-400">Continue</button></Link>
        </div>
    );
}

export default Page2;