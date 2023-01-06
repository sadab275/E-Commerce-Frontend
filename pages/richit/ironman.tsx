import React from "react";
import { useSelector } from "react-redux";
import DeliveryComponents from "../../components/pages/HomePage/DeliveryPolicyData/DeliveryComponents";
import FeaturedProducts from "../../components/pages/HomePage/FeaturedProducts/FeaturedProducts";
import NewReleasedProducts from "../../components/pages/HomePage/NewReleasedProducts/NewReleasedProducts";
import PopularCategory from "../../components/pages/HomePage/PopularCategory/PopularCategory";
import WishList from "../../components/pages/Wishlist/Wishlist";
import Dashboard from "../../components/pages/Admin/Dashboard/Dashboard";
import RelatedProductSection from "../../components/pages/HomePage/RelatedProductSection/RelatedProductSection";
import Wishlist from "../../components/pages/Wishlist/Wishlist";
import { controller } from "../../src/state/StateController";

interface Props { }

const ironman: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div>
      <DeliveryComponents></DeliveryComponents>
      <FeaturedProducts></FeaturedProducts>
      <NewReleasedProducts></NewReleasedProducts>
      <PopularCategory></PopularCategory>
      <Wishlist></Wishlist>
      <RelatedProductSection></RelatedProductSection>
      <Dashboard></Dashboard>
    </div>
  );
};

export default ironman;
