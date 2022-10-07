import React from "react";

const CustomModals = (props) => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[340px] h-[500px] md:h-[600px] md:w-[400px] flex flex-col items-center justify-center bg-white rounded-[20px] shadow-2xl">
        {props.items.map((item, itemID) => {
          return <div key={itemID}>{item}</div>;
        })}
        <button className="btn" onClick={props.onClose}>
          {props.buttonTitle}
        </button>
      </div>
    </div>
  );
};

export default CustomModals;
