import React from "react";
import {AiFillPlusCircle, AiOutlineCloseCircle} from 'react-icons/ai';
import Header from '../assets/images/bg-header-desktop.svg';
import NewJob from "./NewJob";

const Navbar = () => {

  const logMsg = () => {
    const doc = document.querySelector(".addJobForm");
    doc.classList.toggle("hideForm");
  }

  return (
    <div className="w-full h-40 relative">
      <img className="bg-primary h-40 w-full" src={Header} alt=""/>
      <div className="h-full w-full absolute top-0 left-0 z-10 flex justify-end px-16 items-center gap-5">
        <button onClick={logMsg} className="cursor-pointer text-xl text-white flex items-center gap-3 border-2 rounded-lg px-4 py-2">
          <AiFillPlusCircle color="white" size={32}/>Add a new Job
        </button>
      </div>
      <div className="w-full h-full absolute top-8 left-0 flex justify-center items-end">
        <div className="bg-white h-14 text-lg w-9/12 shadow-xl rounded-lg px-6 flex items-center justify-between text-">
          <div className="flex gap-4">
            <div className="flex items-center py-1 px-3 gap-2 text-primary bg-lg-cyanbg rounded-lg border-2 border-primary">
              <h2 className="align-middle">Frontend</h2>
              <AiOutlineCloseCircle size={24} className="text-primary cursor-pointer"/>
            </div>
            <div className="flex items-center py-1 px-3 gap-2 text-primary bg-lg-cyanbg rounded-lg border-2 border-primary">
              <h2 className="align-middle">Javascript</h2>
              <AiOutlineCloseCircle size={24} className="text-primary cursor-pointer"/>
            </div>
          </div>
          <h2 className="text-dg-cyan text-xl underline underline-offset-4 cursor-pointer">Clear</h2>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
