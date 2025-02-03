"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";
import "./header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(false); // Close menu when any menu item is clicked
  };

  return (
    <div>
      <div className="relative z-[9]">
        {/* Fixed Header */}
        <div className="p-4 lg:pl-8 pr-5 lg:pr-16 lg:pt-8 flex items-center justify-between 2xl:static absolute top-0 left-0  w-full z-40">
          {/* Logo Section */}
          <Link href={"/"}>
            <div className="hidden lg:flex flex-col justify-center items-center">
              <Image
                src="/logo.png"
                height={100}
                width={150}
                alt="holborn"
                loading="lazy"
              />
            </div>
            <div className="flex lg:hidden flex-col justify-center items-center">
              <Image
                src="/mobIcon.svg"
                height={100}
                width={150}
                alt="holborn"
                loading="lazy"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-x-5 text-white justify-end items-center">
            <div>
              <Link href={"/"} className="rounded-red-btn">
                Home
              </Link>
            </div>
            <div>
              <Link href={"/ResidencyVisa"}>Residency Visa</Link>
            </div>
            <div>
              <Link href={"/BusinessServices"}>Bussiness Services</Link>
            </div>
            <div>
              <Link href={"/BusinessSetup"}>Business Setup</Link>
            </div>
            <div>
              <Link href={"/Resource"}>Resources</Link>
            </div>
            <div>
              <Link href={"/ContactUs"} className="rounded-white-btn">
                Contact Us
              </Link>
            </div>
            <div>
              <Link href={"/ScheduleMeeting"} className="rounded-red-btn">
                Schedule a Meeting
              </Link>
            </div>
          </div>

          {/* Mobile Menu (Three Dots or Close Button) */}
          <div
            className="lg:hidden flex items-center text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-8 h-8 flex items-center justify-center cursor-pointer">
              <span className="text-2xl">
                {isMenuOpen ? (
                  <img src="/Multiply.svg" alt="X" />
                ) : (
                  <img src="/Menu.svg" alt="menu" />
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Fixed Drawer Menu with Transition */}
        {isMenuOpen && (
          <div
            className="fixed top-[100px] left-0 bg-[#002470] text-white w-full h-full flex flex-col px-8 pb-8 pt-2 z-30 overflow-y-auto transition-transform duration-300 ease-in-out"
            style={{
              transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
            }}
          >
            {/* Menu Links */}
            <div className="font-semibold py-3">
              <Link
                href={"/"}
                onClick={handleMenuClick}
                className="flex justify-between items-center"
              >
                <p>Home</p>
                {">"}
              </Link>
            </div>
            <div className="font-semibold py-3">
              <Link
                href={"/BusinessSetup"}
                onClick={handleMenuClick}
                className="flex justify-between items-center"
              >
                <p>Bussiness Setup</p>
                {">"}
              </Link>
            </div>

            <div className="font-semibold py-3">
              <Link
                href={"/ResidencyVisa"}
                onClick={handleMenuClick}
                className="flex justify-between items-center"
              >
                <p>Residency Visa</p>
                {">"}
              </Link>
            </div>
            <div className="font-semibold py-3">
              <Link
                href={"/BusinessServices"}
                onClick={handleMenuClick}
                className="flex justify-between items-center"
              >
                <p>Bussiness Service</p>
                {">"}
              </Link>
            </div>
            <div className="font-semibold py-3">
              <Link
                href={"/Resource"}
                onClick={handleMenuClick}
                className="flex justify-between items-center"
              >
                <p>Resource</p>
                {">"}
              </Link>
            </div>
            <div className="font-semibold py-3 rounded-white-btn mt-[24px]">
              <Link
                href={"/ContactUs"}
                onClick={handleMenuClick}
                className="flex justify-center items-center"
              >
                Contact Us
              </Link>
            </div>
            <div className="font-semibold py-3 rounded-red-btn mt-[16px]">
              <Link
                href={"/ScheduleMeeting"}
                onClick={handleMenuClick}
                className="flex justify-center items-center"
              >
                Schedule a Meeting
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
