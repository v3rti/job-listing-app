import React from "react";
import {AiOutlineCloseCircle} from 'react-icons/ai';

const NewJob = () => {

  const closeForm = () => {
      const doc = document.querySelector(".addJobForm");
      doc.classList.toggle("hideForm");
  }

  return (
    <div className="addJobForm hideForm">
      <div className="absolute top-0 left-0 border-black border-2 min-w-full z-20 min-h-screen bg-gray-500 opacity-40"></div>
      <div className="absolute top-0 right-0 z-40 cursor-pointer p-8" onClick={closeForm}>
        <AiOutlineCloseCircle size={48} className="text-white"/>
      </div>
        <div className="transition-opacity duration-1000 absolute top-0 left-0 z-30 flex justify-center items-center w-full h-full">
          <div className="flex flex-col p-10 gap-5 bg-lg-cyan border-4 shadow-2xl border-primary w-4/12 rounded-xl">
            <h2 className="text-4xl">Add a New Job</h2>
            <input className="inputStyle" type="text" placeholder="Company Name"/>
            <input className="inputStyle" type="text" placeholder="Job Position"/>
            <select className="px-4 py-3 w-full rounded-lg text-base" name="jobType" id="jobType">
            <option value="none" selected disabled hidden>Contract Type</option>
              <option value="fulltime">Full Time</option>
              <option value="parttime">Part Time</option>
              <option value="parttime">Remote</option>
            </select>
            <input className="inputStyle" type="text" placeholder="Location"/>
            <input className="inputStyle" type="text" placeholder="Tags (Comma Separated)"/>
            <label htmlFor="imageUpload" className="cursor-pointer border-2 border-primary px-4 w-fit py-1 rounded-md text-black text-base ml-1">
              Upload an image
            <input className="hidden" type="file" id="imageUpload" />
            </label>
            <button className="mt-2 bg-primary px-14 py-3 text-xl text-white rounded-xl w-fit mx-auto">Add Job</button>
          </div>
        </div>
    </div>
  )

}

export default NewJob;