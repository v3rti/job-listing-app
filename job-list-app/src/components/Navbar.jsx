import React from "react";
import {AiFillPlusCircle} from 'react-icons/ai';
import Header from '../assets/images/bg-header-desktop.svg';

const Navbar = () => {

  return (
    <div className="w-full h-36 overflow-hidden relative">
      <img className="bg-primary min-h-full w-full" src={Header} alt=""/>
      <div className="h-full w-full absolute top-0 left-0 flex justify-end px-16 items-center gap-5">
        <button className="text-xl text-white flex items-center gap-3 border-2 rounded-lg px-4 py-2">
          <AiFillPlusCircle color="white" size={32}/>Add a new Job
        </button>
      </div>
    </div>
  )
}

export default Navbar;
