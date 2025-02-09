'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Mary Johnson',
    role: 'Student',
    image: '/images/mary.jpg',
    rating: 5,
    feedback:
      'Great experience, caring doctors, and modern facilities. Highly skilled and compassionate staff.',
  },
  {
    name: 'John Doe',
    role: 'CEO of Digital Marketing',
    image: '/images/john.jpg',
    rating: 3,
    feedback:
      'Doctors are highly skilled and compassionate. Great experience overall.',
  },
  {
    name: 'Robert Lee',
    role: 'Accountant',
    image: '/images/robert.jpg',
    rating: 4,
    feedback:
      'Top-notch healthcare with a patient-centered approach. Highly recommended.',
  },
  {
    name: 'Emily Davis',
    role: 'CEO of Digital Marketing',
    image: '/images/emily.jpg',
    rating: 4,
    feedback:
      'Top-notch healthcare with a patient-centered approach. Highly recommended.',
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative text-white py-16 px-6">
    <div className="absolute top-0 left-0 w-full h-[70%] bg-[#07332F]"></div>
    <div className="absolute bottom-0 left-0 w-full h-[30%] bg-[#FAF3EF]"></div>
      <div className="relative max-w-4xl mx-auto text-left">
        <p className="text-[#F7A582] ">TESTIMONIAL</p>
        <h2 className="text-3xl font-bold mt-2">What Patients Say About Us.</h2>
      </div>

      <div className="relative flex justify-center gap-6 mt-10">
        {[0, 1, 2].map((offset) => {
          const currentIndex = (index + offset) % testimonials.length;
          return (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="w-full max-w-xs"
            >
              <Card className="bg-white text-black p-6 border-2 border-[#F7A582] shadow-lg transition-transform duration-500 ease-in-out hover:scale-105">
                <div className="flex flex-col items-start gap-4">
                  <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="w-12 h-12 rounded-full" />
                  <div>
                    <h3 className="font-bold text-lg">{testimonials[currentIndex].name}</h3>
                    <p className="text-gray-600 text-sm">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
                <div className="flex mt-3 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {i + 1 <= testimonials[currentIndex].rating ? <FaStar /> : i + 0.5 === testimonials[currentIndex].rating ? <FaStarHalfAlt /> : <FaRegStar />}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-gray-600">{testimonials[currentIndex].feedback}</p>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="relative flex justify-center gap-4 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-colors duration-500 ${i === index ? 'bg-orange-500' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
