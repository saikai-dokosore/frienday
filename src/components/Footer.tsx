import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { BiCalendar } from "react-icons/bi";
import { BiListCheck } from "react-icons/bi";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <BiCalendar />
      <BiListCheck />
      <BiUserCircle />
    </div>
  );
};

export default Footer;
