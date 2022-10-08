import FoodTable from "./FoodTable";
import React, { useState, useEffect } from "react";
import CustomizedSlider from "../../components/slider/Slider";
import ModalButton from "../../components/modal/ModalButton";

/**
 * This function converts the data from a pd.DataFrame.to_json() format to the following form
 * [ { col:[values, ...]}, .... ]
 *
 * @param {*} backendData - parsed objects from pd.DataFrame.to_json()
 * @returns data - an array which is a collection of objects
 * containing the column as keys and the rows as values
 */
const convert_df_to_objects = (dataFromBackend) => {
  let backendData = JSON.parse(dataFromBackend);
  const columns = Object.keys(backendData);
  const rows = Object.keys(backendData[columns[0]]);
  let data = [];
  let colData = [];
  columns.forEach((col, colID) => {
    data.push({});
    rows.forEach((rowID) => {
      colData.push(backendData[col][rowID]);
    });
    data[colID][col] = colData;
    colData = [];
  });
  return data;
};

const items = [
  <CustomizedSlider name={`Select amount of Beef Mince (g)`} />,
  <CustomizedSlider name={`Select amount of Pasta (g)`} />,
];

const Meal = () => {
  const [mealName, setMealName] = useState("");
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const response = fetch(
      `${process.env.REACT_APP_BACKEND_URL_DEV}/sofia-diet/food/READ`
    );

    response
      .then((res) => {
        if (res.ok) {
          res.json().then((res) => {
            setRecipe(convert_df_to_objects(res));
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleSelectFood = (e) => {
    let selected = true;
    e.target.parentNode.classList.toggle("my", selected);
    e.target.parentNode.classList.toggle("selected", selected);
    e.target.parentNode.classList.toggle("feature", selected);
  };

  return (
    <div className="w-full justify-center items-center h-screen">
      <div className="m-10">
        <FoodTable selectFood={handleSelectFood} foods={recipe}/>
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
