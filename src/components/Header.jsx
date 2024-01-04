import React, { useState } from "react";
import Button from "./Button";
import { FaChevronDown } from "react-icons/fa";
import { MdPersonAddAlt1 } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { TbBulb } from "react-icons/tb";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-wrap justify-evenly px-[150px] pt-[50px] gap-16 items-center text-sm relative z-100 bg-white">
      <h1 className="text-[rgb(44,45,91)] text-2xl">
        Ship<span className="text-[#F67366]">UP</span>
      </h1>
      <ul className="list-unstyled relative flex justify-between gap-7 items-center font-medium flex-wrap">
        <li
          className="flex items-center gap-[5px] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          Company <FaChevronDown size={15} />
        </li>
        {isOpen && (
          <div className="absolute -left-32 sm:left-0 top-12 z-10 gap-20 bg-white py-5 px-4 md:pt-[23px] md:pb-[46px] md:pl-[25px] md:pr-[111px] md:w-[780px] flex flex-wrap">
            <div className="w-[320px]">
              <h1 className="text-2xl font-bold mb-[21px] text-center sm:text-left">Company</h1>
              <div className="flex items-center justify-between">
                <div className="w-9 h-9 bg-[#f4f4f4] rounded-full p-[9px] mr-5 -mt-3">
                  <MdPersonAddAlt1 className="text-[#F67366]" size={18} />
                </div>
                <div className="mb-7 flex flex-col">
                  <h1 className="text-base font-bold text-[#141414] mb-2">
                    About Us
                  </h1>
                  <p className="text-sm font-medium text-[#6f6f6f]">
                    The people behind ShipUp and the story of shared success.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-9 h-9 bg-[#f4f4f4] rounded-full p-[9px] mr-5 -mt-3">
                  <MdLocationOn className="text-[#F67366]" size={18} />
                </div>
                <div className="mb-7">
                  <h1 className="text-base font-bold text-[#141414] mb-2">
                    Partner With Us
                  </h1>
                  <p className="text-sm font-medium text-[#6f6f6f]">
                    Collbration with ShipUp and drive mutual growth.
                  </p>
                </div>
              </div>

              <div className="flex items-center ">
                <div className="w-9 h-9 bg-[#f4f4f4] rounded-full p-[9px] mr-5 ">
                  <TbBulb className="text-[#F67366]" size={18} />
                </div>
                <div className="">
                  <h1 className="text-base font-bold text-[#141414] mb-2">
                    Career
                  </h1>
                  <p className="text-sm font-medium text-[#6f6f6f]">
                    Join the ShipUp.
                  </p>
                </div>
              </div>
            </div>

            {/*  */}
            <div>
              <div>
                <h1 className="text-2xl font-bold mb-[21px]">Newsroom</h1>
                <img
                  src="/banner/newsroom.png"
                  alt=""
                  className="mb-[15px]"
                  loading="eager"
                />
                <p className="text-sm text-[#6f6f6f] font-medium mb-[15px]">
                  News and awards
                </p>
                <p className="text-sm text-[#F67366] font-bold flex items-center">
                  Learn More <FaArrowRight className="ml-2" />
                </p>
              </div>
            </div>
          </div>
        )}
        <li>Services</li>
        <li>Solutions</li>
        <li>Industries</li>
        <li>Insights</li>
        <li>News And Media</li>
      </ul>
      <div className="flex justify-around gap-7 items-center flex-wrap">
        <Button
          buttonClass="border border-1 border-[#2C2D5B] rounded-[12px] px-[40px] py-[20px] text-[#2C2D5B] font-extrabold"
          text="Request Quote"
        />
        <Button
          buttonClass="bg-[#2C2D5B] text-white rounded-[12px] px-[40px] py-[20px]"
          text="Join Now"
        />
      </div>
    </div>
  );
};

export default Header;
