import React from "react";
import Container from "./layout/Container";
import ComputerIcon from "../icons/ComputerIcon";
import OthersIcon from "../icons/OthersIcon";
import AccessoriesIcon from "../icons/AccessoriesIcon";
import HomeApplianceIcon from "../icons/HomeApplianceIcon";
import SmartBoxIcon from "../icons/SmartBoxIcon";
import CameraIcon from "../icons/CameraIcon";
import MobileIcon from "../icons/MobileIcon";

const Services = () => {
  return (
    <Container>
      <div className="pt-[105px] relative ">
        <img
          className="absolute top-[70px] -left-6 "
          src="./images/leis/leis.svg"
          alt="leis"
        />
        <h1 className="font-prompt text-[74px] font-extrabold leading-[92px] tracking-[-1.5px] text-black text-center ">
          What <span className="text-primary">we</span> provide?
        </h1>
        <ul className="flex justify-between mt-[52px] ">
          <li className="flex flex-col items-center gap-6">
            <div className="size-[85px] flex items-center justify-center bg-white filter backdrop-blur-md rounded-full  custom-drop-shadow ">
              <ComputerIcon />
            </div>
            <p className="para w-[118px] text-center ">Computer & Laptop</p>
          </li>
          <li className="flex flex-col items-center gap-6">
            <div className="size-[85px] flex items-center justify-center bg-white filter backdrop-blur-md rounded-full  custom-drop-shadow ">
              <MobileIcon />
            </div>
            <p className="para w-[118px] text-center ">Mobile & Phone</p>
          </li>
          <li className="flex flex-col items-center gap-6">
            <div className="size-[85px] flex items-center justify-center bg-white filter backdrop-blur-md rounded-full  custom-drop-shadow ">
              <CameraIcon />
            </div>
            <p className="para w-[118px] text-center ">Camera</p>
          </li>
          <li className="flex flex-col items-center gap-6">
            <div className="size-[85px] flex items-center justify-center bg-white filter backdrop-blur-md rounded-full  custom-drop-shadow ">
              <SmartBoxIcon />
            </div>
            <p className="para w-[118px] text-center ">TV & Smart Box</p>
          </li>
          <li className="flex flex-col items-center gap-6">
            <div className="size-[85px] flex items-center justify-center bg-white filter backdrop-blur-md rounded-full  custom-drop-shadow ">
              <HomeApplianceIcon />
            </div>
            <p className="para w-[118px] text-center ">Home Appliance</p>
          </li>
          <li className="flex flex-col items-center gap-6">
            <div className="size-[85px] flex items-center justify-center bg-white filter backdrop-blur-md rounded-full  custom-drop-shadow ">
              <AccessoriesIcon />
            </div>
            <p className="para w-[118px] text-center ">Accessories</p>
          </li>
          <li className="flex flex-col items-center gap-6">
            <div className="size-[85px] flex items-center justify-center bg-white filter backdrop-blur-md rounded-full  custom-drop-shadow ">
              <OthersIcon />
            </div>
            <p className="para w-[118px] text-center ">Other Categories</p>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Services;
