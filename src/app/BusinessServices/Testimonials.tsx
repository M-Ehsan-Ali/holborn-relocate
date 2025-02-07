"use client";

import React, { useState } from "react";

interface Testimonial {
  name: string;
  title: string;
  image: string;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    title: "Entrepreneur",
    image: "/businessServices/profileOne.png",
    feedback:
      "Holborn Relocate made our move to Dubai incredibly smooth and stress-free. From visa processing to finding the perfect school for my kids, they took care of every detail. I highly recommend their services to anyone planning to relocate!",
  },
  {
    name: "David Wilson",
    title: "Business Owner",
    image: "/businessServices/profileTwo.png",
    feedback:
      "Relocating my business to Dubai seemed daunting at first, but Holborn Relocate’s team provided expert guidance every step of the way. Their local network and practical advice were invaluable in helping us settle and grow in this dynamic city.",
  },
  {
    name: "Emily Carter",
    title: "Marketing Professional",
    image: "/businessServices/profileThree.png",
    feedback:
      "The personalized service and attention to detail from Holborn Relocate exceeded all my expectations. They helped me find the perfect apartment and connected me with a great community in Dubai. It truly felt like having a trusted friend by my side during the entire process.",
  },
];

const Testimonials: React.FC = () => {
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
    <div className="flex gap-[20px] items-center mt-[64px] mb-[67px] px-[20px]">
      {/* Left Arrow */}
      <img
        onClick={handlePrevious}
        src="/testimonials/left_arrow.svg"
        className="w-[40px]"
        alt="Previous"
      />
      <div className="flex flex-col gap-[24px] items-center text-center rounded-[20px] bg-[#CF142B] relative px-[10px] pb-[24px]">
        <img
          src={currentTestimonial.image}
          alt={currentTestimonial.name}
          className="w-[98px] h-[98px] rounded-[50%] absolute top-[-50px]"
        />
        <p className="mt-[56px] sm:mt-[152px] text-white font-outfit font-bold text-[14px] sm:text-[35px]">
          {currentTestimonial.name} – {currentTestimonial.title}
        </p>
        <p className="font-alata font-normal text-white text-[11px] sm:text-[29px]">
          {currentTestimonial.feedback}
        </p>
      </div>

      {/* Right Arrow */}
      <img
        onClick={handleNext}
        src="/testimonials/right_arrow.svg"
        className="w-[40px]"
        alt="Next"
      />
    </div>
  );
};

export default Testimonials;
