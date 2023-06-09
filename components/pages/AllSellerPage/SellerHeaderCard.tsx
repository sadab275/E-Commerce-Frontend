import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import { SvgPaths } from "../../../src/utils/SvgPaths";
import SvgIconRenderer from "../../helpers/SvgIconRenderer";

interface Props {
  sellerData: any;
}

const SellerHeaderCard: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="w-full">
      <div
        data-aos="fade-right"
        className="saller-info w-full mb-[40px] sm:h-[328px] sm:flex justify-between items-center px-11 overflow-hidden relative py-10 sm:py-0 aos-init aos-animate"
        style={{
          background:
            "url('https://shopo-ecom.vercel.app/assets/images/saller-cover.png') 0% 0% / cover no-repeat",
        }}>
        <div className="saller-text-details w-72">
          <ul>
            <li className="text-black flex space-x-5 items-center leading-9 text-base font-normal">
              <span>
                <SvgIconRenderer
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  path={SvgPaths.emailIconBlack}
                  pathFill="black"
                />
              </span>
              <span>{props.sellerData.email}</span>
            </li>
            <li className="text-black flex space-x-5 items-center leading-9 text-base font-normal">
              <span>
                <SvgIconRenderer
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  path={SvgPaths.phoneIcon}
                  pathFill="black"
                />
              </span>
              <span>01518618789</span>
            </li>
            <li className="text-black flex space-x-5 items-center leading-9 text-base font-normal">
              <span>
                <SvgIconRenderer
                  width="14"
                  height="19"
                  viewBox="0 0 14 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  path={SvgPaths.locationIcon}
                  pathFill="black"
                />
              </span>
              <span>{props.sellerData.shop.shop_address}</span>
            </li>
          </ul>
        </div>
        <div className="saller-name lg:block hidden">
          <h1 className="text-[60px] font-bold">
            {props.sellerData.shop.shop_name}
          </h1>
          <div className="flex justify-center">
            <span>
              <SvgIconRenderer
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                path={SvgPaths.ratingIcon}
                pathFill="#FFA800"
              />
            </span>
            <span>
              <SvgIconRenderer
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                path={SvgPaths.ratingIcon}
                pathFill="#FFA800"
              />
            </span>
            <span>
              <SvgIconRenderer
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                path={SvgPaths.ratingIcon}
                pathFill="#FFA800"
              />
            </span>
            <span>
              <SvgIconRenderer
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                path={SvgPaths.ratingIcon}
                pathFill="#FFA800"
              />
            </span>
            <span>
              <SvgIconRenderer
                width="18"
                height="17"
                viewBox="0 0 18 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                path={SvgPaths.ratingIcon}
                pathFill="#FFA800"
              />
            </span>
          </div>
        </div>
        <div className="saller-logo mt-5 sm:mt-5">
          <div className="flex sm:justify-center justify-start">
            <div className="w-[170px] h-[170px] flex justify-center items-center rounded-full bg-white relative mb-1 overflow-hidden">
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: "1",
                  border: "0",
                  margin: "0",
                  padding: "0",
                  position: "absolute",
                  inset: "0",
                }}>
                <img
                  alt="logo"
                  src={props.sellerData.shop.shop_logo}
                  sizes="100vw"
                  decoding="async"
                  data-nimg="fill"
                  className="object-contain"
                  style={{
                    position: "absolute",
                    inset: "0",
                    boxSizing: "border-box",
                    padding: "0",
                    border: "none",
                    margin: "auto",
                    display: "block",
                    width: "0",
                    height: "0",
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%",
                    maxHeight: "100%",
                    objectFit: "scale-down",
                  }}
                />
              </span>
            </div>
          </div>
          <div className="flex sm:justify-center justify-start">
            <span className="text-[30px] font-medium text-center">
              {props.sellerData.shop.shop_name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerHeaderCard;
