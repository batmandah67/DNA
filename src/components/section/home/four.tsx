"use client";

import React from "react";
import { FaStethoscope } from "react-icons/fa";
import { TbEyeSpark } from "react-icons/tb";
import { GrFormNextLink } from "react-icons/gr";
import { TbDental } from "react-icons/tb";
import { RiMicroscopeFill } from "react-icons/ri";
import { BsHeartPulseFill } from "react-icons/bs";

const SecondMiniService = () => {
  return (
    <div className="w-full min-h-[30vh] bg-[white] text-[black] flex flex-wrap justify-center items-center relative p-10 gap-7">
      <div className="w-[25rem] h-[16.5rem] relative group ">
        <div className="w-full text-wrap h-[100%]  py-[65px] px-[40px] bg-[WHITE] flex flex-col justify-start items-center gap-6">
          <span className="w-full text-2xl text-[#F7A582]">
            MEDICAL SERVICES
          </span>
          <span className="w-full text-4xl text-[#07332F]">
            <b>We're Providing Best Services.</b>
          </span>
        </div>
      </div>

      <div className="w-[25rem] h-[16.5rem] relative group border-2 border-black">
        <div className="h-[75%]">
          <div className="w-full h-full bg-[#FFF7F4] text-[#07332F] flex flex-col justify-center items-center py-[100px] px-[30px] gap-1 relative overflow-hidden">
            <div className="w-full text-[#07332F] text-4xl relative z-10 transition-all duration-500 group-hover:text-black">
              <TbEyeSpark />
            </div>
            <div className="w-full text-[#07332F] text-xl font-bold pt-6 relative z-10 transition-all duration-500 group-hover:text-black">
              <h1>Eye Care</h1>
            </div>
            <div className="w-full text-[#07332F] text-md opacity-50 relative z-10 transition-all duration-500 group-hover:text-black">
              <h1>
                We understand the importance of clear vision and its impact on
                your.
              </h1>
            </div>
            <div className="w-full h-full absolute bg-[#F7A582] z-0 -translate-y-[-100%] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></div>
          </div>
        </div>
        <div className="w-full h-[25%] bg-[#F7A582] text-white flex justify-center items-center gap-2 relative overflow-hidden transition-all duration-500 group-hover:bg-[#FFF7F4]">
          <b className="z-10 transition-all duration-500 text-white group-hover:text-black">
            Read More
          </b>
          <span className="z-10 transition-all duration-500 text-white text-3xl group-hover:text-black">
            <GrFormNextLink />
          </span>
          <div className="w-full h-full absolute bg-[#F7A582] "></div>
        </div>
      </div>

      <div className="w-[25rem] h-[16.5rem] relative group border-2 border-black">
        <div className="h-[75%]">
          <div className="w-full h-full bg-[#FFF7F4] text-[#07332F] flex flex-col justify-center items-center py-[100px] px-[30px] gap-1 relative overflow-hidden">
            <div className="w-full text-[#07332F] text-4xl relative z-10 transition-all duration-500 group-hover:text-black">
              <FaStethoscope />
            </div>
            <div className="w-full text-[#07332F] text-xl font-bold pt-6 relative z-10 transition-all duration-500 group-hover:text-black">
              <h1>Medical Checkup</h1>
            </div>
            <div className="w-full text-[#07332F] text-md opacity-50 relative z-10 transition-all duration-500 group-hover:text-black">
              <h1>
                During your medical checkup, our skilled healthcare
                professionals.
              </h1>
            </div>
            <div className="w-full h-full absolute bg-[#F7A582] z-0 -translate-y-[-100%] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></div>
          </div>
        </div>
        <div className="w-full h-[25%] bg-[#F7A582] text-white flex justify-center items-center gap-2 relative overflow-hidden transition-all duration-500 group-hover:bg-[#FFF7F4]">
          <b className="z-10 transition-all duration-500 text-white group-hover:text-black">
            Read More
          </b>
          <span className="z-10 transition-all duration-500 text-white text-3xl group-hover:text-black">
            <GrFormNextLink />
          </span>
          <div className="w-full h-full absolute bg-[#F7A582] "></div>
        </div>
      </div>

      <div className="w-[25rem] h-[16.5rem] relative group border-2 border-black">
        <div className="h-[75%]">
          <div className="w-full h-full bg-[#FFF7F4] text-[#07332F] flex flex-col justify-center items-center py-[100px] px-[30px] gap-1 relative overflow-hidden">
            <div className="w-full text-[#07332F] text-4xl relative z-10 transition-all duration-500 group-hover:text-black">
            <TbDental />
            </div>
            <div className="w-full text-[#07332F] text-xl font-bold pt-6 relative z-10 transition-all duration-500 group-hover:text-black">
              <h1>Dental Care</h1>
            </div>
            <div className="w-full text-[#07332F] text-md opacity-50 relative z-10 transition-all duration-500 group-hover:text-black">
              <h1>
              We are passionate about providing top-notch dental care to help you.
              </h1>
            </div>
            <div className="w-full h-full absolute bg-[#F7A582] z-0 -translate-y-[-100%] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></div>
          </div>
        </div>
        <div className="w-full h-[25%] bg-[#F7A582] text-white flex justify-center items-center gap-2 relative overflow-hidden transition-all duration-500 group-hover:bg-[#FFF7F4]">
          <b className="z-10 transition-all duration-500 text-white group-hover:text-black">
            Read More
          </b>
          <span className="z-10 transition-all duration-500 text-white text-3xl group-hover:text-black">
            <GrFormNextLink />
          </span>
          <div className="w-full h-full absolute bg-[#F7A582] "></div>
        </div>
      </div>

      <div className="w-[25rem] h-[16.5rem] relative group border-2 border-black">
        <div className="h-[75%]">
          <div className="w-full h-full bg-[#FFF7F4] text-[#07332F] flex flex-col justify-center items-center py-[100px] px-[30px] gap-1 relative overflow-hidden">
            <div className="w-full text-[#07332F] text-4xl relative z-10 transition-all duration-500 group-hover:text-black">
            <BsHeartPulseFill />
            </div>
            <div className="w-full text-[#07332F] text-xl font-bold pt-6 relative z-10 transition-all duration-500 group-hover:text-black">
              <h1>Laboratory Service</h1>
            </div>
            <div className="w-full text-[#07332F] text-md opacity-50 relative z-10 transition-all duration-500 group-hover:text-black">
              <h1>
              We understand the critical role that accurate diagnostics play in guiding.
              </h1>
            </div>
            <div className="w-full h-full absolute bg-[#F7A582] z-0 -translate-y-[-100%] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></div>
          </div>
        </div>
        <div className="w-full h-[25%] bg-[#F7A582] text-white flex justify-center items-center gap-2 relative overflow-hidden transition-all duration-500 group-hover:bg-[#FFF7F4]">
          <b className="z-10 transition-all duration-500 text-white group-hover:text-black">
            Read More
          </b>
          <span className="z-10 transition-all duration-500 text-white text-3xl group-hover:text-black">
            <GrFormNextLink />
          </span>
          <div className="w-full h-full absolute bg-[#F7A582] "></div>
        </div>
      </div>

      <div className="w-[25rem] h-[16.5rem] relative group border-2 border-black">
        <div className="h-[75%]">
          <div className="w-full h-full bg-[#FFF7F4] text-[#07332F] flex flex-col justify-center items-center py-[100px] px-[30px] gap-1 relative overflow-hidden">
            <div className="w-full text-[#07332F] text-4xl relative z-10 transition-all duration-500 group-hover:text-black">
            <RiMicroscopeFill />
            </div>
            <div className="w-full text-[#07332F] text-xl font-bold pt-6 relative z-10 transition-all duration-500 group-hover:text-black">
              <h1>Patient-Centered</h1>
            </div>
            <div className="w-full text-[#07332F] text-md opacity-50 relative z-10 transition-all duration-500 group-hover:text-black">
              <h1>
              Hospitals, or clinics with positive reviews and ratings from patients.
              </h1>
            </div>
            <div className="w-full h-full absolute bg-[#F7A582] z-0 -translate-y-[-100%] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></div>
          </div>
        </div>
        <div className="w-full h-[25%] bg-[#F7A582] text-white flex justify-center items-center gap-2 relative overflow-hidden transition-all duration-500 group-hover:bg-[#FFF7F4]">
          <b className="z-10 transition-all duration-500 text-white group-hover:text-black">
            Read More
          </b>
          <span className="z-10 transition-all duration-500 text-white text-3xl group-hover:text-black">
            <GrFormNextLink />
          </span>
          <div className="w-full h-full absolute bg-[#F7A582] "></div>
        </div>
      </div>
    </div>
  );
};

export default SecondMiniService;
