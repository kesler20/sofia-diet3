import React, { useState } from "react";
import BasicSelect from "../../components/select/Select";
import CustomizedSlider from "../../components/slider/Slider";
import MealTable from "./MealTable";
import ModalButton from "../../components/modal/ModalButton";

const items = [
  <BasicSelect />,
  <CustomizedSlider name={`Select amount of Ragu (g)`} />,
  <CustomizedSlider name={`Select amount of Protein Shake (g)`} />,
];


const Diet = () => {

  return (
    <div className="w-full justify-center items-center h-screen">
      <div className="m-10">
        <MealTable />
      </div>
      <div className="w-full flex justify-center items-center">
        <ModalButton items={items} buttonTitle={"Create Diet"} modalButtonTitle={"Get Diet"} />
      </div>
    </div>
  );
};

export default Diet;
