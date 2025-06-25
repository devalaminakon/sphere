import React from "react";
import Container from "./layout/Container";
import SearchIcon from "../icons/SearchIcon";

const SearchSection = () => {
  return (
    <Container>
      <div className="pt-[62px] pb-[76px] pl-[72px] pr-[52px] bg-[#212736] rounded-[20px] flex items-end justify-between  ">
        <div className="w-[474px] ">
          <h2 className="text-white mb-4  ">Gateway to a world of innovation with</h2>
          <img src="./images/logo/logo_white.png" alt="logo_white" />
        </div>
        <div className="bg-[#EFF0F1] px-6 pt-8 pb-3 rounded-[20px] w-[592px]  ">
          <div className="relative">
            <span className='absolute top-1/2 -translate-y-1/2'>
            <SearchIcon />
            </span>
          <input className="font-montserrat font-light text-[22px] pl-12 w-full rounded-2xl " type="text" placeholder="Search for electronic" />
          </div>
          <button className="text-black font-montserrat font-medium text-lg py-[13px] w-full bg-tia rounded-[14px] mt-6 cursor-pointer  ">Search</button>
        </div>
      </div>
    </Container>
  );
};

export default SearchSection;
