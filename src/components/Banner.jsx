import React from "react";
import Button from "./Button";
import { MdLocationOn } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { Box, InputAdornment, TextField } from "@mui/material";
import ModalPopup from "./ModalPopup";

const Banner = () => {
  return (
    <>
      <div className="flex justify-between items-center sm:px-[75px] px-8 flex-wrap">

        <img src="/banner/Group_7031.png" alt="" className="object-contain" />
        <img src="/banner/delivery.png" alt="" className="object-contain" />
        <div className=" w-6/12 absolute sm:top-[500px] md:top-[380px] top-[700px] sm:px-[75px]">
          <h1 className="md:text-[40px] text-xl font-semibold md:leading-[60px] text-[#141414] mb-5">
            Quick & Reliable&nbsp;
            <span className="text-[#F67366] font-bold md:text-[48px] text-2xl md:leading-[72px]">
              Warehousing And Logistics&nbsp;
            </span>
            Solution.
          </h1>
          <p className="text-sm leading-[21px] text-[#333333] mb-[50px] ">
            ShipUp delivers an unparalleled customer service through dedicated
            customer teams, engaged people working in an agile culture, and a
            global footprint
          </p>
          <div className="flex items-center justify-between w-[316px]">
            <Button
              text="Join Now"
              buttonClass="bg-[#2C2D5B] text-white rounded-[12px] px-[40px] py-[20px]"
            />
            <div className="flex items-center justify-between text-[#2C2D5B] flex-wrap">
              {/* <button className="flex items-center justify-between">
                <div className="rounded-full p-2 shadow-2xl bg-white mr-5 w-[57px] h-[57px] flex justify-center">
                  <FaVideo className="w-[23px] h-[17px] m-auto" />
                </div>

                <span className="font-extrabold">Play Demo</span>
              </button> */}
              <ModalPopup/>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[176px] m-auto text-center rounded-[30px] mb-[88px]">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          className="shadow-xl w-full sm:w-9/12 m-auto rounded-xl p-9"
        >
          {/* <div className=""> */}
          <TextField
            required
            id="outlined-required"
            label="Origin"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MdLocationOn />
                </InputAdornment>
              ),
            }}
            className="rounded-[12px]"
          />
          <TextField
            required
            id="outlined-required"
            label="Destination"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MdLocationOn />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            required
            id="outlined-required"
            label="Weight"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaShoppingBag />
                </InputAdornment>
              ),
            }}
          />
          <button className="p-7 bg-[#2C2D5B] text-white w-[250px] rounded-[12px]">
            Check Price
          </button>
          {/* </div> */}
        </Box>
      </div>
    </>
  );
};

export default Banner;
