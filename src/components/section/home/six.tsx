import { FC } from "react";
import Image from "next/image";
import { BiAlarmAdd } from "react-icons/bi";
import { TbCheckupList } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";

const SixSection: FC = () => {
  return (
    <section className="bg-[#FEEFE9] py-16 px-6 flex flex-col items-center">
      <div className="max-w-7xl w-full px-1">
        <div className="flex flex-col md:flex-row justify-between items-start mb-10">
          <div className="md:w-1/2">
            <span className="text-[#F7A582] uppercase tracking-widest font-semibold">
              How We Work
            </span>
            <h2 className="text-4xl font-bold text-[#07332F] mt-2 leading-tight">
              A Comprehensive Directory For Your Health Care.
            </h2>
          </div>
          <div className="md:w-1/2 text-lg text-gray-700 py-[40px]">
            We are your trusted one-stop destination for all your healthcare needs. Our
            comprehensive directory is designed to provide you with easy access to a wide range of
            healthcare services and providers, ensuring that you and your family are well taken care of.
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 group gap-16 mt-6 bg-[#FEEFE9]">
          <div className="flex flex-col items-center text-[#07332F] text-6xl">
            <BiAlarmAdd/>
            <p className="mt-2 text-[#07332F] text-xl font-semibold">Book An Appointment</p>
          </div>
          <div className="flex flex-col items-center text-[#07332F] text-6xl">
            <TbCheckupList />
            <p className="mt-2 text-[#07332F] text-xl font-semibold">Conduct Checkup</p>
          </div>
          <div className="flex flex-col items-center text-[#07332F] text-6xl">
            <FaUserDoctor/>
            <p className="mt-2 text-[#07332F] text-xl font-semibold">Perform Treatment</p>
          </div>
          <div className="flex flex-col items-center text-[#07332F] text-6xl">
            <MdOutlinePayments/>
            <p className="mt-2 text-[#07332F] text-xl font-semibold">Prescribe & Payment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixSection;
