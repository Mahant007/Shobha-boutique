import React from "react";
import { Header } from "../header";
import banner from '../../assets/images/banner.png'
export const Homepage = () => {
  return (
    <div>
      <Header />
      <img className="h-full" src={banner} alt="" />
    </div>
  );
};
