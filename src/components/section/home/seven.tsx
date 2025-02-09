"use client";
import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion } from "framer-motion";

const FAQSection = () => {
  return (
    <section className="bg-[#FAF3EF] py-16 px-8 flex flex-col md:flex-row justify-between items-center relative">
      <div className="w-full md:w-1/2 flex flex-col items-center relative">
      <motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
  className="relative"
>
  <img
    src="https://demo.awaikenthemes.com/theme-medipro/wp-content/uploads/2024/05/home-faq-img.jpg"
    alt="Doctors Team"
    className="shadow-lg w-full max-w-lg "
  />
</motion.div>

        <DoctorStats />
      </div>

      <div className="w-full md:w-1/2 md:pl-24 ml-auto mt-8 md:mt-0">
        <h2 className="text-4xl font-bold text-[#07332F] mb-6 leading-snug">
          Consultations with <br /> Qualified doctors.
        </h2>
        <div className="space-y-4">
          <FAQItem
            question="Are telemedicine consultations available?"
            answer="Yes, we offer telemedicine consultations for certain medical conditions."
            defaultOpen
          />
          <FAQItem
            question="Do you accept health insurance?"
            answer="Yes, we accept various health insurance plans. Please contact us for more details."
          />
          <FAQItem
            question="How much does a consultation cost?"
            answer="The cost of a consultation varies depending on the type of service. Contact us for detailed pricing."
          />
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-lg font-semibold text-[#07332F] focus:outline-none"
      >
        <div className="flex items-center">
          {isOpen ? (
            <FaMinus className="mr-3 text-[#07332F]" />
          ) : (
            <FaPlus className="mr-3 text-[#07332F]" />
          )}
          {question}
        </div>
      </button>
      {isOpen && <p className="text-gray-600 mt-2 pl-6">{answer}</p>}
    </div>
  );
};

const DoctorStats = () => {
  return (
    <div className="absolute bottom-[-30px] right-[-30px] flex">
      <StatCard value={100} label="Doctors" bgColor="bg-[#07332F]" />
      <StatCard value={16} label="World Offices" bgColor="bg-[#F7A582]" />
    </div>
  );
};

const StatCard = ({ value, label, bgColor }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const animation = async () => {
      for (let i = 1; i <= value; i++) {
        setTimeout(() => setCount(i), i * 30);
      }
    };
    animation();
  }, [value]);

  return (
    <motion.div
      className={`${bgColor} text-white p-6 text-center shadow-lg w-32`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-3xl font-bold">{count}+</p>
      <p className="text-lg">{label}</p>
    </motion.div>
  );
};

export default FAQSection;
