//@ts-nocheck
import React, { useState } from "react";
import { useSelector } from "react-redux";
import InputRange from "react-input-range";
import { controller } from "../../../src/state/StateController";
import "react-input-range/lib/css/index.css";
import { Jsondata } from "../../../src/utils/Jsondata";
import FilterCheckCategory from "./FilterCheckCategory";
import FilterHeader from "./FilterHeader";
import FilterCheckBrand from "./FilterCheckBrand";

interface Props {
  setValue: React.Dispatch<React.SetStateAction<{ min: number; max: number }>>;
}

const FilterWidget: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const { setValue } = props;

  const [changingValue, setChangingValue] = useState({
    min: 0,
    max: 15000,
  });

  return (
    <div className="w-full bg-white px-[30px] pt-[40px] mb-[30px] hidden lg:block">
      <div className="pb-10 border-b border-gray-200">
        <FilterHeader title="Product categories" />
        <ul>
          {states.categories.map((category, i) => (
            <FilterCheckCategory key={category.cat_slug} category={category} />
          ))}
        </ul>
      </div>

      <div className="pb-10 border-b border-gray-200 mt-10">
        <FilterHeader title="Price Range" />
        <div className="mb-5">
          <InputRange
            maxValue={15000}
            minValue={0}
            value={changingValue}
            draggableTrack={true}
            onChange={(value) => {
              setChangingValue(value)
            }}
            onChangeComplete={(value) => setValue(changingValue)}
          />
        </div>
        <p className="text-xs text-qblack font-normal">
          Price: ${changingValue.min} - ${changingValue.max}
        </p>
      </div>

      <div className="pb-10 border-b border-gray-200 mt-10">
        <FilterHeader title="Brands" />

        <ul>
          {states.brands.map((brand, i) => (
            <FilterCheckBrand key={brand.slug} brand={brand} />
          ))}
        </ul>
      </div>

      <div className="pb-10 mt-10">
        <FilterHeader title="Red" />
      </div>
    </div>
  );
};

export default FilterWidget;
