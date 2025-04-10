import React from "react";

const Card = ({ title, description }) => {
  return (
    <>
      <div className="card text-white h-[200px] w-fit p-6 border-[1px] border-white border-dashed rounded-3xl">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="">{description}</p>
      </div>
    </>
  );
};

export default Card;
