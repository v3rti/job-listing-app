import React from "react";
import Photosnap from '../assets/images/photosnap.svg';

const Card = () => {
  return (
      <div className="border-l-4 border-primary bg-white w-10/12 h-36 p-8 rounded-lg rounded-l-none shadow-md mx-auto flex justify-between">
        <div className="flex items-center gap-5">
          <img src={Photosnap} alt="" className="h-22" />
          <div className="flex flex-col">
            <div className="flex gap-4 -mt-1">
              <h2 className="text-primary text-lg font-bold">Photoshop</h2>
              <div className="ml-3 flex gap-2 text-sm">
                <span className="bg-primary px-3 py-1 rounded-2xl text-white">New</span>
                <span className="bg-black px-3 py-1 rounded-2xl text-white">Featured!</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold">Job Title - Senior Frontend Engineer</h1>
            <div className="flex gap-3 text-sm text-gray-400 mt-1">
              <p>1d ago</p>
              <p>Full-Time</p>
              <p>Europe</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <h2 className="cursor-pointer py-2 px-4 border-primary gap-2 text-primary bg-lg-cyanbg rounded-sm text-lg font-bold ">Frontend</h2>
          <h2 className="cursor-pointer py-2 px-4 border-primary gap-2 text-primary bg-lg-cyanbg rounded-sm text-lg font-bold ">Javascript</h2>
          <h2 className="cursor-pointer py-2 px-4 border-primary gap-2 text-primary bg-lg-cyanbg rounded-sm text-lg font-bold ">HTML/CSS</h2>
        </div>
      </div>
  )
}


export default Card;