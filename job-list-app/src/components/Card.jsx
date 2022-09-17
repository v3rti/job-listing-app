import React, { useState } from "react";

const Card = ({id, company, position, location, postedAt, contract, languages, logo, newTag, featuredTag}) => {
  
  

  return (
    <div key={id} className="border-l-4 border-primary bg-white w-10/12 h-36 p-8 rounded-lg rounded-l-none shadow-md mx-auto flex justify-between">
        <div className="flex items-center gap-5">
          <img src={logo} alt="" className="h-22" />
          <div className="flex flex-col">
            <div className="flex gap-4 -mt-1">
              <h2 className="text-primary text-lg font-bold">{company}</h2>
              <div className="ml-3 flex gap-2 text-sm">
                {newTag && <span className="bg-primary px-3 py-1 rounded-2xl text-white">New</span>}
                {featuredTag && <span className="bg-black px-3 py-1 rounded-2xl text-white">Featured!</span>}
              </div>
            </div>
            <h1 className="text-2xl font-bold">{position}</h1>
            <div className="flex gap-3 text-sm text-gray-400 mt-1">
              <p>{postedAt}</p>
              <p>{contract}</p>
              <p>{location}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          {languages.map(lang => {
            return <h2 className="cursor-pointer py-2 px-4 border-primary gap-2 text-primary bg-lg-cyanbg rounded-sm text-lg font-bold ">{lang}</h2>
          })}
        </div>
      </div>
  )
}


export default Card;