import React from "react";
import { Table } from "../../components/table/Table";
import { Heading } from "../../components/heading/Heading";
import { Badge } from "../../components/heading/Badge";

const FoodTable = (props) => {
  return (
    <div className="table__container">
      <form>
        <Heading>
          <Badge>
            <img
              src="https://uploads-ssl.webflow.com/612b579592e3bf93283444b6/612b69f61d22d5ca878550af_chevron-right.svg"
              loading="lazy"
              alt=""
              className="image-2-copy-copy"
            />
          </Badge>
          <p>Meal Name?</p>
          <input name="dietName" type="text" />
        </Heading>
        <Table>
          <tbody>
            <tr>
              <th>Food Name</th>
              <th>Food Calories (Kcal)</th>
              <th>Food Protein (g)</th>
              <th>Food Cost (£)</th>
            </tr>
            {props.foods.map((food, foodId) => {
              console.log(props.foods)
              return (
                <tr key={foodId} onClick={props.selectFood}>
                  <td>{food.Name[foodId]}</td>
                  <td>{food["calories (g/amount)"][foodId]}</td>
                  <td>{food["protein (g/amount)"][foodId]}</td>
                  <td>{food["Cost (£)"][foodId]}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </form>
    </div>
  );
};

export default FoodTable;
