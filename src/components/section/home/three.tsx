"use client";

import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineMedicalServices } from "react-icons/md";


const MiniService = () => {
  return (
    <div className="w-full min-h-[20vh] bg-[white] text-[black] flex flex-wrap justify-center items-center flex flex-wrap relative p-10">
      <div className="w-[28rem] h-[14.5rem] relative">
        <div className="w-full text-wrap h-[70%] text-3xl text-white p-8 bg-[#F7A582] flex flex-col justify-start items-center">
          <span className="w-full">
            Don't <b>Hesitate</b>To
          </span>
          <span className="w-full">Contact us</span>
        </div>
        <div className="w-full h-[30%] bg-[black] text-white center gap-2 relative group overflow-hidden">
          <b className="z-10">Make Appointment</b>
          <span className="z-10">
            <FaCalendarAlt />
          </span>
          <div className="w-full h-full absolute bg-[#07332F] z-0 -translate-x-[100%] opacity-0 transition-all duration-500 group-hover:translate-x-[0] group-hover:opacity-100"></div>
        </div>
      </div>
      <div className="flex flex-row gap-[1px]">
        <div className="w-[30rem] h-[14.5rem] bg-[#07332F] center py-[100px] px-[30px] flex-col gap-0">
          <div className="w-full text-[#F7A582] text-4xl">
            <FaUserDoctor />
          </div>
          <div className="w-full text-white text-xl font-bold pt-6">
            <h1>Need Family Health</h1>
          </div>
          <div className="w-full text-white text-md opacity-50">
            <h1>
              We understand the importance of family health overall well-being.
            </h1>
          </div>
        </div>
        <div className="w-[30rem] h-[14.5rem] bg-[#07332F] center py-4 px-6 flex-col gap-0">
          <div className="w-full text-[#F7A582] text-5xl">
            <MdOutlineMedicalServices />
          </div>
          <div className="w-full text-white text-xl  font-bold pt-6">
            <h1>24 hours service</h1>
          </div>
          <div className="w-full text-white text-md opacity-50">
            <h1>
              We understand the importance of family health overall well-being.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniService;
