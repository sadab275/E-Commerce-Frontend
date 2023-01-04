import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import DeliveryComponents from "../DeliberyPolicyData/DeliveryComponents";
import HeroSlider from "./HeroSlider/HeroSlider";
import HeroStatic from "./HeroStatic/HeroStatic";
// import HeroSlider from "./HeroSlider/HeroSlider";
// // import HeroSlider from "./HeroSlider/HeroSlider";
// import HeroStatic from "./HeroStatic/HeroStatic";

interface Props { }

const HeroSection: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="w-full min-h-screen pt-[30px] pb-[60px]">
      <div className="container-x mx-auto pb-[60px]">
        <div className="banner-card xl:flex xl:space-x-[30px] xl:h-[600px] mb-[30px]">
          <HeroSlider />
          <HeroStatic />
        </div>
        <DeliveryComponents />
      </div>
    </div>
  );
};

export default HeroSection;
