import { FC } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { LuCalendarPlus } from "react-icons/lu";

const AppointmentSection: FC = () => {
  return (
    <div className="bg-[#07332F] text-white py-12  flex flex-col md:flex-row items-center justify-between">
  <div className="flex items-center gap-8 py-[30px] px-[135px]">
    <div className="bg-[#F7A582] p-3 rounded-lg">
      <LuCalendarPlus className="w-10 h-10 text-[#07332F]" />
    </div>
    <div className="space-y-6">
      <h2 className="text-5xl font-bold">Open For Appointments</h2>
      <p className="text-lg">
        We are delighted to announce that our doors are open, and we are now accepting 
        <br />appointments to serve you better.
      </p>
    </div>
  </div>

  <div className="flex md:self-auto md:-mt-12 md:ml-auto md:mr-[130px]">
    <button className="border-2 border-[#F7A582] text-[#F7A582] px-12 py-4 text-xl rounded-full flex items-center gap-4 hover:bg-[#F7A582] hover:text-[#FFFFFF] transition">
      Make Appointment <FaCalendarAlt className="w-8 h-8 text-sm" />
    </button>
  </div>
</div>




  );
};

export default AppointmentSection;
