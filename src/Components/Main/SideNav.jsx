import React, { useState } from "react";
import { BiStats } from "react-icons/bi";
import { BiHomeAlt2 } from "react-icons/bi";
import { BiTransfer } from "react-icons/bi";
import { BiBot } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="">
      <div className="min-h-screen w-[10%] bg-white fixed">
        {/* profile */}
        <div className="flex justify-center items-center py-4 ">
          <div className="w-16 h-16 bg-black rounded-full"></div>
        </div>
        {/* items */}
        <div className="flex flex-col items-center justify-around h-96  my-8">
          <Link to={'/'}>
            <BiHomeAlt2 className="text-3xl" />
          </Link>
          <Link>
            <BiStats className="text-3xl" />
          </Link>
          <Link>
            <BiBot className="text-3xl" />
          </Link>
          <Link to={'/Transactions'}>
            <BiTransfer className="text-3xl" />
          </Link>
        </div>
        {/* settings */}
        <div className="flex items-center justify-center py-2 ">
          <BiCog className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
