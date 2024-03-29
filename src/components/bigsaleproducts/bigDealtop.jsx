import React from "react";
import { Link } from "react-router-dom";

export const Bigdealtop = () => {

  return (
    <div>
      <div className="text-center font-black text-[25px] ">
        <h3>BIG SALE</h3>
      </div>
      <div>
        <ul className="flex justify-center ">
          <li className="m-3">
            <Link> WOMEN </Link>
          </li>
          <li className="m-3">
            <Link> MEN</Link>
          </li>
          <li className="m-3">
            <Link>KIDS</Link>
          </li>
          <li className="m-3">
            <Link> ACCESSORIES</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
