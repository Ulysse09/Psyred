import React from 'react'
import { IoNewspaperOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { IoReaderOutline } from "react-icons/io5";
import { TiContacts } from "react-icons/ti";
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> e21703aab64a978c9b860606814db751d24ef5e8

const Footer3 = () => {
  return (
    <div className="bg-black  p-[5rem] text-white">
      <div className="flex md:flex-row flex-col items-center md:space-x-10 space-x-0 space-y-10 md:space-y-0  justify-around  ">
<<<<<<< HEAD
        
        <Link to={'about'}className="flex  flex-col items-center space-y-[1rem]">
          <i className="text-white font-nunito font-semibold text-2xl md:h-10 h-0">
            PSYRED
          </i>
          <p className=" uppercase font-nunito">order your 3:0:0:0</p>
          <button className="border border-2 uppercase font-semibold  hover:bg-red-600 transition-colours duration-300 border-white px-4 py-2">
            About us
          </button>
        </Link>
=======
        <div className="flex  flex-col items-center space-y-[1rem]">
          <i className="text-white font-nunito font-semibold text-2xl md:h-10 h-0">
            3:0:0:0
          </i>
          <p className=" uppercase font-nunito">order your 3:0:0:0</p>
          <button className="border border-2 uppercase font-semibold  hover:bg-red-600 transition-colours duration-300 border-white px-4 py-2">
            Learn more
          </button>
        </div>
>>>>>>> e21703aab64a978c9b860606814db751d24ef5e8

        <div className="flex flex-col  items-center space-y-[1rem]">
          <i className="text-white font-nunito font-semibold text-2xl">
            <IoNewspaperOutline size={40} />
          </i>
          <p className=" uppercase font-nunito">Get the newsletter</p>
          <button className="border border-2 uppercase font-semibold  hover:bg-red-600 transition-colours duration-300 border-white px-4 py-2">
            View
          </button>
        </div>

<<<<<<< HEAD
        {/* <div className="flex flex-col items-center space-y-[1rem]">
=======
        <div className="flex flex-col items-center space-y-[1rem]">
>>>>>>> e21703aab64a978c9b860606814db751d24ef5e8
          <i className="text-white  font-nunito font-semibold text-2xl">
            <CiMail size={40} />
          </i>
          <p className=" uppercase font-nunito">Receive updates</p>
          <button className="border border-2 uppercase font-semibold  hover:bg-red-600 transition-colours duration-300 border-white px-4 py-2">
            Sign Up
          </button>
<<<<<<< HEAD
        </div> */}
=======
        </div>
>>>>>>> e21703aab64a978c9b860606814db751d24ef5e8

        <div className="flex flex-col  items-center space-y-[1rem]">
          <i className="text-white font-nunito font-semibold text-2xl">
            <IoReaderOutline size={40} />
          </i>
<<<<<<< HEAD
          <p className=" uppercase font-nunito">Our products</p>
          <Link to={'services'} className="border border-2 uppercase font-semibold  hover:bg-red-600 transition-colours duration-300 border-white px-4 py-2">
            REad more
          </Link>
=======
          <p className=" uppercase font-nunito">Read our blog</p>
          <button className="border border-2 uppercase font-semibold  hover:bg-red-600 transition-colours duration-300 border-white px-4 py-2">
            Read Now
          </button>
>>>>>>> e21703aab64a978c9b860606814db751d24ef5e8
        </div>

        <div className="flex flex-col    items-center space-y-[1rem]">
          <i className="text-white font-nunito font-semibold text-2xl">
            <TiContacts size={40} />
          </i>
          <p className=" uppercase font-nunito">Contact Us</p>
          <button className="uppercase font-semibold border border-2  hover:bg-red-600 transition-colours duration-300 border-white px-4 py-2">
            Reach Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer3