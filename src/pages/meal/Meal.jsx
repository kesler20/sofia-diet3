import FoodTable from "./FoodTable";
import React, { useState, useEffect } from "react";
import CustomizedSlider from "../../components/slider/Slider";
import ModalButton from "../../components/modal/ModalButton";

const Meal = () => {
  const [meal, setMeal] = useState({ name: "", recipe: [] });
  const [FoodsFromDb, setFoodsFromDb] = useState([]);

  useEffect(() => {
    const response = fetch(
      `${process.env.REACT_APP_BACKEND_URL_DEV}/sofia-diet/food/READ`
    );

    response
      .then((res) => {
        if (res.ok) {
          res.json().then((res) => {
            setFoodsFromDb(convert_df_to_objects(res));
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleCreateMeal = (data) => {
    console.log(data)
    const response = fetch(
      `${process.env.REACT_APP_BACKEND_URL_DEV}/sofia-diet/meal/CREATE`,
      { method: "POST", body: JSON.stringify(data) }
    );
    processPromise(response, console.log);
  };

  const handleChangeMealName = (e) => {
    const newMeal = meal
    newMeal.name = e.target.value
    setMeal(newMeal)
  };
  
  const handleChangeAmount = (e, foodId) => {
    setFoodsFromDb(
      FoodsFromDb.map((ingredient) => {
        if (FoodsFromDb.indexOf(ingredient) === foodId) {
          ingredient["amount"] = e.target.value;
        }
        return ingredient;
      })
    );
  };

  const handleSelectFood = (e, id) => {
    console.log(meal)
    let selected = true;
    e.target.parentNode.classList.toggle("my", selected);
    e.target.parentNode.classList.toggle("selected", selected);
    e.target.parentNode.classList.toggle("feature", selected);
    const newMeal = meal;
    for (let food of FoodsFromDb) {
      if (FoodsFromDb.indexOf(food) === id) {
        newMeal.recipe.push(food);
      }
    }
    setMeal(newMeal);
  };
  
  return (
    <div className="w-full justify-center items-center h-screen">
      <div className="m-10">
        <FoodTable
          selectFood={handleSelectFood}
          foods={FoodsFromDb}
          changeMealName={handleChangeMealName}
        />
      </div>
      <div className="w-full flex justify-center items-center">
        <ModalButton
          items={FoodsFromDb.map((ingredient, id) => {
            return (
              <CustomizedSlider
                key={id}
                name={`Amount of ${ingredient.name} (g)`}
                onChangeValue={handleChangeAmount}
                id={id}
              />
            );
          })}
          buttonTitle={"Create Meal"}
          modalButtonTitle={`Create ${meal.name}`}
          data={FoodsFromDb}
          onCreateMeal={handleCreateMeal}
        />
      </div>
    </div>
  );
};

export default Meal;

const processPromise = (promise, callBack) => {
  promise
    .then((res) => {
      if (res.ok) {
        res.json().then((res) => {
          callBack(res);
        });
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

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
  // data should contain a list of object which with the columns and the row
  // [{ col : row, col : row },{ col : row, col : row } ]
  const data = [];
  rows.forEach((r) => {
    let row = {};
    columns.forEach((c) => {
      row[c] = backendData[c][r];
    });
    data.push(row);
  });

  return data;
};
