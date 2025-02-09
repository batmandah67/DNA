// app/page.tsx
import type { NextPage } from "next";
import Hero from "@/components/section/home/hero";
import { EmblaOptionsType } from "embla-carousel";
import MiniService from "@/components/section/home/three";
import SecondMiniService from "@/components/section/home/four";
import AppointmentSection from "@/components/section/home/five";
import SixSection from "@/components/section/home/six";
import FAQSection from "@/components/section/home/seven";
import Testimonials from "@/components/section/home/eight";
import BlogSection from "@/components/BlogSection";


const OPTIONS: EmblaOptionsType = { loop: true };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Home: NextPage = () => {
  return (
    <>
      <div className="w-full min-h-[80vh] relative">
        <Hero slides={SLIDES} options={OPTIONS} />
      </div>
      <div className="w-full min-h-[20vh] relative">
        <MiniService />
      </div>
      <div>
        <SecondMiniService/>
      </div>
      <div>
      <AppointmentSection />
      </div>
      <div>
        <SixSection />
      </div>
      <div>
      <FAQSection/>
      </div>
      <div>
        <Testimonials/>
      </div>
      <div>
        <BlogSection/>
      </div>
      
    </>
  );
};

export default Home;
