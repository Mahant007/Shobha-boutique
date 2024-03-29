import React from "react";
import { Header } from "../header";
import banner from '../../assets/images/banner.png'
import { Bigdeal } from "../bigsaleproducts";
export const Homepage = () => {
  return (
    <div>
      <Header />
      <img className="h-full w-auto mb-10" src={banner} alt="" />

      <Bigdeal/>
    </div>
  );
};
