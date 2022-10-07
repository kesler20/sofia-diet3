import FoodTable from "./FoodTable"
import React, { useState } from "react";
import CustomizedSlider from "../../components/slider/Slider";
import ModalButton from "../../components/modal/ModalButton";

const items = [
  <CustomizedSlider name={`Select amount of Beef Mince (g)`} />,
  <CustomizedSlider name={`Select amount of Pasta (g)`} />,
];

const Meal = () => {

  const handleSelectFood = (e) => {
    let selected = true
    e.target.parentNode.classList.toggle("my", selected)
    e.target.parentNode.classList.toggle("selected", selected)
    e.target.parentNode.classList.toggle("feature", selected)
  }

  const [mealName, setMealName] = useState("");
  return (
    <div className="w-full justify-center items-center h-screen">
      <div className="m-10">
        <FoodTable selectFood={handleSelectFood} />
      </div>
      <div className="w-full flex justify-center items-center">
        <ModalButton
          items={items}
          buttonTitle={"Create Meal"}
          modalButtonTitle={"Create Meal"}
        />
      </div>
    </div>
  );
};

export default Meal;
