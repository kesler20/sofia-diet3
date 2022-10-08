import "./Food.css";
import React, { useState } from "react";


const Food = () => {
  const [food, setFood] = useState({
    name: "default",
    protein: "1",
    calories: "1",
    cost: "1",
  });

  const uploadData = async (bodyData) => {
  
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL_DEV}/sofia-diet/food/CREATE`,
      {
        method: "POST",
        body: bodyData,
      }
    );

    response
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadData(JSON.stringify(food));
  };

  const handleCreateFood = (e, property) => {
    let properties = Object.keys(food);
    let foodMetaData = {};
    properties.forEach((property) => {
      foodMetaData[property] = food[property];
    });
    foodMetaData[property] = e.target.value;
    setFood(foodMetaData);
    console.log(food);
  };

  return (
    <div class="card__outer">
      <div className="card">
        <div className="card__content">
          <form className="card__content__form">
            <div className="card__content__header">
              <div className="card__content__badge">
                <img
                  src="https://uploads-ssl.webflow.com/612b579592e3bf93283444b6/612b69f61d22d5ca878550af_chevron-right.svg"
                  loading="lazy"
                  alt=""
                  className="image-2-copy-copy"
                />
              </div>
              <p>Name ?</p>
            </div>
            <input
              type="text"
              required
              onChange={(e) => handleCreateFood(e, "name")}
            />
            <div className="card__content__header">
              <div className="card__content__badge">
                <img
                  src="https://uploads-ssl.webflow.com/612b579592e3bf93283444b6/612b69f61d22d5ca878550af_chevron-right.svg"
                  loading="lazy"
                  alt=""
                  className="image-2-copy-copy"
                />
              </div>
              <p>Protein (g) ?</p>
            </div>
            <input
              type="number"
              step="0.1"
              required
              onChange={(e) => handleCreateFood(e, "protein")}
            />
            <div className="card__content__header">
              <div className="card__content__badge">
                <img
                  src="https://uploads-ssl.webflow.com/612b579592e3bf93283444b6/612b69f61d22d5ca878550af_chevron-right.svg"
                  loading="lazy"
                  alt=""
                  className="image-2-copy-copy"
                />
              </div>
              <p>Calories (Kcal) ?</p>
            </div>
            <input
              type="number"
              step="0.1"
              required
              onChange={(e) => handleCreateFood(e, "calories")}
            />
            <div className="card__content__header">
              <div className="card__content__badge">
                <img
                  src="https://uploads-ssl.webflow.com/612b579592e3bf93283444b6/612b69f61d22d5ca878550af_chevron-right.svg"
                  loading="lazy"
                  alt=""
                  className="image-2-copy-copy"
                />
              </div>
              <p>Cost (£) ?</p>
            </div>
            <input
              type="number"
              step="0.1"
              required
              onChange={(e) => handleCreateFood(e, "cost")}
            />
            <button className="btn" onClick={(e) => handleSubmit(e)}>
              Create
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 15 15"
                width="12"
                height="12"
                style={{ marginLeft: "0.33em" }}
              >
                <g
                  stroke="currentColor"
                  strokeWidth="1.75"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M4.497 1H3a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-1.5h0"
                    opacity=".6"
                  ></path>
                  <path d="M9 1.008L14 1v5M14 1L6 9"></path>
                </g>
              </svg>
            </button>
          </form>
        </div>
        <div/>
      </div>
    </div>
  );
  
};

export default Food;
