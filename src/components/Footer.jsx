import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#2C2D5B] sm:py-[50px] py-6 px-20 sm:px-[150px] w-full">
      <div className="flex justify-between flex-wrap gap-40 border-b-2 border-[#e5e5e5] text-white pb-[70px]">
        <div className="sm:w-[220px]">
          <h1 className="text-[#F67366] text-2xl leading-[29px] mb-5">
            Ship<span className="font-black text-white">Up</span>
          </h1>
          <p>
            ShipUp delivers an unparalleled customer service through dedicated
            customer teams, engaged people working in an agile culture, and a
            global footprint
          </p>
        </div>
        <div>
          <h1 className="text-[18px] leading-[22px] mb-5 font-bold">Explore</h1>
          <ul className="leading-[17px]">
            <li className="text-sm text-white font-medium mb-[10px]">
              About Us
            </li>
            <li className="text-sm text-white font-medium mb-[10px]">
              Our warehoueses
            </li>
            <li className="text-sm text-white font-medium mb-[10px]">Blog</li>
            <li className="text-sm text-white font-medium">News and Media</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[18px] leading-[22px] mb-5 font-bold">Legal</h1>
          <ul className="leading-[17px]">
            <li className="text-sm text-white font-medium mb-[10px]">Terms</li>
            <li className="text-sm text-white font-medium mb-[10px]">
              Privacy
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-[18px] leading-[22px] mb-5 font-bold">
            Social Media
          </h1>
          <div className="flex items-center justify-between text-[#2C2D5B] flex-wrap gap-5">
            <div className="rounded-full p-2 shadow-xl bg-white w-[57px] h-[57px] flex justify-center">
              <FaFacebookF className="m-auto" size={20} />
            </div>
            <div className="rounded-full p-2 shadow-xl bg-white w-[57px] h-[57px] flex justify-center">
              <FaTwitter className="m-auto" size={20} />
            </div>
            <div className="rounded-full p-2 shadow-xl bg-white w-[57px] h-[57px] flex justify-center">
              <IoLogoWhatsapp className="m-auto" size={20} />
            </div>
            <div className="rounded-full p-2 shadow-xl bg-white w-[57px] h-[57px] flex justify-center">
              <AiFillInstagram className="m-auto" size={20} />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-white pt-[30px]">
        Ship<span className="text-[#F67366] font-black">Up</span>
        <span>.ng</span>
      </p>
    </div>
  );
};

export default Footer;
