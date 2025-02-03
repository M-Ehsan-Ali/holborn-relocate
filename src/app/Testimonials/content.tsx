"use client";

import clsx from "clsx";
import { useState } from "react";

interface Testimonial {
  title: string;
  designation: string;
  review: string;
  logo: {
    mediaItemUrl: string;
  };
}

interface ContentProps {
  testimonials: Testimonial[];
}

export default function Content({ testimonials }: ContentProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isAlternateStyle, setIsAlternateStyle] = useState(false);

  // Handlers for carousel navigation
  const handleNext = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsAlternateStyle((prev) => !prev);
      setTransitioning(false);
    }, 300); // Match transition duration
  };

  const handlePrevious = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsAlternateStyle((prev) => !prev);
      setTransitioning(false);
    }, 300); // Match transition duration
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
      <div className="hidden sm:flex gap-[56px] justify-center pt-[64px]">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className={clsx(
              "flex flex-col items-center gap-[20px] w-[519px] py-[60px] px-[20px] rounded-[10px]",
              transitioning ? "opacity-0" : "opacity-100",
              index % 2 !== 0
                ? "text-white bg-gradient-to-b from-[#002470] to-[#CF142B]"
                : "text-black bg-white"
            )}
          >
            <div className="flex flex-col items-center gap-[20px] text-center h-full justify-between">
              <p className="font-outfit font-normal text-[22px]">
                {item.review}
              </p>
              <div
                className={clsx(
                  "w-[299px] h-[1px]",
                  index % 2 !== 0 ? "bg-white" : "bg-black"
                )}
              ></div>
              <div>
                <p className="text-[27px]">
                  <span className="font-bold">{item.title}</span>{" "}
                  {item.designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full relative sm:hidden">
        <div
          className={clsx(
            "flex flex-col items-center gap-[20px] sm:w-[519px] py-[20px] sm:py-[60px] px-[20px] rounded-[10px] mt-[32px] sm:mt-[0px]",
            transitioning ? "opacity-0" : "opacity-100",
            isAlternateStyle
              ? "text-white bg-gradient-to-b from-[#002470] to-[#CF142B]"
              : "text-black bg-white"
          )}
        >
          <div className="flex flex-col items-center gap-[20px] text-center">
            <p className="font-outfit font-normal text-[16px] sm:text-[22px]">
              {currentTestimonial.review}
            </p>
            <div
              className={clsx(
                "w-[250px] h-[1px]",
                isAlternateStyle ? "bg-white" : "bg-black"
              )}
            ></div>
            <div>
              <p className="text-[14px] sm:text-[27px]">
                <span className="font-bold">{currentTestimonial.title}</span>{" "}
                {currentTestimonial.designation}
              </p>
            </div>
          </div>
        </div>

        {/* Left Arrow */}
        <div
          className="absolute right-8 bottom-[-90px] transform -translate-y-1/2 cursor-pointer sm:hidden"
          onClick={handlePrevious}
        >
          <img
            src="/testimonials/left_arrow.svg"
            className="w-[24px] md:w-[60px]"
            alt="Previous"
          />
        </div>

        {/* Right Arrow */}
        <div
          className="absolute right-1 bottom-[-90px] transform -translate-y-1/2 cursor-pointer sm:hidden"
          onClick={handleNext}
        >
          <img
            src="/testimonials/right_arrow.svg"
            className="w-[24px] md:w-[60px]"
            alt="Next"
          />
        </div>
      </div>
    </>
  );
}
