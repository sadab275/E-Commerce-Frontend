import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import DeliveryComponent from "./DeliveryComponent";

interface Props {}

const DeliveryComponents: React.FC<Props> = (props) => {
  const deliveryPolicyDatas = [
    {
      id: 1,
      name: "Free Shipping",
      des: "Free Shipping on Payment",
      icon: "",
    },
    {
      id: 2,
      name: "Return Policy",
      des: "24 Hours Return Policy",
      icon: "",
    },
    {
      id: 3,
      name: "Secured Payment",
      des: "Secure Card Payments",
      icon: "",
    },
    {
      id: 4,
      name: "Best Quality",
      des: "Best Quality Products",
      icon: "",
    },
  ];

  return (
    <div>
      <div
        data-aos="fade-up"
        className="best-services w-full bg-white flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center lg:h-[110px] px-10 lg:py-0 py-10 aos-init aos-animate">
        <div className="item">
          <div className="flex space-x-5 items-center">
            <div>
              <span className="w-10 h-10 text-qyellow">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="truck-fast"
                  className="svg-inline--fa fa-truck-fast w-8 h-8"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512">
                  <path
                    fill="currentColor"
                    d="M112 0C85.49 0 64 21.49 64 48V96H16C7.163 96 0 103.2 0 112C0 120.8 7.163 128 16 128H272C280.8 128 288 135.2 288 144C288 152.8 280.8 160 272 160H48C39.16 160 32 167.2 32 176C32 184.8 39.16 192 48 192H240C248.8 192 256 199.2 256 208C256 216.8 248.8 224 240 224H16C7.163 224 0 231.2 0 240C0 248.8 7.163 256 16 256H208C216.8 256 224 263.2 224 272C224 280.8 216.8 288 208 288H64V416C64 469 106.1 512 160 512C213 512 256 469 256 416H384C384 469 426.1 512 480 512C533 512 576 469 576 416H608C625.7 416 640 401.7 640 384C640 366.3 625.7 352 608 352V237.3C608 220.3 601.3 204 589.3 192L512 114.7C499.1 102.7 483.7 96 466.7 96H416V48C416 21.49 394.5 0 368 0H112zM544 237.3V256H416V160H466.7L544 237.3zM160 464C133.5 464 112 442.5 112 416C112 389.5 133.5 368 160 368C186.5 368 208 389.5 208 416C208 442.5 186.5 464 160 464zM528 416C528 442.5 506.5 464 480 464C453.5 464 432 442.5 432 416C432 389.5 453.5 368 480 368C506.5 368 528 389.5 528 416z"></path>
                </svg>
              </span>
            </div>
            <div>
              <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                Free Shipping
              </p>
              <p className="text-sm text-qgray line-clamp-1">
                Free Shipping on Payment
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="flex space-x-5 items-center">
            <div>
              <span className="w-10 h-10 text-qyellow">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="circle-chevron-left"
                  className="svg-inline--fa fa-circle-chevron-left w-8 h-8"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM310.6 345.4c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0l-112-112C147.1 272.4 144 264.2 144 256s3.125-16.38 9.375-22.62l112-112c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L221.3 256L310.6 345.4z"></path>
                </svg>
              </span>
            </div>
            <div>
              <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                Return Policy
              </p>
              <p className="text-sm text-qgray line-clamp-1">
                24 Hours Return Policy
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="flex space-x-5 items-center">
            <div>
              <span className="w-10 h-10 text-qyellow">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="cc-amazon-pay"
                  className="svg-inline--fa fa-cc-amazon-pay w-8 h-8"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512">
                  <path
                    fill="currentColor"
                    d="M124.7 201.8c.1-11.8 0-23.5 0-35.3v-35.3c0-1.3 .4-2 1.4-2.7 11.5-8 24.1-12.1 38.2-11.1 12.5 .9 22.7 7 28.1 21.7 3.3 8.9 4.1 18.2 4.1 27.7 0 8.7-.7 17.3-3.4 25.6-5.7 17.8-18.7 24.7-35.7 23.9-11.7-.5-21.9-5-31.4-11.7-.9-.8-1.4-1.6-1.3-2.8zm154.9 14.6c4.6 1.8 9.3 2 14.1 1.5 11.6-1.2 21.9-5.7 31.3-12.5 .9-.6 1.3-1.3 1.3-2.5-.1-3.9 0-7.9 0-11.8 0-4-.1-8 0-12 0-1.4-.4-2-1.8-2.2-7-.9-13.9-2.2-20.9-2.9-7-.6-14-.3-20.8 1.9-6.7 2.2-11.7 6.2-13.7 13.1-1.6 5.4-1.6 10.8 .1 16.2 1.6 5.5 5.2 9.2 10.4 11.2zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zm-207.5 23.9c.4 1.7 .9 3.4 1.6 5.1 16.5 40.6 32.9 81.3 49.5 121.9 1.4 3.5 1.7 6.4 .2 9.9-2.8 6.2-4.9 12.6-7.8 18.7-2.6 5.5-6.7 9.5-12.7 11.2-4.2 1.1-8.5 1.3-12.9 .9-2.1-.2-4.2-.7-6.3-.8-2.8-.2-4.2 1.1-4.3 4-.1 2.8-.1 5.6 0 8.3 .1 4.6 1.6 6.7 6.2 7.5 4.7 .8 9.4 1.6 14.2 1.7 14.3 .3 25.7-5.4 33.1-17.9 2.9-4.9 5.6-10.1 7.7-15.4 19.8-50.1 39.5-100.3 59.2-150.5 .6-1.5 1.1-3 1.3-4.6 .4-2.4-.7-3.6-3.1-3.7-5.6-.1-11.1 0-16.7 0-3.1 0-5.3 1.4-6.4 4.3-.4 1.1-.9 2.3-1.3 3.4l-29.1 83.7c-2.1 6.1-4.2 12.1-6.5 18.6-.4-.9-.6-1.4-.8-1.9-10.8-29.9-21.6-59.9-32.4-89.8-1.7-4.7-3.5-9.5-5.3-14.2-.9-2.5-2.7-4-5.4-4-6.4-.1-12.8-.2-19.2-.1-2.2 0-3.3 1.6-2.8 3.7zM242.4 206c1.7 11.7 7.6 20.8 18 26.6 9.9 5.5 20.7 6.2 31.7 4.6 12.7-1.9 23.9-7.3 33.8-15.5 .4-.3 .8-.6 1.4-1 .5 3.2 .9 6.2 1.5 9.2 .5 2.6 2.1 4.3 4.5 4.4 4.6 .1 9.1 .1 13.7 0 2.3-.1 3.8-1.6 4-3.9 .1-.8 .1-1.6 .1-2.3v-88.8c0-3.6-.2-7.2-.7-10.8-1.6-10.8-6.2-19.7-15.9-25.4-5.6-3.3-11.8-5-18.2-5.9-3-.4-6-.7-9.1-1.1h-10c-.8 .1-1.6 .3-2.5 .3-8.2 .4-16.3 1.4-24.2 3.5-5.1 1.3-10 3.2-15 4.9-3 1-4.5 3.2-4.4 6.5 .1 2.8-.1 5.6 0 8.3 .1 4.1 1.8 5.2 5.7 4.1 6.5-1.7 13.1-3.5 19.7-4.8 10.3-1.9 20.7-2.7 31.1-1.2 5.4 .8 10.5 2.4 14.1 7 3.1 4 4.2 8.8 4.4 13.7 .3 6.9 .2 13.9 .3 20.8 0 .4-.1 .7-.2 1.2-.4 0-.8 0-1.1-.1-8.8-2.1-17.7-3.6-26.8-4.1-9.5-.5-18.9 .1-27.9 3.2-10.8 3.8-19.5 10.3-24.6 20.8-4.1 8.3-4.6 17-3.4 25.8zM98.7 106.9v175.3c0 .8 0 1.7 .1 2.5 .2 2.5 1.7 4.1 4.1 4.2 5.9 .1 11.8 .1 17.7 0 2.5 0 4-1.7 4.1-4.1 .1-.8 .1-1.7 .1-2.5v-60.7c.9 .7 1.4 1.2 1.9 1.6 15 12.5 32.2 16.6 51.1 12.9 17.1-3.4 28.9-13.9 36.7-29.2 5.8-11.6 8.3-24.1 8.7-37 .5-14.3-1-28.4-6.8-41.7-7.1-16.4-18.9-27.3-36.7-30.9-2.7-.6-5.5-.8-8.2-1.2h-7c-1.2 .2-2.4 .3-3.6 .5-11.7 1.4-22.3 5.8-31.8 12.7-2 1.4-3.9 3-5.9 4.5-.1-.5-.3-.8-.4-1.2-.4-2.3-.7-4.6-1.1-6.9-.6-3.9-2.5-5.5-6.4-5.6h-9.7c-5.9-.1-6.9 1-6.9 6.8zM493.6 339c-2.7-.7-5.1 0-7.6 1-43.9 18.4-89.5 30.2-136.8 35.8-14.5 1.7-29.1 2.8-43.7 3.2-26.6 .7-53.2-.8-79.6-4.3-17.8-2.4-35.5-5.7-53-9.9-37-8.9-72.7-21.7-106.7-38.8-8.8-4.4-17.4-9.3-26.1-14-3.8-2.1-6.2-1.5-8.2 2.1v1.7c1.2 1.6 2.2 3.4 3.7 4.8 36 32.2 76.6 56.5 122 72.9 21.9 7.9 44.4 13.7 67.3 17.5 14 2.3 28 3.8 42.2 4.5 3 .1 6 .2 9 .4 .7 0 1.4 .2 2.1 .3h17.7c.7-.1 1.4-.3 2.1-.3 14.9-.4 29.8-1.8 44.6-4 21.4-3.2 42.4-8.1 62.9-14.7 29.6-9.6 57.7-22.4 83.4-40.1 2.8-1.9 5.7-3.8 8-6.2 4.3-4.4 2.3-10.4-3.3-11.9zm50.4-27.7c-.8-4.2-4-5.8-7.6-7-5.7-1.9-11.6-2.8-17.6-3.3-11-.9-22-.4-32.8 1.6-12 2.2-23.4 6.1-33.5 13.1-1.2 .8-2.4 1.8-3.1 3-.6 .9-.7 2.3-.5 3.4 .3 1.3 1.7 1.6 3 1.5 .6 0 1.2 0 1.8-.1l19.5-2.1c9.6-.9 19.2-1.5 28.8-.8 4.1 .3 8.1 1.2 12 2.2 4.3 1.1 6.2 4.4 6.4 8.7 .3 6.7-1.2 13.1-2.9 19.5-3.5 12.9-8.3 25.4-13.3 37.8-.3 .8-.7 1.7-.8 2.5-.4 2.5 1 4 3.4 3.5 1.4-.3 3-1.1 4-2.1 3.7-3.6 7.5-7.2 10.6-11.2 10.7-13.8 17-29.6 20.7-46.6 .7-3 1.2-6.1 1.7-9.1 .2-4.7 .2-9.6 .2-14.5z"></path>
                </svg>
              </span>
            </div>
            <div>
              <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                Secured Payment
              </p>
              <p className="text-sm text-qgray line-clamp-1">
                Secure Card Payments
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="flex space-x-5 items-center">
            <div>
              <span className="w-10 h-10 text-qyellow">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="circle-check"
                  className="svg-inline--fa fa-circle-check w-8 h-8"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"></path>
                </svg>
              </span>
            </div>
            <div>
              <p className="text-black text-[15px] font-700 tracking-wide mb-1">
                Best Quality
              </p>
              <p className="text-sm text-qgray line-clamp-1">
                Best Quality Products
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <div className="grid grid-cols-4 gap-4  m-8  p-8   container-x mx-auto pb-[60px]">
    //    {
    //     deliveryPolicyDatas.map((deliveryPolicyData) =>
    //     <DeliveryComponent
    //     deliveryPolicyData={deliveryPolicyData}
    //     key={deliveryPolicyData?.id}
    //     ></DeliveryComponent>)
    //    }
    //   </div>
    // </div>
  );
};

export default DeliveryComponents;
