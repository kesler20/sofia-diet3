import { Table } from "../../components/table/Table";
import React from "react";

const MealTable = () => {
  return (
    <div className="table__container">
      <form>
        <Table>
          <tbody>
            <tr>
              <th>Meal Name</th>
              <th>Meal Calories (Kcal)</th>
              <th>Meal Protein (g)</th>
              <th>Meal Cost (£)</th>
            </tr>
            <tr>
              <td>Protein Shake</td>
              <td>{0}</td>
              <td>{1}</td>
              <td>{2}</td>
            </tr>
            <tr>
              <td>Protein Shake</td>
              <td>{0}</td>
              <td>{1}</td>
              <td>{2}</td>
            </tr>
            <tr>
              <td>Protein Shake</td>
              <td>{0}</td>
              <td>{1}</td>
              <td>{2}</td>
            </tr>
          </tbody>
        </Table>
      </form>
    </div>
  );
};

export default MealTable;

