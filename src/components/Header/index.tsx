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
        <div className="pl-4 lg:pl-8 pr-5 lg:pr-16 lg:pt-8 flex items-center justify-between 2xl:static absolute top-0 left-0  w-full z-40">
          {/* Logo Section */}
          <Link href={"/"}>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/logo.png"
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
              <Link href={"/schedulMeeting"} className="rounded-red-btn">
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
              <span className="text-2xl">{isMenuOpen ? "X" : "•••"}</span>
            </div>
          </div>
        </div>

        {/* Fixed Drawer Menu with Transition */}
        {isMenuOpen && (
          <div
            className="fixed top-[100px] left-0 bg-white text-black w-64 h-full flex flex-col px-8 pb-8 pt-2 z-30 overflow-y-auto transition-transform duration-300 ease-in-out"
            style={{
              transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
            }}
          >
            {/* Menu Links */}
            <div className="font-semibold py-3">
              <Link href={"/"} onClick={handleMenuClick}>
                Home
              </Link>
            </div>
            <div className="w-[150px] h-[1px] bg-black" />
            <div className="font-semibold py-3">
              <Link href={"/ResidencyVisa"} onClick={handleMenuClick}>
                Residency Visa
              </Link>
            </div>
            <div className="w-[150px] h-[1px] bg-black" />
            <div className="font-semibold py-3">
              <Link href={"/businessServices"} onClick={handleMenuClick}>
                Bussiness Service
              </Link>
            </div>
            <div className="w-[150px] h-[1px] bg-black" />

            <div className="font-semibold py-3">
              <Link href={"/schedulMeeting"} onClick={handleMenuClick}>
                Book a meeting
              </Link>
            </div>
            <div className="w-[150px] h-[1px] bg-black" />

            <div className="font-semibold py-3">
              <Link href={"/contactUs"} onClick={handleMenuClick}>
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
