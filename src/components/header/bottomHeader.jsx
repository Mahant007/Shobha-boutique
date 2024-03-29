import React from "react";
import { Link } from "react-router-dom";
import Downarrow from "../../assets/icons/downarrow";
export const Bottomheader = () => {
  return (
    <div className="border-b-[1px] text-[12px]">
      <ul className="flex items-center justify-center">
        <li className="m-3 flex items-center">
          <Link to="">HOMES</Link>
          <Downarrow />
        </li>
        <li className="m-3 flex items-center">
          <Link to=""> SHOP</Link> <Downarrow />
        </li>
        <li className="m-3 flex items-center">
          <Link> BLOG </Link> <Downarrow />
        </li>
        <li className="m-3 flex items-center">
          <Link> PAGES </Link> <Downarrow />
        </li>
        <li className="m-3 flex items-center">
          <Link>MEGA </Link> <Downarrow />
        </li>
        <li className="m-3 ">
          <Link> CONTACTS </Link>
        </li>
      </ul>
    </div>
  );
};
