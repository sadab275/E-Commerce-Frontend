import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { controller } from "./../../../../src/state/StateController";
//@ts-ignore
import ReactStars from "react-rating-stars-component";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

interface Props {
  review: {
    createdAt: string | undefined;
    status: string;
    rating: number;
    message: string;
    reviewProducts: any;
  };
}
// console.log(props.review);

const ProfileReviewItem: React.FC<Props> = ({
  review: { createdAt, reviewProducts, status, rating, message },
}) => {
  const states = useSelector(() => controller.states);
  console.log({
    review: { createdAt, reviewProducts, status, rating, message },
  });

  return (
    <div
      className="min-h-[170px] bg-white group"
      style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 15px 64px" }}>
      <div className="flex gap-x-2 items-center w-full h-full p-2 relative">
        <div className="w-1/3 h-full flex justify-center">
          <img
            className="max-h-[152px] object-contain"
            src={reviewProducts?.imageURL}
            alt=""
          />
        </div>

        <div className="flex-1 flex flex-col justify-center h-full">
          <div>
            <span className="text-qgray text-sm mb-1.5 block">
              {createdAt?.split("T")[0]}
            </span>

            {rating > 0 ? (
              <div className="flex items-center space-x-2">
                <ReactStars
                  count={5}
                  value={rating}
                  edit={false}
                  size={24}
                  isHalf={true}
                  emptyIcon={<FaRegStar />}
                  halfIcon={<FaStarHalfAlt />}
                  fullIcon={<FaStar />}
                  activeColor="rgb(255, 168, 0)"
                  color="#d3d3d3"
                />
                {/* <span className="text-[13px] font-normal text-qblack mt-1 inline-block">
                  ({rating})
                </span> */}
              </div>
            ) : (
              ""
            )}

            <div className="flex mb-1.5"></div>
            <Link
              href={`http://localhost:3000/single_product?slug=${reviewProducts.slug}`}>
              <h6 className=" mb-2 sm:text-[15px] text-[13px] font-bold leading-[24px] line-clamp-1 hover:text-blue-600 cursor-pointer">
                {reviewProducts.productName}
              </h6>
            </Link>
            <p className="price mb-[26px] text-sm text-qgray line-clamp-2">
              {message}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileReviewItem;
