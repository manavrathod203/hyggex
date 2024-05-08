import React from "react";

import { GoHome } from "react-icons/go";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdFullscreen,
} from "react-icons/md";

import { GrPowerReset } from "react-icons/gr";
import Location from "./Location";
import Card from "./Card";
import Create from "./Create";

function Section() {
  return (
    <div className="px-[104px] w-full py-8">
      {/* location */}
      <Location/>

      {/* main content  */}
      <Card/>
      {/* create */}
      <Create/>
    </div>
  );
}

export default Section;
