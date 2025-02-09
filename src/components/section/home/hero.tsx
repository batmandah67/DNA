"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Hero: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <div className="embla">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex bg-[red] ">
          {slides.map((index) => (
            <div
              className="embla__slide bg-white flex-[0_0_100%] min-w-0 h-screen"
              key={index}
            >
              <div className="embla__slide__number w-full bg-[#07332F] bottom-0 h-[100%] mt-[5%] flex flex-row items-center justify-center">
                <div className=" w-full h-full flex justify-center items-center">
                  <Image
                    src="/shape-line.png"
                    alt="Shape line"
                    width={400}
                    height={90}
                    priority
                    quality={100}
                    className="absolute left-1 bottom-0 opacity-[50%]"
                  />
                  <div className="space-y-4 -translate-y-[30%] translate-x-[20%]">
                    <div>
                      <h1 className="text-xl tracking-[1px] font-light">
                        WE TACK CARE OF YOUR HEALTH
                      </h1>
                    </div>
                    <div className="pb-8">
                      <h1 className="text-5xl text-[#F7A582]">
                        We Are Providing <br /> Best & Affordable
                        <br /> Health Care.
                      </h1>
                    </div>
                    <div>
                      <h1 className="text-[18px]/7">
                        Our is to deliver the highest quality healthcare
                        services.
                        <br /> We believe that everyone deserves access to
                        excellent <br /> medical care without compromising on
                        quality.
                      </h1>
                    </div>
                  </div>
                </div>
                <div className=" w-full h-full justify-center relative flex items-center pr-20">
                  <Image
                    src="/dot.png"
                    alt="Next.js logo"
                    width={450}
                    height={100}
                    priority
                    className="absolute left-[14%] top-[21%]"
                  />
                  <div className="w-full flex flex-row gap-10 p-20 relative">
                    <div
                      id="test"
                      className="group w-[250px] h-[430px] rounded-[150px] relative flex justify-center items-center overflow-hidden"
                    >
                      <Image
                        src="/hero1.jpg"
                        alt="Next.js logo"
                        fill
                        priority
                        className="object-cover"
                      />
                      <div className="w-[200%] h-[200%] absolute scale-x-0 bg-white rotate-45 transition-all duration-500 opacity-0 group-hover:scale-x-100 group-hover:opacity-30"></div>
                    </div>
                    <div
                      id="test"
                      className="w-[250px] h-[430px] -translate-y-[25%] rounded-[150px] overflow-hidden relative "
                    >
                      <Image
                        src="/hero2.jpg"
                        alt="Next.js logo"
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
